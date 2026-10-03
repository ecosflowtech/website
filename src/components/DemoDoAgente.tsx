"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Intervalo entre as mensagens da conversa, o valor padrão do design. */
const VELOCIDADE_MS = 1500;

const MENSAGENS = [
  { text: "Oi, boa tarde. Vi o perfil de vocês e queria saber sobre um contrato que assinei com uma agência.", time: "09:12", who: "lead" },
  { text: "Boa tarde! Sou o atendimento do escritório. Me conta rapidinho: o contrato já está assinado e em vigor?", time: "09:12", who: "agent" },
  { text: "Já. Assinei em janeiro e agora estão cobrando exclusividade de tudo que eu publico.", time: "09:14", who: "lead" },
  { text: "Entendi. Isso já está gerando prejuízo agora ou é uma preocupação para os próximos meses?", time: "09:14", who: "agent" },
  { text: "Agora. Perdi duas campanhas esse mês por causa dessa cláusula.", time: "09:15", who: "lead" },
  { text: "A decisão de contratar o escritório é sua ou tem sócio ou empresário envolvido?", time: "09:15", who: "agent" },
  { text: "É minha. Eu que resolvo.", time: "09:16", who: "lead" },
  { text: "Perfeito. Tenho quinta às 14h ou sexta às 10h com a Dra. Eduarda. Qual fica melhor?", time: "09:16", who: "agent" },
  { text: "Quinta 14h. Quanto costuma ficar uma análise dessas?", time: "09:17", who: "lead" },
] as const;

/** `at`: a dimensão acende quando a conversa passa desta mensagem. */
const DIMENSOES = [
  { letter: "D", name: "Dor", at: 4, score: 5, reason: "Perdeu duas campanhas no mês por causa da cláusula de exclusividade. Prejuízo declarado pela própria pessoa." },
  { letter: "I", name: "Interesse", at: 2, score: 4, reason: "Procurou o escritório por conta própria e respondeu às perguntas sobre a demanda." },
  { letter: "U", name: "Urgência", at: 4, score: 5, reason: "O prejuízo já está acontecendo — não é hipótese para os próximos meses." },
  { letter: "A", name: "Autoridade", at: 6, score: 5, reason: "Decide a contratação sozinha, sem sócio ou empresário no caminho." },
  { letter: "D", name: "Disposição", at: 8, score: 3, reason: "Perguntou pelo preço; ainda falta confirmar o orçamento disponível." },
] as const;

const bolinha = { width: "6px", height: "6px", borderRadius: "50%", background: "#9DAC9F" } as const;

