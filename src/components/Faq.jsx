import { useState } from 'react'
import { faqs, site } from '../data/content'

export default function Faq() {
  const [open, setOpen] = useState(-1)

  return (
    <section className="faq">
      <h2 className="section-title faq__title">Perguntas frequentes</h2>
      <div className="faq__list">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <div className="faq__item" key={f.q}>
              <button
                className="faq__q"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span
                  className="faq__caret"
                  style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
                  aria-hidden="true"
                >
                  ›
                </span>
                <span>{f.q}</span>
              </button>
              {isOpen && <p className="faq__a">{f.a}</p>}
            </div>
          )
        })}
      </div>
      <p className="faq__note">
        Ficou alguma dúvida? <a href={`mailto:${site.email}`}>Envie um e-mail</a>
      </p>
    </section>
  )
}
