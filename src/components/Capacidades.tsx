"use client";

import { useState } from "react";

const CAPACIDADES = [
  { name: "tecnologia", title: "Tecnologia", text: "Desenvolvemos software a partir das necessidades observadas na operação e evoluímos os produtos com o uso." },
  { name: "automação", title: "Automação", text: "Usamos automação para apoiar tarefas repetitivas e ajudar a equipe a acompanhar o atendimento." },
  { name: "explicação", title: "Explicação", text: "No Ecos CRM, a qualificação DIUAD registra justificativas que ajudam a equipe a entender e revisar a avaliação do contato." },
  { name: "proximidade", title: "Proximidade", text: "A experiência de quem usa os produtos orienta as prioridades e as melhorias da Ecosflow." },
] as const;

const orbita = { transformBox: "fill-box", transformOrigin: "center", animation: "spinBack 52s linear infinite" } as const;
const rotulo = { fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", fill: "#E4E1CE" } as const;

/** Seção "Visão": as quatro capacidades da casa, uma aba por vez. */
export function Capacidades() {
  const [escolhida, setEscolhida] = useState(0);
  const atual = CAPACIDADES[escolhida];

  return (
    <section id="visao" data-screen-label="Visão" style={{ position: "relative", zIndex: "2", background: "#07120F", color: "var(--bone)", padding: "clamp(80px,11vw,150px) clamp(20px,4.5vw,64px)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "clamp(32px,5vw,72px)", alignItems: "center" }}>
        <div style={{ flex: "1 1 380px", minWidth: "min(100%,300px)", display: "flex", flexDirection: "column", gap: "20px" }}>
          <p style={{ margin: "0", fontSize: "11px", fontWeight: "700", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8A968B" }}>( visão )</p>
          <h2 style={{ margin: "0", fontWeight: "300", fontSize: "clamp(28px,3.8vw,54px)", lineHeight: "1.06", letterSpacing: "-0.03em", color: "#F1EEE0", textWrap: "pretty" }}>O produto é o começo da casa.</h2>
          <p style={{ margin: "0", maxWidth: "48ch", color: "#A8B2A6", fontSize: "clamp(14px,1.1vw,16px)", lineHeight: "1.65", textWrap: "pretty" }}>Conheça os princípios que orientam o desenvolvimento dos produtos da Ecosflow.</p>
          <div role="tablist" aria-label="Capacidades da casa" style={{ display: "flex", gap: "9px", flexWrap: "wrap" }}>
            {CAPACIDADES.map((c, i) => {
              const ativa = escolhida === i;
              return (
                <button key={c.name} type="button" role="tab" onClick={() => setEscolhida(i)} aria-selected={ativa} style={{ background: ativa ? "var(--accent)" : "transparent", border: `1px solid ${ativa ? "var(--accent)" : "rgba(228,225,206,0.3)"}`, color: ativa ? "#F6F2E8" : "#E4E1CE", borderRadius: "999px", padding: "10px 20px", fontSize: "13px", fontWeight: "700", cursor: "pointer", transition: "background 0.3s, border-color 0.3s" }}>{c.name}</button>
              );
            })}
          </div>
          <div aria-live="polite" style={{ background: "rgba(228,225,206,0.06)", border: "1px solid rgba(228,225,206,0.16)", borderRadius: "18px", padding: "24px", minHeight: "132px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "700", color: "var(--amber)" }}>{atual.title}</h3>
            <p style={{ margin: "0", color: "#BFC7BC", fontSize: "14.5px", lineHeight: "1.6", textWrap: "pretty" }}>{atual.text}</p>
          </div>
        </div>
        <div style={{ flex: "1 1 380px", minWidth: "min(100%,290px)", display: "grid", placeItems: "center" }}>
          <svg viewBox="0 0 480 480" aria-hidden="true" style={{ width: "100%", maxWidth: "480px", height: "auto", display: "block" }}>
            <circle cx="240" cy="240" r="172" fill="none" stroke="rgba(228,225,206,0.18)" strokeDasharray="3 8"></circle>
            <circle cx="240" cy="240" r="106" fill="none" stroke="rgba(228,225,206,0.12)" strokeDasharray="3 8"></circle>
            <g style={{ transformOrigin: "240px 240px", animation: "spinSlow 52s linear infinite" }}>
              <g transform="translate(240,68)"><g style={orbita}><circle r="38" fill="#12271E" stroke="rgba(228,225,206,0.35)"></circle><text y="4" textAnchor="middle" style={rotulo}>tecnologia</text></g></g>
              <g transform="translate(412,240)"><g style={orbita}><circle r="38" fill="#12271E" stroke="rgba(228,225,206,0.35)"></circle><text y="4" textAnchor="middle" style={rotulo}>automação</text></g></g>
              <g transform="translate(240,412)"><g style={orbita}><circle r="38" fill="#12271E" stroke="rgba(228,225,206,0.35)"></circle><text y="4" textAnchor="middle" style={rotulo}>explicação</text></g></g>
              <g transform="translate(68,240)"><g style={orbita}><circle r="38" fill="#12271E" stroke="rgba(228,225,206,0.35)"></circle><text y="4" textAnchor="middle" style={rotulo}>proximidade</text></g></g>
            </g>
            <circle cx="240" cy="240" r="54" fill="#07120F" stroke="rgba(228,225,206,0.2)"></circle>
            <circle cx="272" cy="214" r="5" fill="#B8401C"></circle>
            <text x="240" y="246" textAnchor="middle" style={{ fontFamily: "var(--font-sans)", fontSize: "19px", fontWeight: "300", letterSpacing: "0.06em", fill: "#F1EEE0" }}>ecosflow</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
