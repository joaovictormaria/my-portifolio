// Todo o conteúdo editável do site fica aqui.

export const site = {
  name: 'João Victor Rodrigues',
  role: 'Desenvolvedor Full Stack',
  tagline: 'Desenvolvedor FullStack.',
  copyright: '© 2026 João Victor Rodrigues Nascimento',
  location: 'Aracaju · Sergipe · Brasil',
  // Campos de contato: preencher quando houver dado real. Vazio não é renderizado.
  email: '',
  linkedinUrl: 'https://www.linkedin.com/in/joão-victor-rodrigues-nascimento-8b9aa11b1/?isSelfProfile=true',
  instagramUrl: 'https://www.instagram.com/victor.rodrigues.j/',
  githubUrl: 'https://github.com/joaovictormaria',
}

export const whatsappUrl = 'https://wa.me/5579998206085'

export const features = {
  showProjects: true,
  showTestimonial: false,
  showFaq: true,
}

export const hero = {
  titleBefore: 'Desenvolvimento ',
  titleStrong: 'full stack',
  titleAfter: ', do frontend à API.',
  lead: 'Trabalho com aplicações web usando React, Next.js e TypeScript no frontend, e APIs REST com PostgreSQL no backend. Tenho interesse em arquitetura de aplicações e em escrever código claro e fácil de manter.',
  ctaLabel: 'Entrar em contato',
  photo: '/foto-perfil.jpg', // arquivo em public/
  art: '/hero-art.png', // circulo + foto recortada no arco, usado no hero escuro
  photoAlt: 'João Victor Rodrigues',
  photoZoom: 1.4, // aumente para aproximar mais
  photoFocusY: 0, // 0 = ancora no topo, 50 = centraliza, 100 = base
  photoPlaceholder: 'Foto (retrato)',
}

export const stack = {
  label: 'Trabalho com',
  // A lista e duplicada na renderizacao para o loop continuo.
  items: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'HTML',
    'CSS',
    'APIs REST',
    'PostgreSQL',
    'Python',
    'C#',
    'C',
    'Docker',
    'Git',
    'GitHub',
  ],
}

export const services = {
  titleBefore: 'Aplicações web precisam ser rápidas, acessíveis e fáceis de manter — ',
  titleEm: 'do componente na tela à API que responde por ele.',
  intro: 'Como desenvolvedor de software, atuo no desenvolvimento de aplicações web, do frontend ao backend:',
  items: [
    {
      label: 'Frontend',
      text: 'interfaces com React, Next.js, TypeScript, JavaScript, HTML e CSS.',
    },
    { label: 'Backend e APIs', text: 'APIs REST e persistência de dados com PostgreSQL.' },
    { label: 'Ferramentas', text: 'Docker, Git e GitHub no fluxo de desenvolvimento.' },
  ],
  outro: 'Quer conversar sobre uma oportunidade ou projeto? ',
  ctaLabel: 'Entrar em contato',
}

export const about = {
  title:
    'Do primeiro componente ao deploy: atenção à arquitetura, ao código e à manutenção da aplicação.',
  tab: 'Mais sobre mim',
  paragraphs: [
    'Desenvolvedor FullStack.',
    'Trabalho com JavaScript, TypeScript, React, Next.js, APIs REST e PostgreSQL. Também trabalho com C e C#.',
    'Tenho conhecimento em Python e uso Docker, Git e GitHub no dia a dia de desenvolvimento.',
    'Fui estagiário de desenvolvimento frontend na Pawkeepr de junho de 2025 a junho de 2026, integrando uma equipe pequena de desenvolvimento.',
    'Sou formado em Análise e Desenvolvimento de Sistemas pela Estácio e atualmente curso pós-graduação em Ciência de Dados e Inteligência Artificial e em Engenharia de Redes e Segurança de Dados, ambas na Faculdade Líbano.',
    'Tenho interesse em arquitetura e desenvolvimento de aplicações, e mantenho um processo contínuo de estudo e aprimoramento técnico.',
  ],
  photo: '/capa.webp',
  photoAlt: 'João Victor Rodrigues em um evento da VELNOX.IA',
  photoZoom: 1,
  photoFocusY: 40,
  photoPlaceholder: 'Foto',
}

export const contact = {
  title: 'Aberto a oportunidades de Trabalhos PJ, CLT e também a novos projetos.',
  lead: 'Se quiser falar sobre uma vaga, um projeto ou uma colaboração, ficarei feliz em conversar.',
  ctaLabel: 'Conversar pelo WhatsApp',
}

export const faq = {
  title: 'Perguntas frequentes',
  items: [
    {
      q: 'Quais tecnologias você utiliza?',
      a: 'No frontend, JavaScript, TypeScript, React, Next.js, HTML e CSS. No backend, APIs REST e PostgreSQL. Também trabalho com C, Python e C#, e uso Docker, Git e GitHub no fluxo de desenvolvimento.',
    },
    {
      q: 'Qual é a sua formação?',
      a: 'Sou formado em Análise e Desenvolvimento de Sistemas pela Estácio e atualmente curso pós-graduação em Ciência de Dados e Inteligência Artificial e em Engenharia de Redes e Segurança de Dados, ambas na Faculdade Líbano.',
    },
    {
      q: 'Qual é a sua experiência profissional?',
      a: 'Fui estagiário de desenvolvimento frontend na Pawkeepr de junho de 2025 a junho de 2026, integrando uma equipe pequena de desenvolvimento.',
    },
    {
      q: 'Você trabalha com frontend ou backend?',
      a: 'Atuo como desenvolvedor full stack. Minha experiência profissional foi em frontend, e também desenvolvo backend, com APIs REST e banco de dados.',
    },
    {
      q: 'Como você se mantém atualizado?',
      a: 'Com estudo contínuo de desenvolvimento e arquitetura de aplicações, acompanhando a evolução das tecnologias que utilizo.',
    },
  ],
}

