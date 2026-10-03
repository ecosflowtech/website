import "server-only";
import postgres from "postgres";

import type { Inscricao } from "./validacao-inscricao";
export { validarInscricao, QUEM_RESPONDE } from "./validacao-inscricao";
export type { Inscricao } from "./validacao-inscricao";

// Um cliente por processo; no desenvolvimento, sobrevive ao recarregamento.
const global = globalThis as unknown as { bancoDoSite?: postgres.Sql; tabelaPronta?: Promise<unknown> };

function banco() {
  const url = process.env.DATABASE_URL?.trim();
  if (!url) return null;
  global.bancoDoSite ??= postgres(url, { max: 3, idle_timeout: 30 });
  return global.bancoDoSite;
}

export function inscricoesConfiguradas() {
  return Boolean(process.env.DATABASE_URL?.trim());
}

/** Grava a inscrição. A tabela nasce na primeira gravação; é uma tabela só e sem migração. */
export async function gravarInscricao(inscricao: Inscricao) {
  const sql = banco();
  if (!sql) throw new Error("DATABASE_URL não configurada");
  global.tabelaPronta ??= sql`
    create table if not exists inscricoes_workshop (
      id bigserial primary key,
      criada_em timestamptz not null default now(),
      nome text not null,
      contato text not null,
      quem_responde text not null,
      pessoas integer not null,
      processos integer not null
    )
  `.catch((erro) => {
    global.tabelaPronta = undefined;
    throw erro;
  });
  await global.tabelaPronta;
  await sql`
    insert into inscricoes_workshop (nome, contato, quem_responde, pessoas, processos)
    values (${inscricao.nome}, ${inscricao.contato}, ${inscricao.quem}, ${inscricao.pessoas}, ${inscricao.processos})
  `;
}
