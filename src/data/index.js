// ─── DATA ───────────────────────────────────────────────────────────────────
// Central data source for all portfolio content.
// Update this file to add/edit projects, articles, skills and trajectory.

export const NAV_LINKS = ["Sobre", "Projetos", "Artigos", "Contato"];

export const SKILLS = [
  "Product Design", "UX Research", "UI Design", "IA",
  "Figma", "Prototipagem", "Design Systems", "Front-end",
  "Acessibilidade", "React", "Web Design", "Branding",
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
  // ── 1 ─────────────────────────────────────────────────────────────────────
  {
    id: "dashboard-gestao-alunos",
    tag: "UX/UI · Gestão Pública",
    title: "Dashboard Gestão de Alunos",
    description:
      "Dashboard para gerenciar alunos utilizando reconhecimento facial. Interface complexa de dados com foco em usabilidade para gestores da rede estadual.",
    accent: "#C8FF00",
    bg: "#0D1A0D",
    size: "large",
    heroImg:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85&auto=format",
    thumbImg:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format",
    figmaLink:
      "https://www.figma.com/proto/UQQ6gtXrroI58tX0Vr2vnb/Projeto-Reconhecimento-Facial?page-id=23%3A1547&type=design&node-id=23-5588",
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
          "images/cases/dashboard/img-wireframe.png",
        ],
      },
      {
        title: "Guia de Estilo & Interface Final",
        content:
          "Criamos um guia de estilo completo com tokens de cor, tipografia, componentes de dados (tabelas, gráficos, cards de presença) e estados interativos. A paleta verde-neon reforça o contexto de monitoramento em tempo real. O protótipo navegável no Figma foi apresentado à secretaria estadual com todos os 12 fluxos documentados.",
        imgs: [
          "images/cases/dashboard/img-prototipo-01.png",
          "images/cases/dashboard/img-prototipo-02.png",
          "images/cases/dashboard/img-prototipo-03.png",
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

  // ── 2 ─────────────────────────────────────────────────────────────────────
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
          "images/cases/paparazzo-rrn/img-mapa-de-empatia.png",
        ],
      },
      {
        title: "Fluxo, Wireframe & Protótipo",
        content:
          "Definimos 5 módulos principais: Feed exclusivo, Ao vivo, Sorteios, Loja e Perfil. O onboarding foi projetado para 3 telas — clean e direto. O protótipo navegável no Figma apresenta a jornada completa com microinterações, sistema de notificações push e integração com pagamento.",
        imgs: [
          "images/cases/paparazzo-rrn/img-wireframe.png",
          "images/cases/paparazzo-rrn/img-prototipo.png",
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

  // ── 3 ─────────────────────────────────────────────────────────────────────
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
    externalLink: "https://www.aquiemprestimo.com.br/",
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
          "images/cases/aqui-emprestimo/img-site-map.png",
          "images/cases/aqui-emprestimo/img-wireframe.png",
          "images/cases/aqui-emprestimo/img-mockup.png",
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

  // ── 4 ─────────────────────────────────────────────────────────────────────
  {
    id: "bradesco-saude-ans",
    tag: "UX/UI · Saúde",
    title: "Bradesco Saúde × ANS",
    description:
      "Sistema de gestão com dashboards analíticos, cadastro de NIPs e guia de estilo corporativo adotado em produtos internos.",
    accent: "#FF6B35",
    bg: "#1A0E08",
    size: "large",
    heroImg:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=85&auto=format",
    thumbImg:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format",
    figmaLink: null,
    year: "2020",
    role: "Product Designer · Front-end Developer",
    client: "Bradesco Saúde & ANS",
    challenge:
      "Analistas da Bradesco Saúde e da ANS precisavam consultar e cadastrar NIPs com agilidade e precisão — qualquer erro poderia impactar diretamente a vida de beneficiários.",
    impact: "Guia de estilo adotado em outros produtos internos da empresa.",
    overview:
      "Plataforma de gestão de NIPs (Notificações de Interdições Preliminares) para Bradesco Saúde em parceria com a ANS. Inclui dashboards estatísticos, módulo de cadastro e consulta, e guia de estilo corporativo.",
    methodology: "Processo híbrido: Design + Front-end Development",
    methodologyDesc:
      "Período em que designers atuavam como front-end developers. Além do design, implementei toda a interface em HTML, CSS/SASS e JavaScript — antes das ferramentas modernas de prototipagem.",
    problem:
      "Analistas precisavam de um sistema eficiente para consultar e cadastrar NIPs, garantindo conformidade regulatória e visão estratégica dos dados de saúde.",
    // video: "SEU_YOUTUBE_ID_AQUI",
    video: "videos/bradesco/ans/navegacao-ans.mp4",
    sections: [
      {
        title: "Contexto: O Designer que Também Codava",
        content:
          "2020 marcou uma virada no mercado. Nesse projeto, fui responsável pelo design e pela implementação front-end completa. Cada componente desenhado era construído do zero em HTML/SASS, garantindo fidelidade pixel-perfect entre o mockup e o produto final.",
        imgs: [
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80&auto=format",
        ],
      },
      {
        title: "Público de Alto Critério",
        content:
          "Analistas de saúde com perfil altamente técnico, de 30-55 anos, com alto nível acadêmico em regulação. Realizamos entrevistas com analistas para mapear o fluxo real de trabalho e os pontos de frustração do sistema legado.",
        imgs: [
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format",
        ],
      },
      {
        title: "Guia de Estilo & Implementação",
        content:
          "Criei um guia de estilo para este projeto com tokens de cor, tipografia e 60+ componentes documentados para ambientes de alta densidade de dados. O Guia foi adotado em mais produtos internos. A implementação front-end utilizou CSS/SASS modular com BEM.",
        imgs: [
          "images/cases/ans/img-prototipo.png",
        ],
      },
    ],
    results: [
      "Guia de estilo com 60+ componentes adotado em 7 produtos",
      "Redução no tempo médio de tarefa dos analistas",
      "Sistema de NIPs 100% conforme regulamentações da ANS",
      "Dashboards analíticos com 3 camadas de hierarquia de acesso",
      "Implementação front-end completa em HTML, CSS/SASS e JS",
    ],
  },

  // ── 5 — CASE NOVO: Painel de Aditivos ────────────────────────────────────
  {
    id: "painel-aditivos",
    tag: "UX/UI · Saúde · B2B",
    title: "Painel de Aditivos — Bradesco Saúde",
    description:
      "SGTA – sistema interno de gestão de aditivos contratuais da Bradesco Saúde. Fluxos complexos simplificados para analistas de contratos.",
    accent: "#FF6B35",
    bg: "#180F06",
    size: "small",
    heroImg:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1400&q=85&auto=format",
    thumbImg:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80&auto=format",
    figmaLink: null,
    year: "2020",
    role: "Product Designer · Front-end Developer",
    client: "Bradesco Saúde",
    challenge:
      "Analistas de contratos gerenciavam aditivos em planilhas e e-mails — processo sujeito a erros críticos, sem rastreabilidade e com alto risco regulatório.",
    impact:
      "Sistema implantado com rastreabilidade completa de aditivos e redução de retrabalho para a equipe de contratos.",
    overview:
      "SGTA (Sistema de Gestão de Termos e Aditivos) para Bradesco Saúde. Plataforma interna que centraliza a criação, edição, aprovação e histórico de aditivos contratuais de planos de saúde corporativos.",
    methodology: "Processo híbrido: Design + Front-end Development",
    methodologyDesc:
      "Levantamento de requisitos junto ao time jurídico e de contratos, mapeamento dos fluxos existentes em planilhas, wireframes e implementação front-end integrada ao back-end Java.",
    problem:
      "Como digitalizar e auditar o ciclo de vida completo de aditivos contratuais, eliminando processos manuais e garantindo conformidade regulatória?",
    // video: "SEU_YOUTUBE_ID_AQUI",
    video: "videos/bradesco/sgta/navegacao-sgta.mp4",
    sections: [
      {
        title: "Diagnóstico: Caos Documental",
        content:
          "O time de contratos trabalhava com múltiplas versões de planilhas compartilhadas por e-mail. Sem versionamento, sem aprovações rastreáveis e sem visão consolidada dos aditivos ativos.",
        imgs: [
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80&auto=format",
        ],
      },
      {
        title: "Mapeamento de Fluxo & Wireframes",
        content:
          "Mapeei 7 perfis de acesso com permissões distintas: analista, supervisor, jurídico, financeiro, diretoria e auditoria. O fluxo de aprovação passou a ter 4 etapas digitais com notificação automática — substituindo 12 e-mails manuais por ciclo.",
        imgs: [
          "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=900&q=80&auto=format",
        ],
      },
      {
        title: "Interface & Implementação",
        content:
          "O sistema foi desenvolvido com o mesmo guia de estilo do projeto ANS, garantindo consistência visual entre os sistemas internos. Implementação front-end em HTML/CSS/SASS com componentes reutilizáveis documentados.",
        imgs: [
          "images/cases/painel-aditivo/img-prototipo.png",
        ],
      },
    ],
    results: [
      "7 perfis de acesso com permissões granulares por módulo",
      "Fluxo de aprovação digital em 4 etapas — fim dos e-mails manuais",
      "Histórico completo de versões e auditoria por aditivo",
      "Consistência visual com o Guia de Estilo interno da Bradesco",
      "Implementação front-end integrada ao back-end Java",
    ],
  },

  // ── 6 ─────────────────────────────────────────────────────────────────────
  {
    id: "generali",
    tag: "UX/UI · Seguros",
    title: "Cotação de Seguros Generali",
    description:
      "Jornada conversacional que eliminou formulários longos — case premiado internamente como inovação.",
    accent: "#A78BFA",
    bg: "#0F0A1A",
    size: "small",
    heroImg:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=85&auto=format",
    thumbImg:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format",
    figmaLink: null,
    year: "2021",
    role: "Product Designer · Front-end Developer",
    client: "Generali & Vivo",
    challenge:
      "A Generali precisava de uma experiência que engajasse e convertesse usuários que normalmente abandonavam formulários longos de cotação de seguros.",
    impact: "Projeto premiado internamente como case de inovação.",
    overview:
      "Sistema de cotação de seguros online para Generali em parceria com a Vivo. Abordagem conversacional por etapas, eliminando formulários longos e humanizando o processo de contratação.",
    methodology: "Processo híbrido: Design + Front-end Development",
    methodologyDesc:
      "Guia de estilo e implementação front-end completos. Projeto desenvolvido com protótipos construídos diretamente em código, na era pré-Figma dominante.",
    problem:
      "Como transformar uma jornada burocrática de cotação de seguros em algo fluido, envolvente e com alta taxa de conclusão?",
    // video: "SEU_YOUTUBE_ID_AQUI",
    video: "videos/generali/navegacao-generali.mp4",
    sections: [
      {
        title: "O Problema dos Formulários Intermináveis",
        content:
          "Realizamos benchmark de concorrentes e 3 referências internacionais para identificar padrões que funcionavam. O formulário original tinha 40 campos em uma única página — taxa de abandono altíssima. A solução: transformar cada grupo de perguntas em uma conversa.",
        imgs: [
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80&auto=format",
        ],
      },
      {
        title: "Solução Conversacional por Etapas",
        content:
          "Transformamos 40 campos em 8 etapas de 1-3 perguntas cada. Cada etapa tem um propósito claro, progresso visível e linguagem coloquial ('Qual o seu carro?' ao invés de 'Informe o modelo do veículo segurado'). Adicionamos ilustrações contextuais e micro-animações de transição.",
        imgs: [
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&q=80&auto=format",
        ],
      },
      {
        title: "Guia de Estilo & Reconhecimento",
        content:
          "O guia de estilo foi documentado e apresentado para toda a empresa. O case foi premiado internamente como inovação — reconhecimento que validou a abordagem centrada no usuário em um setor tradicionalmente conservador.",
        imgs: [
          "images/cases/generali/img-prototipo.png",
        ],
      },
    ],
    results: [
      "Tempo de cotação: de 12 min para 8 min",
      "Formulários de 40 campos → 8 etapas conversacionais",
      "Case premiado internamente como inovação",
      "Guia de estilo documentado e apresentado à empresa",
    ],
  },

  // ── 7 — CASE NOVO: Sites / Web Design ────────────────────────────────────
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
          "images/cases/sites/site-ccjxxiii.png",
          "images/cases/sites/site-pitila-ramalhoto.png",
          "images/cases/sites/aictv.png",
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

  // ── 8 ─────────────────────────────────────────────────────────────────────
  {
    id: "branding",
    tag: "Branding · Gráfico",
    title: "Branding & Social Media",
    description:
      "10+ identidades visuais criadas do zero com manual de marca, aplicações e social media para marcas em diferentes segmentos.",
    accent: "#F472B6",
    bg: "#1A0A12",
    size: "large",
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
          "images/cases/branding/1-slide.png",
          "images/cases/branding/2-slide.png",
          "images/cases/branding/3-slide.png",
          "images/cases/branding/4-slide.png",
          "images/cases/branding/5-slide.png",
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
];
