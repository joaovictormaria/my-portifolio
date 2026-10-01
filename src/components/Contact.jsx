import { contact, whatsappUrl } from '../data/content'

export default function Contact() {
  return (
    <section id="contato" className="contact band reveal">
      <div className="container contact__inner">
        <div className="contact__copy">
          <p className="contact__eyebrow">
            <span className="contact__signal" aria-hidden="true" />
            Aberto para conversas
          </p>
          <h2 className="section-title contact__title">{contact.title}</h2>
          <p className="contact__lead">{contact.lead}</p>
        </div>
        <a className="btn contact__cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          <span>{contact.ctaLabel}</span>
          <span className="contact__arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
