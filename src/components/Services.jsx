import { services } from '../data/content'

export default function Services() {
  return (
    <section className="services band reveal">
      <div className="container">
        <h2 className="services__title">
          {services.titleBefore}
          <em>{services.titleEm}</em>
        </h2>
        <div className="services__body">
          <p className="services__intro">{services.intro}</p>
          <ul className="services__list">
            {services.items.map((item) => (
              <li key={item.label}>
                <strong>{item.label}</strong> – {item.text}
              </li>
            ))}
          </ul>
          <p className="services__outro">
            {services.outro}
            <span className="accent">↘</span>
          </p>
        </div>
        <a className="btn" href="#contato">
          {services.ctaLabel}
        </a>
      </div>
    </section>
  )
}
