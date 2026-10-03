"use client";

import { useState, type FormEvent } from "react";

const rotulo = { fontSize: "11px", fontWeight: "800", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" } as const;
const campo = { width: "100%", boxSizing: "border-box", border: "1px solid var(--line)", background: "var(--card)", borderRadius: "12px", padding: "13px 15px", fontSize: "14.5px", color: "var(--ink)" } as const;
const campoComTransicao = { ...campo, transition: "border-color 0.25s, box-shadow 0.25s" } as const;
const grupo = { display: "flex", flexDirection: "column", gap: "7px" } as const;

type Estado = { tipo: "preenchendo" } | { tipo: "enviando" } | { tipo: "enviado" } | { tipo: "erro"; mensagem: string };

/** Inscrição na lista do workshop. Só mostra "registrada" depois que o servidor gravou. */
export function FormularioWorkshop() {
  const [estado, setEstado] = useState<Estado>({ tipo: "preenchendo" });

  async function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const form = evento.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setEstado({ tipo: "enviando" });
    const dados = Object.fromEntries(new FormData(form));
    try {
      const resposta = await fetch("/api/workshop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      if (resposta.ok) {
        setEstado({ tipo: "enviado" });
        return;
      }
      const corpo = (await resposta.json().catch(() => null)) as { erro?: string } | null;
      setEstado({ tipo: "erro", mensagem: corpo?.erro ?? "Não conseguimos registrar agora. Tente de novo em alguns minutos." });
    } catch {
      setEstado({ tipo: "erro", mensagem: "Sem conexão com o servidor. Confira a internet e tente de novo." });
    }
  }

  if (estado.tipo === "enviado") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "20px 0", animation: "revealUp 0.6s cubic-bezier(0.19,0.7,0.16,1) both" }}>
        <span aria-hidden="true" style={{ width: "54px", height: "54px", borderRadius: "50%", background: "var(--pine)", color: "var(--paper)", display: "grid", placeItems: "center", fontSize: "22px" }}>✓</span>
        <h3 style={{ margin: "0", fontSize: "23px", fontWeight: "700", color: "var(--ink)", letterSpacing: "-0.02em" }}>Inscrição registrada.</h3>
        <p style={{ margin: "0", color: "var(--muted)", fontSize: "15px", lineHeight: "1.65", textWrap: "pretty" }}>Seu interesse ficou registrado. Quando a programação estiver definida, usaremos o contato informado para enviar os detalhes do workshop.</p>
      </div>
    );
  }

  const enviando = estado.tipo === "enviando";

  return (
    <form onSubmit={enviar} noValidate style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={grupo}>
        <label htmlFor="wsNome" style={rotulo}>Nome e escritório</label>
        <input id="wsNome" name="nome" type="text" required maxLength={160} placeholder="Eduarda · Machado Advocacia" style={campoComTransicao} className="fc-1" />
      </div>
      <div style={grupo}>
        <label htmlFor="wsEmail" style={rotulo}>E-mail ou WhatsApp</label>
        <input id="wsEmail" name="contato" type="text" required maxLength={200} placeholder="voce@escritorio.adv.br" style={campoComTransicao} className="fc-1" />
      </div>
      <div style={grupo}>
        <label htmlFor="wsQuem" style={rotulo}>Quem responde o WhatsApp do escritório hoje?</label>
        <select id="wsQuem" name="quem" required style={campo} className="fc-1">
          <option value="eu">Eu mesmo, sócio ou sócia</option>
          <option value="secretaria">Secretária ou recepção</option>
          <option value="estagiario">Estagiário</option>
          <option value="associado">Advogado associado</option>
          <option value="comercial">Time comercial dedicado</option>
        </select>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,140px),1fr))", gap: "12px" }}>
        <div style={grupo}>
          <label htmlFor="wsPessoas" style={rotulo}>Pessoas no escritório</label>
          <input id="wsPessoas" name="pessoas" type="number" min="1" required placeholder="6" style={campo} className="fc-1" />
        </div>
        <div style={grupo}>
          <label htmlFor="wsProcessos" style={rotulo}>Processos ativos</label>
          <input id="wsProcessos" name="processos" type="number" min="0" required placeholder="180" style={campo} className="fc-1" />
        </div>
      </div>
      {/* Campo escondido de pessoas: robô de formulário preenche, gente não vê. */}
      <input name="site" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: "0" }} />
      {estado.tipo === "erro" ? (
        <p role="alert" style={{ margin: "0", fontSize: "13.5px", color: "var(--accent)", lineHeight: "1.55" }}>{estado.mensagem}</p>
      ) : null}
      <button type="submit" disabled={enviando} style={{ marginTop: "4px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "12px", background: "var(--accent)", color: "#F6F2E8", border: "none", cursor: enviando ? "wait" : "pointer", opacity: enviando ? "0.7" : "1", borderRadius: "999px", padding: "15px 24px", fontSize: "14.5px", fontWeight: "700", transition: "background 0.3s, gap 0.35s cubic-bezier(0.22,1,0.36,1)" }} className="hv-9">{enviando ? "Registrando…" : "Entrar na lista do workshop"}<span aria-hidden="true">→</span></button>
      <p style={{ margin: "0", fontSize: "11.5px", color: "var(--muted)", lineHeight: "1.6" }}>Os dados informados serão usados para organizar o workshop e enviar informações sobre a participação.</p>
    </form>
  );
}
