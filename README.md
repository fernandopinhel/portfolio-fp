# Fernando Pinhel — Portfólio v2.0

> Portfólio pessoal de **Fernando Pinhel**, Product Designer com +10 anos de experiência em UX/UI e Front-end. Construído em React com design system próprio, cursor customizado, animações CSS, tagueamento Hotjar e estrutura de páginas separadas.

---

## ✨ Funcionalidades

- **Guia de Estilo** próprio com CSS variables, tipografia Syne + DM Mono, paleta dark com accent neon
- **8 cases completos** — incluindo Painel de Aditivos (Bradesco Saúde) e Websites, ausentes na versão anterior
- **Suporte a vídeo** em cada case (YouTube embed ou arquivo `.mp4`)
- **Cursor customizado** animado (desktop) com estado de hover expandido
- **Grid responsivo** com cards `large` (largura total) e `small` (meia largura)
- **Mobile-first** com breakpoints em 768px e 1024px
- **Menu mobile** com overlay animado
- **Formulário de contato** com abertura no cliente de e-mail
- **Tagueamento Hotjar** — classes `hj-*` em todos os elementos estratégicos
- **Acessibilidade** — `role`, `aria-label`, `aria-modal`, `focus-visible`, `tabIndex`
- **SEO** — meta tags, Open Graph e Twitter Card

---

## 🗂 Estrutura do Projeto

```
portfolio-fp/
├── index.html                  # Entry point HTML com favicon inline SVG
├── vite.config.js
├── package.json
├── .gitignore
│
├── public/
│   └── videos/                 # ← seus videos locais ficam aqui
│       └── bradesco/             
│           ├── ans/
│           └── sgta/
│           └── bradesco/              
│       └── generali/                       
│   └── images/
│       └── cases/              # ← suas imagens locais ficam aqui
│           ├── dashboard/
│           ├── paparazzo-rrn/
│           ├── aqui-emprestimo/
│           ├── bradesco-saude-ans/
│           ├── painel-aditivos/
│           ├── generali/
│           ├── websites/
│           └── branding/
│
└── src/
    ├── main.jsx                # ReactDOM root
    ├── App.jsx                 # Root — estado global, cursor, roteamento de páginas
    │
    ├── data/
    │   └── index.js            # ← EDITE AQUI: todos os projetos, artigos, skills
    │
    ├── hooks/
    │   └── useMediaQuery.js    # Hook responsivo reutilizável
    │
    ├── styles/
    │   └── global.css          # Reset, tokens, animações, classes Hotjar (documentadas)
    │
    ├── components/
    │   ├── UI.jsx              # Pill, BtnPrimary, BtnOutline, GithubIcon,
    │   │                       # GridBg, Glow, VideoEmbed, ContactForm
    │   ├── Nav.jsx             # Nav + MobileMenu
    │   └── ProjectCard.jsx     # Card de projeto com hover e accent line
    │
    └── pages/
        ├── PortfolioPage.jsx   # Hero, Skills, About, Projects, Articles, Contact
        └── CasePage.jsx        # View completo de case com vídeo, KPIs e seções
```

---

## 🚀 Como Rodar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/fernandopinhel/portfolio.git
cd portfolio-fp

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador.

### Build para produção

```bash
npm run build
# Arquivos gerados em /dist — prontos para deploy
```

### Preview do build

```bash
npm run preview
```

---

## 📦 Deploy

### GitHub Pages

1. Instale o pacote de deploy:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Adicione ao `package.json`:
   ```json
   "homepage": "https://fernandopinhel.github.io",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. No `vite.config.js`, configure o `base` se for subpasta:
   ```js
   base: "/nome-do-repo/"
   ```

4. Execute:
   ```bash
   npm run deploy
   ```

### Vercel / Netlify

Basta conectar o repositório — detectam Vite automaticamente. Sem configuração adicional.

---

## 🎥 Adicionando Vídeos aos Cases

Em `src/data/index.js`, cada projeto tem um campo `video` comentado:

```js
// video: "SEU_YOUTUBE_ID_AQUI",
```

### YouTube

Descomente e cole apenas o **ID** do vídeo (11 caracteres após `watch?v=`):

```js
video: "dQw4w9WgXcQ",  // exemplo
```

### Arquivo de vídeo local

Coloque o arquivo em `public/videos/` e referencie:

```js
video: "/videos/meu-case.mp4",
```

O componente `VideoEmbed` detecta automaticamente o tipo e renderiza o player correto.

---

## 🖼 Adicionando Imagens Locais

Substitua as URLs do Unsplash por caminhos locais em `src/data/index.js`:

```js
// Antes (Unsplash)
thumbImg: "https://images.unsplash.com/photo-xxx?w=800",

