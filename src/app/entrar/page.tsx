import Link from "next/link";
import type { Metadata } from "next";
import { Moldura, TopoDePagina, estiloDaPaginaInterna } from "@/components/Moldura";
import { cadastroAberto, enderecoDoCrm } from "@/lib/enderecos";

export const metadata: Metadata = {
  title: "Entrar no Ecos CRM · Ecosflow",
  description: "Acesso ao Ecos CRM para escritórios clientes, e o cadastro de escritórios novos.",
};

// Endereço do CRM e abertura do cadastro vêm do ambiente na hora do pedido.
export const dynamic = "force-dynamic";

const botaoClaro = { display: "inline-flex", alignItems: "center", gap: "12px", alignSelf: "flex-start", background: "#E7E3D3", color: "#0F1A15", borderRadius: "999px", padding: "7px 7px 7px 22px", fontSize: "14px", fontWeight: "700", transition: "gap 0.35s cubic-bezier(0.22,1,0.36,1), background 0.3s" } as const;
const botaoEscuro = { display: "inline-flex", alignItems: "center", gap: "12px", alignSelf: "flex-start", background: "var(--ink)", color: "var(--paper)", borderRadius: "999px", padding: "7px 7px 7px 22px", fontSize: "14px", fontWeight: "700", transition: "gap 0.35s cubic-bezier(0.22,1,0.36,1), background 0.3s" } as const;
const seta = { width: "36px", height: "36px", borderRadius: "50%", background: "var(--accent)", color: "#F6F2E8", display: "grid", placeItems: "center", fontSize: "15px" } as const;
const selo = { display: "inline-flex", alignItems: "center", gap: "7px", borderRadius: "999px", padding: "5px 12px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase" } as const;

/**
 * Porta de entrada do Ecos CRM pelo site. "Entrar" leva ao login do CRM. O
 * cadastro de escritório novo fica fechado até o lançamento; aberto, leva ao
 * /register do CRM, onde o escritório escolhe o plano e paga.
 */
export default function Entrar() {
  const crm = enderecoDoCrm();
  const aberto = cadastroAberto() && crm !== null;

  return (
    <Moldura>
      <main style={estiloDaPaginaInterna}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(36px,5vw,64px)" }}>
          <TopoDePagina
            rotulo="( ecos crm )"
            titulo="Acesso ao Ecos CRM."
            subtitulo={aberto ? "Para quem já usa e para quem vai começar." : "O cadastro de escritórios abre no lançamento."}
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "14px", alignItems: "stretch" }}>
            <article style={{ background: "var(--pine)", color: "var(--bone)", borderRadius: "26px", padding: "clamp(26px,3.2vw,44px)", display: "flex", flexDirection: "column", gap: "18px" }}>
              <p style={{ margin: "0", fontSize: "11px", fontWeight: "800", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--amber)" }}>Já é cliente</p>
              <h2 style={{ margin: "0", fontSize: "clamp(26px,2.6vw,36px)", fontWeight: "700", letterSpacing: "-0.03em", color: "#F1EEE0" }}>Entrar</h2>
              <p style={{ margin: "0", color: "#BFC7BC", fontSize: "15px", lineHeight: "1.7", maxWidth: "40ch", textWrap: "pretty" }}>Use o e-mail e a senha do seu acesso ao Ecos CRM. Esqueceu a senha? Dá para trocar na própria tela de entrada.</p>
              {crm ? (
                <a href={`${crm}/login`} style={{ ...botaoClaro, marginTop: "auto" }} className="hv-3">Entrar no Ecos CRM<span aria-hidden="true" style={seta}>→</span></a>
              ) : (
                <span style={{ ...selo, marginTop: "auto", alignSelf: "flex-start", border: "1px solid rgba(228,225,206,0.3)", color: "#BFC7BC" }}>Endereço em configuração</span>
              )}
            </article>

            <article style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: "26px", padding: "clamp(26px,3.2vw,44px)", display: "flex", flexDirection: "column", gap: "18px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                <p style={{ margin: "0", fontSize: "11px", fontWeight: "800", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)" }}>Escritório novo</p>
                {aberto ? null : (
                  <span style={{ ...selo, border: "1px solid var(--line)", color: "var(--muted)" }}><span aria-hidden="true" style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--amber)", animation: "softBlink 2.2s ease-in-out infinite" }}></span>Em breve</span>
                )}
              </div>
              <h2 style={{ margin: "0", fontSize: "clamp(26px,2.6vw,36px)", fontWeight: "700", letterSpacing: "-0.03em", color: "var(--ink)" }}>Criar conta</h2>
              {aberto ? (
                <>
                  <p style={{ margin: "0", color: "var(--muted)", fontSize: "15px", lineHeight: "1.7", maxWidth: "40ch", textWrap: "pretty" }}>Crie o acesso do escritório, escolha o plano e faça a assinatura no próprio cadastro.</p>
                  <a href={`${crm}/register`} style={{ ...botaoEscuro, marginTop: "auto" }} className="hv-2">Criar conta do escritório<span aria-hidden="true" style={seta}>→</span></a>
                </>
              ) : (
                <>
                  <p style={{ margin: "0", color: "var(--muted)", fontSize: "15px", lineHeight: "1.7", maxWidth: "40ch", textWrap: "pretty" }}>O cadastro de escritórios novos abre depois do workshop de lançamento. Entre na lista para receber o convite e a condição de lançamento.</p>
                  <Link href="/#workshop" style={{ ...botaoEscuro, marginTop: "auto" }} className="hv-2">Entrar na lista do workshop<span aria-hidden="true" style={seta}>→</span></Link>
                </>
              )}
            </article>
          </div>

          <div style={{ borderTop: "1px solid var(--line)", paddingTop: "clamp(22px,2.6vw,32px)", display: "flex", flexWrap: "wrap", gap: "14px 32px", alignItems: "center", justifyContent: "space-between" }}>
            <p style={{ margin: "0", color: "var(--muted)", fontSize: "15px", lineHeight: "1.65", maxWidth: "56ch", textWrap: "pretty" }}>Estamos preparando a Ecosflow Academy com conteúdo de onboarding para orientar os primeiros passos no Ecos CRM.</p>
            <Link href="/academy" style={{ display: "inline-flex", alignItems: "center", gap: "9px", fontSize: "14px", fontWeight: "700", color: "var(--ink)", transition: "gap 0.3s" }} className="hv-4">Ir para a Academy <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </main>
    </Moldura>
  );
}
