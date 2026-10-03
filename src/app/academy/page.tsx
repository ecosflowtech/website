import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Moldura, TopoDePagina, estiloDaPaginaInterna } from "@/components/Moldura";
import { enderecoDaAcademy } from "@/lib/enderecos";

export const metadata: Metadata = {
  title: "Academy · Ecosflow",
  description: "A área de aprendizagem da Ecosflow, com onboarding para usuários do Ecos CRM.",
};

// O endereço da Academy vem do ambiente na hora do pedido.
export const dynamic = "force-dynamic";

/**
 * O item "Academy" do menu passa por aqui. Com ACADEMY_URL configurada, segue
 * direto para a Academy; sem ela, mostra que a área está em preparação.
 */
export default function Academy() {
  const academy = enderecoDaAcademy();
  if (academy) redirect(academy);

  return (
    <Moldura>
      <main style={estiloDaPaginaInterna}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(36px,5vw,64px)" }}>
          <TopoDePagina
            rotulo="( academy )"
            titulo="Aprender a usar, no seu ritmo."
            subtitulo="A Academy está em preparação."
            texto="Estamos preparando a área de aprendizagem da Ecosflow, com conteúdo para orientar os primeiros passos dos usuários no Ecos CRM."
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
            <Link href="/entrar" style={{ display: "inline-flex", alignItems: "center", gap: "12px", background: "var(--ink)", color: "var(--paper)", borderRadius: "999px", padding: "7px 7px 7px 22px", fontSize: "14px", fontWeight: "700", transition: "gap 0.35s cubic-bezier(0.22,1,0.36,1), background 0.3s" }} className="hv-2">Entrar no Ecos CRM<span aria-hidden="true" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "var(--accent)", color: "#F6F2E8", display: "grid", placeItems: "center", fontSize: "15px" }}>→</span></Link>
            <Link href="/#workshop" style={{ border: "1px solid var(--ink)", color: "var(--ink)", borderRadius: "999px", padding: "13px 22px", fontSize: "14px", fontWeight: "700", transition: "background 0.3s, color 0.3s" }} className="hv-7">Lista do workshop</Link>
          </div>
        </div>
      </main>
    </Moldura>
  );
}
