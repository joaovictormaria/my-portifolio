import { useState } from 'react'
import { faq } from '../data/content'

export default function Faq() {
  const [open, setOpen] = useState(-1)

  return (
    <section className="faq band reveal">
      <div className="container">
        <h2 className="section-title faq__title">{faq.title}</h2>
        <div className="faq__list">
          {faq.items.map((f, i) => {
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
          Ficou alguma dúvida? <a href="#contato">Entre em contato</a>
        </p>
      </div>
    </section>
  )
}
