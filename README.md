# Fernando Pinhel — Product Designer Portfolio

> Portfólio de **Fernando Pinhel**, Product Designer com +10 anos de experiência em UX/UI e Front-end.
> Projetado como um **case vivo de design + código** — da pesquisa ao produto final em produção.

🌐 **Live:** https://fernandopinhel.com.br
💼 **LinkedIn:** https://www.linkedin.com/in/fernando-pinhel-designer
🐙 **GitHub:** https://github.com/fernandopinhel

---

## Stack

| Camada | Tecnologia |
|--------|------------|
| Build | Vite 8 |
| UI | React 18 |
| Tipografia | Syne (display) · DM Mono (mono) |
| Estilo | CSS Variables + inline styles |
| Analytics | Hotjar · Google Analytics GA4 |
| Hospedagem | HostGator (Apache) |
| Domínio/DNS | Hostinger |

---

## Estrutura de pastas

```
portfolio-fp/
├── public/
│   ├── .htaccess               ← Security headers + SPA fallback + HTTPS redirect
│   ├── favicon.svg
│   ├── og-image.png            ← Imagem Open Graph (1200×630px)
│   ├── images/
│   │   └── cases/              ← Imagens locais organizadas por case
│   │       └── nome-do-case/
│   │           ├── hero.png
│   │           ├── thumb.png
│   │           └── img-1.png
│   ├── videos/                 ← Vídeos locais dos cases (.mp4 / .webm)
│   └── index.html              ← HTML limpo — sem scripts de analytics hardcoded
├── src/
│   ├── components/
│   │   ├── CookieBanner.jsx    ← Banner LGPD com aceite/recusa de cookies
│   │   ├── Nav.jsx             ← Navegação desktop + MobileMenu
│   │   ├── ProjectCard.jsx     ← Card de projeto no grid
│   │   └── UI.jsx              ← Pill, BtnPrimary, BtnOutline, ContactForm…
│   ├── data/
│   │   └── index.js            ← ⭐ Conteúdo editável: projetos, artigos, skills
│   ├── hooks/
│   │   ├── useCookieConsent.js ← Gerencia consentimento LGPD + init Hotjar/GA4
│   │   └── useMediaQuery.js
│   ├── pages/
│   │   ├── CasePage.jsx        ← Visualização de case completo
│   │   ├── PortfolioPage.jsx   ← Home com todas as seções
│   │   └── PrivacyPage.jsx     ← Política de Privacidade (LGPD)
│   ├── styles/
│   │   └── global.css          ← Design tokens, reset, animações
│   ├── App.jsx                 ← Root: roteamento Portfolio | Case | Privacy
│   └── main.jsx
├── .env.example                ← Template de variáveis (commitar)
├── .env.local                  ← Valores reais (NÃO commitar — no .gitignore)
├── .gitignore
├── DNS_DMARC_INSTRUCOES.md     ← Guia DNS anti-spoofing (Hostinger)
├── jsconfig.json               ← Path aliases + fix ts(1261) Windows
├── package.json
└── vite.config.js
```

---

## Setup local

```bash
# 1. Clonar o repositório
git clone https://github.com/fernandopinhel/portfolio-fp.git
cd portfolio-fp

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com seus valores reais

# 4. Iniciar em desenvolvimento
npm run dev
# Acesse: http://localhost:5173

# 5. Build de produção
npm run build

# 6. Pré-visualizar o build localmente
npm run preview
```

---

## Variáveis de Ambiente

Dados sensíveis **nunca ficam no repositório**. Crie `.env.local` baseado no `.env.example`:

