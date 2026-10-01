// Todo o conteúdo editável do site fica aqui.
// Para trocar textos, projetos, depoimentos ou perguntas, edite este arquivo.

export const site = {
  name: 'Seu Nome',
  role: 'Web · Mobile · Software',
  email: 'contato@seunome.dev',
  tagline: 'Desenvolvedor web, mobile e de software.',
  scheduleUrl: '#',
  linkedinUrl: '#',
  githubUrl: '#',
  copyright: '© 2026 Seu Nome – Feito com café e TypeScript',
}

// Liga/desliga seções inteiras (eram props do componente original).
export const features = {
  showTestimonial: true,
  showFaq: true,
}

export const projects = [
  {
    tag: 'Web',
    title: 'Plataforma de E-commerce',
    desc: 'Loja virtual com checkout próprio, painel administrativo e integração com meios de pagamento.',
  },
  {
    tag: 'Mobile',
    title: 'App de Agendamentos',
    desc: 'Aplicativo iOS e Android para clínicas, com lembretes por notificação e pagamento no app.',
  },
  {
    tag: 'Software',
    title: 'Sistema de Gestão Interna',
    desc: 'ERP sob medida que substituiu planilhas e automatizou o controle de estoque e pedidos.',
  },
  {
    tag: 'Web',
    title: 'Dashboard de Métricas',
    desc: 'Painel em tempo real que reúne dados de vendas e marketing em uma única tela.',
  },
  {
    tag: 'Mobile',
    title: 'App de Delivery',
    desc: 'Rastreamento de pedidos ao vivo para clientes, entregadores e restaurantes.',
  },
  {
    tag: 'Software',
    title: 'API de Integrações',
    desc: 'Serviço que conecta sistemas legados a plataformas modernas com segurança e escala.',
  },
].map((p, i) => ({
  ...p,
  // Preencha `image` com a URL de uma imagem ou `video` com a URL de um vídeo.
  image: p.image || '',
  video: p.video || '',
  slotId: `projeto-${i + 1}`,
  placeholder: `Imagem ou vídeo – ${p.title}`,
}))

export const testimonials = [
  {
    quote:
      'Entregou um aplicativo complexo no prazo, com código limpo e uma comunicação impecável durante todo o projeto.',
    author: 'Nome do Cliente – Empresa',
  },
  {
    quote:
      'Nosso site ficou muito mais rápido e as vendas online cresceram logo no primeiro mês.',
    author: 'Nome do Cliente – Empresa',
  },
  {
    quote:
      'Transformou nossas planilhas em um sistema simples que toda a equipe usa todos os dias.',
    author: 'Nome do Cliente – Empresa',
  },
  {
    quote:
      'Profissional atento aos detalhes, sempre propondo soluções antes mesmo de surgirem os problemas.',
    author: 'Nome do Cliente – Empresa',
  },
].map((t, i) => ({ ...t, avatar: t.avatar || '', slotId: `depo-avatar-${i + 1}` }))

export const faqs = [
  {
    q: 'Quais tecnologias você usa?',
    a: 'Trabalho principalmente com React, Next.js, React Native, Node.js e TypeScript, mas escolho a stack de acordo com a necessidade de cada projeto.',
  },
  {
    q: 'Quanto tempo leva para desenvolver um projeto?',
    a: 'Depende do escopo. Um site leva algumas semanas; um aplicativo completo pode levar alguns meses. Após a primeira conversa envio um cronograma detalhado.',
  },
  {
    q: 'Você desenvolve para iOS e Android?',
    a: 'Sim. Uso desenvolvimento multiplataforma para entregar nos dois sistemas com uma única base de código, reduzindo custo e prazo.',
  },
  {
    q: 'Você faz manutenção depois da entrega?',
    a: 'Sim, ofereço planos de suporte e evolução contínua para manter o produto atualizado e seguro.',
  },
  {
    q: 'Quem cuida do design?',
    a: 'Posso trabalhar a partir do design da sua equipe ou indicar parceiros de UI/UX para criar a interface do zero.',
  },
]

export const velnox = {
  eyebrow: 'Fundador',
  title: 'VELNOX.IA',
  motto: '“A velocidade nunca dorme.”',
  lead: 'Desenvolvimento web de alta performance. Transformamos ideias em plataformas digitais que impulsionam o seu negócio.',
  url: 'https://www.velnoxia.com.br',
  cta: 'Conhecer a VELNOX.IA ↗',
}
