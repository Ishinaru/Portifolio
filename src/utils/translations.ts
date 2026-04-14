export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      skills: 'Habilidades',
      contact: 'Contato',
    },
    hero: {
      badge: 'Disponível para novos projetos',
      title1: 'Construindo o',
      title2: 'Futuro Digital',
      description:
        'Arquiteto Fullstack especialista em C#, .NET e Java. Transformando requisitos complexos em sistemas escaláveis de alto desempenho.',
      ctaProjects: 'Ver Projetos',
      ctaCV: 'Download CV',
      experience: 'Anos de Experiência',
    },
    about: {
      eyebrow: 'A Jornada',
      title1: 'Arquitetando soluções que',
      title2: 'escalam com o seu negócio.',
      p1: 'Como desenvolvedor apaixonado por tecnologia, minha missão é unir o rigor da engenharia Backend (C#, .NET, Java) com a fluidez das interfaces modernas.',
      p2: 'Acredito que um código de excelência é aquele que equilibra performance extrema com manutenibilidade. Aplico padrões Clean Architecture e SOLID em cada linha de comando para garantir produtos de classe mundial.',
      tags: ['Cloud Architecture', 'API Design', 'Database Optimization', 'DevOps Culture'],
      cta: 'Explore meu GitHub',
    },
    projects: {
      title: 'Portfolio Selecionado',
      subtitle: 'Explorando as fronteiras entre engenharia robusta e design intuitivo.',
      viewAll: 'Ver todos no GitHub',
      viewCode: 'Ver Código',
      noDescription: 'Projeto sem descrição disponível.',
      loading: 'Carregando projetos do GitHub...',
      error: 'Erro ao carregar projetos.',
      placeholderTitle: 'Próximo Grande Desafio',
      placeholderSub: 'Sempre explorando novas tecnologias',
    },
    skills: {
      eyebrow: 'Ecosystem',
      title: 'Stack Tecnológica',
      subtitle: 'Ferramentas de ponta para o desenvolvimento de software robusto e escalável.',
    },
    contact: {
      title1: 'Vamos construir algo',
      title2: 'memorável?',
      subtitle:
        'Interessado em escalar sua plataforma ou apenas trocar ideias sobre tecnologia? Minha caixa de entrada está sempre aberta.',
      eyebrow: 'Conecte-se',
    },
    footer: {
      role: 'Fullstack Software Architect',
      copy: '© 2026 David Vinícius Pereira Lima. Projetado com precisão e alma.',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      badge: 'Available for new projects',
      title1: 'Building the',
      title2: 'Digital Future',
      description:
        'Fullstack Architect specialized in C#, .NET and Java. Turning complex requirements into scalable high-performance systems.',
      ctaProjects: 'View Projects',
      ctaCV: 'Download CV',
      experience: 'Years of Experience',
    },
    about: {
      eyebrow: 'The Journey',
      title1: 'Architecting solutions that',
      title2: 'scale with your business.',
      p1: 'As a developer passionate about technology, my mission is to combine the rigor of Backend engineering (C#, .NET, Java) with the fluidity of modern interfaces.',
      p2: 'I believe that excellent code balances extreme performance with maintainability. I apply Clean Architecture and SOLID patterns in every line to guarantee world-class products.',
      tags: ['Cloud Architecture', 'API Design', 'Database Optimization', 'DevOps Culture'],
      cta: 'Explore my GitHub',
    },
    projects: {
      title: 'Selected Portfolio',
      subtitle: 'Exploring the boundaries between robust engineering and intuitive design.',
      viewAll: 'See all on GitHub',
      viewCode: 'View Code',
      noDescription: 'Project without description available.',
      loading: 'Loading GitHub projects...',
      error: 'Failed to load projects.',
      placeholderTitle: 'Next Big Challenge',
      placeholderSub: 'Always exploring new technologies',
    },
    skills: {
      eyebrow: 'Ecosystem',
      title: 'Technology Stack',
      subtitle: 'Cutting-edge tools for robust and scalable software development.',
    },
    contact: {
      title1: "Let's build something",
      title2: 'memorable?',
      subtitle:
        'Interested in scaling your platform or just chatting about technology? My inbox is always open.',
      eyebrow: 'Connect',
    },
    footer: {
      role: 'Fullstack Software Architect',
      copy: '© 2026 David Vinícius Pereira Lima. Crafted with precision and soul.',
    },
  },
};

export type Translations = typeof translations.pt;