```env
# Número WhatsApp (código de país + número, sem espaços ou símbolos)
VITE_WHATSAPP_NUMBER=5521999999999

# URLs dos protótipos Figma — file keys não ficam no repo público (auditoria SAST)
VITE_FIGMA_DASHBOARD=https://www.figma.com/proto/SEU_KEY/...
VITE_FIGMA_STORYTELLING=https://www.figma.com/proto/SEU_KEY/...

# Analytics — só inicializam após aceite de cookies (LGPD)
VITE_HOTJAR_ID=0000000
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

> **Por quê variáveis de ambiente?** A auditoria SAST (Denatech/2026) identificou que file keys
> do Figma e dados pessoais expostos no repositório público ativam red flags em auditorias de
> compliance e processos de homologação de fornecedores corporativos.

---

## Editar conteúdo

Todo o conteúdo está centralizado em **`src/data/index.js`**.

### Adicionar ou editar um projeto

```js
{
  id: "nome-do-case",           // slug único
  tag: "UX/UI · Produto",
  title: "Nome do Case",
  description: "Resumo curto para o card",
  accent: "#C8FF00",            // cor de destaque (hex)
  size: "large",                // "large" = largura total | "small" = meia largura
  heroImg: "/images/cases/nome-do-case/hero.png",
  thumbImg: "/images/cases/nome-do-case/thumb.png",
  figmaLink: import.meta.env.VITE_FIGMA_DASHBOARD, // ou null
  externalLink: "https://...",  // ou null
  video: "YouTubeID",           // ID YouTube (11 chars) ou "/videos/file.mp4" ou null
  year: "2025",
  role: "Product Designer",
  client: "Nome do Cliente",
  overview: "Descrição geral...",
  challenge: "Qual era o desafio...",
  problem: "Como poderíamos... (HMW)",
  methodology: "Design Thinking",
  methodologyDesc: "Descrição da metodologia...",
  kpis: [
    { v: "40%", l: "Redução de abandono" },
    { v: "+28", l: "NPS" },
  ],
  sections: [
    {
      title: "Descoberta",
      content: "Texto da seção...",
      imgs: ["/images/cases/nome-do-case/img-1.png"],
    },
  ],
  results: ["Resultado 1", "Resultado 2"],
  impact: "Texto de impacto final...",
}
```

### Vídeos

```js
video: "dQw4w9WgXcQ"          // YouTube — ID de 11 caracteres
video: "/videos/meu-case.mp4" // Local — arquivo em public/videos/
```

---

## Segurança & Conformidade

> Auditorias realizadas pela **Denatech** (abril/2026): GRC/LGPD e SAST Whitebox.

| # | Área | Problema | Correção | Status |
|---|------|----------|----------|--------|
| 1 | DNS | Ausência de DMARC — risco de spoofing | Registro `_dmarc` TXT na Hostinger | 📋 `DNS_DMARC_INSTRUCOES.md` |
| 2 | LGPD | Formulário sem opt-in explícito | Checkbox obrigatório + link Política de Privacidade | ✅ `UI.jsx` |
| 3 | LGPD | Sem Política de Privacidade | Página `/politica-de-privacidade` | ✅ `PrivacyPage.jsx` |
| 4 | LGPD | Analytics rodando sem consentimento | `CookieBanner` + `useCookieConsent` | ✅ `CookieBanner.jsx` |
| 5 | LGPD | Scripts de analytics no HTML | `index.html` limpo — init só após aceite | ✅ `index.html` |
| 6 | Headers | Sem CSP, X-Frame-Options, HSTS | Todos os headers no `.htaccess` | ✅ `public/.htaccess` |
| 7 | Headers | Servidor expondo versão Apache | `ServerSignature Off` + unset `X-Powered-By` | ✅ `public/.htaccess` |
| 8 | SAST | `rel="noreferrer"` sem `noopener` | `rel="noopener noreferrer"` em todos os links | ✅ todos os componentes |
| 9 | SAST | File keys do Figma hardcoded | Movidos para `VITE_FIGMA_*` | ✅ `data/index.js` |
| 10 | SAST | Telefone pessoal hardcoded | Movido para `VITE_WHATSAPP_NUMBER` | ✅ `PortfolioPage.jsx` |
| 11 | SEO | `og:url` apontando para GitHub Pages | Corrigido para `https://fernandopinhel.com.br/` | ✅ `index.html` |

**Legenda:** ✅ Implementado · 📋 Ação manual necessária

---

## Analytics — Classes Hotjar

Só disparam após aceite de cookies. Não interferem no visual.

