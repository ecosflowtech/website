# website

Site da Ecosflow. Next.js 16, React 19 e TypeScript, no mesmo padrão do
`operation-crm`. Convertido em 21/09/2026 do export do design, que continua em
`design/Ecosflow.dc.html` como referência.

## Páginas

| Rota | O que faz |
|---|---|
| `/` | A página do design, com a abertura animada, a demonstração do agente, as abas de visão e o formulário do workshop |
| `/entrar` | Acesso ao Ecos CRM. "Entrar" leva ao `/login` do CRM; "Criar conta" fica em "em breve" até `CADASTRO_ABERTO=true`, e então leva ao `/register` do CRM, onde o escritório escolhe o plano e paga |
| `/academy` | Item "Academy" do menu. Com `ACADEMY_URL`, redireciona para a Academy; sem ela, mostra que a área está em preparação |
| `/api/workshop` | Grava a inscrição do workshop na tabela `inscricoes_workshop`. Sem `DATABASE_URL`, responde que as inscrições não estão abertas, em vez de fingir que gravou |

As variáveis estão em `.env.example`. Todas são lidas na hora do pedido, então a
mesma build serve em qualquer ambiente.

## Comandos

```bash
pnpm install
pnpm dev        # http://localhost:3200
pnpm lint
pnpm typecheck
pnpm build
```

## O design

A conversão foi feita uma vez: a marcação e os estilos inline do design viraram
JSX, e os estados de passar o mouse viraram as classes `hv-*` e `fc-*` de
`src/app/globals.css`. Mudança nova feita na ferramenta de design precisa ser
trazida à mão para os componentes.

## Antes de ir ao ar

- Domínio: `ecosflow.com.br` não resolveu na consulta DNS de 24/09/2026. Isso
  não informa se o domínio já foi registrado.
- Banco das inscrições: um banco próprio no Postgres da VPS, em `DATABASE_URL`.
- Publicação na VPS, em `/root/legaltech/website`, com `output: "standalone"`.
- Repositório git: a pasta ainda não é um.

O website faz parte do ecossistema descrito em [../README.md](../README.md).
Estado da VPS e medições: [../infra/README.md](../infra/README.md).
