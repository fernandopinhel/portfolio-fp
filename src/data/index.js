// ─── DATA ───────────────────────────────────────────────────────────────────
// Central data source for all portfolio content.
// Update this file to add/edit projects, articles, skills and trajectory.
//
// SECURITY (SAST audit): Figma file keys and personal phone number have been
// moved to environment variables (.env.local) to prevent exposure in the
// public repository. Never hardcode sensitive links or PII here.

// ── Helpers ──────────────────────────────────────────────────────────────────
const env = (key, fallback = "") => import.meta.env[key] ?? fallback;

// ── Env-backed values ─────────────────────────────────────────────────────────
export const WHATSAPP_NUMBER  = env("VITE_WHATSAPP_NUMBER");
export const FIGMA_DASHBOARD  = env("VITE_FIGMA_DASHBOARD");
export const FIGMA_STORY      = env("VITE_FIGMA_STORYTELLING");

export const NAV_LINKS = ["Sobre", "Projetos", "Artigos", "Contato"];

export const SKILLS = [
  "Product Design", "UX Research", "UI Design", "IA",
  "Figma", "Prototipagem", "Design Systems", "Front-end",
  "Acessibilidade", "React", "Web Design",
  "Product Discovery", "Jornada do Usuário", "Strategic Design",
  "Ideação", "Testes de Usabilidade", "Mentoria de Designers", "Facilitação",
  "PHP", "Wordpress",
];

export const TRAJECTORY = [
  { role: "Product Designer", current: true },
  { role: "UX/UI Designer", current: false },
  { role: "Desenvolvedor Front-end", current: false },
  { role: "Web Designer / Web Master", current: false },
  { role: "Motion Designer", current: false },
  { role: "Designer Gráfico", current: false },
];