| Classe | Elemento |
|--------|----------|
| `.hj-hero-section` | Seção hero (scroll depth) |
| `.hj-cta-hero` | Botão "Ver projetos" |
| `.hj-cta-storytelling` | Link Figma / Saiba mais |
| `.hj-projects-section` | Grid de projetos |
| `.hj-project-card` | Card de projeto |
| `.hj-case-open` | Botão abrir case |
| `.hj-case-figma` | Botão Figma no case |
| `.hj-case-external` | Link externo do case |
| `.hj-case-back` | Botão voltar |
| `.hj-articles-section` | Seção artigos |
| `.hj-article-link` | Link de artigo |
| `.hj-contact-section` | Seção contato |
| `.hj-contact-email` | Clique no e-mail |
| `.hj-contact-whatsapp` | Clique no WhatsApp |
| `.hj-contact-form` | Interações no formulário |
| `.hj-contact-submit` | Envio do formulário |
| `.hj-nav-link` | Links da navegação |
| `.hj-nav-logo` | Clique no logo |
| `.hj-mobile-menu-open` | Abertura do menu mobile |
| `.hj-footer-github` | Link GitHub no rodapé |

---

## Deploy

### Build

```bash
npm run build
# Gera o diretório /dist com os arquivos prontos para publicação
```

---

### HostGator (FTP)

1. Abra seu cliente FTP (FileZilla, Cyberduck)
2. Conecte ao servidor com as credenciais do HostGator
3. Navegue até `public_html/`
4. Faça upload de **todo o conteúdo de `/dist`** para `public_html/`
5. Confirme que `.htaccess` foi incluído (ative "mostrar arquivos ocultos" no FileZilla)
6. Acesse `https://fernandopinhel.com.br` e verifique

> ⚠️ No FileZilla: menu **Servidor → Mostrar arquivos e pastas ocultos** para ver o `.htaccess`.

---

### Vercel (recomendado)

```bash
npm i -g vercel   # instalar CLI uma vez
vercel --prod
```

Ou conecte o repositório diretamente: `vercel.com → Add New Project → Import Git Repository`

> ⚠️ No Vercel o `.htaccess` é ignorado. Crie `vercel.json` na raiz:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ],
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

### Netlify

```bash
npm i -g netlify-cli   # instalar CLI uma vez
netlify deploy --prod --dir=dist
```

Ou conecte no painel: `app.netlify.com → Add new site → Import from Git`

> Para headers no Netlify, crie `public/_headers`:

```
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-XSS-Protection: 1; mode=block
```

---

## Configurar DMARC (anti-spoofing de e-mail)

Painel Hostinger → Gerenciamento de domínio → Zona DNS:

| Campo | Valor |
|-------|-------|
| Tipo | TXT |
| Host | `_dmarc` |
| Valor | `v=DMARC1; p=quarantine; rua=mailto:contato@fernandopinhel.com.br; pct=100` |
| TTL | 3600 |

Guia completo: **`DNS_DMARC_INSTRUCOES.md`**

---

## Validar segurança após deploy

```
https://securityheaders.com/?q=https://fernandopinhel.com.br
https://observatory.mozilla.org/analyze/fernandopinhel.com.br
https://mxtoolbox.com/dmarc.aspx
```

Meta: **nota A ou B** no Security Headers.

---

## Checklist pré-deploy

**Conteúdo**
- [ ] `src/data/index.js` atualizado com todos os cases
- [ ] Imagens em `public/images/cases/`
- [ ] `og-image.png` em `public/` (1200×630px)
- [ ] `favicon.svg` em `public/`

**Ambiente**
- [ ] `.env.local` preenchido com todos os valores de produção
- [ ] `.env.local` está no `.gitignore` (nunca commitar)

**Segurança & LGPD**
- [ ] `.htaccess` incluído no upload / `vercel.json` ou `_headers` criado
- [ ] DMARC configurado — validar em `mxtoolbox.com/dmarc.aspx`
- [ ] Banner de cookies aparece na primeira visita (testar em aba anônima)
- [ ] Recusar cookies impede Hotjar/GA4 de carregar (DevTools → Network)
- [ ] Link "Política de Privacidade" visível no rodapé

**SEO & Performance**
- [ ] Testar Open Graph em `https://opengraph.xyz`
- [ ] Testar performance em `https://pagespeed.web.dev`

**Pós-deploy**
- [ ] HTTPS ativo em `https://fernandopinhel.com.br`
- [ ] Validar headers em `securityheaders.com`
- [ ] Navegar pelos cases, Política de Privacidade e banner de cookies
- [ ] Hotjar e GA4 **não carregam** antes do aceite (verificar no DevTools)

---

## Licença

Uso pessoal — todos os direitos reservados © 2026 Fernando Pinhel.