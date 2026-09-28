import type { ReactNode } from "react";
import { Cabecalho } from "./Cabecalho";
import { Rodape } from "./Rodape";

/** Cabeçalho, rodapé e o fundo do design, iguais em todas as páginas do site. */
export function Moldura({ children }: { children: ReactNode }) {
  return (
    <div data-root style={{ background: "#F6F2E8", color: "#0F1A15", overflowX: "clip", fontSize: "16px", lineHeight: "1.6" }}>
      <Cabecalho />
      {children}
      <Rodape />
    </div>
  );
}

const rotuloDeSecao = { margin: "0", fontSize: "11px", fontWeight: "700", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted)" } as const;
const tituloDeSecao = { margin: "0", fontWeight: "300", fontSize: "clamp(30px,4.3vw,62px)", lineHeight: "1.06", letterSpacing: "-0.03em", color: "var(--ink)", textWrap: "pretty" } as const;

/** Abertura das páginas internas, no mesmo tom das seções da página inicial. */
export function TopoDePagina({ rotulo, titulo, subtitulo, texto }: { rotulo: string; titulo: string; subtitulo?: string; texto?: string }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(24px,4vw,64px)", alignItems: "flex-end" }}>
      <div style={{ flex: "1 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
        <p style={rotuloDeSecao}>{rotulo}</p>
        <h1 style={tituloDeSecao}>
          {titulo}
          {subtitulo ? <span style={{ display: "block", color: "#7C877E" }}>{subtitulo}</span> : null}
        </h1>
      </div>
      {texto ? <p style={{ flex: "0 1 400px", minWidth: "260px", margin: "0", color: "var(--muted)", fontSize: "clamp(15px,1.15vw,17px)", lineHeight: "1.7", textWrap: "pretty" }}>{texto}</p> : null}
    </div>
  );
}

export const estiloDaPaginaInterna = {
  position: "relative",
  background: "var(--paper)",
  minHeight: "100svh",
  boxSizing: "border-box",
  padding: "clamp(130px,17vh,190px) clamp(20px,4.5vw,64px) clamp(80px,11vw,140px)",
} as const;
