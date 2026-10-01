import { services, whatsappUrl } from '../data/content'

export default function Services() {
  return (
    <section className="services band reveal">
      <div className="container services__layout">
        <div className="services__copy">
          <div className="services__eyebrow">
            <span className="services__eyebrow-index">01</span>
            <span>services.js</span>
            <span className="services__eyebrow-role">Desenvolvedor de software</span>
          </div>
          <h2 className="services__title">
            {services.titleBefore}<em>{services.titleEm}</em>
          </h2>
          <p className="services__intro">{services.intro}</p>
          <p className="services__outro">
            {services.outro}{' '}
            <a className="services__link" href={whatsappUrl} target="_blank" rel="noreferrer">
              {services.ctaLabel} <span aria-hidden="true">↘</span>
            </a>
          </p>
        </div>

        <div className="services__editor" aria-label="Áreas de desenvolvimento">
          <div className="services__editor-bar">
            <span className="services__window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="services__filename">services.js</span>
            <span className="services__language">JS</span>
          </div>
          <div className="services__source">
            <div className="services__line">
              <span className="services__line-number" aria-hidden="true">01</span>
              <code><span className="services__token">const</span> areas = <span className="services__bracket">[</span></code>
            </div>
            <ul className="services__list">
              {services.items.map((item, index) => (
                <li className="services__item" key={item.label}>
                  <span className="services__line-number" aria-hidden="true">0{index + 2}</span>
                  <code>
                    <span className="services__bracket">{'{'}</span>{' '}
                    <span className="services__token">area</span>: <span className="services__string">"{item.label}"</span>,{' '}
                    <span className="services__token">details</span>: <span className="services__string">"{item.text}"</span>{' '}
                    <span className="services__bracket">{'},'}</span>
                  </code>
                </li>
              ))}
            </ul>
            <div className="services__line">
              <span className="services__line-number" aria-hidden="true">05</span>
              <code><span className="services__bracket">]</span><span className="services__punctuation">;</span></code>
            </div>
            <div className="services__line services__line--blank" aria-hidden="true">
              <span className="services__line-number">06</span>
            </div>
            <div className="services__line">
              <span className="services__line-number" aria-hidden="true">07</span>
              <code><span className="services__token">export default</span> areas;</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
