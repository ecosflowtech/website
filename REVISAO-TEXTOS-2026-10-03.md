# Revisão dos textos — 03/10/2026

Escopo: site institucional da Ecosflow, com seção dedicada ao Ecos CRM, seu SaaS.
O site publicado em https://ecosflow.netlify.app/ foi lido no navegador e comparado
com o código local, as decisões do projeto e as fontes externas abaixo.

## Fontes e números

- **77% / 27%:** havia origem, mas o texto mudou o recorte para marketing.
  A [Projuris](https://www.projuris.com.br/blog/tendencias-juridicas-2025/)
  cita pesquisa da LetsMarketing sobre substituição parcial de tarefas jurídicas
  e uso frequente de IA em geral. Não sustenta a redação sobre marketing.
- **77% e 91% na versão revisada:** a [OAB SP, em 26/03/2026](https://oabsp.org.br/noticia/26-03-26-1624-tres-em-cada-quatro-advogados-usam-inteligencia-artificial-no-trabalho),
  informa uso frequente de IA por 77% dos participantes e percepção de melhora
  da qualidade técnica por 91%. A página identifica o recorte e a fonte e não
  atribui esses resultados ao Ecos CRM.
- **90% dos primeiros contatos pelo WhatsApp:** a frase existe no
  [Chat Jurídico](https://chatjuridico.com.br/crm-para-advogados/), mas não foi
  identificada pesquisa, amostra ou metodologia que sustente o percentual.
  Isso não prova que o número seja falso; ele foi substituído pelo dado da OAB.
- **600+ legaltechs:** preservado com atribuição explícita ao
  [Legal Control, 02/06/2026](https://legalcontrol.com.br/legaltech-brasil-2026/),
  que atribui o número à AB2L. É fonte secundária; a consulta ao portal da AB2L
  não confirmou diretamente esse total. A legenda agora contém o link exato.

## Correções de produto e oferta

- Abertura, apresentação e rodapé identificam a Ecosflow como empresa.
- Ecos CRM identificado como SaaS; Academy apresentada como formação em preparação.
- Demonstração e exemplo de retomada identificados como fictícios. A conversa do
  componente é um roteiro estático; não há prova de conversa real autorizada.
- Acesso móvel descrito como acesso pelo navegador. O CRM possui manifesto PWA
  em `../operation-crm/src/lib/pwa.ts`; isso não comprova publicação nas lojas.
- Mantidos os preços R$ 297 / R$ 597 / R$ 1.197, como previstos. Franquias e
  atendentes alinhados a `../operation-crm/src/lib/cadastro/planos.ts`.
- Retirados “mais escolhido”, “sem fidelidade”, prazos de suporte e condição
  exclusiva de workshop sem comprovação. Contratação Asaas ainda em preparação.
- Removida oferta de add-on processual com tabela revogada/inconclusiva nas
  decisões de 11/08. As ideias de produtos futuros deram lugar à Academy.
- Garantias gerais de conformidade, anonimização integral e não treinamento
  de modelos substituídas por recursos verificáveis: modo assistido, perfis de
  acesso e separação de dados. Normas citadas não provam implementação ou contratos.
- Removido o e-mail no domínio ainda não adquirido, conforme contexto do usuário.
- Workshop sem promessa de data, resposta em dois dias, ausência de gravação
  ou desconto exclusivo ainda não confirmados.

## Limites

Esta revisão verifica redação, fontes e correspondência com o projeto. Não é uma
homologação do SaaS, do gateway, das integrações ou do formulário em produção.
