import { validarInscricao } from '../src/lib/validacao-inscricao';

type Database = {
  prepare(sql: string): { bind(...values: unknown[]): { run(): Promise<unknown> }; run(): Promise<unknown> };
};
type Env = { ASSETS: { fetch(request: Request): Promise<Response> }; WORKSHOP_DB?: Database };
const json = (body: unknown, status = 200) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname.replace(/\/$/, '') !== '/api/workshop') return env.ASSETS.fetch(request);
    if (request.method !== 'POST') return json({ erro: 'Método não permitido.' }, 405);
    if (request.headers.get('Origin') !== url.origin) return json({ erro: 'Origem inválida.' }, 403);
    if (!request.headers.get('Content-Type')?.includes('application/json')) return json({ erro: 'Formato inválido.' }, 415);
    const reader = request.body?.getReader();
    if (!reader) return json({ erro: 'Formulário inválido.' }, 400);
    let raw = '', size = 0;
    const decoder = new TextDecoder();
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 8192) { await reader.cancel(); return json({ erro: 'Formulário muito grande.' }, 413); }
      raw += decoder.decode(value, { stream: true });
    }
    raw += decoder.decode();
    let body;
    try { body = JSON.parse(raw); } catch { return json({ erro: 'Formulário inválido.' }, 400); }
    if (!body || typeof body !== 'object' || Array.isArray(body)) return json({ erro: 'Formulário inválido.' }, 400);
    if (typeof body.site === 'string' && body.site.trim()) return json({ ok: true });
    const result = validarInscricao(body);
    if (!result.ok) return json({ erro: result.erro }, 400);
    if (!env.WORKSHOP_DB) return json({ erro: 'As inscrições pelo site ainda não estão abertas.' }, 503);
    try {
      await env.WORKSHOP_DB.prepare(`CREATE TABLE IF NOT EXISTS inscricoes_workshop (
        id INTEGER PRIMARY KEY AUTOINCREMENT, criada_em TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        nome TEXT NOT NULL, contato TEXT NOT NULL, quem_responde TEXT NOT NULL,
        pessoas INTEGER NOT NULL, processos INTEGER NOT NULL
      )`).run();
      const { nome, contato, quem, pessoas, processos } = result.inscricao;
      await env.WORKSHOP_DB.prepare('INSERT INTO inscricoes_workshop (nome, contato, quem_responde, pessoas, processos) VALUES (?, ?, ?, ?, ?)')
        .bind(nome, contato, quem, pessoas, processos).run();
      return json({ ok: true });
    } catch {
      return json({ erro: 'Não conseguimos registrar agora. Tente de novo em alguns minutos.' }, 500);
    }
  },
};

export default worker;
