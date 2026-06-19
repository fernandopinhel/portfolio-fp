# Fernando Pinhel — Portfólio Profissional

[![Status](https://img.shields.io/badge/Status-Produção-success)](#)
[![WCAG](https://img.shields.io/badge/Acessibilidade-WCAG%202.1%20AA-blue)](#acessibilidade)
[![LGPD](https://img.shields.io/badge/Compliance-LGPD%20%2F%20GRC-blueviolet)](#segurança-e-lgpd)
[![Stack](https://img.shields.io/badge/Stack-React%2018%20%2B%20Vite%205-61dafb)](#stack)

Portfólio end-to-end de Fernando Pinhel, Product Designer com +10 anos de experiência em UX/UI e Front-end. O projeto vai do design ao código, cobrindo pesquisa de usuário, prototipagem, acessibilidade, segurança e conformidade com a LGPD.

**[fernandopinhel.com.br](https://fernandopinhel.com.br/)**

---

## Índice

- [Stack](#stack)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Configuração local](#configuração-local)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Scripts disponíveis](#scripts-disponíveis)
- [Arquitetura da aplicação](#arquitetura-da-aplicação)
- [Funcionalidades](#funcionalidades)
- [Acessibilidade](#acessibilidade)
- [SEO](#seo)
- [Segurança e LGPD](#segurança-e-lgpd)
- [Deploy](#deploy)

---

## Stack

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| Framework UI | React | 18.2 |
| Build tool | Vite | 5.4 |
| Estilização | CSS Custom Properties + inline styles | — |
| Tipografia | DM Mono (corpo) + Syne (display) via Google Fonts | — |
| Backend (formulário) | Node.js + Express | — |
| E-mail | Nodemailer + SMTP HostGator | — |
| Fallback e-mail | Formcarry | — |
| Segurança API | Helmet + express-rate-limit + CORS | — |
| Analytics | Google Tag Manager + GA4 + Hotjar (consent-first) | — |
| Deploy | Apache (HostGator) + Vite SPA | — |

---

## Estrutura do projeto

```
portfolio-fp/
│
├── api/                        # Servidor Node.js (backend do formulário)
│   ├── contact.js              # POST /api/contact — validação, SMTP, rate limit
│   ├── package.json            # Dependências isoladas do backend
│   └── .env                    # Credenciais SMTP (não versionado)
│
├── public/                     # Assets estáticos servidos diretamente
│   ├── images/
│   │   └── cases/              # Imagens locais dos cases (por pasta de projeto)
│   │       ├── dashboard/
│   │       ├── paparazzo-rrn/
│   │       ├── aqui-emprestimo/
│   │       ├── ans/
│   │       ├── painel-aditivo/
│   │       ├── generali/
│   │       ├── sites/
│   │       └── branding/
│   ├── videos/                 # Vídeos MP4 dos cases
│   │   ├── bradesco/
│   │   └── generali/
│   ├── robots.txt              # Indexação + referência ao sitemap
│   ├── sitemap.xml             # URLs canônicas para crawlers
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── UI.jsx              # Biblioteca interna: Pill, BtnPrimary, BtnOutline,
│   │   │                       #   GithubIcon, GridBg, Glow, VideoEmbed, ContactForm
│   │   ├── Nav.jsx             # Navbar fixa + MobileMenu (dialog com focus trap)
│   │   ├── ProjectCard.jsx     # Card de projeto com hover, teclado e ARIA
│   │   ├── CookieBanner.jsx    # Banner LGPD com aceite/recusa de cookies
│   │   └── ErrorBoundary.jsx   # Captura erros de render; exibe tela amigável
│   │
│   ├── pages/
│   │   ├── PortfolioPage.jsx   # Página principal: Hero, Sobre, Skills, Cases,
│   │   │                       #   Artigos, Contato
│   │   ├── CasePage.jsx        # Case study completo: hero, overview, metodologia,
│   │   │                       #   KPIs, vídeo, seções, resultados
│   │   └── PrivacyPage.jsx     # Política de Privacidade (LGPD)
│   │
│   ├── hooks/
│   │   ├── useCookieConsent.js # Gerencia consentimento LGPD; inicializa GTM/Hotjar
│   │   │                       #   dinamicamente apenas após aceite
│   │   └── useMediaQuery.js    # Detecção de breakpoints (mobile/tablet)
│   │
│   ├── data/
│   │   └── index.js            # Fonte única de dados: NAV_LINKS, SKILLS, TRAJECTORY,
│   │                           #   ARTICLES, PROJECTS (8 cases completos)
│   │
│   ├── styles/
│   │   └── global.css          # Tokens de design, reset, animações, responsivo,
│   │                           #   focus-visible, prefers-reduced-motion
│   │
│   ├── App.jsx                 # Root: estado global, roteamento por History API,
│   │                           #   cursor customizado, cookie banner, footer
│   └── main.jsx                # Entry point React DOM
│
├── index.html                  # HTML base: SEO, Open Graph, JSON-LD, GTM Consent
│                               #   Mode v2 (dataLayer sem coleta por padrão)
├── vite.config.js              # Aliases de path, proxy /api → localhost:3001,
│                               #   code splitting (vendor chunk)
├── jsconfig.json               # Paths aliases + suporte JSX
├── .htaccess                   # Apache: HTTPS redirect, SPA fallback, CSP, cache
└── .env.local                  # Variáveis de ambiente do frontend (não versionado)
```

---

## Configuração local

### Pré-requisitos

- Node.js 18+
- npm 9+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/fernandopinhel/portfolio-fp.git
cd portfolio-fp

# Instale as dependências do frontend
npm install

# Instale as dependências do backend
cd api && npm install && cd ..
```

### Variáveis de ambiente

Crie dois arquivos antes de rodar:

**`.env.local`** (raiz do projeto — frontend):

```env
VITE_WHATSAPP_NUMBER=55219XXXXXXXX
VITE_FIGMA_DASHBOARD=https://www.figma.com/proto/...
VITE_FIGMA_STORYTELLING=https://www.figma.com/proto/...
```

**`api/.env`** (backend — formulário de contato):

```env
SMTP_HOST=mail.seudominio.com.br
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=contato@seudominio.com.br
SMTP_PASS=sua_senha_smtp
SMTP_TO=destinatario@email.com      # opcional; padrão: SMTP_USER
PORT=3001
```

> Nenhum desses arquivos é versionado. Não adicione credenciais ao repositório.

### Rodando em desenvolvimento

```bash
# Inicia frontend (porta 5173) + backend (porta 3001) simultaneamente
npm run dev
```

O Vite faz proxy automático de `/api/*` → `http://localhost:3001`, então o formulário de contato funciona em dev sem configuração adicional.

---

## Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Frontend + backend em paralelo (recomendado) |
| `npm run dev:front` | Apenas o Vite (frontend) |
| `npm run dev:api` | Apenas o servidor Node (backend) |
| `npm run build` | Build de produção em `/dist` |
| `npm run preview` | Preview do build de produção |
| `npm run lint` | ESLint com zero warnings permitidos |

---

## Arquitetura da aplicação

### Roteamento por History API

O projeto não usa React Router. A navegação é gerenciada pelo `App.jsx` via `window.history.pushState`:

| View | URL | Estado React |
|------|-----|-------------|
| Portfólio | `/` | `currentCase = null` |
| Case study | `/case/{id}` | `currentCase = "{id}"` |
| Privacidade | `/politica-de-privacidade` | `showPrivacy = true` |

O evento `popstate` restaura o estado ao usar os botões Voltar/Avançar do browser. O `.htaccess` tem SPA fallback para que qualquer URL sirva `index.html`.

### Formulário de contato

Fluxo de envio com duplo fallback:

```
1. POST /api/contact (Node.js + Nodemailer + SMTP HostGator)
        ↓ falha de rede?
2. POST Formcarry (serviço externo como backup)
        ↓ falha?
3. Mensagem de erro com e-mail direto ao usuário
```

O backend envia dois e-mails por submissão: um para Fernando (com `replyTo` do visitante) e uma confirmação para quem enviou.

### Rastreamento (consent-first)

```
index.html  →  dataLayer = []  →  consent_default (tudo negado)
                    ↓
           CookieBanner (primeira visita)
                    ↓
    Aceite → useCookieConsent → window.initGTM() → GTM carregado
                                                  → Hotjar inicializado
    Recusa → nenhum script de analytics é carregado
```

GA4, Hotjar e GTM só são inicializados após consentimento explícito. O `dataLayer` é criado vazio no HTML para que o Consent Mode v2 do Google funcione corretamente.

### Design tokens (CSS Custom Properties)

```css
--ac:          #C8FF00              /* accent — lima/neon */
--fg:          #EDE9E3              /* foreground — creme claro */
--bg:          #070707              /* background — preto */
--dim:         rgba(237,233,227,.88)/* texto secundário */
--dimmer:      rgba(237,233,227,.16)/* elementos puramente decorativos */
--bd:          rgba(237,233,227,.07)/* bordas */
--bdh:         rgba(237,233,227,.18)/* bordas em hover */
--font-mono:   'DM Mono', monospace
--font-display:'Syne', sans-serif
--max-w:       1160px
```

---

## Funcionalidades

- **8 cases documentados** com hero, overview, metodologia, KPIs, vídeo, seções com imagens e resultados
- **Cursor customizado** animado (desktop apenas)
- **Marquee de skills** com animação contínua
- **Formulário de contato** com validação client-side, estados idle/sending/success/error, LGPD opt-in obrigatório
- **Modo mobile** com menu overlay como `role="dialog"` com focus trap completo
- **Error Boundary** React que previne tela em branco em produção

---

## Acessibilidade

O projeto atende **WCAG 2.1 nível AA**. Principais implementações:

| Critério | Implementação |
|----------|--------------|
| 1.1.1 Conteúdo não-textual | `alt` em todas as imagens; `aria-hidden` em elementos decorativos (`//`, dots, marquee) |
| 1.4.3 Contraste | Textos em `--dim` (~13:1 contra `#070707`); labels de formulário e footer revisados |
| 2.1.1 Teclado | `Enter` e `Space` ativam ProjectCard; todos os elementos interativos são acessíveis por teclado |
| 2.1.2 Sem armadilha de teclado | MobileMenu tem focus trap que mantém Tab/Shift+Tab dentro do diálogo; `Escape` fecha |
| 2.2.2 Pausar, parar, ocultar | `@media (prefers-reduced-motion: reduce)` desativa marquee e todas as animações |
| 2.4.1 Ignorar blocos | Link "Ir para o conteúdo" visível ao receber foco por teclado (skip navigation) |
| 2.4.3 Ordem de foco | Foco move para `#page-content` ao trocar de view (case, privacidade) |
| 2.4.7 Foco visível | `outline: 2px solid var(--ac)` em `a`, `button` e `[role="button"]` via `:focus-visible` |
| 3.2.2 Ao receber entrada | MobileMenu move foco automaticamente para o botão fechar ao abrir |
| 4.1.2 Nome, função, valor | `aria-expanded`, `aria-controls`, `aria-modal`, `role="dialog"` no menu mobile |
| 4.1.3 Mensagens de status | Sucesso do formulário com `role="status"` + `aria-live="polite"`; erro com `role="alert"` |

---

## SEO

- **JSON-LD** (`schema.org/Person`) no `<head>` para rich snippets no Google
- **Open Graph** e **Twitter Card** completos
- **`robots.txt`** com referência ao sitemap
- **`sitemap.xml`** com URLs canônicas
- `lang="pt-BR"` no `<html>`
- Título do documento atualizado dinamicamente por view (`useEffect` em `App.jsx`)
- `loading="lazy"` em todas as imagens de cases e artigos
- Code splitting: chunk `vendor` (React) separado do bundle da aplicação

---

## Segurança e LGPD

### Headers HTTP (`.htaccess`)

```
X-XSS-Protection: 1; mode=block
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
Content-Security-Policy: [política restrita com allowlist explícita]
```

### Backend (`api/contact.js`)

- **Helmet**: headers de segurança automáticos no Express
- **Rate limiting**: 5 requisições por IP a cada 15 minutos (`express-rate-limit`)
- **CORS**: allowlist explícita de origens (produção + localhost)
- **Sanitização**: strip de `<>`, limite de 2000 caracteres por campo, validação de e-mail por regex
- **Body limit**: `16kb` máximo por requisição

### LGPD (Lei 13.709/2018)

- **Consent Mode v2** do Google: coleta negada por padrão até aceite explícito
- **CookieBanner** obrigatório na primeira visita com opção de aceitar ou recusar
- **Opt-in no formulário**: checkbox LGPD obrigatório antes do envio (Art. 5º, XII)
- **Política de Privacidade** acessível em um clique no footer
- **Revisão de preferências**: botão de cookies no footer permite rever a decisão a qualquer momento
- Segredos (chaves Figma, número WhatsApp) isolados em `.env` e nunca expostos no repositório

---

## Deploy

O projeto é hospedado na **HostGator** com Apache.

### Build e envio

```bash
npm run build       # gera /dist
# envie /dist para public_html via FTP ou painel
```

### SPA no Apache

O `.htaccess` redireciona todas as rotas desconhecidas para `index.html`, garantindo que as URLs geradas pela History API (`/case/{id}`, `/politica-de-privacidade`) funcionem em produção.

### Backend em produção

O servidor `api/contact.js` precisa rodar como processo Node.js separado no hosting. O Apache faz proxy das requisições `/api/*` via `ProxyPass` (configurado no painel da HostGator).

### Cache de assets

Assets estáticos têm cache de 1 ano via `mod_expires`. O Vite injeta hash no nome dos bundles JS/CSS para cache busting automático.

---

## Contato

- **Site:** [fernandopinhel.com.br](https://fernandopinhel.com.br/)
- **LinkedIn:** [fernando-pinhel-designer](https://www.linkedin.com/in/fernando-pinhel-designer/)
- **GitHub:** [fernandopinhel](https://github.com/fernandopinhel)
- **E-mail:** contato@fernandopinhel.com.br
- **Localização:** Niterói, RJ — disponível para trabalho remoto

---

Fernando Pinhel · Product Designer · 2026
