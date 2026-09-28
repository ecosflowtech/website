import "server-only";

/**
 * Endereços dos outros sistemas da casa, lidos na hora do pedido. Assim a mesma
 * imagem serve em qualquer ambiente, e trocar o domínio é trocar a variável.
 */

function semBarraFinal(valor: string | undefined) {
  const limpo = valor?.trim().replace(/\/+$/, "");
  return limpo ? limpo : null;
}

export function enderecoDoCrm() {
  return semBarraFinal(process.env.CRM_URL);
}

export function enderecoDaAcademy() {
  return semBarraFinal(process.env.ACADEMY_URL);
}

/** Fechado até o lançamento: o cadastro de escritório novo abre depois do workshop. */
export function cadastroAberto() {
  return process.env.CADASTRO_ABERTO === "true";
}
