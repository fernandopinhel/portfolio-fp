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
│   │   ├── cases/              # Imagens locais dos cases (por pasta de projeto)
│   │   │   ├── financas-fp/
│   │   │   ├── dashboard/
│   │   │   ├── paparazzo-rrn/
│   │   │   ├── aqui-emprestimo/
│   │   │   ├── ans/
│   │   │   ├── painel-aditivo/
│   │   │   ├── generali/
│   │   │   ├── sites/
│   │   │   └── branding/
│   │   └── profile/            # Foto de perfil exibida no hero
│   ├── videos/                 # Vídeos MP4 dos cases
│   │   ├── bradesco/
│   │   └── generali/
│   ├── robots.txt              # Indexação + referência ao sitemap
│   ├── sitemap.xml             # URLs canônicas para crawlers
│   ├── favicon.svg
│   └── .htaccess                # Apache: HTTPS redirect, SPA fallback, CSP, cache —
│                               #   fica em public/ (não na raiz) para que o Vite
│                               #   copie pro dist/ em todo build automaticamente
│
├── src/
│   ├── components/
│   │   ├── UI.jsx              # Biblioteca interna: Pill, BtnPrimary, BtnOutline,
│   │   │                       #   GithubIcon, GridBg, Glow, ThemeToggle, VideoEmbed,
│   │   │                       #   ContactForm
│   │   ├── Nav.jsx             # Navbar fixa + MobileMenu (dialog com focus trap)
│   │   ├── ProjectCard.jsx     # Card de projeto com hover, teclado e ARIA
│   │   ├── CookieBanner.jsx    # Banner LGPD com aceite/recusa de cookies
│   │   ├── ErrorBoundary.jsx   # Captura erros de render; exibe tela amigável
│   │   ├── VLibras.jsx         # Widget oficial de Libras (vlibras.gov.br)
│   │   └── AccessibilityMenu.jsx # Menu nativo: fonte, contraste, dislexia,
│   │                           #   guia de leitura, sublinhar links, animações
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
│   │   ├── useMediaQuery.js    # Detecção de breakpoints (mobile/tablet)
│   │   ├── useTheme.js         # Tema claro/escuro: data-theme no <html>, persistido
│   │   │                       #   em localStorage, com fallback pro sistema
│   │   └── useA11ySettings.js  # Estado do menu de acessibilidade (data-* em
│   │                           #   #fp-portfolio), persistido em localStorage
│   │
│   ├── utils/
│   │   └── color.js            # accessibleAccent(): escurece a cor de destaque de
│   │                           #   cada case (HSL) até contraste AA no tema claro
│   │
│   ├── data/
│   │   └── index.js            # Fonte única de dados: NAV_LINKS, SKILLS, TRAJECTORY,
│   │                           #   ARTICLES, PROJECTS (9 cases completos)
│   │
│   ├── styles/
│   │   └── global.css          # Tokens de design (dark + light), reset, animações,
│   │                           #   responsivo, focus-visible, prefers-reduced-motion
│   │
│   ├── App.jsx                 # Root: estado global, roteamento por History API,
│   │                           #   tema, cursor customizado, cookie banner, footer
│   └── main.jsx                # Entry point React DOM
│
├── index.html                  # HTML base: SEO, Open Graph, JSON-LD, GTM Consent
│                               #   Mode v2 (dataLayer sem coleta por padrão)
├── vite.config.js              # Aliases de path, proxy /api → localhost:3001,
│                               #   code splitting (vendor chunk)
├── jsconfig.json               # Paths aliases + suporte JSX
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

Cores base ficam em canais RGB (`--fg-rgb`, `--bg-rgb`, `--ac-rgb`) para que qualquer `rgba(var(--x-rgb), alfa)` no código recalcule sozinho ao trocar de tema — só o bloco `:root` (escuro) e `:root[data-theme="light"]` precisam ser mantidos.

```css
--ac:            #C8FF00              /* accent — texto/borda; escurecido no tema claro p/ contraste AA */
--ac-solid:      #C8FF00              /* accent sólido — fundo de botões (não muda entre temas) */
--ac-ink:        #070707              /* texto sobre --ac-solid (não muda entre temas) */
--fg:            #EDE9E3              /* foreground — creme claro (dark) / quase preto (light) */
--bg:            #070707              /* background — preto (dark) / quase branco (light) */
--dim/--dimmer:  rgba(var(--fg-rgb), .88 / .16)  /* derivados do foreground */
--bd/--bdh:      rgba(var(--fg-rgb), .07 / .18)  /* bordas / bordas em hover */
--surface:       #0C0C0C              /* cards (dark) / branco (light) */
--surface-2:     #0F0F0F              /* inputs, banners (dark) / cinza claro (light) */
--danger:        #FF5050              /* erro — mais escuro no tema claro p/ contraste */
--font-mono:     'DM Mono', monospace
--font-display:  'Syne', sans-serif
--max-w:         1160px
```

### Tema claro/escuro

O toggle (`ThemeToggle`, no Nav) alterna `data-theme` no `<html>` via `useTheme.js`, persistido em `localStorage` (`fp-theme`) — claro é o padrão para quem ainda não escolheu. Cada case tem sua própria cor de destaque (`p.accent`); como cores vivas (ex. o lima `#C8FF00`) ficam quase invisíveis como texto sobre fundo claro, `src/utils/color.js` escurece cada uma via busca binária em HSL até atingir contraste **4.5:1 (WCAG AA)** contra branco — calculado por cor, não fixo. Botões preenchidos usam `--ac-solid`/`--ac-ink`, que não mudam entre temas (o par lima vivo + texto escuro já tem contraste alto em qualquer fundo).

