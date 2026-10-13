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

/** Cadastro de escritório novo pelo site, ligado no lançamento. */
export function cadastroAberto() {
  return process.env.CADASTRO_ABERTO === "true";
}

/**
 * Onde o escritório novo cria a conta: o /register do CRM, com o cadastro
 * aberto. Fechado, ou sem o endereço do CRM, os botões levam a /entrar, que
 * explica o estado.
 */
export function enderecoDoCadastro() {
  const crm = enderecoDoCrm();
  return crm && cadastroAberto() ? `${crm}/register` : null;
}
