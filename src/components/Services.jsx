export default function Services() {
  return (
    <section className="services">
      <h2 className="services__title">
        Produtos digitais precisam funcionar em qualquer tela,{' '}
        <em>sem travar, sem gambiarras e sem surpresas no lançamento.</em>
      </h2>
      <div className="services__body">
        <p className="services__intro">
          Trabalho com equipes e empresas de diferentes tamanhos para:
        </p>
        <ul className="services__list">
          <li>
            <strong>Desenvolvimento web</strong> – sites e aplicações com foco em performance,
            acessibilidade e SEO.
          </li>
          <li>
            <strong>Apps mobile</strong> – aplicativos iOS e Android com uma única base de código.
          </li>
          <li>
            <strong>Software sob medida</strong> – sistemas internos, APIs e integrações que
            automatizam o seu dia a dia.
          </li>
        </ul>
        <p className="services__outro">
          Tem um projeto em mente? Vamos conversar <span className="accent">↘</span>
        </p>
      </div>
      <a className="btn" href="#contato">
        Agendar uma conversa
      </a>
    </section>
  )
}
