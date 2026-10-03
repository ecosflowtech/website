import Link from "next/link";

const link = { fontSize: "12.5px", fontWeight: "600", color: "rgba(228,225,206,0.72)", whiteSpace: "nowrap", flex: "none" } as const;

/**
 * Barra de navegação fixa do topo. Os links apontam para "/#secao" para
 * funcionarem também fora da página inicial; na própria página, só rolam até
 * a seção.
 */
export function Cabecalho() {
  return (
    <header style={{ position: "fixed", top: "0", left: "0", right: "0", zIndex: "80", display: "flex", justifyContent: "center", padding: "14px clamp(12px,3vw,24px)", pointerEvents: "none" }}>
      <nav aria-label="Principal" style={{ pointerEvents: "auto", display: "flex", alignItems: "center", gap: "clamp(10px,2vw,28px)", background: "rgba(7,18,15,0.9)", backdropFilter: "blur(12px)", border: "1px solid rgba(228,225,206,0.12)", borderRadius: "999px", padding: "9px 9px 9px 20px", maxWidth: "100%", overflow: "auto" }}>
        <Link href="/#topo" style={{ display: "flex", alignItems: "center", gap: "9px", color: "#E4E1CE", flex: "none" }} className="hv-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mark.png" alt="" aria-hidden="true" style={{ width: "26px", height: "26px", objectFit: "contain", filter: "invert(1)", flex: "none" }} />
          <span style={{ fontSize: "15px", fontWeight: "300", letterSpacing: "0.14em" }}>ecosflow</span>
        </Link>
        <span aria-hidden="true" style={{ width: "1px", height: "18px", background: "rgba(228,225,206,0.18)", flex: "none" }}></span>
        <Link href="/#casa" style={link} className="hv-1">A Ecosflow</Link>
        <Link href="/#crm" style={link} className="hv-1">Ecos CRM</Link>
        <Link href="/#demo" style={link} className="hv-1">O agente</Link>
        <Link href="/#regras" style={link} className="hv-1">Uso responsável</Link>
        <Link href="/#planos" style={link} className="hv-1">Planos</Link>
        <Link href="/academy" style={link} className="hv-1">Academy</Link>
        <Link href="/#workshop" style={{ flex: "none", background: "var(--accent)", color: "#F6F2E8", borderRadius: "999px", padding: "10px 18px", fontSize: "12.5px", fontWeight: "700", whiteSpace: "nowrap", transition: "background 0.3s" }} className="hv-2">Lista do workshop</Link>
      </nav>
    </header>
  );
}
