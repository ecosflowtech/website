import Link from "next/link";

const titulo = { margin: "0", fontSize: "11px", fontWeight: "800", letterSpacing: "0.16em", textTransform: "uppercase", color: "#8A968B" } as const;
const link = { fontSize: "14px", color: "#A8B2A6" } as const;

export function Rodape() {
  return (
    <footer style={{ position: "relative", zIndex: "2", background: "#050E0B", color: "#A8B2A6", padding: "clamp(56px,7vw,86px) clamp(20px,4.5vw,64px) 28px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(32px,4vw,52px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-mark.png" alt="Ecosflow" style={{ width: "38px", height: "38px", objectFit: "contain", filter: "invert(1)" }} />
              <span style={{ fontSize: "19px", fontWeight: "300", letterSpacing: "0.16em", color: "#E4E1CE" }}>ecosflow</span>
            </div>
            <p style={{ margin: "0", maxWidth: "40ch", fontSize: "14px", lineHeight: "1.65", color: "#8A968B" }}>Empresa de software, automação e inteligência artificial. Criadora do Ecos CRM e da Ecosflow Academy, nossa frente de aprendizagem.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={titulo}>Navegar</p>
            <Link href="/#casa" style={link} className="hv-10">A Ecosflow</Link>
            <Link href="/#crm" style={link} className="hv-10">Ecos CRM</Link>
            <Link href="/#demo" style={link} className="hv-10">O agente</Link>
            <Link href="/#planos" style={link} className="hv-10">Planos</Link>
            <Link href="/academy" style={link} className="hv-10">Academy</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={titulo}>Clientes</p>
            <Link href="/entrar" style={link} className="hv-10">Entrar no Ecos CRM</Link>
            <Link href="/academy" style={link} className="hv-10">Aprender a usar</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={titulo}>Contato</p>

            <Link href="/#workshop" style={link} className="hv-10">Lista do workshop</Link>
            <span style={{ fontSize: "14px", color: "#8A968B" }}>São Paulo, Brasil</span>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(228,225,206,0.1)", paddingTop: "22px", display: "flex", flexWrap: "wrap", gap: "14px 32px", justifyContent: "space-between" }}>
          <p style={{ margin: "0", fontSize: "12px", color: "#8A968B" }}>© 2026 Ecosflow. Todos os direitos reservados.</p>
          <p style={{ margin: "0", fontSize: "12px", color: "#8A968B", maxWidth: "62ch", textWrap: "pretty" }}>Ecosflow desenvolve tecnologia para atendimento e gestão. Ecos CRM é seu produto SaaS de atendimento pelo WhatsApp.</p>
        </div>
      </div>
    </footer>
  );
}