export const velnox = {
  eyebrow: 'Fundador',
  title: 'VELNOX.IA',
  motto: '“A velocidade nunca dorme.”',
  lead: 'Desenvolvimento web de alta performance. Transformamos ideias em plataformas digitais que impulsionam o seu negócio.',
  url: 'https://www.velnoxia.com.br',
  cta: 'Conhecer a VELNOX.IA ↗',
}

export const mailto = site.email ? `mailto:${site.email}` : ''

// Links de navegação e sociais; os de URL vazia são filtrados na renderização.
export const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  ...(features.showProjects ? [{ label: 'Projetos', href: '#projetos' }] : []),
  { label: 'VELNOX.IA', href: '#velnox' },
  { label: 'Contato', href: '#contato' },
]

export const socialLinks = [
  { label: 'LinkedIn', href: site.linkedinUrl, external: true },
  { label: 'Instagram', href: site.instagramUrl, external: true },
  { label: 'GitHub', href: site.githubUrl, external: true },
  { label: 'WhatsApp', href: whatsappUrl, external: true },
]

export const aboutLinks = [
  { label: 'Entrar em contato', href: whatsappUrl, external: true },
  { label: 'Enviar e-mail', href: mailto },
  ...socialLinks,
]

export const footerLinks = [
  { label: 'Início', href: '#' },
  ...navLinks,
  { label: 'E-mail', href: mailto },
  ...socialLinks,
]

// Descrições derivadas dos READMEs e do package.json de cada repositório.
export const projects = [
  {
    tag: 'Web',
    title: 'VELNOX.IA',
    image: '/card-velnoxia.jpg',
    desc: 'Landing page da VELNOX.IA em React e Vite, com formulário de orçamento que abre o WhatsApp com a mensagem pronta.',
    url: 'https://www.velnoxia.com.br',
  },
  {
    tag: 'Full Stack',
    title: 'VELNOX App',
    image: '/card-velnox-app.jpg',
    desc: 'Painel administrativo e PDV para pizzaria em modelo white label, com Prisma na camada de dados e pagamentos via Stripe.',
    url: 'https://velnox.app.br/',
  },
  {
    tag: 'Portifólio',
    title: 'VideoMaker Mariana',
    image: '/card-mariana.png',
    desc: 'Especializada na produção de vídeos para redes sociais, com foco em conteúdos práticos, dinâmicos e alinhados à identidade da sua marca.',
    url: 'https://portifoliomariana.velnoxia.com.br',
  },
  {
    tag: 'Portifólio',
    title: 'Editor Gabriel',
    image: '/card-gabriel.png',
    desc: 'Eu edito vídeos que prendem a atenção, geram confiança e fazem sua audiência crescer.',
    url: 'https://portifoliogabriel.velnoxia.com.br',
  },
  {
    tag: 'Web',
    title: 'VELNOX White Label',
    image: '/card-white-label.jpg',
    desc: 'Versão white label do site da VELNOX.IA, construída em React, TypeScript e Tailwind sobre Vite.',
    url: 'https://velnoxlabel.velnoxia.com.br',
  },
  {
    tag: 'SaaS',
    title: 'VELDOCS',
    status: 'Em desenvolvimento',
    image: '/card-veldocs.jpg',
    desc: 'SaaS B2B modular para gestão de documentos empresariais: vencimentos, responsáveis, pendências, contratos e processos.',
    url: '',
  },
  {
    tag: 'Web',
    title: 'Conform.IA',
    image: '/card-conformia-site.jpg',
    desc: 'Plataforma de compliance e gestão de riscos: site institucional e dashboard de LGPD, ISOs, treinamentos e canal de denúncias.',
    url: 'https://conformia-tau.vercel.app',
  },
  {
    tag: 'Plataforma de compliance',
    title: 'Conform.IA',
    status: 'Em desenvolvimento',
    image: '/card-conformia.jpg',
    desc: 'API em Python com FastAPI, SQLAlchemy e PostgreSQL, documentada em Swagger, testada com Pytest e containerizada com Docker.',
    url: 'https://www.conformia.com.br',
  },
  {
    tag: 'Full Stack',
    title: 'Conjura',
    image: '/card-conjura.jpg',
    desc: 'Ecossistema jurídico-educacional sobre cidadania digital e ECA Digital. Next.js e React no front; FastAPI, PostgreSQL e Redis no back.',
    url: 'https://www.conjura.com.br',
  },
  {
    tag: 'Web',
    title: 'Clara Machado Advocacia',
    image: '/card-clara.svg',
    desc: 'Site institucional do escritório de advocacia, em React, TypeScript e Tailwind sobre Vite.',
    url: 'https://www.claramachadoadvocacia.com.br',
  },
]
export const testimonials = []
