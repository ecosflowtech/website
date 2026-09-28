import Link from "next/link";
import { Capacidades } from "@/components/Capacidades";
import { DemoDoAgente } from "@/components/DemoDoAgente";
import { FormularioWorkshop } from "@/components/FormularioWorkshop";
import { Moldura } from "@/components/Moldura";
import { MotorDaAbertura } from "@/components/MotorDaAbertura";

/**
 * Página inicial, convertida de design/Ecosflow.dc.html. A marcação e os
 * estilos são os do design; o que mexe (abertura, demonstração, abas e
 * formulário) mora nos componentes.
 */
export default function Inicio() {
  return (
    <Moldura>
      <main>
        <div data-cine id="topo" style={{ position: "relative" }}>
          <div data-cine-stage style={{ position: "sticky", top: "0" }}>

            <section data-scene="1" data-screen-label="Hero" style={{ position: "relative", minHeight: "100svh", boxSizing: "border-box", padding: "clamp(10px,1.4vw,18px)", background: "#07120F" }}>
              <div data-hero-panel style={{ position: "relative", width: "100%", height: "100%", minHeight: "min(940px,calc(100svh - 24px))", borderRadius: "clamp(16px,2.2vw,28px)", overflow: "hidden", background: "#0A1713", border: "1px solid rgba(228,225,206,0.08)", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <div data-glow aria-hidden="true" style={{ position: "absolute", inset: "-14% -4%", pointerEvents: "none", background: "radial-gradient(120% 90% at 78% 8%, #17382A 0%, #0C2318 44%, #07120F 100%)" }}></div>
                <div aria-hidden="true" style={{ position: "absolute", inset: "0", pointerEvents: "none", opacity: "0.5", backgroundImage: "radial-gradient(rgba(228,225,206,0.16) 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
                <video data-hero-video src="/hero.mp4" autoPlay muted loop playsInline preload="auto" aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: "0.55", pointerEvents: "none" }}></video>
                <div aria-hidden="true" style={{ position: "absolute", inset: "0", pointerEvents: "none", background: "linear-gradient(180deg, rgba(7,18,15,0.82) 0%, rgba(7,18,15,0.42) 38%, rgba(7,18,15,0.92) 100%)" }}></div>

                <div style={{ position: "relative", flex: "1", minHeight: "0", padding: "clamp(78px,10vh,130px) clamp(20px,4vw,56px) clamp(20px,2.6vw,38px)", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "clamp(20px,4vh,52px)", overflow: "hidden" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(20px,3.4vw,64px)", alignItems: "flex-end" }}>
                    <div data-hero-side style={{ flex: "1 1 340px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                      <p style={{ margin: "0", fontSize: "11px", fontWeight: "700", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--amber)", animation: "revealSoft 0.8s ease both" }}>Casa de software · IA para a operação do escritório</p>
                      <h1 style={{ margin: "0", fontWeight: "300", fontSize: "min(clamp(28px,3.5vw,56px), 7.4vh)", lineHeight: "1.1", letterSpacing: "-0.025em", color: "#F1EEE0", maxWidth: "19ch", textWrap: "pretty", animation: "revealUp 1s cubic-bezier(0.19,0.7,0.16,1) both" }}>O escritório não perde cliente por falta de competência.<span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: "400", fontSize: "1.06em", color: "#FFFDEB", marginTop: "0.18em" }}>Perde por falta de tempo de responder.</span></h1>
                    </div>
                    <div data-hero-side style={{ flex: "1 1 300px", minWidth: "min(100%,280px)", maxWidth: "420px", display: "flex", flexDirection: "column", gap: "18px", paddingBottom: "6px", animation: "revealUp 1s cubic-bezier(0.19,0.7,0.16,1) 0.2s both" }}>
                      <p style={{ margin: "0", color: "#BFC7BC", fontSize: "clamp(14px,1.1vw,16px)", lineHeight: "1.65", textWrap: "pretty" }}>A Ecosflow constrói a inteligência artificial que opera o lado comercial do escritório: qualifica, acompanha, recupera e conduz até o contrato. Fora da atividade privativa da advocacia, por desenho.</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
                        <a href="#workshop" style={{ display: "inline-flex", alignItems: "center", gap: "12px", background: "#E7E3D3", color: "#0F1A15", borderRadius: "999px", padding: "7px 7px 7px 22px", fontSize: "14px", fontWeight: "700", transition: "gap 0.35s cubic-bezier(0.22,1,0.36,1), background 0.3s" }} className="hv-3">Entrar na lista do workshop<span aria-hidden="true" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "var(--accent)", color: "#F6F2E8", display: "grid", placeItems: "center", fontSize: "15px" }}>→</span></a>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        <span style={{ border: "1px solid rgba(228,225,206,0.22)", borderRadius: "999px", padding: "6px 13px", fontSize: "11.5px", fontWeight: "600", color: "#BFC7BC" }}>Em produção num escritório real</span>
                        <span style={{ border: "1px solid rgba(228,225,206,0.22)", borderRadius: "999px", padding: "6px 13px", fontSize: "11.5px", fontWeight: "600", color: "#BFC7BC" }}>Supervisão humana por padrão</span>
                      </div>
                    </div>
                  </div>

                  <div data-wordmark aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: "clamp(14px,2.2vw,34px)", borderTop: "1px solid rgba(228,225,206,0.14)", paddingTop: "clamp(14px,2.2vw,24px)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo-mark.png" alt="" style={{ width: "min(clamp(44px,6.8vw,112px), 13vh)", height: "auto", objectFit: "contain", filter: "invert(1)", flex: "none", opacity: "0.95" }} />
                    <span style={{ position: "relative", display: "block", flex: "1", minWidth: "0" }}>
                      <span data-wm-outline style={{ display: "block", fontWeight: "200", fontSize: "min(clamp(38px,11.4vw,180px), 21vh)", lineHeight: "0.78", letterSpacing: "0.02em", color: "transparent", whiteSpace: "nowrap", WebkitTextStroke: "1.3px rgba(241,238,224,0.45)" }}>ecosflow</span>
                      <span data-wm-solid style={{ position: "absolute", left: "0", top: "0", display: "block", fontWeight: "200", fontSize: "min(clamp(38px,11.4vw,180px), 21vh)", lineHeight: "0.78", letterSpacing: "0.02em", color: "#F1EEE0", whiteSpace: "nowrap" }}>ecosflow</span>
                    </span>
                  </div>
                </div>
                <div data-dim1 aria-hidden="true" style={{ position: "absolute", inset: "0", background: "#07120F", opacity: "0", pointerEvents: "none" }}></div>
              </div>
            </section>

            <section data-scene="2" id="contexto" data-screen-label="Contexto" style={{ position: "relative", minHeight: "100svh", boxSizing: "border-box", background: "#07120F", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(70px,10vh,120px) clamp(16px,4vw,64px)" }}>
              <div data-m-card style={{ maxWidth: "1100px", width: "100%", background: "#0C1A15", border: "1px solid rgba(228,225,206,0.07)", borderRadius: "26px", padding: "clamp(36px,7vh,96px) clamp(22px,5vw,80px)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(20px,3.4vh,40px)", boxShadow: "0 60px 120px -60px rgba(0,0,0,0.9)" }}>
                <p data-m-label style={{ margin: "0", fontSize: "11px", fontWeight: "700", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8A968B" }}>( o contexto )</p>
                <h2 data-m-title style={{ margin: "0", maxWidth: "900px", fontWeight: "300", fontSize: "clamp(26px,3.9vw,58px)", lineHeight: "1.08", letterSpacing: "-0.02em", color: "#F1EEE0", textWrap: "pretty" }}>Todo escritório tem um funil comercial.<span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: "400", fontSize: "1.05em", color: "#FFFDEB" }}>Quase nenhum consegue enxergar o dele.</span></h2>
                <p data-m-text style={{ margin: "0", maxWidth: "660px", color: "#BFC7BC", fontSize: "clamp(14px,1.15vw,17px)", lineHeight: "1.75", fontWeight: "300", textWrap: "pretty" }}>Entre a primeira mensagem no WhatsApp e o contrato assinado existe uma fila de tarefas que ninguém registrou: responder, entender o caso, decidir se vale, marcar a reunião, cobrar o documento, lembrar do pagamento. Quando o escritório está cheio, é essa fila que trava — e o cliente que já tinha escolhido você desiste no silêncio.</p>
              </div>
              <div data-dim2 aria-hidden="true" style={{ position: "absolute", inset: "0", background: "#07120F", opacity: "0", pointerEvents: "none" }}></div>
            </section>

            <section data-scene="3" id="escala" data-screen-label="Escala" style={{ position: "relative", minHeight: "100svh", boxSizing: "border-box", background: "#07120F", color: "var(--bone)", display: "flex", alignItems: "center", padding: "clamp(50px,8vh,110px) clamp(20px,4.5vw,64px)", overflow: "hidden" }}>
              <div data-n-inner style={{ maxWidth: "1360px", margin: "0 auto", width: "100%" }}>
                <p data-n-label style={{ margin: "0 0 clamp(16px,2.8vh,42px)", fontSize: "11px", fontWeight: "700", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8A968B" }}>( a brecha )</p>
                <div style={{ borderBottom: "1px solid rgba(228,225,206,0.14)" }}>
                  <div data-stat-row style={{ borderTop: "1px solid rgba(228,225,206,0.14)", padding: "clamp(16px,3vh,46px) 0", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "14px 48px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "11px", minWidth: "0" }}><span data-count data-to="77" style={{ fontSize: "min(clamp(56px,8.6vw,158px), 13.5vh)", fontWeight: "800", lineHeight: "0.9", letterSpacing: "-0.04em", color: "#F1EEE0" }}>77</span><span style={{ fontSize: "clamp(20px,2.3vw,40px)", fontWeight: "700", color: "#8A968B" }}>%</span></div>
                    <p style={{ margin: "0", maxWidth: "420px", color: "#A8B2A6", fontSize: "clamp(13px,1.05vw,16px)", lineHeight: "1.6", textWrap: "pretty" }}>dos advogados acreditam que a IA vai assumir tarefas de marketing — <span style={{ color: "var(--amber)", fontWeight: "700" }}>só 27% de fato usam</span>. O comprador não precisa ser convencido de que IA serve, e sim de que esta funciona.</p>
                  </div>
                  <div data-stat-row style={{ borderTop: "1px solid rgba(228,225,206,0.14)", padding: "clamp(16px,3vh,46px) 0", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "14px 48px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "11px", minWidth: "0" }}><span style={{ fontSize: "clamp(16px,1.6vw,26px)", fontWeight: "700", color: "#8A968B" }}>~</span><span data-count data-to="90" style={{ fontSize: "min(clamp(56px,8.6vw,158px), 13.5vh)", fontWeight: "800", lineHeight: "0.9", letterSpacing: "-0.04em", color: "#F1EEE0" }}>90</span><span style={{ fontSize: "clamp(20px,2.3vw,40px)", fontWeight: "700", color: "#8A968B" }}>%</span></div>
                    <p style={{ margin: "0", maxWidth: "420px", color: "#A8B2A6", fontSize: "clamp(13px,1.05vw,16px)", lineHeight: "1.6", textWrap: "pretty" }}>dos primeiros contatos com escritórios já começam no WhatsApp. Atender ali virou piso de entrada; ninguém resolveu o que acontece depois da primeira mensagem.</p>
                  </div>
                  <div data-stat-row style={{ borderTop: "1px solid rgba(228,225,206,0.14)", padding: "clamp(16px,3vh,46px) 0", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "14px 48px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "11px", minWidth: "0" }}><span data-count data-to="600" style={{ fontSize: "min(clamp(56px,8.6vw,158px), 13.5vh)", fontWeight: "800", lineHeight: "0.9", letterSpacing: "-0.04em", color: "#F1EEE0" }}>600</span><span style={{ fontSize: "clamp(20px,2.3vw,40px)", fontWeight: "700", color: "#8A968B" }}>+</span></div>
                    <p style={{ margin: "0", maxWidth: "420px", color: "#A8B2A6", fontSize: "clamp(13px,1.05vw,16px)", lineHeight: "1.6", textWrap: "pretty" }}>legaltechs ativas no Brasil. O mercado não é vazio: é fase de consolidação, em que ganha quem consegue ser verificável — não quem promete mais.</p>
                  </div>
                </div>
                <p style={{ margin: "clamp(14px,2.2vh,26px) 0 0", fontSize: "11.5px", color: "#9AA79C", letterSpacing: "0.04em" }}>Fontes: AB2L; levantamentos de uso de IA na advocacia e de canais de atendimento, consolidados na nossa pesquisa de mercado de agosto de 2026.</p>
              </div>
            </section>

          </div>
        </div>

        <section id="casa" data-screen-label="A casa" style={{ position: "relative", zIndex: "2", background: "var(--paper)", padding: "clamp(80px,11vw,150px) clamp(20px,4.5vw,64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(40px,6vw,72px)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(28px,5vw,80px)", alignItems: "flex-end" }}>
              <div style={{ flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                <p style={{ margin: "0", fontSize: "11px", fontWeight: "700", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted)" }}>( a casa )</p>
                <h2 style={{ margin: "0", fontWeight: "300", fontSize: "clamp(30px,4.3vw,62px)", lineHeight: "1.06", letterSpacing: "-0.03em", color: "var(--ink)", textWrap: "pretty" }}>Ecosflow é a casa.<span style={{ display: "block", color: "#7C877E" }}>Ecos CRM é o primeiro produto dela.</span></h2>
              </div>
              <p style={{ flex: "0 1 420px", minWidth: "280px", margin: "0", color: "var(--muted)", fontSize: "clamp(15px,1.15vw,17px)", lineHeight: "1.7", textWrap: "pretty" }}>Construímos software para o lado comercial e administrativo do escritório: quem chegou, quem esfriou, quem precisa de contrato, quem precisa saber do andamento, quem precisa pagar. Nada disso é atividade privativa da advocacia — e essa fronteira é escolha de projeto, não limitação.</p>
            </div>

            <p style={{ margin: "0", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(22px,3.1vw,44px)", lineHeight: "1.22", letterSpacing: "-0.01em", color: "var(--ink)", maxWidth: "24ch", borderLeft: "2px solid var(--accent)", paddingLeft: "clamp(18px,2.5vw,32px)" }}>O mercado está construindo IA que escreve Direito. Nós construímos a que cuida do negócio ao redor dele.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "14px" }}>
              <article style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: "20px", padding: "clamp(24px,2.6vw,36px)", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "0.16em", color: "var(--accent)" }}>PILAR 01</span>
                <h3 style={{ margin: "0", fontSize: "clamp(20px,1.9vw,26px)", fontWeight: "700", letterSpacing: "-0.02em", color: "var(--ink)" }}>Não some ninguém</h3>
                <p style={{ margin: "0", color: "var(--muted)", fontSize: "14.5px", lineHeight: "1.65" }}>O agente responde na hora, qualifica com critério e avisa quando alguém ficou sem resposta — com o resumo da conversa e a mensagem de retomada pronta.</p>
              </article>
              <article style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: "20px", padding: "clamp(24px,2.6vw,36px)", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "0.16em", color: "var(--accent)" }}>PILAR 02</span>
                <h3 style={{ margin: "0", fontSize: "clamp(20px,1.9vw,26px)", fontWeight: "700", letterSpacing: "-0.02em", color: "var(--ink)" }}>Você vê por quê</h3>
                <p style={{ margin: "0", color: "var(--muted)", fontSize: "14.5px", lineHeight: "1.65" }}>Cada lead recebe nota em cinco dimensões, com a razão escrita ao lado. Quando a equipe sabe mais que a IA, a nota é corrigida à mão.</p>
              </article>
              <article style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: "20px", padding: "clamp(24px,2.6vw,36px)", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "0.16em", color: "var(--accent)" }}>PILAR 03</span>
                <h3 style={{ margin: "0", fontSize: "clamp(20px,1.9vw,26px)", fontWeight: "700", letterSpacing: "-0.02em", color: "var(--ink)" }}>Tem alguém do outro lado</h3>
                <p style={{ margin: "0", color: "var(--muted)", fontSize: "14.5px", lineHeight: "1.65" }}>Quem atende quando quebra é quem construiu. Canal direto e prazo de resposta declarado — enquanto a equipe for pequena o bastante para isso ser verdade.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="crm" data-screen-label="Ecos CRM" style={{ position: "relative", zIndex: "2", background: "var(--paper2)", padding: "clamp(80px,11vw,150px) clamp(20px,4.5vw,64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(30px,4vw,52px)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-end", justifyContent: "space-between" }}>
              <div style={{ flex: "1 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
                <p style={{ margin: "0", fontSize: "11px", fontWeight: "700", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted)" }}>( soluções )</p>
                <h2 style={{ margin: "0", fontWeight: "300", fontSize: "clamp(28px,3.8vw,54px)", lineHeight: "1.08", letterSpacing: "-0.03em", color: "var(--ink)", textWrap: "pretty" }}>Um produto em produção.<span style={{ display: "block", color: "#7C877E" }}>Os próximos nascem do mesmo motor.</span></h2>
              </div>
              <p style={{ flex: "0 1 360px", minWidth: "260px", margin: "0", color: "var(--muted)", fontSize: "14.5px", lineHeight: "1.65" }}>Teste que todo produto da casa precisa passar para existir: resolver uma etapa da vida comercial do escritório sem produzir conteúdo jurídico substantivo.</p>
            </div>

            <article style={{ background: "var(--pine)", color: "var(--bone)", borderRadius: "26px", padding: "clamp(26px,3.4vw,52px)", display: "flex", flexWrap: "wrap", gap: "clamp(28px,4vw,60px)" }}>
              <div style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div aria-hidden="true" style={{ position: "relative", width: "84px", height: "84px", flex: "none" }}>
                  <div style={{ position: "absolute", inset: "0", border: "1px solid rgba(228,225,206,0.45)", borderRadius: "50%", animation: "radarRing 3.2s linear infinite" }}></div>
                  <div style={{ position: "absolute", inset: "0", border: "1px solid rgba(228,225,206,0.45)", borderRadius: "50%", animation: "radarRing 3.2s linear infinite", animationDelay: "1.05s" }}></div>
                  <div style={{ position: "absolute", inset: "0", border: "1px solid rgba(228,225,206,0.45)", borderRadius: "50%", animation: "radarRing 3.2s linear infinite", animationDelay: "2.1s" }}></div>
                  <div style={{ position: "absolute", inset: "0", borderRadius: "50%", background: "conic-gradient(from 0deg, rgba(184,64,28,0.5), transparent 26%)", animation: "radarSweep 4.5s linear infinite" }}></div>
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "7px", height: "7px", margin: "-3.5px 0 0 -3.5px", borderRadius: "50%", background: "var(--accent)" }}></div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <h3 style={{ margin: "0", fontSize: "clamp(26px,2.8vw,40px)", fontWeight: "700", letterSpacing: "-0.03em", color: "#F1EEE0" }}>Ecos CRM</h3>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", border: "1px solid rgba(228,225,206,0.3)", borderRadius: "999px", padding: "5px 12px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#BFC7BC" }}><span aria-hidden="true" style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--amber)", animation: "softBlink 2.2s ease-in-out infinite" }}></span>Em produção</span>
                </div>
                <p style={{ margin: "0", color: "#BFC7BC", fontSize: "clamp(15px,1.15vw,17px)", lineHeight: "1.7", maxWidth: "46ch", textWrap: "pretty" }}>O lead chega pelo WhatsApp, é atendido na hora, é qualificado com nota e justificativa, e chega até o contrato sem depender de você estar livre. Quando esfria, o sistema avisa — e sugere o que dizer.</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ border: "1px solid rgba(228,225,206,0.22)", borderRadius: "999px", padding: "6px 13px", fontSize: "11.5px", fontWeight: "600", color: "#BFC7BC" }}>WhatsApp</span>
                  <span style={{ border: "1px solid rgba(228,225,206,0.22)", borderRadius: "999px", padding: "6px 13px", fontSize: "11.5px", fontWeight: "600", color: "#BFC7BC" }}>Agenda</span>
                  <span style={{ border: "1px solid rgba(228,225,206,0.22)", borderRadius: "999px", padding: "6px 13px", fontSize: "11.5px", fontWeight: "600", color: "#BFC7BC" }}>Cobrança</span>
                  <span style={{ border: "1px solid rgba(228,225,206,0.22)", borderRadius: "999px", padding: "6px 13px", fontSize: "11.5px", fontWeight: "600", color: "#BFC7BC" }}>Assinatura</span>
                  <span style={{ border: "1px solid rgba(228,225,206,0.22)", borderRadius: "999px", padding: "6px 13px", fontSize: "11.5px", fontWeight: "600", color: "#BFC7BC" }}>Aplicativo Android e iPhone</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 24px" }}>
                  <Link href="/entrar" style={{ display: "inline-flex", alignItems: "center", gap: "12px", background: "#E7E3D3", color: "#0F1A15", borderRadius: "999px", padding: "6px 6px 6px 20px", fontSize: "13.5px", fontWeight: "700", transition: "gap 0.35s cubic-bezier(0.22,1,0.36,1), background 0.3s" }} className="hv-3">Entrar ou criar conta<span aria-hidden="true" style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--accent)", color: "#F6F2E8", display: "grid", placeItems: "center", fontSize: "14px" }}>→</span></Link>
                  <a href="#demo" style={{ display: "inline-flex", alignItems: "center", gap: "9px", fontSize: "13.5px", fontWeight: "700", color: "#F1EEE0", transition: "gap 0.3s" }} className="hv-4">Ver o agente trabalhar <span aria-hidden="true">↓</span></a>
                </div>
              </div>

              <div style={{ flex: "1 1 320px", minWidth: "min(100%,290px)", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", background: "rgba(228,225,206,0.06)", border: "1px solid rgba(228,225,206,0.16)", borderRadius: "16px", padding: "16px 18px" }}>
                  <span aria-hidden="true" style={{ fontSize: "12px", fontWeight: "800", color: "var(--amber)", flex: "none", paddingTop: "2px" }}>01</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}><p style={{ margin: "0", fontSize: "14.5px", fontWeight: "700", color: "#F1EEE0" }}>Atende e qualifica</p><p style={{ margin: "0", fontSize: "13.5px", color: "#A8B2A6", lineHeight: "1.55" }}>Responde na hora, entende o caso e pontua o lead pelo método DIUAD.</p></div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", background: "rgba(228,225,206,0.06)", border: "1px solid rgba(228,225,206,0.16)", borderRadius: "16px", padding: "16px 18px" }}>
                  <span aria-hidden="true" style={{ fontSize: "12px", fontWeight: "800", color: "var(--amber)", flex: "none", paddingTop: "2px" }}>02</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}><p style={{ margin: "0", fontSize: "14.5px", fontWeight: "700", color: "#F1EEE0" }}>Conduz até o contrato</p><p style={{ margin: "0", fontSize: "13.5px", color: "#A8B2A6", lineHeight: "1.55" }}>Move o cartão de etapa, cobra documento, marca reunião e lembra do pagamento.</p></div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", background: "rgba(228,225,206,0.06)", border: "1px solid rgba(228,225,206,0.16)", borderRadius: "16px", padding: "16px 18px" }}>
                  <span aria-hidden="true" style={{ fontSize: "12px", fontWeight: "800", color: "var(--amber)", flex: "none", paddingTop: "2px" }}>03</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}><p style={{ margin: "0", fontSize: "14.5px", fontWeight: "700", color: "#F1EEE0" }}>Mostra o que se perde</p><p style={{ margin: "0", fontSize: "13.5px", color: "#A8B2A6", lineHeight: "1.55" }}>Quantos procuraram no mês, quantos viraram cliente e quanto ficou na mesa.</p></div>
                </div>
                <div style={{ marginTop: "6px", border: "1px solid var(--accent)", borderRadius: "16px", padding: "16px 18px", background: "rgba(184,64,28,0.12)", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <p style={{ margin: "0", fontSize: "10.5px", fontWeight: "800", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--amber)" }}>Recuperação de lead frio</p>
                  <p style={{ margin: "0", fontSize: "14px", color: "#F1EEE0", lineHeight: "1.55" }}>Parada há 9 dias · “vou conversar com meu sócio e retorno” · R$ 11.500 em análise contratual.</p>
                  <p style={{ margin: "0", fontSize: "13px", color: "#BFC7BC", lineHeight: "1.55", fontStyle: "italic" }}>Mensagem sugerida: “Oi, Bárbara. Você ia alinhar com o seu sócio a análise do contrato de exclusividade. Consigo segurar a agenda de quinta se ainda fizer sentido.”</p>
                </div>
              </div>
            </article>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ margin: "0", fontSize: "11px", fontWeight: "700", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted)" }}>Próximos produtos da casa</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,230px),1fr))", gap: "12px" }}>
                <div style={{ border: "1px dashed var(--line)", borderRadius: "18px", padding: "22px 24px", display: "flex", flexDirection: "column", gap: "8px", background: "rgba(252,250,243,0.5)" }}>
                  <span style={{ fontSize: "10.5px", fontWeight: "800", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>Em estudo</span>
                  <p style={{ margin: "0", fontSize: "17px", fontWeight: "700", color: "var(--ink)", letterSpacing: "-0.01em" }}>Formalizar</p>
                  <p style={{ margin: "0", fontSize: "13.5px", color: "var(--muted)", lineHeight: "1.55" }}>Do aceite ao documento assinado, com revisão humana antes de qualquer envio.</p>
                </div>
                <div style={{ border: "1px dashed var(--line)", borderRadius: "18px", padding: "22px 24px", display: "flex", flexDirection: "column", gap: "8px", background: "rgba(252,250,243,0.5)" }}>
                  <span style={{ fontSize: "10.5px", fontWeight: "800", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>Em estudo</span>
                  <p style={{ margin: "0", fontSize: "17px", fontWeight: "700", color: "var(--ink)", letterSpacing: "-0.01em" }}>Manter informado</p>
                  <p style={{ margin: "0", fontSize: "13.5px", color: "var(--muted)", lineHeight: "1.55" }}>O cliente sabe o que mudou e qual é o próximo passo, no número do próprio escritório.</p>
                </div>
                <div style={{ border: "1px dashed var(--line)", borderRadius: "18px", padding: "22px 24px", display: "flex", flexDirection: "column", gap: "8px", background: "rgba(252,250,243,0.5)" }}>
                  <span style={{ fontSize: "10.5px", fontWeight: "800", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>Em estudo</span>
                  <p style={{ margin: "0", fontSize: "17px", fontWeight: "700", color: "var(--ink)", letterSpacing: "-0.01em" }}>Ser encontrado</p>
                  <p style={{ margin: "0", fontSize: "13.5px", color: "var(--muted)", lineHeight: "1.55" }}>Presença com constância, dentro do que o Provimento 205 permite ao escritório.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DemoDoAgente />

        <section id="origem" data-screen-label="Origem" style={{ position: "relative", zIndex: "2", background: "var(--paper)", padding: "clamp(80px,11vw,150px) clamp(20px,4.5vw,64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "clamp(36px,6vw,90px)", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 320px", minWidth: "min(100%,280px)", position: "sticky", top: "96px", display: "flex", flexDirection: "column", gap: "18px" }}>
              <p style={{ margin: "0", fontSize: "11px", fontWeight: "700", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted)" }}>( a origem )</p>
              <h2 style={{ margin: "0", fontWeight: "300", fontSize: "clamp(28px,3.8vw,54px)", lineHeight: "1.06", letterSpacing: "-0.03em", color: "var(--ink)", textWrap: "pretty" }}>Começou com uma necessidade real.</h2>
              <p style={{ margin: "0", maxWidth: "38ch", color: "var(--muted)", fontSize: "15px", lineHeight: "1.7", textWrap: "pretty" }}>A resposta foi construída a partir do problema, não de uma tendência. Uma advogada que perdia cliente por falta de tempo de responder, e um engenheiro que transformou isso em produto.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px", borderTop: "1px solid var(--line)", paddingTop: "20px" }}>
                <p style={{ margin: "0", fontSize: "14px", color: "var(--ink)" }}><strong style={{ fontWeight: "700" }}>Eduarda F. da S. Machado</strong> — advocacia e operação. Usa o sistema todo dia no próprio escritório.</p>
                <p style={{ margin: "0", fontSize: "14px", color: "var(--ink)" }}><strong style={{ fontWeight: "700" }}>Marcos F. Tamoyo Freire</strong> — engenharia e produto. Escreveu o código que já está rodando.</p>
              </div>
            </div>
            <div style={{ flex: "1 1 460px", minWidth: "min(100%,300px)", display: "flex", flexDirection: "column" }}>
              <article style={{ borderTop: "1px solid var(--line)", padding: "clamp(22px,2.6vw,34px) 0", display: "grid", gridTemplateColumns: "64px 1fr", gap: "14px" }}>
                <span style={{ fontSize: "clamp(28px,3.4vw,44px)", fontWeight: "800", lineHeight: "0.9", color: "transparent", WebkitTextStroke: "1.4px var(--accent)" }}>01</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><h3 style={{ margin: "0", fontSize: "clamp(18px,1.6vw,23px)", fontWeight: "700", color: "var(--ink)", letterSpacing: "-0.02em" }}>A necessidade</h3><p style={{ margin: "0", color: "var(--muted)", fontSize: "14.5px", lineHeight: "1.65", maxWidth: "48ch", textWrap: "pretty" }}>Cliente real, demanda real, sem resposta por pura correria. A conta do que se perde entre a primeira mensagem e o contrato nunca tinha sido feita.</p></div>
              </article>
              <article style={{ borderTop: "1px solid var(--line)", padding: "clamp(22px,2.6vw,34px) 0", display: "grid", gridTemplateColumns: "64px 1fr", gap: "14px" }}>
                <span style={{ fontSize: "clamp(28px,3.4vw,44px)", fontWeight: "800", lineHeight: "0.9", color: "transparent", WebkitTextStroke: "1.4px var(--accent)" }}>02</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><h3 style={{ margin: "0", fontSize: "clamp(18px,1.6vw,23px)", fontWeight: "700", color: "var(--ink)", letterSpacing: "-0.02em" }}>O problema virou produto</h3><p style={{ margin: "0", color: "var(--muted)", fontSize: "14.5px", lineHeight: "1.65", maxWidth: "48ch", textWrap: "pretty" }}>Sem modismo: o que precisava funcionar na prática definiu cada decisão de engenharia — inclusive a de ficar fora da atividade privativa da advocacia.</p></div>
              </article>
              <article style={{ borderTop: "1px solid var(--line)", padding: "clamp(22px,2.6vw,34px) 0", display: "grid", gridTemplateColumns: "64px 1fr", gap: "14px" }}>
                <span style={{ fontSize: "clamp(28px,3.4vw,44px)", fontWeight: "800", lineHeight: "0.9", color: "transparent", WebkitTextStroke: "1.4px var(--accent)" }}>03</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><h3 style={{ margin: "0", fontSize: "clamp(18px,1.6vw,23px)", fontWeight: "700", color: "var(--ink)", letterSpacing: "-0.02em" }}>O uso mostrou o caminho</h3><p style={{ margin: "0", color: "var(--muted)", fontSize: "14.5px", lineHeight: "1.65", maxWidth: "48ch", textWrap: "pretty" }}>O sistema entrou em operação num escritório de verdade. A rotina revelou o que funcionava, o que faltava e o que devia ser cortado.</p></div>
              </article>
              <article style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "clamp(22px,2.6vw,34px) 0", display: "grid", gridTemplateColumns: "64px 1fr", gap: "14px" }}>
                <span style={{ fontSize: "clamp(28px,3.4vw,44px)", fontWeight: "800", lineHeight: "0.9", color: "transparent", WebkitTextStroke: "1.4px var(--accent)" }}>04</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><h3 style={{ margin: "0", fontSize: "clamp(18px,1.6vw,23px)", fontWeight: "700", color: "var(--ink)", letterSpacing: "-0.02em" }}>A casa</h3><p style={{ margin: "0", color: "var(--muted)", fontSize: "14.5px", lineHeight: "1.65", maxWidth: "48ch", textWrap: "pretty" }}>O que começou como um sistema virou o primeiro produto de uma casa de software — com espaço para os próximos, e para outros setores que vendem por WhatsApp.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section id="regras" data-screen-label="Regras" style={{ position: "relative", zIndex: "2", background: "var(--paper2)", padding: "clamp(80px,11vw,150px) clamp(20px,4.5vw,64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "clamp(36px,5vw,80px)", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 320px", minWidth: "min(100%,280px)", display: "flex", flexDirection: "column", gap: "18px" }}>
              <p style={{ margin: "0", fontSize: "11px", fontWeight: "700", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted)" }}>( as regras )</p>
              <h2 style={{ margin: "0", fontWeight: "300", fontSize: "clamp(28px,3.8vw,54px)", lineHeight: "1.06", letterSpacing: "-0.03em", color: "var(--ink)", textWrap: "pretty" }}>Nascido dentro das regras.</h2>
              <p style={{ margin: "0", maxWidth: "38ch", color: "var(--muted)", fontSize: "15px", lineHeight: "1.7", textWrap: "pretty" }}>Conformidade aqui não é página de FAQ — é arquitetura de produto. O comprador jurídico compra software de IA com medo, e tem motivo.</p>
            </div>
            <div style={{ flex: "1 1 480px", minWidth: "min(100%,300px)", display: "flex", flexDirection: "column" }}>
              <div style={{ borderTop: "1px solid var(--line)", padding: "clamp(22px,2.6vw,36px) 0", display: "grid", gridTemplateColumns: "56px 1fr", gap: "14px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--accent)", paddingTop: "4px" }}>001</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ margin: "0", fontSize: "clamp(16px,1.3vw,19px)", fontWeight: "700", color: "var(--ink)" }}>Recomendação OAB nº 001/2024</h3>
                  <p style={{ margin: "0", color: "var(--muted)", fontSize: "14px", lineHeight: "1.65", textWrap: "pretty" }}>Supervisão humana, verificação do que a IA produz e comunicação por escrito ao cliente sobre o uso. O modo assistido é a expressão dessa norma dentro do produto — configuração padrão, não recurso avançado.</p>
                </div>
              </div>
              <div style={{ borderTop: "1px solid var(--line)", padding: "clamp(22px,2.6vw,36px) 0", display: "grid", gridTemplateColumns: "56px 1fr", gap: "14px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--accent)", paddingTop: "4px" }}>002</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ margin: "0", fontSize: "clamp(16px,1.3vw,19px)", fontWeight: "700", color: "var(--ink)" }}>Provimento OAB 205/2021</h3>
                  <p style={{ margin: "0", color: "var(--muted)", fontSize: "14px", lineHeight: "1.65", textWrap: "pretty" }}>Sobriedade e discrição na comunicação do escritório, sem promessa de resultado nem captação indevida. A regra entra embutida no que o produto permite publicar em nome do cliente.</p>
                </div>
              </div>
              <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "clamp(22px,2.6vw,36px) 0", display: "grid", gridTemplateColumns: "56px 1fr", gap: "14px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--accent)", paddingTop: "4px" }}>003</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ margin: "0", fontSize: "clamp(16px,1.3vw,19px)", fontWeight: "700", color: "var(--ink)" }}>LGPD e sigilo profissional</h3>
                  <p style={{ margin: "0", color: "var(--muted)", fontSize: "14px", lineHeight: "1.65", textWrap: "pretty" }}>Base legal, contrato de tratamento com cada fornecedor de IA, controle de acesso por perfil e anonimização antes da chamada do modelo. Dado de cliente de escritório não treina modelo.</p>
                </div>
              </div>
              <p style={{ margin: "clamp(22px,3vw,36px) 0 0", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(18px,1.9vw,25px)", color: "var(--ink)", lineHeight: "1.35" }}>A IA não advoga e não substitui o advogado. Ela cuida do que acontece antes e depois do Direito.</p>
            </div>
          </div>
        </section>

        <section id="planos" data-screen-label="Planos" style={{ position: "relative", zIndex: "2", background: "var(--paper)", padding: "clamp(80px,11vw,150px) clamp(20px,4.5vw,64px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(28px,4vw,48px)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-end", justifyContent: "space-between" }}>
              <div style={{ flex: "1 1 440px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
                <p style={{ margin: "0", fontSize: "11px", fontWeight: "700", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted)" }}>( planos )</p>
                <h2 style={{ margin: "0", fontWeight: "300", fontSize: "clamp(28px,3.8vw,54px)", lineHeight: "1.06", letterSpacing: "-0.03em", color: "var(--ink)" }}>Tabela de lançamento.</h2>
              </div>
              <p style={{ flex: "0 1 380px", minWidth: "260px", margin: "0", color: "var(--muted)", fontSize: "14.5px", lineHeight: "1.65" }}>Assinatura mensal do Ecos CRM, com franquia de conversas por plano. A implantação é cobrada à parte, conforme o escritório. Sem fidelidade.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,270px),1fr))", gap: "14px", alignItems: "start" }}>
              <article style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: "22px", padding: "clamp(24px,2.6vw,34px)", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <p style={{ margin: "0", fontSize: "11px", fontWeight: "800", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)" }}>Base</p>
                  <p style={{ margin: "0", fontSize: "clamp(30px,3vw,40px)", fontWeight: "800", letterSpacing: "-0.03em", color: "var(--ink)" }}>R$ 297<span style={{ fontSize: "0.38em", fontWeight: "600", color: "var(--muted)" }}>/mês</span></p>
                  <p style={{ margin: "0", fontSize: "13.5px", color: "var(--muted)", lineHeight: "1.55" }}>Para o escritório que quer parar de perder mensagem.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px", borderTop: "1px solid var(--line)", paddingTop: "16px" }}>
                  <p style={{ margin: "0", fontSize: "13.5px", color: "var(--ink)", lineHeight: "1.5" }}>Um número de WhatsApp atendido pelo agente</p>
                  <p style={{ margin: "0", fontSize: "13.5px", color: "var(--ink)", lineHeight: "1.5" }}>Qualificação DIUAD com justificativa escrita</p>
                  <p style={{ margin: "0", fontSize: "13.5px", color: "var(--ink)", lineHeight: "1.5" }}>Pipeline e painel de conversão</p>
                  <p style={{ margin: "0", fontSize: "13.5px", color: "var(--ink)", lineHeight: "1.5" }}>Aplicativo Android e iPhone</p>
                </div>
                <a href="#workshop" style={{ marginTop: "auto", textAlign: "center", border: "1px solid var(--ink)", color: "var(--ink)", borderRadius: "999px", padding: "13px 22px", fontSize: "13.5px", fontWeight: "700", transition: "background 0.3s, color 0.3s" }} className="hv-7">Quero este</a>
              </article>

              <article style={{ background: "var(--pine)", color: "var(--bone)", border: "1px solid var(--pine)", borderRadius: "22px", padding: "clamp(24px,2.6vw,34px)", display: "flex", flexDirection: "column", gap: "18px", boxShadow: "0 30px 60px -40px rgba(12,42,32,0.8)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <p style={{ margin: "0", display: "flex", alignItems: "center", gap: "9px", flexWrap: "wrap", fontSize: "11px", fontWeight: "800", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--amber)" }}>Operação<span style={{ background: "var(--accent)", color: "#F6F2E8", borderRadius: "999px", padding: "3px 9px", fontSize: "9.5px", letterSpacing: "0.1em" }}>MAIS ESCOLHIDO</span></p>
                  <p style={{ margin: "0", fontSize: "clamp(30px,3vw,40px)", fontWeight: "800", letterSpacing: "-0.03em", color: "#F1EEE0" }}>R$ 597<span style={{ fontSize: "0.38em", fontWeight: "600", color: "#A8B2A6" }}>/mês</span></p>
                  <p style={{ margin: "0", fontSize: "13.5px", color: "#A8B2A6", lineHeight: "1.55" }}>Para o escritório com mais de uma pessoa no atendimento.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px", borderTop: "1px solid rgba(228,225,206,0.16)", paddingTop: "16px" }}>
                  <p style={{ margin: "0", fontSize: "13.5px", color: "#E4E1CE", lineHeight: "1.5" }}>Tudo do plano Base</p>
                  <p style={{ margin: "0", fontSize: "13.5px", color: "#E4E1CE", lineHeight: "1.5" }}>Follow-up e recuperação de lead frio</p>
                  <p style={{ margin: "0", fontSize: "13.5px", color: "#E4E1CE", lineHeight: "1.5" }}>Agenda, cobrança e assinatura integradas</p>
                  <p style={{ margin: "0", fontSize: "13.5px", color: "#E4E1CE", lineHeight: "1.5" }}>Quatro perfis de acesso e modo assistido por equipe</p>
                </div>
                <a href="#workshop" style={{ marginTop: "auto", textAlign: "center", background: "#E7E3D3", color: "#0F1A15", borderRadius: "999px", padding: "13px 22px", fontSize: "13.5px", fontWeight: "700", transition: "background 0.3s" }} className="hv-8">Quero este</a>
              </article>

              <article style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: "22px", padding: "clamp(24px,2.6vw,34px)", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <p style={{ margin: "0", fontSize: "11px", fontWeight: "800", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)" }}>Escala</p>
                  <p style={{ margin: "0", fontSize: "clamp(30px,3vw,40px)", fontWeight: "800", letterSpacing: "-0.03em", color: "var(--ink)" }}>R$ 1.197<span style={{ fontSize: "0.38em", fontWeight: "600", color: "var(--muted)" }}>/mês</span></p>
                  <p style={{ margin: "0", fontSize: "13.5px", color: "var(--muted)", lineHeight: "1.55" }}>Para quem tem área comercial e exige prazo de resposta.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px", borderTop: "1px solid var(--line)", paddingTop: "16px" }}>
                  <p style={{ margin: "0", fontSize: "13.5px", color: "var(--ink)", lineHeight: "1.5" }}>Tudo da Operação</p>
                  <p style={{ margin: "0", fontSize: "13.5px", color: "var(--ink)", lineHeight: "1.5" }}>Fluxos configurados por área de atuação</p>
                  <p style={{ margin: "0", fontSize: "13.5px", color: "var(--ink)", lineHeight: "1.5" }}>Base de conhecimento com busca semântica</p>
                  <p style={{ margin: "0", fontSize: "13.5px", color: "var(--ink)", lineHeight: "1.5" }}>Canal direto com quem construiu, com prazo declarado</p>
                </div>
                <a href="#workshop" style={{ marginTop: "auto", textAlign: "center", border: "1px solid var(--ink)", color: "var(--ink)", borderRadius: "999px", padding: "13px 22px", fontSize: "13.5px", fontWeight: "700", transition: "background 0.3s, color 0.3s" }} className="hv-7">Quero este</a>
              </article>
            </div>

            <div style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: "22px", padding: "clamp(22px,2.6vw,34px)", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ flex: "1 1 340px", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
                <p style={{ margin: "0", fontSize: "11px", fontWeight: "800", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent)" }}>Add-on · acompanhamento processual</p>
                <p style={{ margin: "0", fontSize: "15px", color: "var(--ink)", lineHeight: "1.6", maxWidth: "52ch", textWrap: "pretty" }}>Monitoramento, painel de movimentação e alerta de prazo, entregues ao escritório. Contratado junto de qualquer plano.</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <div style={{ border: "1px solid var(--line)", borderRadius: "14px", padding: "12px 18px", display: "flex", flexDirection: "column", gap: "2px" }}><span style={{ fontSize: "18px", fontWeight: "800", color: "var(--ink)" }}>R$ 197</span><span style={{ fontSize: "11.5px", color: "var(--muted)" }}>até 150 processos</span></div>
                <div style={{ border: "1px solid var(--line)", borderRadius: "14px", padding: "12px 18px", display: "flex", flexDirection: "column", gap: "2px" }}><span style={{ fontSize: "18px", fontWeight: "800", color: "var(--ink)" }}>R$ 397</span><span style={{ fontSize: "11.5px", color: "var(--muted)" }}>até 500 processos</span></div>
                <div style={{ border: "1px solid var(--line)", borderRadius: "14px", padding: "12px 18px", display: "flex", flexDirection: "column", gap: "2px" }}><span style={{ fontSize: "18px", fontWeight: "800", color: "var(--ink)" }}>R$ 697</span><span style={{ fontSize: "11.5px", color: "var(--muted)" }}>até 1.500 processos</span></div>
              </div>
            </div>
            <p style={{ margin: "0", fontSize: "12px", color: "var(--muted)" }}>Valores da tabela de lançamento, apresentada no workshop. Implantação orçada à parte conforme o escopo do escritório.</p>
          </div>
        </section>

        <Capacidades />

        <section id="workshop" data-screen-label="Workshop" style={{ position: "relative", zIndex: "2", background: "var(--pine)", padding: "clamp(80px,11vw,150px) clamp(20px,4.5vw,64px)" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "clamp(32px,5vw,64px)", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 340px", minWidth: "min(100%,280px)", display: "flex", flexDirection: "column", gap: "20px" }}>
              <p style={{ margin: "0", fontSize: "11px", fontWeight: "700", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--amber)" }}>( workshop de lançamento )</p>
              <h2 style={{ margin: "0", fontWeight: "300", fontSize: "clamp(28px,3.8vw,52px)", lineHeight: "1.06", letterSpacing: "-0.03em", color: "#F1EEE0", textWrap: "pretty" }}>O sistema ao vivo, com quem construiu.</h2>
              <p style={{ margin: "0", maxWidth: "44ch", color: "#BFC7BC", fontSize: "15px", lineHeight: "1.7", textWrap: "pretty" }}>Uma sessão fechada: o Ecos CRM rodando de verdade, a tabela na tela e condição de lançamento só para quem estiver na sala. Sem gravação e sem lista de espera infinita.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", borderTop: "1px solid rgba(228,225,206,0.16)", paddingTop: "20px" }}>
                <p style={{ margin: "0", fontSize: "13.5px", color: "#A8B2A6", lineHeight: "1.6" }}>Três perguntas no formulário. É o que precisamos para saber se o produto serve para você antes de qualquer conversa.</p>
              </div>
            </div>

            <div style={{ flex: "1 1 400px", minWidth: "min(100%,290px)", background: "var(--paper)", borderRadius: "24px", padding: "clamp(24px,3vw,40px)" }}>
              <FormularioWorkshop />
            </div>
          </div>
        </section>
      </main>
      <MotorDaAbertura />
    </Moldura>
  );
}
