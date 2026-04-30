# 🚀 Fernando Pinhel — Product Designer Portfolio

> Portfólio de **Fernando Pinhel**, Product Designer com +10 anos de experiência em UX/UI e Front-end.
> Projetado com foco em **experiência, performance, storytelling e conversão**.

🌐 **Live:** https://fernandopinhel.com.br
💼 **LinkedIn:** https://www.linkedin.com/in/fernando-pinhel-designer
🐙 **GitHub:** https://github.com/fernandopinhel

---

## 🧠 Sobre o Projeto

Este portfólio foi desenvolvido como um **case vivo de design + código**, combinando:

* Design System próprio (sem frameworks UI)
* Experiência interativa (cursor custom, animações, microinterações)
* Estrutura escalável de conteúdo (cases dinâmicos)
* Boas práticas de **SEO, acessibilidade e analytics**

---

## ✨ Principais Features

* 🎨 **Design System próprio** com CSS Variables
* 📱 **Mobile-first + responsivo** (768px / 1024px)
* 🧩 **8+ cases completos** com storytelling estruturado
* 🎥 **Suporte a vídeo** (YouTube ou `.mp4`)
* 🖱️ **Cursor customizado animado** (desktop)
* 📊 **Hotjar tracking (hj-*)** para análise comportamental
* ♿ **Acessibilidade (ARIA, focus, navegação teclado)**
* 🔍 **SEO otimizado** (Meta, Open Graph, Twitter Card)
* 📩 **Formulário de contato com integração de e-mail**

---

## 🧱 Stack Tecnológica

| Camada     | Tecnologia                   |
| ---------- | ---------------------------- |
| Build      | Vite 5                       |
| UI         | React 18                     |
| Estilo     | CSS Variables                |
| Tipografia | Syne + DM Mono               |
| Analytics  | Hotjar + GA4                 |
| Deploy     | Vercel / Netlify / HostGator |

---

## 📁 Estrutura do Projeto

```
portfolio-fp/
├── public/
│   ├── images/cases/
│   ├── videos/
│   └── .htaccess
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   │   └── index.js   ← conteúdo editável
│   ├── hooks/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
│
├── .env.example
├── package.json
└── vite.config.js
```

---

## ⚙️ Setup Local

```bash
# Clone o projeto
git clone https://github.com/fernandopinhel/portfolio-fp.git

# Acesse a pasta
cd portfolio-fp

# Instale dependências
npm install

# Rode o projeto
npm run dev
```

Acesse: http://localhost:5173

---

## 🔐 Variáveis de Ambiente

Crie um `.env.local` baseado no `.env.example`:

```env
VITE_WHATSAPP_NUMBER=5521999999999

VITE_FIGMA_DASHBOARD=
VITE_FIGMA_STORYTELLING=

VITE_HOTJAR_ID=
VITE_GA_MEASUREMENT_ID=
```

⚠️ **Importante:**
Todas devem começar com `VITE_` para funcionar no Vite.

---

## 🧩 Como Editar Conteúdo

Todo o conteúdo está centralizado em:

```
src/data/index.js
```

### Adicionar novo projeto:

```js
{
  id: "novo-case",
  title: "Nome do Case",
  description: "Resumo",
  thumbImg: "/images/cases/...",

  figmaLink: import.meta.env.VITE_FIGMA_DASHBOARD,
  video: "YouTubeID" // ou /videos/file.mp4
}
```

---

## 🎥 Vídeos nos Cases

### YouTube

```js
video: "dQw4w9WgXcQ"
```

### Local

```js
video: "/videos/meu-case.mp4"
```

---

## 🖼 Imagens

Estrutura recomendada:

```
public/images/cases/nome-do-case/
  thumb.png
  hero.png
  img-1.png
  img-2.png
```

---

## 📊 Analytics (Hotjar)

Classes `hj-*` já aplicadas para:

* Heatmaps
* Scroll tracking
* Funil de conversão

Exemplos:

| Classe          | Uso                    |
| --------------- | ---------------------- |
| hj-cta-hero     | Clique CTA             |
| hj-project-card | Interação com projetos |
| hj-contact-form | Conversão              |

---

## 🔒 Segurança & LGPD

Implementações:

* ✅ Variáveis sensíveis via `.env`
* ✅ Política de Privacidade
* ✅ Headers de segurança (.htaccess)
* ✅ Ajustes SAST (noopener, etc.)

### Pendências importantes:

* [ ] Banner de cookies (CMP)
* [ ] Configuração DMARC no DNS
* [ ] Ajuste `og:url` no HTML

---

## 🚀 Deploy

### Build

```bash
npm run build
```

### Opções:

* Vercel (recomendado)
* Netlify
* GitHub Pages
* HostGator (FTP)

---

## 📌 Checklist Pré-Deploy

* [ ] `.env.local` configurado
* [ ] `og:url` correto
* [ ] `.htaccess` incluído
* [ ] Analytics configurado
* [ ] Teste em produção

---

## 📞 Contato

**Fernando Pinhel**
📍 Niterói — RJ

* 🌐 https://fernandopinhel.com.br
* 💼 LinkedIn
* ✉️ [contato@fernandopinhel.com.br](mailto:contato@fernandopinhel.com.br)
* 💬 WhatsApp
* 🐙 GitHub

---

## 🧠 Filosofia

> "Design não é só estética — é estratégia, narrativa e impacto real no negócio."

---

## 📄 Licença

Uso pessoal — © 2026 Fernando Pinhel
