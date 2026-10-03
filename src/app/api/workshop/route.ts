import { NextResponse } from "next/server";
import { gravarInscricao, inscricoesConfiguradas, validarInscricao } from "@/lib/inscricoes";

export async function POST(pedido: Request) {
  const corpo = (await pedido.json().catch(() => null)) as Record<string, unknown> | null;
  if (!corpo || typeof corpo !== "object") {
    return NextResponse.json({ erro: "Formulário inválido." }, { status: 400 });
  }

  // O campo "site" fica escondido de quem usa o formulário; preenchido, é robô.
  // Responde como se tivesse gravado, para o robô não aprender a desviar.
  if (typeof corpo.site === "string" && corpo.site.trim()) {
    return NextResponse.json({ ok: true });
  }

  const validacao = validarInscricao(corpo);
  if (!validacao.ok) {
    return NextResponse.json({ erro: validacao.erro }, { status: 400 });
  }

  // Sem banco configurado, a resposta diz a verdade em vez de fingir que registrou.
  if (!inscricoesConfiguradas()) {
    return NextResponse.json(
      { erro: "As inscrições pelo site ainda não estão abertas." },
      { status: 503 },
    );
  }

  try {
    await gravarInscricao(validacao.inscricao);
  } catch (erro) {
    console.error("inscrição do workshop não gravada", erro);
    return NextResponse.json(
      { erro: "Não conseguimos registrar agora. Tente de novo em alguns minutos." },
      { status: 500 },
    );
  }
  return NextResponse.json({ ok: true });
}
