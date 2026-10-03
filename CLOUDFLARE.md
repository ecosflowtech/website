# Publicação na Cloudflare

O website usa Workers Static Assets e uma função para `POST /api/workshop`.
As inscrições ficam no banco D1 `ecosflow-workshop`, binding `WORKSHOP_DB`.
Consultar inscrições: Cloudflare > Storage & databases > D1 > ecosflow-workshop > Explore Data.
Não há envio automático de convites por e-mail.

## GitHub Builds

- Repositório: `ecosflowtech/website`, branch `main`.
- Nome do Worker: `ecosflow`.
- Build: `pnpm run build:cloudflare`.
- Deploy: `pnpm exec wrangler deploy`.
- O plano gratuito tem limites de uso; nenhum upgrade é necessário para esta configuração.

O build cria `.cloudflare-build/out` a partir das páginas públicas. Não copia
`.env.local` nem usa o PostgreSQL local. A API Next/PostgreSQL continua disponível
para a instalação convencional com `pnpm build`.

CRM e Academy ainda dependem de publicação própria. Os endereços públicos
`CRM_URL`, `ACADEMY_URL` e a opção `CADASTRO_ABERTO` são lidos durante o build
estático; após configurar esses destinos é necessário gerar e publicar novamente.
Enquanto não configurados, as páginas indicam a preparação do acesso.

## Verificação local

1. `pnpm run build:cloudflare`
2. `pnpm exec wrangler dev --local --port 8787`
3. Abrir `http://localhost:8787` e enviar uma inscrição de teste.
4. Conferir com `pnpm exec wrangler d1 execute ecosflow-workshop --local --command "SELECT * FROM inscricoes_workshop"`.

O banco local é separado do remoto. Nunca publicar `.env.local`, `.wrangler`
ou registros de inscritos no GitHub.