export const ARTICLES = [
  {
    id: 1,
    title: "Acessibilidade digital",
    desc: "Como podemos tornar o mundo digital mais acessível? Designers devem ter consciência que fazemos produtos para todos os tipos de pessoas.",
    href: "https://medium.com/@fernandopinhelll/acessibilidade-digital-ff007f71bb60",
    tag: "Acessibilidade",
    img: "https://plus.unsplash.com/premium_photo-1670520076618-6d9d27954371?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Princípios de um bom design",
    desc: "A importância e o impacto de um bom design na empresa, e o investimento que organizações fazem para melhorar seus resultados.",
    href: "https://medium.com/@fernandopinhelll/princ%C3%ADpios-de-um-bom-design-b41b0581dccf",
    tag: "Design",
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=120&q=80&auto=format",
  },
  {
    id: 3,
    title: "Errar é humano",
    desc: "Como prevenimos erros? É possível antecipar que o usuário vai errar? Conceitos sobre prevenção de erros na experiência do usuário.",
    href: "https://medium.com/@fernandopinhelll/errar-%C3%A9-humano-c6b06d01be03",
    tag: "UX",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=120&q=80&auto=format",
  },
  {
    id: 4,
    title: "Começando na carreira de Product Designer",
    desc: "Tem interesse em migrar de carreira ou iniciar como Product Designer? Um guia honesto sobre o início dessa jornada.",
    href: "https://medium.com/@fernandopinhelll/come%C3%A7ando-na-carreira-de-product-designer-98cfd9d003d7",
    tag: "Carreira",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// ─── PROJECTS ────────────────────────────────────────────────────────────────
// "size" controls grid layout: "large" = full-width card, "small" = half-width
// "video" (optional): YouTube embed ID or direct mp4 URL
// "figmaLink" (optional): opens Figma prototype
// "externalLink" (optional): opens live product
// images in /images/cases/<id>/ are local; Unsplash URLs are fallbacks

export const PROJECTS = [
  // ── 1 — CASE NOVO: Finanças FP ───────────────────────────────────────────
  {
    id: "financas-fp",
    tag: "Designer Engineer · Fintech Pessoal",
    title: "Finanças FP",
    description:
      "Sistema de gestão financeira pessoal desenhado e construído em parceria com IA — do design system extraído do próprio código ao login por Face ID e PWA instalável.",
    accent: "#4361EE",
    bg: "#0A0E1F",
    size: "small",
    heroImg:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=85&auto=format",
    thumbImg:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format",
    figmaLink: null,
    externalLink: "https://financas.fernandopinhel.com.br/",
    githubLink: "https://github.com/fernandopinhel/sistema-financeiro",
    year: "2026",
    role: "Designer Engineer · Full-stack Developer",
    client: "Projeto pessoal — produto próprio em produção",
    challenge:
      "Nenhum app de finanças pronto respeitava o jeito como eu organizo dinheiro: categorias com cor própria, contas recorrentes com lembrete e nenhum dado saindo da minha própria infraestrutura. Mais do que resolver isso, o desafio real era provar — no próprio produto — que design e engenharia de software podem ser a mesma disciplina quando praticadas por uma pessoa só, com IA como parceira de arquitetura, não como atalho.",
    impact:
      "Ferramenta que uso diariamente para controlar minhas finanças, com autenticação por biometria, PWA instalável e um design system extraído do próprio código-fonte — hoje sincronizado com o Figma via Tokens Studio. Também virou um caso de estudo sobre como um Designer Engineer usa IA como par de engenharia em cada camada do produto, do CSS à arquitetura de autenticação.",
    overview:
      "Aplicação web full-stack (Laravel 12 + Alpine.js) para gestão financeira pessoal: transações, categorias com cor e indicador de dashboard, contas recorrentes com lembrete automático, exportação de relatórios em Excel e PDF, autenticação multi-camada (senha + reCAPTCHA, Google OAuth e Face ID/biometria via WebAuthn) e instalação como PWA no Android e iOS. Projetado, construído e mantido sozinho, com Claude atuando como par de engenharia em cada decisão de arquitetura, refatoração e revisão de UX.",
    methodology: "Design Engineering em par com IA (Claude)",
    methodologyDesc:
      "Sem handoff entre quem desenha e quem constrói — cada funcionalidade nasceu ao mesmo tempo como decisão de interface e decisão técnica. O ciclo: discutir o problema com Claude, prototipar a solução direto em Blade/Alpine, revisar acessibilidade e consistência visual, documentar a decisão. Claude atuou como par ativo — sugerindo a arquitetura de serviços (como o RecurringService, que calcula contas recorrentes pendentes do mês), auditando o CSS em busca de tokens duplicados e ajudando a pesar trade-offs de UX, como o fallback de setas para quem prefere não arrastar cards no toque.",
    problem:
      "Como um profissional que projeta e constrói consegue entregar um produto financeiro com o rigor técnico de um time de engenharia — autenticação forte, conformidade com a LGPD, PWA, design system documentado — sozinho, usando IA como parceira de raciocínio em vez de gerador de código?",
    sections: [
      {
        title: "O Problema Era Meu",
        content:
          "Em vez de adaptar meu comportamento a um app genérico de finanças, decidi construir o meu: Laravel no back-end, pela robustez de migrations e Eloquent para modelar transações, categorias e recorrências; Alpine.js no front, pela reatividade leve de um dashboard sem o peso de carregar um framework SPA inteiro. Da ideia ao primeiro dashboard funcional, cada tela nasceu de uma necessidade real de organizar o próprio orçamento.",
        imgs: [
          "/images/cases/financas-fp/img-dashboard.png",
        ],
      },
      {
        title: "Design System ao Contrário: do Código para o Figma",
        content:
          "Em vez do fluxo tradicional — Figma primeiro, código depois — segui o caminho inverso: pedi ao Claude para auditar as views Blade e o CSS reais em produção e extrair um design system do que já existia, em vez de desenhar um do zero. Os tokens (core → semantic → component) foram estruturados em JSON no formato Tokens Studio e sincronizados com um arquivo Figma via GitHub. Fui além e escrevi um plugin próprio do Figma que lê esses tokens e os ícones reais do app e monta as páginas de Foundations, Components e Patterns automaticamente — o design system documenta o código, e não o contrário.",
        imgs: [
          "/images/cases/financas-fp/img-design-system.png",
        ],
      },
      {
        title: "Autenticação Sem Fricção, Confiança Sem Concessão",
        content:
          "Dinheiro exige confiança. Implementei três caminhos de login — senha com reCAPTCHA v2, OAuth do Google e Face ID/Touch ID/biometria via WebAuthn (Passkeys) — todos aditivos entre si, sem forçar o usuário a escolher um caminho único. A privacidade seguiu o mesmo rigor: arquitetura de consentimento LGPD/GDPR com Google Consent Mode v2, em que o Tag Manager sempre carrega mas só libera Analytics e Hotjar depois do opt-in explícito. Junto com o Claude, depurei um bug sutil nessa camada: o container de tags nunca disparava na primeira visita porque dependia de um cookie de consentimento que, óbvio, ainda não existia.",
        imgs: [
          "/images/cases/financas-fp/img-login-passkeys.png",
        ],
        compact: true,
      },
      {
        title: "Detalhes que Só um Designer Engineer Nota",
        content:
          "Controle financeiro acontece no bolso, não na mesa — então o app precisava ser pensado pra tela do celular com a mesma seriedade da tela do computador, não como uma versão reduzida dela. O dashboard tem cards e blocos reordenáveis por drag-and-drop, com toque e mouse recebendo o mesmo cuidado de interação, e a ordem escolhida fica salva pra cada pessoa organizar o painel do seu jeito. Categorias ganham badges de maior receita e maior despesa direto no total, deixando o resumo legível num único olhar, em qualquer tamanho de tela. E transformar o site em PWA instalável no Android e no iOS — com ícone próprio, tela cheia e cache que nunca deixa dados financeiros desatualizados offline — foi a decisão que fechou essa conta: um sistema que se comporta como aplicativo nativo, sem depender de loja de aplicativos.",
        imgs: [
          "/images/cases/financas-fp/img-pwa.png",
        ],
        compact: true,
      },
    ],
    kpis: [
      { v: "3", l: "Métodos de login" },
      { v: "2", l: "Plataformas PWA" },
      { v: "100%", l: "Design system derivado do código" },
      { v: "1", l: "Dev — solo com IA em par" },
    ],
    results: [
      "Design system 100% derivado do código real, sincronizado com o Figma via Tokens Studio + GitHub",
      "Plugin próprio do Figma que gera Foundations, Components e Patterns a partir dos tokens e ícones do app",
      "3 métodos de autenticação (senha, Google OAuth, Face ID/biometria via Passkeys) coexistindo sem fricção",
      "PWA instalável no Android e iOS, com cache que nunca deixa dados financeiros desatualizados offline",
      "Arquitetura de consentimento LGPD/GDPR com Google Consent Mode v2",
      "Dashboard com reorganização por drag-and-drop e fallback acessível por toque",
    ],
  },

  // ── 2 ─────────────────────────────────────────────────────────────────────
  {
    id: "dashboard-gestao-alunos",
    tag: "UX/UI · Gestão Pública",
    title: "Dashboard Gestão de Alunos",
    description:
      "Dashboard para gerenciar alunos utilizando reconhecimento facial. Interface complexa de dados com foco em usabilidade para gestores da rede estadual.",
    accent: "#C8FF00",
    bg: "#0D1A0D",
    size: "small",
    heroImg:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85&auto=format",
    thumbImg:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format",
    figmaLink:
      FIGMA_DASHBOARD,
    year: "2023",
    role: "Product Designer · UX/UI",
    client: "Rede Estadual de Ensino",
    challenge:
      "Gestores escolares precisavam de uma solução centralizada para monitorar presença de alunos, controle de acesso e qualidade nutricional no refeitório — tudo em tempo real e sem fricção operacional.",
    impact:
      "O sistema reduz de forma significativa o tempo dedicado à gestão manual de presença, tornando os processos mais ágeis e eficientes. Além disso, contribui para um melhor acompanhamento da alimentação dos alunos, favorecendo sua nutrição e apoiando o desenvolvimento saudável.",
    overview:
      "Dashboard para gestores da rede estadual de ensino com tecnologia de reconhecimento facial integrada na portaria e refeitórios. A solução monitora presença, qualidade nutricional e emite relatórios analíticos para tomada de decisão.",
    methodology: "Duplo Diamante — Design Thinking",
    methodologyDesc:
      "Processo estruturado com imersão em campo, entrevistas com gestores e diretores, análise de fluxos existentes e prototipagem iterativa com validação contínua.",
    problem:
      "Como melhorar a gestão de entrada de alunos e o monitoramento da qualidade nutricional nas escolas estaduais de forma eficiente e escalável?",
    // video: "SEU_YOUTUBE_ID_AQUI", // ← descomente e cole o ID do vídeo do YouTube
    sections: [
      {
        title: "Descoberta & Imersão",
        content:
          "Com essa tecnologia conseguimos acompanhar de forma precisa a alimentação de cada aluno(a), garantindo que todos recebam suas refeições adequadamente. Esse controle é essencial para o desenvolvimento saudável e para evitar desperdícios.",
        imgs: [
          "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80&auto=format",
        ],
      },
      {
        title: "Arquitetura da Informação & Wireframe",
        content:
          "Mapeamos todos os módulos do sistema: painel geral, controle de presença por turma, gestão de refeitório, relatórios de aceitabilidade alimentar e configurações de câmeras. O wireframe foi validado em 3 rodadas com gestores antes de avançar para o visual.",
        imgs: [
          "/images/cases/dashboard/img-wireframe.png",
        ],
      },
      {
        title: "Guia de Estilo & Interface Final",
        content:
          "Criamos um guia de estilo completo com tokens de cor, tipografia, componentes de dados (tabelas, gráficos, cards de presença) e estados interativos. A paleta verde-neon reforça o contexto de monitoramento em tempo real. O protótipo navegável no Figma foi apresentado à secretaria estadual com todos os 12 fluxos documentados.",
        imgs: [
          "/images/cases/dashboard/img-prototipo-01.png",
          "/images/cases/dashboard/img-prototipo-02.png",
          "/images/cases/dashboard/img-prototipo-03.png",
        ],
      },
    ],
    results: [
      "Dashboard analítico com visão em tempo real por escola e turma",
      "Sistema de reconhecimento facial integrado à portaria e refeitório",
      "Relatórios de aceitabilidade alimentar para tomada de decisão",
      "Guia de estilo documentado e entregue ao time de desenvolvimento",
      "Interface responsiva para tablets e totens de autoatendimento",
    ],
  },

  // ── 3 ─────────────────────────────────────────────────────────────────────
  {
    id: "paparazzo-rubro-negro",
    tag: "Product Design · Mobile",
    title: "Paparazzo Rubro-Negro",
    description:
      "App mobile para torcedor do Flamengo com notícias em tempo real, sorteios, compra de ingressos e bastidores exclusivos com o influencer.",
    accent: "#FF4444",
    bg: "#1A0D0D",
    size: "small",
    heroImg:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1400&q=85&auto=format",
    thumbImg:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80&auto=format",
    figmaLink: null,
    year: "2021",
    role: "Product Designer · UX/UI",
    client: "Paparazzo Rubro-Negro (Digital Influencer)",
    challenge:
      "Um influencer com 500k+ seguidores precisava de um canal próprio e monetizável para seus fãs — sem depender de algoritmos de redes sociais e com experiência exclusiva para o torcedor do Flamengo.",
    impact:
      "O aplicativo tem como propósito fortalecer a marca do influenciador como uma plataforma de mídia independente, abrindo espaço para novas formas de monetização e para um gerenciamento mais estratégico da relação com seus seguidores.",
    overview:
      "Aplicativo mobile desenvolvido para um digital influencer do meio esportivo, centralizando notícias, bastidores, sorteios e compras em uma plataforma exclusiva para torcedores do Flamengo.",
    methodology: "Duplo Diamante — Design Thinking",
    methodologyDesc:
      "Foram realizadas pesquisas quantitativas e entrevistas qualitativas, acompanhadas da criação de personas e mapas de empatia. Esse processo completo permitiu evoluir da identificação do problema até a validação do protótipo.",
    problem:
      "Os torcedores do Flamengo não possuem um aplicativo dedicado que centralize notícias em tempo real, bastidores e interações exclusivas em um único lugar confiável.",
    // video: "SEU_YOUTUBE_ID_AQUI",
    sections: [
      {
        title: "Contexto de Mercado & Oportunidade",
        content:
          "Um estudo da CBF revelou que o futebol movimenta R$ 52,9 bilhões na economia brasileira. Com 42 milhões de torcedores, o Flamengo é o clube mais popular do país. Mapeamos que 87% dos torcedores pesquisam sobre o clube diariamente pelo celular, mas não existia uma solução dedicada que unisse conteúdo exclusivo, bastidores e transações em uma só experiência.",
        imgs: [
          "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&q=80&auto=format",
        ],
      },
      {
        title: "Pesquisa & Persona",
        content:
          "Realizamos survey e entrevistas em profundidade. Criamos a persona Artur, 22 anos, analista de sistemas, apaixonado pelo Mengão. Artur quer notícias antes da imprensa, quer sentir que faz parte da comunidade e busca exclusividade — algo que redes sociais genéricas não entregam. O mapa de empatia revelou frustração com conteúdo repetido e falta de interatividade.",
        imgs: [
          "/images/cases/paparazzo-rrn/img-mapa-de-empatia.png",
        ],
      },
      {
        title: "Fluxo, Wireframe & Protótipo",
        content:
          "Definimos 5 módulos principais: Feed exclusivo, Ao vivo, Sorteios, Loja e Perfil. O onboarding foi projetado para 3 telas — clean e direto. O protótipo navegável no Figma apresenta a jornada completa com microinterações, sistema de notificações push e integração com pagamento.",
        imgs: [
          "/images/cases/paparazzo-rrn/img-wireframe.png",
          "/images/cases/paparazzo-rrn/img-prototipo.png",
        ],
      },
    ],
    results: [
      "Feed exclusivo com notícias antes da imprensa",
      "Sistema de sorteios com rastreabilidade e transparência",
      "Classificação ao vivo e estatísticas de todos os campeonatos",
      "Loja integrada com produtos oficiais e ingressos",
    ],
  },

  // ── 4 ─────────────────────────────────────────────────────────────────────
  {
    id: "aqui-emprestimo",
    tag: "UX/UI · Financeiro",
    title: "Aqui Empréstimo",
    description:
      "Site para soluções financeiras acessíveis para aposentados e pensionistas. Foco em simplicidade, credibilidade e conversão.",
    accent: "#22D3EE",
    bg: "#071217",
    size: "small",
    heroImg:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1400&q=85&auto=format",
    thumbImg:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80&auto=format",
    figmaLink: null,
    // externalLink: "https://www.aquiemprestimo.com.br/",
    year: "2019",
    role: "UX/UI Designer",
    client: "Aqui Empréstimo",
    challenge:
      "Um público majoritariamente 50+ com baixo letramento financeiro precisava entender e contratar empréstimos online — em um segmento repleto de dark patterns e linguagem técnica intimidadora.",
    impact:
      "Produto ativo, acessível e disponível em ambiente digital, pronto para atender às necessidades dos usuários.",
    overview:
      "Site para empresa de empréstimo consignado e pessoal, correspondente oficial de bancos brasileiros. Foco em acessibilidade, clareza e redução da ansiedade do usuário em relação a processos financeiros.",
    methodology: "Duplo Diamante — Design Thinking",
    methodologyDesc:
      "Levantamento de hipóteses, pesquisa qualitativa com aposentados, benchmark de concorrentes, sitemap e wireframe com foco em acessibilidade WCAG 2.1.",
    problem:
      "O Brasil tem mais de 60 milhões de endividados. Como comunicar serviços financeiros complexos de forma transparente, acessível e humanizada para um público vulnerável?",
    // video: "SEU_YOUTUBE_ID_AQUI",
    sections: [
      {
        title: "Contexto & Público-Alvo",
        content:
          "O empréstimo consignado tem prestação descontada em folha — teoricamente simples, mas frequentemente distorcido por termos jurídicos e letras miúdas. Nosso público: aposentados do INSS, pensionistas e servidores públicos entre 55-75 anos, com baixa confiança em plataformas digitais e histórico de golpes financeiros. O maior obstáculo não era o produto, mas a desconfiança.",
        imgs: [
          "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900&q=80&auto=format",
        ],
      },
      {
        title: "Pesquisa Qualitativa & Insights",
        content:
          "Pesquisas com usuários revelaram pontos importantes: eles desejam conhecer o valor da parcela antes de qualquer cadastro; termos técnicos podem gerar abandono imediato; imagens de pessoas reais e depoimentos completos aumentam a confiança; e a escolha das palavras nos botões influencia diretamente a decisão. Esses aprendizados orientaram toda a arquitetura.",
        imgs: [
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80&auto=format",
        ],
      },
      {
        title: "Sitemap, Wireframe & Resultado Final",
        content:
          "Arquitetura com 6 páginas, priorizando o simulador na dobra inicial. Tipografia grande (mínimo 18px no corpo), contraste AAA, sem pop-ups. O resultado: site claro, humano e que gera confiança desde o primeiro scroll.",
        imgs: [
          "/images/cases/aqui-emprestimo/img-site-map.png",
          "/images/cases/aqui-emprestimo/img-wireframe.png",
          "/images/cases/aqui-emprestimo/img-mockup.png",
        ],
      },
    ],
    results: [
      "Simulador na dobra inicial — maior conversão do funil",
      "Tipografia 18px+ e contraste AAA para público 50+",
      "Linguagem 100% livre de jargões financeiros",
      "Produto ativo: aquiemprestimo.com.br",
    ],
  },

  // ── 5 ─────────────────────────────────────────────────────────────────────
  {
    id: "triagem-nip",
    tag: "Designer Engineer · Regulatório · Saúde",
    title: "Triagem NIP",
    description:
      "Triagem das NIPs da ANS para uma operadora de saúde — mesa de triagem com fila por prazo, sugestão de área com motivo e resposta à agência. Protótipo de 2020 revisitado em 2026.",
    accent: "#0A6A9E",
    bg: "#071C2B",
    size: "small",
    heroImg:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=85&auto=format",
    thumbImg:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format",
    figmaLink: null,
    externalLink: "https://fernandopinhel.github.io/ans/",
    githubLink: "https://github.com/fernandopinhel/ans",
    year: "2020 · Revisitado em 2026",
    role: "Product Designer · Front-end Developer",
    client: "Operadora de saúde — marca fictícia no case (Acolhe Saúde) para preservar o cliente original",
    challenge:
      "Quando um beneficiário não consegue resolver um problema com a operadora, ele pode reclamar na ANS — a reclamação vira uma NIP (Notificação de Intermediação Preliminar), com prazo curto pra resposta: 5 dias úteis quando é assistencial, 10 quando não é. Perder o prazo pode virar multa. Antes do sistema, a equipe baixava as notificações do portal da agência e copiava os dados à mão, decidia sozinha qual área deveria cuidar de cada caso lendo relato por relato, avisava por e-mail sem texto padrão nem registro, e não tinha visão clara de quais NIPs estavam perto de vencer.",
    impact:
      "A equipe passa a triar sobre uma fila ordenada pelo prazo mais curto, não pela ordem de chegada — o risco fica visível antes de virar reclamação. A sugestão de área vem com o motivo escrito, em vez de uma caixa-preta, e o aviso por e-mail sai com prévia e modelo certo pra cada área. O prazo em dias úteis está sempre à vista, do relógio no topo até a régua de cada ficha.",
    overview:
      "Sistema interno de triagem das NIPs da ANS para uma operadora de saúde: painel com o relógio da ANS e indicadores do período, mesa de triagem com fila e ficha lado a lado, classificação por tema em 3 níveis com sugestão de área, encaminhamento por e-mail com prévia, registro da resposta à agência, envio automático ao CRM todo dia às 6h e 6 regras de triagem guiadas por esquema. HTML, CSS e JavaScript puros, sem framework, auditado com axe-core para WCAG 2.2 AA e publicado no GitHub Pages.",
    methodology: "Protótipo Revisitado em Par com IA (Claude)",
    methodologyDesc:
      "A versão original, de 2020, tinha cerca de 40 telas em Bootstrap e jQuery, todas só visuais, com dados fixos e a marca do cliente. Na revisão de 2026, com o Claude como par de engenharia, as 40 telas viraram 9 sem perder função — consultar, cadastrar, editar e ver detalhes passaram a ser a mesma tela — e desenhei um layout só deste case: um trilho claro e estreito no lugar do menu lateral ou da barra de operações dos outros cases, com os elementos visuais vindo do próprio domínio — o carimbo do protocolo, a régua de dias úteis, o relógio dos prazos e o marca-texto nas palavras do relato.",
    problem:
      "Como dar a uma equipe de relacionamento com a ANS um jeito de triar, encaminhar e responder reclamações dentro do prazo, sem decidir a área de cada caso no escuro nem perder de vista o que está perto de vencer?",
    sections: [
      {
        title: "Um Painel Com o Relógio da ANS",
        content:
          "A home resume o dia pelo prazo: quantas NIPs estão em atraso, quantas vencem hoje, quantas vencem nos próximos dias. Os números do período mostram quantas chegaram com problema, quantas foram respondidas no prazo e o tempo médio de resposta em dias úteis — tudo filtrável, com gráficos por situação, categoria, tema e área que também funcionam como tabela pra quem usa leitor de tela.",
        imgs: [
          "/images/cases/triagem-nip/img-inicio.jpg",
        ],
      },
      {
        title: "A Mesa de Triagem",
        content:
          "Fila e ficha lado a lado: a fila fica ordenada pelo prazo mais curto, com busca por protocolo, nome ou CPF e filtros por situação. Ao abrir uma NIP, o relato à ANS vem com as palavras-chave que geraram a sugestão já destacadas — quem tria confere o motivo em vez de confiar numa caixa-preta — e o protocolo de 20 dígitos aparece carimbado em blocos de 5, mais fácil de ler e de conferir em voz alta.",
        imgs: [
          "/images/cases/triagem-nip/img-triagem.jpg",
        ],
      },
      {
        title: "Sugestão de Área, Com o Motivo Escrito",
        content:
          "O tema da ANS é escolhido em cascata, até 3 níveis, e cada nível só mostra o que existe dentro do anterior. A partir do tema e das palavras do relato, o sistema sugere a área responsável — 'porque cuida do tema X e o texto cita Y' — e, quando duas regras apontam áreas diferentes, as duas aparecem lado a lado pra pessoa decidir. Antes de encaminhar, uma prévia mostra o e-mail já com os dados da NIP no lugar das variáveis.",
        imgs: [
          "/images/cases/triagem-nip/img-triagem-sugestoes.jpg",
          "/images/cases/triagem-nip/img-email-area.jpg",
        ],
      },
      {
        title: "Resposta à ANS e Envio ao CRM",
        content:
          "Registrar a resposta pede como a NIP foi resolvida, quando a operadora falou com o beneficiário e o texto enviado à agência — marcado sozinho como dentro ou fora do prazo. O envio automático ao CRM roda todo dia útil às 6h; quando uma NIP não sobe porque a área não tem código cadastrado, a tela explica o motivo e oferece o conserto ali mesmo, sem precisar abrir outra tela.",
        imgs: [
          "/images/cases/triagem-nip/img-resposta.jpg",
          "/images/cases/triagem-nip/img-relatorios.jpg",
        ],
        compact: true,
      },
      {
        title: "Revisitando o Case em 2026",
        content:
          "Reescrevi tudo em HTML, CSS e JavaScript puros — zero dependências de runtime —, removendo Bootstrap, jQuery, plugins e cerca de 22 MB de arquivos da versão original. Revisei a acessibilidade pra WCAG 2.2 AA, verificada com axe-core em todas as telas e estados: o prazo nunca depende só de cor (a régua sempre vem com o texto), os destaques do relato usam `<mark>` e aparecem no alto contraste do Windows, e no celular o trilho vira uma gaveta modal.",
        imgs: [
          "/images/cases/triagem-nip/img-mobile-ficha.jpg",
        ],
        compact: true,
      },
    ],
    kpis: [
      { v: "40 → 9", l: "Telas da versão original, sem perder função" },
      { v: "0", l: "Dependências de runtime" },
      { v: "6", l: "Regras de triagem guiadas por esquema" },
      { v: "AA", l: "WCAG 2.2, verificado com axe-core" },
    ],
    results: [
      "Fila de triagem ordenada pelo prazo mais curto, com o relógio da ANS sempre visível",
      "Sugestão de área pelo tema e por palavras-chave do relato, com o motivo escrito",
      "Encaminhamento por e-mail com prévia e modelo certo pra cada área",
      "Resposta à ANS registrada e marcada automaticamente como dentro ou fora do prazo",
      "Envio automático ao CRM todo dia útil às 6h, com o conserto ao lado de cada falha",
      "As 40 telas originais viraram 9, com acessibilidade WCAG 2.2 AA verificada com axe-core",
    ],
  },

  // ── 7 ─────────────────────────────────────────────────────────────────────
  {
    id: "rumo-auto",
    tag: "Designer Engineer · Seguros",
    title: "Rumo Auto",
    description:
      "Cotação e contratação de seguro auto em conversa, dentro do app de uma operadora parceira — uma pergunta por vez, com o porquê de cada uma. Protótipo de 2020 revisitado em 2026.",
    accent: "#7A2160",
    bg: "#1A0A14",
    size: "small",
    heroImg:
      "/images/cases/rumo-auto/img-entrada.jpg",
    thumbImg:
      "/images/cases/rumo-auto/img-entrada.jpg",
    figmaLink: null,
    externalLink: "https://fernandopinhel.github.io/rumo-seguro-auto/",
    githubLink: "https://github.com/fernandopinhel/rumo-seguro-auto",
    year: "2020 · Revisitado em 2026",
    role: "Product Designer · Front-end Developer",
    client: "Seguradora e operadora parceira — marcas fictícias no case (Rumo Seguros e onda) para preservar os clientes originais",
    challenge:
      "Uma seguradora queria vender seguro auto dentro do app de uma operadora de telefonia, para clientes que muitas vezes nunca tinham feito uma cotação sozinhos. O caminho tradicional era um formulário de corretor: dezenas de campos numa tela só, termos como 'franquia' e 'danos corporais' sem explicação, e uma tabela de planos em que só se via o preço no fim — quem chegava pelo app desistia no meio, sem saber quanto faltava.",
    impact:
      "A cotação virou uma conversa curta: uma pergunta por vez, com o porquê de cada uma quando ela é sensível, e um fio com as respostas já dadas para alterar sem perder o resto. Comparar 5 planos deixou de ser decifrar uma tabela — cada etiqueta mostra o que pesou no preço, e o plano personalizado recalcula ao vivo a cada escolha.",
    overview:
      "Cotação e contratação de seguro auto em conversa, dentro do app de uma operadora parceira: uma pergunta por cartão em 4 etapas (você, veículo, cotação, confirmação, pagamento), busca por placa ou por modelo, CEP que preenche o endereço, comparação de 5 planos com o que pesou no preço, plano personalizado com preço ao vivo, cartão de crédito desenhado e apólice nova na tela inicial. HTML, CSS e JavaScript puros, auditado com axe-core para WCAG 2.2 AA e publicado no GitHub Pages.",
    methodology: "Protótipo Revisitado em Par com IA (Claude)",
    methodologyDesc:
      "Como no Amparo Previdência, o objetivo aqui não era substituir a identidade visual — era preservar o que dava personalidade ao protótipo de 2020 (a faixa vinho para roxo, o carrinho andando na estrada das etapas, os cartões com ilustração) e modernizar o acabamento em volta. Com o Claude como par de engenharia, mapeei elemento por elemento o que ficava e o que mudava, redesenhei as ilustrações em SVG próprio no mesmo estilo flat, e dei intenção a cada efeito: o carrinho dirige até a etapa nova porque a pessoa pergunta 'onde eu estou?', e a borda do plano escolhido gira em gradiente porque ela pergunta 'qual plano está valendo?'.",
    problem:
      "Como transformar a cotação de um seguro — cheia de perguntas sensíveis e termos técnicos — numa conversa curta que a pessoa termina sem desistir no meio, dentro de um app que não é o da seguradora?",
    sections: [
      {
        title: "Uma Pergunta Por Vez, Com o Porquê",
        content:
          "Cada etapa mostra uma pergunta aberta por vez, com uma ilustração e o nome da pessoa ('Marina, você sabe a placa do carro?') — parece conversa, não formulário. Perguntas sensíveis como sexo ou principal motorista vêm com uma frase do motivo: 'as seguradoras ainda usam essa informação no cálculo do preço'. As respostas já dadas ficam num fio compacto acima da pergunta atual, cada uma com 'Alterar'.",
        imgs: [
          "/images/cases/rumo-auto/img-conversa.jpg",
        ],
      },
      {
        title: "A Placa Como na Vida Real",
        content:
          "O campo da placa tem a cara de uma placa Mercosul de verdade, aceita o formato antigo e o novo, e a busca devolve as versões do carro com o valor de tabela. Quem não sabe a placa escolhe marca, modelo e ano — o fluxo não trava por falta de um dado.",
        imgs: [
          "/images/cases/rumo-auto/img-placa.jpg",
        ],
      },
      {
        title: "O Preço Deixa de Ser Caixa-Preta",
        content:
          "A matriz de 5 planos mostra as coberturas lado a lado, com 'Não inclui' escrito por extenso em vez de um traço. Etiquetas na cotação mostram o que pesou no preço — 'Garagem fechada: 8% mais barato', 'Motorista de aplicativo: 28% mais caro' — e o plano personalizado recalcula o preço ao vivo a cada cobertura escolhida.",
        imgs: [
          "/images/cases/rumo-auto/img-planos.jpg",
        ],
      },
      {
        title: "Efeitos Que Respondem a uma Pergunta",
        content:
          "Nenhum efeito é decoração solta: o carrinho dirige até a etapa nova e engata ré ao voltar, a borda do plano escolhido gira em gradiente vinho, roxo e laranja, o cartão de crédito gira para o verso no código de segurança, e no sucesso o carro entra no escudo com confete nas cores da marca. Tudo desligado com `prefers-reduced-motion`.",
        imgs: [
          "/images/cases/rumo-auto/img-sucesso.jpg",
        ],
        compact: true,
      },
      {
        title: "Revisitando o Case em 2026",
        content:
          "Reescrevi tudo em HTML, CSS e JavaScript puros — zero dependências de runtime —, removendo Bootstrap, jQuery, Popper, o Font Awesome e cerca de 3.600 arquivos de cópias de segurança e imagens com marcas reais (43 MB). Revisei a acessibilidade para WCAG 2.2 AA, verificada com axe-core: no celular, os planos viram cartões com os rótulos dentro, mantendo a mesma matriz de coberturas.",
        imgs: [
          "/images/cases/rumo-auto/img-mobile-planos.jpg",
        ],
        compact: true,
      },
    ],
    kpis: [
      { v: "4", l: "Etapas, de você ao pagamento" },
      { v: "5", l: "Planos comparáveis lado a lado" },
      { v: "0", l: "Dependências de runtime" },
      { v: "AA", l: "WCAG 2.2, verificado com axe-core" },
    ],
    results: [
      "Cotação em conversa, uma pergunta por vez, com o porquê das perguntas sensíveis",
      "Busca por placa (padrão antigo ou Mercosul) ou por marca, modelo e ano",
      "5 planos comparáveis com o que pesou no preço, e plano personalizado com preço ao vivo",
      "Identidade visual preservada do protótipo original de 2020, com acabamento modernizado",
      "Correção de conteúdo escondido atrás do visual: campos duplicados, nome trocado entre telas, planos iguais",
      "Acessibilidade WCAG 2.2 AA verificada com axe-core em todas as etapas e estados, sem violações",
    ],
  },

  // ── 8 — CASE NOVO: Sites / Web Design ────────────────────────────────────
  {
    id: "websites",
    tag: "Web Design · Front-end",
    title: "Websites",
    description:
      "Desenvolvimento de sites institucionais, landing pages e portais ao longo da trajetória profissional — do design ao código.",
    accent: "#34D399",
    bg: "#071510",
    size: "small",
    heroImg:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1400&q=85&auto=format",
    thumbImg:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80&auto=format",
    figmaLink: null,
    year: "2016–2022",
    role: "Web Designer · Web Master · Front-end Developer",
    client: "Múltiplos clientes",
    challenge:
      "Entregar sites completos e responsivos — do briefing ao deploy — atendendo diferentes segmentos, públicos e tecnologias em prazos enxutos.",
    impact:
      "Mais de 15 sites desenvolvidos e entregues em produção, em segmentos que vão de saúde a entretenimento.",
    overview:
      "Curadoria de projetos web desenvolvidos ao longo da trajetória como Web Designer e Front-end Developer. Sites institucionais, landing pages e portais com desenvolvimento completo: design, HTML/CSS/JS e CMS.",
    methodology: "Web Design + Front-end Development",
    methodologyDesc:
      "Cada projeto seguia o ciclo: briefing, wireframe, design no Photoshop/Figma, implementação em HTML/CSS/JS e integração com CMS (WordPress, Joomla). Mobile first desde 2018.",
    problem:
      "Como criar experiências web que gerem resultado de negócio — credibilidade, conversão e retenção — com recursos e prazos limitados de agência?",
    // video: "SEU_YOUTUBE_ID_AQUI",
    sections: [
      {
        title: "Da Agência ao Freelance",
        content:
          "Iniciei como Web Designer em agências de comunicação digital, onde desenvolvi habilidade de entregar projetos completos em ciclos curtos. O contato direto com clientes de diferentes segmentos — saúde, educação, varejo, serviços — ampliou meu repertório visual e técnico.",
        imgs: [
          "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80&auto=format",
        ],
      },
      {
        title: "Stack & Tecnologias",
        content:
          "A stack foi evoluindo ao longo dos projetos: do Photoshop ao Figma para design; no desenvolvimento, HTML5, CSS3 e JavaScript, com integração ao WordPress e Elementor. Para projetos com CMS e e‑commerce, utilizo WooCommerce. Desde 2018, todos os trabalhos seguem a abordagem Mobile First, com acessibilidade como critério essencial de entrega.",
        imgs: [
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80&auto=format",
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80&auto=format",
        ],
      },
      {
        title: "Projetos em Destaque",
        content:
          "Entre os projetos mais relevantes: portal educacional com área logada e gerenciamento de conteúdo, landing page de lançamento com integração de leads, site institucional para clínica médica com telemedicina, e portais de notícias com CMS customizado. Cada projeto com entrega de código-fonte documentado.",
        imgs: [
          "/images/cases/sites/site-ccjxxiii.png",
          "/images/cases/sites/site-pitila-ramalhoto.png",
          "/images/cases/sites/aictv.png",
        ],
      },
    ],
    results: [
      "15+ sites entregues em produção em diferentes segmentos",
      "Stack completa: design → front-end → CMS → deploy",
      "Mobile First e acessibilidade em todos os projetos desde 2018",
      "Projetos com integração de analytics, SEO técnico e performance",
    ],
  },

  // ── 9 ─────────────────────────────────────────────────────────────────────
  {
    id: "branding",
    tag: "Branding · Gráfico",
    title: "Branding & Social Media",
    description:
      "10+ identidades visuais criadas do zero com manual de marca, aplicações e social media para marcas em diferentes segmentos.",
    accent: "#F472B6",
    bg: "#1A0A12",
    size: "small",
    heroImg:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&q=85&auto=format",
    thumbImg:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80&auto=format",
    figmaLink: null,
    year: "2016–2021",
    role: "Designer Gráfico · Brand Designer",
    client: "Múltiplos clientes",
    challenge:
      "Cada cliente chegava com uma história diferente e precisava de uma identidade autêntica, memorável e aplicável em todos os pontos de contato — do cartão de visitas ao Instagram.",
    impact:
      "10+ marcas lançadas com manual completo em 6 segmentos diferentes. Fase que moldou minha visão sistêmica como Product Designer.",
    overview:
      "Curadoria da minha trajetória como designer gráfico — período de intensa exploração criativa em cores, tipografia, grids e identidade visual. Fundação que moldou minha abordagem atual em product design.",
    methodology: "Branding Strategy + Identidade Visual",
    methodologyDesc:
      "Branding como conjunto de ações alinhadas ao posicionamento, propósito e valores de uma marca. Objetivo: despertar sensações e criar conexões conscientes e inconscientes.",
    problem:
      "Como criar identidades visuais que comuniquem autenticamente os valores de cada marca e criem conexão emocional com o público-alvo?",
    kpis: [
      { v: "10+", l: "Marcas criadas" },
      { v: "6", l: "Segmentos" },
      { v: "100%", l: "Com manual" },
      { v: "5 anos", l: "de branding" },
    ],
    // video: "SEU_YOUTUBE_ID_AQUI",
    sections: [
      {
        title: "Filosofia de Branding",
        content:
          "Uma marca não é um logo — é um sistema de significados. Cada projeto começava com 3 semanas de imersão: entrevistas com o fundador, pesquisa de mercado, análise de concorrentes e definição de personalidade de marca usando o Brand Archetypes framework. Só depois do posicionamento claro partíamos para o visual.",
        imgs: [
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&auto=format",
        ],
      },
      {
        title: "Portfólio de Marcas",
        content:
          "Clientes em 6 segmentos: Viveka (bem-estar), Caramelada (casa de festas), Pessoal e Prático (doceria, Espaço 18 (salão de beleza), The Boss (bets), Blog do Tuco (entretenimento), Fênix Comunicação (agência), Aqui Empréstimo (financeiro) e Nane Trupe (turismo). Cada projeto com conceito, manual e 3 rounds de revisão.",
        imgs: [
          "/images/cases/branding/1-slide.png",
          "/images/cases/branding/2-slide.png",
          "/images/cases/branding/3-slide.png",
          "/images/cases/branding/4-slide.png",
          "/images/cases/branding/5-slide.png",
        ],
      },
      {
        title: "Do Branding ao Product Design",
        content:
          "Essa fase de 5 anos foi decisiva. Compreendi que uma boa identidade visual e um bom produto digital compartilham os mesmos fundamentos: consistência, propósito e experiência do usuário. A transição para UX/UI foi natural — eu já pensava em sistemas, não em peças isoladas.",
        imgs: [
          "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&q=80&auto=format",
        ],
      },
    ],
    results: [
      "10+ marcas do zero com posicionamento e manual completo",
      "6 segmentos: alimentação, fitness, moda, finanças, agência, artes",
      "Social media strategy e produção de conteúdo contínuo",
      "Transição para UX/UI fundamentada na visão sistêmica do branding",
    ],
  },

  // ── 10 — CASE NOVO: Auto Vistoria ────────────────────────────────────────
  {
    id: "auto-vistoria",
    tag: "Designer Engineer · Seguros",
    title: "Auto Vistoria",
    description:
      "Autovistoria de seguro de automóvel e residência pelo celular — protótipo de 2020 revisitado em 2026 com fluxos completos, zero dependências e WCAG 2.2 AA.",
    accent: "#1667C4",
    bg: "#081B2E",
    size: "small",
    heroImg:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1400&q=85&auto=format",
    thumbImg:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80&auto=format",
    figmaLink: null,
    externalLink: "https://fernandopinhel.github.io/prototipo-auto-vistoria/",
    githubLink: "https://github.com/fernandopinhel/prototipo-auto-vistoria",
    year: "2020 · Revisitado em 2026",
    role: "Product Designer · Front-end",
    client: "Seguradora — marca fictícia no case (Lar&Via Seguros) para preservar o cliente original",
    challenge:
      "O modelo tradicional de vistoria de seguro — presencial, agendada, com deslocamento até um posto ou espera por um vistoriador — custa tempo pro segurado e dinheiro pra seguradora, numa etapa que atrasa a emissão da apólice. O desafio era desenhar e prototipar uma autovistoria que o próprio segurado faz pelo celular, sem perder a confiança que um processo de seguro exige nem deixar o formulário longo e cansativo.",
    impact:
      "O protótipo validou a jornada de autovistoria com usuários e stakeholders antes do desenvolvimento do produto real, reduzindo o risco de retrabalho na fase de construção. Em 2026, revisitei o case publicamente como prova de rigor técnico: fluxos funcionais de ponta a ponta, zero dependências de runtime, CSP restritiva e WCAG 2.2 AA auditada com axe-core — sem violações.",
    overview:
      "Protótipo de autovistoria de seguro — automóvel e residência — feito pra rodar inteiramente no navegador, sem back-end: login por CPF, home com o status de cada vistoria, e os dois fluxos completos (dados pessoais, dados do bem e fotos) com validação, máscaras, upload com pré-visualização, rascunho automático em sessionStorage, confirmação em <dialog> nativo e protocolo de envio. HTML, CSS e JavaScript puros, sem framework, auditado com axe-core para WCAG 2.2 AA e publicado no GitHub Pages.",
    methodology: "Protótipo Revisitado em Par com IA (Claude)",
    methodologyDesc:
      "Voltei a um protótipo de 2020 com o olhar de hoje: primeiro mapeei o que já funcionava na jornada original, depois priorizei o que mudaria num projeto novo — fluxos de verdade em vez de telas estáticas, acessibilidade desde o início e zero dependências desnecessárias. O Claude atuou como par de engenharia em cada decisão técnica: da arquitetura que lê a estrutura do HTML pra validar cada campo por atributos (em vez de reescrever JavaScript a cada campo novo), até a auditoria de acessibilidade tela a tela com axe-core e a escrita da Content Security Policy sem estilos nem scripts inline.",
    problem:
      "Como transformar uma vistoria presencial de seguro em uma autovistoria pelo celular que o segurado faz sozinho, sem perder a confiança, a clareza nem a acessibilidade que um processo de seguro exige?",
    sections: [
      {
        title: "Uma Vistoria Presencial Vira Autovistoria",
        content:
          "Pra contratar ou renovar um seguro de carro ou de casa, a seguradora precisa confirmar o estado do bem — tradicionalmente numa vistoria presencial: agendar horário, esperar o vistoriador ou levar o carro até um posto, pra só depois a análise começar. Desenhei e construí o protótipo de uma autovistoria: o próprio segurado faz a vistoria pelo celular, no horário que quiser, respondendo alguns dados e tirando as fotos pedidas — validando a jornada e a interface com usuários e stakeholders antes do desenvolvimento do produto real.",
        imgs: [
          "/images/cases/auto-vistoria/img-home.jpg",
        ],
      },
      {
        title: "Um Fluxo Só Para Dois Produtos",
        content:
          "Vistoria de automóvel e vistoria residencial seguem o mesmo esqueleto — dados pessoais, dados do bem, fotos — divididas em etapas curtas com um indicador de progresso que permite voltar a qualquer etapa já visitada. Quem aprende um fluxo já sabe usar o outro, e a equipe mantém um único padrão em vez de dois produtos desenhados em paralelo. Cada pedido de foto mostra uma imagem de referência do enquadramento esperado, reduzindo fotos inúteis e retrabalho na análise.",
        imgs: [
          "/images/cases/auto-vistoria/img-login.jpg",
          "/images/cases/auto-vistoria/img-vistoria-automovel.jpg",
        ],
      },
      {
        title: "Erros Que Ajudam, Progresso Que Não Se Perde",
        content:
          "Construí validação por etapa com mensagem em cada campo e um resumo de erros navegável por link, além de máscaras para CPF, telefone, CEP, placa, chassi e quilometragem — e regras específicas como dígito verificador de CPF, placa no padrão Mercosul ou antigo e chassi de 17 caracteres. O upload de fotos e documentos ganhou pré-visualização local, barra de progresso e validação de tipo e tamanho; se a pessoa sai no meio da vistoria, o rascunho fica salvo e o fluxo continua de onde parou ao voltar.",
        imgs: [
          "/images/cases/auto-vistoria/img-vistoria-fotos.jpg",
        ],
        compact: true,
      },
      {
        title: "Revisitando o Case em 2026, Com Rigor de Produção",
        content:
          "O protótipo nasceu em 2020, numa empresa onde trabalhei; recriei o case usando uma marca fictícia — Lar&Via Seguros — pra preservar a empresa e o cliente originais, sem alterar a jornada real. Na revisão de 2026, com o Claude como par de engenharia, tirei jQuery, Bootstrap, Popper e o datetimepicker do projeto (zero dependências de runtime), reescrevi o CSS como design system próprio, liguei a Content Security Policy sem 'unsafe-inline' e auditei todas as telas e estados com axe-core até zerar violações de WCAG 2.2 AA.",
        imgs: [
          "/images/cases/auto-vistoria/img-mobile-residencial.jpg",
        ],
        compact: true,
      },
    ],
    kpis: [
      { v: "0", l: "Dependências de runtime" },
      { v: "9", l: "Regras de validação" },
      { v: "8", l: "Fotos guiadas por vistoria" },
      { v: "AA", l: "WCAG 2.2, auditado com axe-core" },
    ],
    results: [
      "Dois fluxos completos (automóvel e residência) com validação por etapa, máscaras e resumo de erros navegável",
      "Upload de fotos e documentos com pré-visualização local, progresso e rascunho automático em sessionStorage",
      "Acessibilidade WCAG 2.2 AA auditada com axe-core em todas as telas e estados, sem violações",
      "Zero dependências de runtime — jQuery, Bootstrap, Popper e datetimepicker removidos do projeto",
      "Content Security Policy sem 'unsafe-inline' e nenhum dado enviado a servidor — tudo roda no navegador",
      "CI com HTMLHint e deploy automático no GitHub Pages",
    ],
  },

  // ── 11 — CASE NOVO: Gestão OPME ──────────────────────────────────────────
  {
    id: "gestao-opme",
    tag: "Designer Engineer · Saúde Suplementar",
    title: "Gestão OPME",
    description:
      "Negociação e compra de OPME (órteses, próteses e materiais especiais) para uma operadora de saúde — solicitação em 5 etapas, negociação com histórico de propostas, aprovação por alçada e mapa de economia. Protótipo de 2020 revisitado em 2026.",
    accent: "#0B6D77",
    bg: "#071D20",
    size: "small",
    heroImg:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1400&q=85&auto=format",
    thumbImg:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80&auto=format",
    figmaLink: null,
    externalLink: "https://fernandopinhel.github.io/OPME/",
    githubLink: "https://github.com/fernandopinhel/OPME",
    year: "2020 · Revisitado em 2026",
    role: "Product Designer · Front-end Developer",
    client: "Operadora de saúde — marca fictícia no case (Valora Saúde) para preservar o cliente original",
    challenge:
      "OPME é uma das contas mais caras de uma operadora de saúde — uma prótese de quadril ou um marca-passo custam dezenas de milhares de reais, e o mesmo item pode ter preços bem diferentes de um hospital para outro. Antes do sistema, a compra dependia de planilhas, e-mails e telefonemas: o hospital pedia material sem valor de referência, a operadora não tinha as tabelas negociadas com cada hospital e fornecedor num lugar só, propostas e contrapropostas se perdiam em conversas sem registro, e a aprovação de valores altos não tinha uma alçada clara.",
    impact:
      "O pedido do hospital vira uma solicitação de compra com todo o caminho registrado: itens já comparados a valor de tabela e referência de mercado, negociação proposta a proposta, aprovação por alçada e um mapa consolidado que fecha cada solicitação com a economia em reais e em porcentagem — um número, não uma sensação. Os cadastros de base (hospitais, fornecedores, itens, fabricantes, usuários e permissões) ficam no mesmo sistema, no mesmo padrão de tela.",
    overview:
      "Sistema interno para a equipe de OPME de uma operadora de saúde: painel com indicadores do dia, solicitação de compra em 5 etapas (dados, procedimentos e itens, negociação, aprovação e mapa consolidado), tabelas de valores de hospitais e fornecedores com suspensão em lote, relatório geral de precificação e 9 cadastros guiados por esquema (hospitais, fornecedores, itens, marcas/fabricantes, unidades de medida e de negócio, usuários, grupos de acesso e telas do sistema). HTML, CSS e JavaScript puros, sem framework, auditado com axe-core para WCAG 2.2 AA e publicado no GitHub Pages.",
    methodology: "Protótipo Revisitado em Par com IA (Claude)",
    methodologyDesc:
      "A versão original, de 2020, tinha cerca de 27 telas em Bootstrap e jQuery — a maioria só visual, com dados fixos e a marca do cliente. Na revisão de 2026, com o Claude como par de engenharia, defini um padrão único de interação (etapas com progresso visível, negociação como histórico de propostas em vez de um campo de valor, exclusão sempre protegida) e um esquema de dados por cadastro, de onde o formulário e a tabela de consulta de cada entidade nascem — criar um cadastro novo passou a ser acrescentar um esquema, não desenhar uma tela do zero. O resultado: fluxos que funcionam de ponta a ponta, com dados fictícios gerados de forma determinística, em vez de telas estáticas.",
    problem:
      "Como dar a uma operadora de saúde um sistema único para negociar e aprovar a compra de OPME — do pedido do hospital ao mapa de economia — sem perder rastreabilidade de quem decidiu o quê, nem multiplicar o esforço de design a cada novo cadastro?",
    sections: [
      {
        title: "Um Painel Que Já Abre Mostrando o Que Importa",
        content:
          "A home não é uma lista de módulos — é um painel que resume o dia: solicitações em andamento e quantas são urgentes, itens aguardando aprovação, economia negociada no período e valores de tabela perto de vencer. Logo abaixo, duas listas priorizadas: o que precisa da atenção da pessoa agora e o que vai vencer nos próximos 30 dias. Quem abre o sistema de manhã sabe por onde começar sem precisar caçar informação pelo menu.",
        imgs: [
          "/images/cases/gestao-opme/img-inicio.jpg",
        ],
      },
      {
        title: "Negociação Como Histórico, Não Como Campo de Valor",
        content:
          "O pedido do hospital vira uma solicitação de compra em 5 etapas, com indicador de progresso sempre visível. Cada item já chega com o valor tabelado e com o menor valor entre fornecedores como referência — quem negocia não parte do zero. A negociação fica registrada proposta a proposta: contraproposta da operadora, nova proposta do hospital, aceite de cada lado, sempre com data e responsável. Itens com valor já tabelado podem ser aceitos de uma vez, sobrando trabalho manual só para o que realmente precisa de conversa.",
        imgs: [
          "/images/cases/gestao-opme/img-negociacao.jpg",
          "/images/cases/gestao-opme/img-negociacao-dialogo.jpg",
        ],
      },
      {
        title: "Aprovação por Alçada, Economia à Vista",
        content:
          "A aprovação é por item — dá para aprovar parte da solicitação e reprovar o resto, sempre com motivo obrigatório. Valores acima de R$ 30 mil pedem uma segunda assinatura: o sistema avisa da alçada da diretoria e só libera a aprovação depois do aval registrado. No fim, o mapa consolidado fecha a solicitação com o valor pedido pelo hospital, o valor acordado e a economia — em reais e em porcentagem —, pronto para exportar em CSV ou imprimir.",
        imgs: [
          "/images/cases/gestao-opme/img-aprovacao.jpg",
          "/images/cases/gestao-opme/img-mapa-consolidado.jpg",
        ],
      },
      {
        title: "Um Padrão Para Tabelas e Nove Cadastros",
        content:
          "As tabelas de valores de cada hospital ou fornecedor mostram a situação de cada item — vigente, suspenso, em negociação ou vencido —, com filtros, suspensão em lote e registro de nova proposta sem sair da tela. Os 9 cadastros de base seguem o mesmo padrão de Consulta e Cadastro, descritos por esquema num único arquivo de dados: seções, campos, máscaras e regras de duplicidade. Criar um cadastro novo é acrescentar um esquema, não construir uma tela do zero.",
        imgs: [
          "/images/cases/gestao-opme/img-tabela-de-valores.jpg",
        ],
        compact: true,
      },
      {
        title: "Acessível do Desktop ao Celular",
        content:
          "Revisei a acessibilidade para a WCAG 2.2 AA e verifiquei com axe-core todas as telas e estados — erros, diálogos, menu aberto — no desktop e no celular, sem violações. Mudar de etapa leva o foco ao título da etapa e atualiza o título da aba; o menu no celular funciona como gaveta modal, com o conteúdo de trás inerte e o foco devolvido a quem abriu ao fechar.",
        imgs: [
          "/images/cases/gestao-opme/img-mobile-inicio.jpg",
        ],
        compact: true,
      },
    ],
    kpis: [
      { v: "0", l: "Dependências de runtime" },
      { v: "5", l: "Etapas da solicitação, até o mapa consolidado" },
      { v: "9", l: "Cadastros guiados por esquema" },
      { v: "AA", l: "WCAG 2.2, verificado com axe-core" },
    ],
    results: [
      "Solicitação de compra em 5 etapas: dados, procedimentos e itens, negociação, aprovação e mapa consolidado",
      "Negociação registrada proposta a proposta, com contraproposta da operadora e aceite de cada lado",
      "Aprovação por item, com alçada da diretoria acima de R$ 30 mil e motivo obrigatório para reprovar",
      "Tabelas de valores de hospitais e fornecedores com suspensão em lote, reativação e histórico de propostas",
      "9 cadastros guiados por esquema, com validação, bloqueio de duplicidade e exclusão protegida",
      "Acessibilidade WCAG 2.2 AA verificada com axe-core em todas as telas e estados, sem violações",
    ],
  },

  // ── 12 — CASE NOVO: Sinistro Auto (GSRE) ─────────────────────────────────
  {
    id: "sinistro-auto",
    tag: "Designer Engineer · Seguros · Sinistros",
    title: "Sinistro Auto",
    description:
      "Central de sinistros de automóvel para uma seguradora — do aviso ao pagamento, com distribuição automática, jornada em 6 paradas e liberação em quatro olhos. Protótipo de 2020–2021 revisitado em 2026.",
    accent: "#2D50BD",
    bg: "#0C1333",
    size: "small",
    heroImg:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1400&q=85&auto=format",
    thumbImg:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80&auto=format",
    figmaLink: null,
    externalLink: "https://fernandopinhel.github.io/Sinistro-Auto/",
    githubLink: "https://github.com/fernandopinhel/Sinistro-Auto",
    year: "2020–2021 · Revisitado em 2026",
    role: "Product Designer · Front-end Developer",
    client: "Seguradora — marca fictícia no case (Travessia Seguros) para preservar o cliente original",
    challenge:
      "Quando alguém bate o carro, liga pra seguradora querendo saber três coisas: se está coberto, quando o carro volta e quanto vai pagar. Do outro lado, um time de analistas trata centenas de processos ao mesmo tempo, cada um numa etapa diferente — e no sistema antigo esse trabalho era espalhado: cada pessoa escolhia na mão qual processo abrir (os casos difíceis ficavam pra depois), não havia prazo visível por etapa, orçamento e indenização ficavam em telas soltas sem o saldo da cobertura à vista, e quem pedia um pagamento muitas vezes era quem liberava.",
    impact:
      "O time de sinistros passa a trabalhar sobre uma fila justa, não escolhida — a distribuição automática entrega o próximo processo pela ordem que a supervisão define, e processos distribuídos e esquecidos voltam pra fila sozinhos, com justificativa. O pagamento passa sempre por uma segunda pessoa com alçada pro valor, e o ressarcimento do terceiro culpado começa sozinho ao liberar o pagamento — duas regras que fecham brechas reais de um fluxo manual.",
    overview:
      "Central de sinistros de automóvel para uma seguradora, do aviso ao pagamento: caixa de entrada com fila e distribuição automática, consulta de sinistros, processo com 7 abas (resumo, pareceres, orçamentos, indenizações, documentos, cartas, histórico), aviso de sinistro com abertura automática de processo por cobertura, liberação de pagamentos em quatro olhos, ressarcimentos, indicadores de tempo por etapa e 9 cadastros guiados por esquema. HTML, CSS e JavaScript puros, sem framework, auditado com axe-core para WCAG 2.2 AA e publicado no GitHub Pages.",
    methodology: "Protótipo Revisitado em Par com IA (Claude)",
    methodologyDesc:
      "A versão original, entre 2020 e 2021, tinha cerca de 67 páginas em Bootstrap e jQuery, quase todas só visuais, com dados fixos e a marca do cliente. Na revisão de 2026, com o Claude como par de engenharia, troquei o menu lateral por uma barra de operações no topo (o analista passa o dia dentro do processo, e a ficha larga importa mais que a navegação), desenhei a jornada do sinistro como uma estrada com 6 paradas, e levei pra dentro da interface regras de negócio reais que o sistema antigo só tinha em treinamento — como a regra dos 75% no orçamento e a exigência de quatro olhos no pagamento.",
    problem:
      "Como organizar o trabalho de um time de analistas de sinistros — do aviso ao pagamento — de um jeito que a fila seja justa, o prazo de cada etapa fique visível antes de virar reclamação, e nenhuma pessoa sozinha consiga pedir e liberar o mesmo pagamento?",
    sections: [
      {
        title: "Um Painel Que Já Mostra Por Onde Começar",
        content:
          "A home resume o turno do analista: quantos processos estão na caixa, quantos esperam na fila do grupo, quanto há em pagamentos pra liberar e quantos prazos já estouraram. Um botão — Pegar o próximo processo — leva direto ao primeiro da fila, sem precisar escolher. Embaixo, duas listas priorizadas: o que está na caixa, na ordem que a distribuição sugere, e os prazos estourados, pra atraso nunca ser surpresa.",
        imgs: [
          "/images/cases/gsre/img-inicio.jpg",
        ],
      },
      {
        title: "A Jornada do Sinistro Como Uma Estrada",
        content:
          "Cada processo mostra seis paradas — aviso, documentos, orçamento, reparo, pagamento, encerrado — como uma estrada, com a data de cada uma. Ao lado, uma coluna fixa com situação, prazo, responsável e o saldo da cobertura: o analista vê, num segundo, onde o processo está, o que falta e quanto ainda pode prometer, sem trocar de tela. As abas (pareceres, orçamentos, indenizações, documentos, cartas, histórico) mudam o conteúdo ao lado sem perder esse contexto.",
        imgs: [
          "/images/cases/gsre/img-processo.jpg",
        ],
      },
      {
        title: "A Regra dos 75% e os Quatro Olhos no Pagamento",
        content:
          "Quando o orçamento do reparo passa de 75% do valor do veículo, o caminho vira indenização integral — o formulário avisa enquanto o valor é digitado, e a autorização fica bloqueada acima do limite, abaixo da franquia ou sem saldo na cobertura. No pagamento, quem pede não libera: a liberação exige alçada pro valor e nunca aceita o próprio pedido de quem está liberando, com a tela explicando, linha a linha, por que um pagamento não pode ser selecionado.",
        imgs: [
          "/images/cases/gsre/img-orcamento-autorizar.jpg",
          "/images/cases/gsre/img-pagamentos.jpg",
        ],
      },
      {
        title: "Pegar o Próximo Processo, Não Escolher",
        content:
          "Quando cada analista escolhe o que atender, os casos difíceis envelhecem na fila. A distribuição automática entrega o primeiro da ordem — definida pela supervisão, não por quem está com pressa — e mostra por que cada processo está naquela posição (novidade, vistoria prioritária, tempo parado). Um processo distribuído e esquecido volta sozinho pra fila depois do prazo da caixa, pedindo justificativa.",
        imgs: [
          "/images/cases/gsre/img-caixa.jpg",
        ],
        compact: true,
      },
      {
        title: "Indicadores Que a Gestão Enxerga",
        content:
          "O módulo de indicadores soma o tempo médio de cada etapa — do envio de documentos à liberação do pagamento — como tabela com barra, não como gráfico isolado: o número vale tanto pra quem enxerga quanto pra quem usa leitor de tela, e exporta em CSV. É a tela que transforma 'a fila está lenta' numa etapa específica pra investigar.",
        imgs: [
          "/images/cases/gsre/img-indicadores.jpg",
        ],
        compact: true,
      },
      {
        title: "Revisitando o Case em 2026",
        content:
          "Reescrevi tudo em HTML, CSS e JavaScript puros — zero dependências de runtime —, removendo Bootstrap, jQuery, CKEditor, plugins de galeria e calendário, e cerca de 85 MB de arquivos da versão original. Revisei a acessibilidade pra WCAG 2.2 AA, verificada com axe-core em todas as telas e estados, desktop e celular: a jornada do sinistro vira lista vertical no celular, o menu abre como gaveta modal com o conteúdo de trás inerte, e a ordem da fila se reorganiza por botões de subir e descer, sem depender de arrastar.",
        imgs: [
          "/images/cases/gsre/img-mobile-processo.jpg",
        ],
        compact: true,
      },
    ],
    kpis: [
      { v: "13", l: "Páginas, do aviso ao pagamento" },
      { v: "6", l: "Paradas na jornada do sinistro" },
      { v: "0", l: "Dependências de runtime" },
      { v: "AA", l: "WCAG 2.2, verificado com axe-core" },
    ],
    results: [
      "Jornada do sinistro com 6 paradas (aviso, documentos, orçamento, reparo, pagamento, encerrado) sempre visível na ficha do processo",
      "Distribuição automática entrega o próximo processo pela ordem da fila — ninguém escolhe os casos fáceis",
      "Regra dos 75%: acima do limite a autorização de reparo é bloqueada e o caminho vira indenização integral",
      "Pagamento sempre em quatro olhos — quem pede não libera, e quem libera precisa de alçada para o valor",
      "Ressarcimento do terceiro culpado aberto automaticamente ao liberar o pagamento",
      "9 cadastros guiados por esquema, zero dependências de runtime e acessibilidade WCAG 2.2 AA verificada com axe-core",
    ],
  },

  // ── 13 — CASE NOVO: Contratação de Previdência ───────────────────────────
  {
    id: "amparo-previdencia",
    tag: "Designer Engineer · Previdência Privada",
    title: "Contratação de Previdência",
    description:
      "Contratação de previdência privada em 4 etapas, dentro de um app parceiro de delivery — explicação a um toque para cada termo técnico e fundos comparáveis por perfil de risco. Protótipo de 2020 revisitado em 2026.",
    accent: "#D3192A",
    bg: "#1A0508",
    size: "small",
    heroImg:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&q=85&auto=format",
    thumbImg:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80&auto=format",
    figmaLink: null,
    externalLink: "https://fernandopinhel.github.io/amparo-previdencia/",
    githubLink: "https://github.com/fernandopinhel/amparo-previdencia",
    year: "2020 · Revisitado em 2026",
    role: "Product Designer · Front-end Developer",
    client: "Seguradora e app parceiro — marcas fictícias no case (Amparo Previdência e Rango) para preservar os clientes originais",
    challenge:
      "Uma seguradora queria vender previdência privada dentro do app de um parceiro de delivery, para um público que nunca tinha contratado um plano. O caminho que existia era o sistema interno de contratação, feito para corretores: uma tela longa, cheia de selects, com termos técnicos (PGBL, VGBL, regime tributário) sem explicação, e uma tabela de fundos difícil de comparar — quem chegava pelo app descobria só no fim que o valor digitado era menor que o mínimo do fundo.",
    impact:
      "A contratação virou 4 etapas curtas com a cara do app parceiro: cada escolha técnica ganhou uma explicação a um toque, os fundos passaram a se comparar por perfil de risco, e o valor é validado contra o mínimo do fundo enquanto a pessoa digita — não no fim. Um resumo da compra acompanha o pagamento, com atalhos para alterar qualquer escolha anterior.",
    overview:
      "Contratação de previdência privada em 4 etapas (plano, valores e fundo, dados, pagamento) dentro de um app parceiro de delivery: blocos de escolha no lugar de selects, explicação a um toque para cada termo técnico, tabela de 11 fundos filtrável por perfil de risco, validação de valores contra o mínimo de cada fundo, resumo da compra ao vivo e confirmação com protocolo. HTML, CSS e JavaScript puros, auditado com axe-core para WCAG 2.2 AA e publicado no GitHub Pages.",
    methodology: "Protótipo Revisitado em Par com IA (Claude)",
    methodologyDesc:
      "Diferente dos outros cases, aqui o objetivo não era substituir a identidade visual — era modernizar o acabamento sem perder o que dava personalidade ao protótipo de 2020: a faixa vermelha no topo, as etapas em círculos numerados, os cartões com rótulo flutuante, a tabela de fundos com borda no hover. Com o Claude como par de engenharia, mapeei elemento por elemento o que ficava e o que mudava — e corrigi o que o protótipo original tinha de errado escondido atrás do visual: o valor da contribuição usava a máscara de CPF, a seção de contato se chamava 'Endereço residencial', e todos os fundos tinham o mesmo nome.",
    problem:
      "Como modernizar a contratação de um produto financeiro complexo para quem nunca comprou um — dentro de um app que não é o da seguradora — sem perder a identidade visual que já existia nem esconder os termos técnicos que a pessoa precisa entender antes de decidir?",
    sections: [
      {
        title: "Uma Etapa Por Vez, Com a Cara do App Parceiro",
        content:
          "A faixa vermelha no topo mistura a marca do app de delivery parceiro com a da seguradora — é ali, dentro do app que a pessoa já usa todo dia, que a previdência é oferecida. Mantive o desenho das etapas em círculos numerados do protótipo de 2020, mas cada uma ganhou um rótulo, e a linha entre elas agora fica vermelha conforme avança, não só quando termina.",
        imgs: [
          "/images/cases/amparo-previdencia/img-sucesso.jpg",
        ],
      },
      {
        title: "Uma Pergunta Técnica, Uma Explicação a Um Toque",
        content:
          "PGBL ou VGBL, regime progressivo ou regressivo: são escolhas que decidem quanto imposto a pessoa paga anos depois, e ninguém deveria adivinhar. Cada escolha técnica ficou em blocos — não em selects — com uma frase direta do que significa, e um link 'Qual é a diferença?' abre a explicação completa num diálogo curto, sem tirar a pessoa da etapa.",
        imgs: [
          "/images/cases/amparo-previdencia/img-etapa-plano-preenchida.jpg",
        ],
      },
      {
        title: "Fundos Que Se Comparam Pelo Risco, Não Pelo Nome",
        content:
          "A tabela de 11 fundos ganhou um filtro por perfil — conservador, moderado, arrojado —, a forma como as pessoas realmente pensam em risco. A linha escolhida fica em destaque mesmo ao rolar, e o diálogo de detalhes mostra taxa de administração, taxa de performance, renda variável e os valores mínimos antes de confirmar.",
        imgs: [
          "/images/cases/amparo-previdencia/img-fundos.jpg",
          "/images/cases/amparo-previdencia/img-detalhes-fundo.jpg",
        ],
      },
      {
        title: "O Valor Contra o Mínimo, Antes do Fim",
        content:
          "Se o fundo escolhido pede R$ 500 por mês e a pessoa digitou R$ 300, o aviso aparece no campo do valor — com o mínimo escrito —, não só numa mensagem genérica ao tentar avançar. Trocar de fundo revalida o valor na hora. No pagamento, um resumo ao vivo acompanha fundo, valores, plano e o total da primeira cobrança, com atalhos para alterar qualquer etapa anterior sem perder o que já foi preenchido.",
        imgs: [
          "/images/cases/amparo-previdencia/img-pagamento.jpg",
        ],
        compact: true,
      },
      {
        title: "Revisitando o Case em 2026",
        content:
          "Reescrevi tudo em HTML, CSS e JavaScript puros — zero dependências de runtime —, removendo Bootstrap, jQuery, Popper, jQuery Mask e um datetimepicker com 46 arquivos de idioma. A fonte continua sendo a mesma DM Sans do original, agora carregada do Google Fonts. Revisei a acessibilidade para WCAG 2.2 AA, verificada com axe-core: os fundos viram cartões no celular, mantendo o rádio nativo por trás de cada um.",
        imgs: [
          "/images/cases/amparo-previdencia/img-mobile-fundos.jpg",
        ],
        compact: true,
      },
    ],
    kpis: [
      { v: "4", l: "Etapas, do plano ao pagamento" },
      { v: "11", l: "Fundos comparáveis por perfil de risco" },
      { v: "0", l: "Dependências de runtime" },
      { v: "AA", l: "WCAG 2.2, verificado com axe-core" },
    ],
    results: [
      "Contratação em 4 etapas com identidade visual preservada do protótipo original de 2020",
      "Explicação a um toque para cada escolha técnica (PGBL/VGBL, regime tributário)",
      "11 fundos filtráveis por perfil de risco, com valores validados contra o mínimo de cada um",
      "Resumo da compra ao vivo, com atalhos para alterar qualquer etapa anterior",
      "Correção de conteúdo escondido atrás do visual: máscara errada, seção duplicada, fundos com nome repetido",
      "Acessibilidade WCAG 2.2 AA verificada com axe-core em todas as etapas e estados, sem violações",
    ],
  },

  // ── 14 — CASE NOVO: Suíte Orla ───────────────────────────────────────────
  {
    id: "suite-orla",
    tag: "Design Systems · Saúde Suplementar",
    title: "Suíte Orla",
    description:
      "Três sistemas de gestão de rede de uma operadora de saúde — negociar, formalizar e medir aditivos — construídos sobre um design system compartilhado. Protótipos de 2020–2021 revisitados em 2026.",
    accent: "#2C5282",
    bg: "#0C1824",
    size: "small",
    heroImg:
      "/images/cases/suite-orla/img-suite-cards.jpg",
    thumbImg:
      "/images/cases/suite-orla/img-suite-cards.jpg",
    figmaLink: null,
    externalLink: "https://fernandopinhel.github.io/redeMais/",
    githubLink: "https://github.com/fernandopinhel/redeMais",
    year: "2020–2021 · Revisitado em 2026",
    role: "Product Designer · Design Systems · Front-end Developer",
    client: "Operadora de saúde — marca fictícia no case (Orla Saúde) para preservar o cliente original",
    challenge:
      "Uma operadora de saúde mantém contratos com centenas de hospitais e clínicas, e cada mudança de preço ou serviço vira um aditivo contratual. Esse caminho passava por três sistemas que tinham crescido separados, todos com a mesma cara de Bootstrap, e por muitas planilhas: a equipe negociava pacotes de procedimentos e calculava a economia numa planilha de premissas, o acordo virava uma ficha que passava por distribuição, emissão, assinatura e implantação sem que ninguém soubesse ao certo onde cada ficha estava parada, e no fim a gestão comparava a economia dos aditivos com a meta do trimestre, também em planilha.",
    impact:
      "Três produtos — negociar, formalizar, medir — passam a compartilhar um único design system, mas com identidade e layout próprios para o trabalho de cada um: mesa de negociação com lista e ficha lado a lado, quadro por fase com relógio de prazo, placar do trimestre com ritmo esperado. O acesso de demonstração vale para a suíte inteira, e o alternador de produtos no topo leva de um sistema a outro sem novo login.",
    overview:
      "Suíte de três sistemas para a equipe de rede de uma operadora de saúde: Orla Mesa (negociação de pacotes com memória de cálculo da economia), Orla Esteira (esteira de fichas de aditivo em quadro por fase, da distribuição à implantação) e Orla Placar (acompanhamento da economia contra a meta de cada trimestre). Os três compartilham o Orla DS, um design system próprio com tokens, componentes, CRUD guiado por esquema e página de documentação viva. HTML, CSS e JavaScript puros, sem framework, auditado com axe-core para WCAG 2.2 AA e publicado no GitHub Pages.",
    methodology: "Design System Compartilhado, Revisitado em Par com IA (Claude)",
    methodologyDesc:
      "Os três protótipos originais usavam a mesma base visual — o que ajudava na manutenção, mas fazia os produtos parecerem iguais e escondia o que cada um tinha de diferente. Com o Claude como par de engenharia, separei o que é comum (tokens, componentes, comportamento) do que é específico de cada produto: cada tema vira 15 linhas de CSS redefinindo a escala de cor, a cor de apoio e os tons do login, e o resto do design system cuida do resto. O símbolo da marca (uma onda) se repete nos três, e cada produto ganha o seu desenho em cima dela — dois círculos que se cruzam na Mesa, setas em sequência na Esteira, barras subindo no Placar.",
    problem:
      "Como dar a três sistemas que nasceram separados uma linguagem visual em comum, sem apagar o que cada um tem de específico para o trabalho que apoia — negociar, formalizar ou medir?",
    sections: [
      {
        title: "Três Produtos, Uma Vitrine Só",
        content:
          "A suíte abre numa página que apresenta os três produtos na ordem do trabalho real — negociar, formalizar, medir — cada um com seu símbolo, sua cor e um resumo do que faz. O acesso de demonstração vale para os três, e um alternador no topo de cada produto leva aos outros dois sem pedir login de novo.",
        imgs: [
          "/images/cases/suite-orla/img-suite.jpg",
        ],
      },
      {
        title: "Orla Mesa: a Economia Calculada, Não Prometida",
        content:
          "A mesa de negociação mostra lista e ficha lado a lado — quem negocia passa por dezenas de prestadores por dia, e trocar de negociação sem perder a lista de vista corta cliques. O funil de economia (potencial, negociada, implantada) recalcula enquanto o valor é digitado, e a antiga planilha de premissas virou uma memória de cálculo de 11 passos: senhas, custo médio, inflação, alçada — ninguém precisa confiar num número sem saber de onde ele veio.",
        imgs: [
          "/images/cases/suite-orla/img-mesa.jpg",
          "/images/cases/suite-orla/img-mesa-memoria.jpg",
        ],
      },
      {
        title: "Orla Esteira: o Prazo Como Protagonista",
        content:
          "O sistema original mostrava 17 status numa tabela de contagens. Na Esteira, eles cabem em 4 fases num quadro, e cada cartão tem um relógio: no prazo, vence hoje ou amanhã, atrasada — as mais perto de estourar aparecem primeiro em cada coluna. Uma ficha devolvida guarda o motivo e volta para a mesma etapa quando a correção chega, em vez de se perder na esteira.",
        imgs: [
          "/images/cases/suite-orla/img-esteira.jpg",
        ],
      },
      {
        title: "Orla Placar: Ritmo, Não Só Total",
        content:
          "O placar do trimestre não mostra só o quanto já foi economizado contra a meta — a barra tem uma marca do ritmo esperado para o dia de hoje, então 30% da meta no início do trimestre aparece como bom sinal, não como atraso. Um trimestre pode ser congelado: a versão congelada não muda mais, e a comparação mostra exatamente o que mudou desde então.",
        imgs: [
          "/images/cases/suite-orla/img-placar.jpg",
        ],
        compact: true,
      },
      {
        title: "Orla DS: Um Tema em 15 Linhas",
        content:
          "O design system compartilhado fica documentado numa página viva, com os tokens de cor de cada produto lado a lado — a mesma escala de --accent-50 a --accent-900, a cor de apoio e os tons do login, só trocados por produto. Os 15 cadastros de apoio da suíte inteira usam um CRUD guiado por esquema: descrever um cadastro novo em poucas linhas basta para ele ganhar consulta, formulário e validação.",
        imgs: [
          "/images/cases/suite-orla/img-design-system.jpg",
        ],
        compact: true,
      },
      {
        title: "Revisitando o Case em 2026",
        content:
          "Reescrevi os três protótipos em HTML, CSS e JavaScript puros — zero dependências de runtime —, removendo Bootstrap, jQuery, plugins, Font Awesome e cerca de 120 MB de arquivos das três versões originais. Revisei a acessibilidade para WCAG 2.2 AA, verificada com axe-core nas telas, nos estados de erro, nos diálogos e no celular dos três produtos, sem violações.",
        imgs: [
          "/images/cases/suite-orla/img-mobile-mesa.jpg",
        ],
        compact: true,
      },
    ],
    kpis: [
      { v: "3", l: "Produtos sobre um design system compartilhado" },
      { v: "15", l: "Cadastros de apoio guiados por esquema" },
      { v: "0", l: "Dependências de runtime" },
      { v: "AA", l: "WCAG 2.2, verificado com axe-core" },
    ],
    results: [
      "Três produtos — negociar, formalizar, medir — com identidade e layout próprios sobre um único design system",
      "Mesa de negociação com economia calculada ao vivo e memória de cálculo de 11 passos",
      "Esteira de aditivos em quadro por fase, com relógio de prazo em cada ficha",
      "Placar do trimestre com ritmo esperado e congelamento de versão para comparação confiável",
      "Orla DS com tokens, componentes, CRUD guiado por esquema e página de documentação viva",
      "Acessibilidade WCAG 2.2 AA verificada com axe-core nos três produtos, desktop e celular, sem violações",
    ],
  },
];