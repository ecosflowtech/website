import "server-only";
import postgres from "postgres";

export const QUEM_RESPONDE = ["eu", "secretaria", "estagiario", "associado", "comercial"] as const;

export type Inscricao = {
  nome: string;
  contato: string;
  quem: (typeof QUEM_RESPONDE)[number];
  pessoas: number;
  processos: number;
};

type Validacao = { ok: true; inscricao: Inscricao } | { ok: false; erro: string };

function texto(valor: unknown, min: number, max: number) {
  if (typeof valor !== "string") return null;
  const limpo = valor.trim().replace(/\s+/g, " ");
  return limpo.length >= min && limpo.length <= max ? limpo : null;
}

function inteiro(valor: unknown, min: number, max: number) {
  const numero = typeof valor === "number" ? valor : typeof valor === "string" && valor.trim() ? Number(valor) : NaN;
  return Number.isInteger(numero) && numero >= min && numero <= max ? numero : null;
}

export function validarInscricao(corpo: Record<string, unknown>): Validacao {
  const nome = texto(corpo.nome, 2, 160);
  if (!nome) return { ok: false, erro: "Escreva seu nome e o do escritório." };
  const contato = texto(corpo.contato, 5, 200);
  if (!contato) return { ok: false, erro: "Deixe um e-mail ou WhatsApp para o convite." };
  const quem = QUEM_RESPONDE.find((opcao) => opcao === corpo.quem);
  if (!quem) return { ok: false, erro: "Escolha quem responde o WhatsApp hoje." };
  const pessoas = inteiro(corpo.pessoas, 1, 100_000);
  if (pessoas === null) return { ok: false, erro: "Informe quantas pessoas trabalham no escritório." };
  const processos = inteiro(corpo.processos, 0, 10_000_000);
  if (processos === null) return { ok: false, erro: "Informe quantos processos ativos o escritório tem." };
  return { ok: true, inscricao: { nome, contato, quem, pessoas, processos } };
}

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