export function DemoDoAgente() {
  const [passo, setPasso] = useState(0);
  const secao = useRef<HTMLElement>(null);
  const relogio = useRef<ReturnType<typeof setInterval> | null>(null);

  const parar = useCallback(() => {
    if (relogio.current) clearInterval(relogio.current);
    relogio.current = null;
  }, []);

  const tocar = useCallback(() => {
    parar();
    relogio.current = setInterval(() => {
      setPasso((atual) => {
        if (atual >= MENSAGENS.length) {
          parar();
          return atual;
        }
        return atual + 1;
      });
    }, VELOCIDADE_MS);
  }, [parar]);

  // A conversa começa quando a seção aparece na tela. Com movimento reduzido,
  // ela já abre completa.
  useEffect(() => {
    const el = secao.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      queueMicrotask(() => setPasso(MENSAGENS.length));
      return;
    }
    const observador = new IntersectionObserver((entradas) => {
      if (entradas.some((e) => e.isIntersecting)) {
        tocar();
        observador.disconnect();
      }
    }, { threshold: 0.25 });
    observador.observe(el);
    return () => {
      observador.disconnect();
      parar();
    };
  }, [tocar, parar]);

  const rever = () => {
    setPasso(0);
    tocar();
  };
  const irProFim = () => {
    parar();
    setPasso(MENSAGENS.length);
  };

  const mensagens = MENSAGENS.slice(0, passo);
  const total = DIMENSOES.reduce((soma, d) => soma + (passo > d.at ? d.score : 0), 0);
  const concluida = passo >= MENSAGENS.length;
  const digitando = passo > 0 && passo < MENSAGENS.length;

  return (
    <section ref={secao} id="demo" data-screen-label="Demo do agente" style={{ position: "relative", zIndex: "2", background: "#07120F", color: "var(--bone)", padding: "clamp(80px,11vw,150px) clamp(20px,4.5vw,64px)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(30px,4vw,52px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
            <p style={{ margin: "0", fontSize: "11px", fontWeight: "700", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8A968B" }}>( o método )</p>
            <h2 style={{ margin: "0", fontWeight: "300", fontSize: "clamp(28px,3.8vw,54px)", lineHeight: "1.08", letterSpacing: "-0.03em", color: "#F1EEE0", textWrap: "pretty" }}>DIUAD: a nota vem com a razão escrita ao lado.</h2>
            <p style={{ margin: "0", maxWidth: "52ch", color: "#A8B2A6", fontSize: "clamp(14px,1.1vw,16px)", lineHeight: "1.65", textWrap: "pretty" }}>Demonstração ilustrativa com conversa, pessoa e pontuação fictícias. Veja como Dor, Interesse, Urgência, Autoridade e Disposição podem ajudar a organizar a qualificação de um contato.</p>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button type="button" onClick={rever} style={{ background: "transparent", border: "1px solid rgba(228,225,206,0.3)", color: "#E4E1CE", borderRadius: "999px", padding: "10px 20px", fontSize: "13px", fontWeight: "700", cursor: "pointer", transition: "border-color 0.3s, background 0.3s" }} className="hv-5">↻ Rever do início</button>
            <button type="button" onClick={irProFim} style={{ background: "var(--accent)", border: "1px solid var(--accent)", color: "#F6F2E8", borderRadius: "999px", padding: "10px 20px", fontSize: "13px", fontWeight: "700", cursor: "pointer", transition: "background 0.3s" }} className="hv-6">Ir para o resultado</button>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(18px,2.4vw,28px)", alignItems: "stretch" }}>
          <div style={{ flex: "1 1 360px", minWidth: "min(100%,300px)", background: "#0C1A15", border: "1px solid rgba(228,225,206,0.12)", borderRadius: "22px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "11px", padding: "16px 18px", borderBottom: "1px solid rgba(228,225,206,0.1)" }}>
              <span aria-hidden="true" style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(228,225,206,0.14)", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "800", color: "#BFC7BC", flex: "none" }}>BY</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "1px", minWidth: "0" }}>
                <p style={{ margin: "0", fontSize: "13.5px", fontWeight: "700", color: "#F1EEE0" }}>Bárbara Y.</p>
                <p style={{ margin: "0", fontSize: "11px", color: "#8A968B" }}>WhatsApp do escritório · primeiro contato</p>
              </div>
              <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: "7px", fontFamily: "var(--font-mono)", fontSize: "10.5px", letterSpacing: "0.1em", color: "#8A968B", flex: "none" }}><span aria-hidden="true" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", animation: "softBlink 2s ease-in-out infinite" }}></span>SIMULAÇÃO</span>
            </div>
            <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "10px", padding: "18px", minHeight: "420px" }}>
              {mensagens.map((m, i) => (
                <div key={i}>
                  {m.who === "lead" ? (
                    <div style={{ display: "flex", justifyContent: "flex-start", animation: "bubbleIn 0.4s cubic-bezier(0.19,0.7,0.16,1) both" }}>
                      <div style={{ maxWidth: "86%", background: "#17251F", border: "1px solid rgba(228,225,206,0.1)", borderRadius: "14px 14px 14px 4px", padding: "11px 14px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <p style={{ margin: "0", fontSize: "14px", color: "#DFDCCB", lineHeight: "1.5" }}>{m.text}</p>
                        <span style={{ fontSize: "10px", color: "#8A968B", alignSelf: "flex-end" }}>{m.time}</span>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "flex", justifyContent: "flex-end", animation: "bubbleIn 0.4s cubic-bezier(0.19,0.7,0.16,1) both" }}>
                      <div style={{ maxWidth: "86%", background: "#1E3A2C", border: "1px solid rgba(228,225,206,0.12)", borderRadius: "14px 14px 4px 14px", padding: "11px 14px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <p style={{ margin: "0", fontSize: "14px", color: "#EDEADA", lineHeight: "1.5" }}>{m.text}</p>
                        <span style={{ fontSize: "10px", color: "#9DAC9F", alignSelf: "flex-end" }}>{m.time} · agente</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {digitando ? (
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div style={{ background: "#1E3A2C", borderRadius: "14px 14px 4px 14px", padding: "12px 16px", display: "flex", gap: "5px", alignItems: "center" }}>
                    <span aria-hidden="true" style={{ ...bolinha, animation: "softBlink 1.1s ease-in-out infinite" }}></span>
                    <span aria-hidden="true" style={{ ...bolinha, animation: "softBlink 1.1s ease-in-out 0.2s infinite" }}></span>
                    <span aria-hidden="true" style={{ ...bolinha, animation: "softBlink 1.1s ease-in-out 0.4s infinite" }}></span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div style={{ flex: "1 1 400px", minWidth: "min(100%,300px)", background: "#0C1A15", border: "1px solid rgba(228,225,206,0.12)", borderRadius: "22px", padding: "clamp(20px,2.2vw,28px)", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", borderBottom: "1px solid rgba(228,225,206,0.1)", paddingBottom: "14px" }}>
              <p style={{ margin: "0", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.14em", color: "#A8B2A6" }}>CARTÃO DO LEAD · DIUAD</p>
              <p style={{ margin: "0", fontSize: "13px", fontWeight: "800", color: "#F1EEE0" }}>{total}<span style={{ color: "#8A968B", fontWeight: "600" }}>/25</span></p>
            </div>

            {DIMENSOES.map((d) => {
              const acesa = passo > d.at;
              return (
                <div key={d.name} style={{ display: "flex", flexDirection: "column", gap: "7px", paddingBottom: "12px", borderBottom: "1px solid rgba(228,225,206,0.07)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ width: "20px", height: "20px", borderRadius: "6px", background: "rgba(228,225,206,0.1)", display: "grid", placeItems: "center", fontSize: "10.5px", fontWeight: "800", color: "#BFC7BC", flex: "none" }}>{d.letter}</span>
                    <p style={{ margin: "0", fontSize: "13.5px", fontWeight: "700", color: "#E4E1CE", flex: "1" }}>{d.name}</p>
                    <p style={{ margin: "0", fontSize: "12.5px", fontWeight: "800", color: acesa ? "#E7E3D3" : "#7E8A80" }}>{acesa ? `${d.score}/5` : "—"}</p>
                  </div>
                  <div style={{ height: "4px", borderRadius: "999px", background: "rgba(228,225,206,0.1)", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: acesa ? `${(d.score / 5) * 100}%` : "0%", background: "var(--accent)", borderRadius: "999px", transition: "width 0.7s cubic-bezier(0.19,0.7,0.16,1)" }}></div>
                  </div>
                  {acesa ? (
                    <p style={{ margin: "0", fontSize: "12.5px", color: "#9DAC9F", lineHeight: "1.55", paddingLeft: "30px", textWrap: "pretty" }}>{d.reason}</p>
                  ) : (
                    <p style={{ margin: "0", fontSize: "12.5px", color: "#7E8A80", lineHeight: "1.55", paddingLeft: "30px", fontStyle: "italic" }}>aguardando sinal na conversa…</p>
                  )}
                </div>
              );
            })}

            {concluida ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", animation: "revealUp 0.6s cubic-bezier(0.19,0.7,0.16,1) both" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
                  <span style={{ background: "rgba(184,64,28,0.24)", color: "#F0A88D", borderRadius: "999px", padding: "6px 13px", fontSize: "11.5px", fontWeight: "800" }}>● Quente</span>
                  <span style={{ border: "1px solid rgba(228,225,206,0.2)", borderRadius: "999px", padding: "6px 13px", fontSize: "11.5px", fontWeight: "700", color: "#BFC7BC" }}>Novo → Reunião marcada</span>
                  <span style={{ border: "1px solid rgba(228,225,206,0.2)", borderRadius: "999px", padding: "6px 13px", fontSize: "11.5px", fontWeight: "700", color: "#BFC7BC" }}>Direito Digital</span>
                </div>
                <div style={{ borderLeft: "2px solid var(--amber)", paddingLeft: "14px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <p style={{ margin: "0", fontSize: "10.5px", fontWeight: "800", letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A968B" }}>Próximo passo</p>
                  <p style={{ margin: "0", fontSize: "14px", color: "#DFDCCB", lineHeight: "1.55" }}>Reunião com a Dra. Eduarda na quinta, 14h. Resumo da conversa e pedido de documentos anexados ao cartão.</p>
                </div>
              </div>
            ) : null}

            <p style={{ margin: "auto 0 0", fontSize: "10.5px", fontWeight: "700", letterSpacing: "0.14em", color: "#8A968B", lineHeight: "1.6" }}>EXEMPLO ILUSTRATIVO · A EQUIPE PODE REVISAR AS SUGESTÕES NO MODO ASSISTIDO</p>
          </div>
        </div>

        <p style={{ margin: "0", textAlign: "center", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(20px,2.6vw,36px)", color: "#F1EEE0", lineHeight: "1.25" }}>A IA pontua e explica. Quem decide é sempre o escritório.</p>
      </div>
    </section>
  );
}