---

## Funcionalidades

- **9 cases documentados** com hero, overview, metodologia, KPIs, vídeo, seções com imagens e resultados, exibidos lado a lado em grid de 2 colunas
- **Case study com múltiplos CTAs**: Figma, sistema ao vivo e repositório GitHub, exibidos condicionalmente por projeto (`figmaLink`, `externalLink`, `githubLink`)
- **Modo claro/escuro** com contraste AA calculado por cor (ver [Tema claro/escuro](#tema-claroescuro)), persistido por usuário
- **Menu de acessibilidade nativo** (sem widget de terceiro): tamanho de fonte, alto contraste, fonte para leitura facilitada, guia de leitura, sublinhar links, reduzir animações — persistido por usuário
- **VLibras** — widget oficial do governo para tradução em Libras, disponível em todas as páginas
- **Foto de perfil no hero**, ao lado do nome, com borda no tom de destaque do design system
- **Cursor customizado** animado (desktop apenas)
- **Marquee de skills** com animação contínua
- **Formulário de contato** com validação client-side, estados idle/sending/success/error, campos obrigatórios anunciados a leitores de tela (`aria-invalid`/`aria-describedby`), LGPD opt-in obrigatório
- **Modo mobile** com menu overlay como `role="dialog"` com focus trap completo; nas páginas de case, o botão "Voltar aos projetos" substitui o hambúrguer (não há seções pra navegar)
- **Error Boundary** React que previne tela em branco em produção

---

## Acessibilidade

O projeto atende **WCAG 2.1 nível AA**. Principais implementações:

| Critério | Implementação |
|----------|--------------|
| 1.1.1 Conteúdo não-textual | `alt` em todas as imagens; `aria-hidden` em elementos decorativos (`//`, dots, marquee, cursor customizado) |
| 1.3.1 Info e relações | Landmarks `<header>`, `<nav>`, `<main>`, `<footer>`; hierarquia de headings sem saltos (h1 → h2 → h3) em cada view |
| 1.4.3 Contraste | Textos em `--dim` (~13:1 contra o fundo); cor de destaque de cada case escurecida via HSL até 4.5:1 no tema claro (`accessibleAccent`, ver [Tema claro/escuro](#tema-claroescuro)) |
| 2.1.1 Teclado | `Enter` e `Space` ativam ProjectCard; todos os elementos interativos são acessíveis por teclado |
| 2.1.2 Sem armadilha de teclado | MobileMenu tem focus trap que mantém Tab/Shift+Tab dentro do diálogo; `Escape` fecha. CookieBanner é intencionalmente `aria-modal="false"` (não bloqueia o conteúdo atrás) — não recebe trap de propósito |
| 2.2.2 Pausar, parar, ocultar | `@media (prefers-reduced-motion: reduce)` desativa marquee e todas as animações |
| 2.4.1 Ignorar blocos | Link "Ir para o conteúdo" visível ao receber foco por teclado (skip navigation) |
| 2.4.3 Ordem de foco | Foco move para `#page-content` ao trocar de view (case, privacidade) |
| 2.4.7 Foco visível | `outline: 2px solid var(--ac)` em `a`, `button` e `[role="button"]` via `:focus-visible` |
| 3.2.2 Ao receber entrada | MobileMenu move foco automaticamente para o botão fechar ao abrir |
| 3.3.2 Rótulos ou instruções | Campos obrigatórios do formulário marcados com `required`/`aria-required` e indicador visual |
| 3.3.1 Identificação de erro | `aria-invalid` por campo + `aria-describedby` ligando ao `role="alert"` com a mensagem |
| 1.4.4 Redimensionar texto | Menu de acessibilidade escala a interface até 130% via `zoom` (sem cortar conteúdo) |
| 1.4.8 Apresentação visual | Alto contraste, fonte para leitura facilitada (Lexend) e guia de leitura, todos opcionais e persistidos |
| 4.1.2 Nome, função, valor | `aria-expanded`, `aria-controls`, `aria-modal`, `role="dialog"` no menu mobile |
| 4.1.3 Mensagens de status | Sucesso do formulário com `role="status"` + `aria-live="polite"`; erro com `role="alert"` |

**Libras:** widget oficial [VLibras](https://www.vlibras.gov.br/) (governo brasileiro) disponível em todas as páginas — tradução automática de texto para Língua Brasileira de Sinais.

**Menu de acessibilidade (`AccessibilityMenu.jsx`):** construído nativamente, sem widget de terceiro — evita o problema conhecido dos "overlays de acessibilidade" de terceiros (várias entidades de acessibilidade, incluindo a WebAIM, assinam o [Overlay Fact Sheet](https://overlayfactsheet.com/) alertando que eles podem conflitar com leitores de tela reais e dar falsa sensação de conformidade). Tamanho de fonte usa `zoom` no `#fp-portfolio` (não em `<html>`, pra não distorcer UI injetada por terceiros como o VLibras); o cursor customizado se desliga automaticamente enquanto o zoom está ativo, pra não desalinhar da posição real do mouse; e o alto contraste recalcula a cor de cada case corretamente mesmo combinado com o tema claro.

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
