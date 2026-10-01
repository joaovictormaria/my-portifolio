import { contact, mailto } from '../data/content'

export default function Contact() {
  return (
    <section id="contato" className="contact band reveal">
      <div className="container">
        <h2 className="section-title contact__title">{contact.title}</h2>
        <p className="contact__lead">{contact.lead}</p>
        {mailto && (
          <a className="btn" href={mailto}>
            {contact.ctaLabel}
          </a>
        )}
      </div>
    </section>
  )
}