// Depois (local em /public/images/cases/)
thumbImg: "/images/cases/dashboard/thumb.png",
```

Estrutura recomendada para cada case:

```
public/images/cases/<id-do-case>/
  thumb.png           ← miniatura do card (800×500px recomendado)
  hero.png            ← imagem do topo do case (1400×700px)
  img-discovery.png   ← imagens das seções
  img-wireframe.png
  img-prototype.png
```

---

## 📊 Hotjar — Tagueamento

Todas as classes `hj-*` estão documentadas em `src/styles/global.css`. Resumo dos principais:

| Classe | Elemento | Uso sugerido |
|---|---|---|
| `hj-hero-section` | Seção hero | Scroll depth |
| `hj-cta-hero` | Botão "Ver projetos" | Click heatmap |
| `hj-cta-storytelling` | Link "Minha história" | Click heatmap |
| `hj-projects-section` | Grid de projetos | Scroll depth |
| `hj-project-card` | Card de projeto | Click + hover |
| `hj-case-open` | "Ver case →" | Funil de cliques |
| `hj-case-figma` | Botão Figma | Click heatmap |
| `hj-case-back` | "← Voltar" | Click heatmap |
| `hj-articles-section` | Seção artigos | Scroll depth |
| `hj-article-link` | Link de artigo | Click heatmap |
| `hj-contact-section` | Seção contato | Scroll depth |
| `hj-contact-email` | E-mail | Click heatmap |
| `hj-contact-whatsapp` | WhatsApp | Click heatmap |
| `hj-contact-form` | Formulário | Recording + rage clicks |
| `hj-contact-submit` | Enviar | Funil de conversão |
| `hj-nav-link` | Links nav | Click heatmap |
| `hj-mobile-menu-open` | Hamburger | Click mobile |

### Ativando o Hotjar

Em `index.html`, descomente o bloco `<script>` e substitua `XXXXXXX` pelo seu **Hotjar Site ID**:

```html
<script>
  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1234567,hjsv:6};  // ← seu ID aqui
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

---

## ✏️ Como Editar o Conteúdo

Todo o conteúdo está centralizado em **`src/data/index.js`**. Você pode editar sem tocar nos componentes.

### Adicionar um novo projeto

Copie o objeto de um projeto existente e ajuste os campos:

```js
{
  id: "meu-novo-case",             // slug único (usado na URL e nos logs)
  tag: "UX/UI · Mobile",
  title: "Nome do Case",
  description: "Descrição curta para o card.",
  accent: "#C8FF00",               // cor accent do case
  bg: "#0D1A0D",                   // cor de fundo do card
  size: "large",                   // "large" = largura total, "small" = metade
  heroImg: "/images/cases/...",
  thumbImg: "/images/cases/...",
  figmaLink: null,                 // ou URL do Figma
  externalLink: null,              // ou URL do site ao vivo
  video: null,                     // YouTube ID ou path .mp4
  year: "2024",
  role: "Product Designer",
  client: "Nome do cliente",
  challenge: "...",
  impact: "...",
  overview: "...",
  methodology: "Duplo Diamante",
  methodologyDesc: "...",
  problem: "Como...?",
  // kpis: [{ v: "80%", l: "Conversão" }],  // opcional
  sections: [
    { title: "...", content: "...", imgs: ["/images/..."] }
  ],
  results: ["Entrega 1", "Entrega 2"],
}
```

---

## 🛠 Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 18 | UI components |
| Vite | 5 | Build tool + dev server |
| CSS Variables | — | Design tokens |
| Google Fonts | — | Syne + DM Mono |
| Hotjar (opcional) | — | Analytics de comportamento |

Sem dependências de UI externas (Tailwind, MUI, etc.) — design system 100% próprio.

---

## 📞 Contato

**Fernando Pinhel**
- 🌐 [fernandopinhel.com.br/](https://fernandopinhel.com.br/)
- 💼 [linkedin.com/in/fernando-pinhel-designer](https://www.linkedin.com/in/fernando-pinhel-designer/)
- ✉️ contato@fernandopinhel.com.br
- 💬 [WhatsApp](https://api.whatsapp.com/send?phone=5521999866888)
- 🐙 [github.com/fernandopinhel](https://github.com/fernandopinhel)

---

© 2026 Fernando Pinhel — Product Designer · Niterói, RJ
