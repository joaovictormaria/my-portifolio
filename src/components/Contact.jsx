import { site } from '../data/content'

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <h2 className="section-title contact__title">Tem uma ideia para tirar do papel?</h2>
      <p className="contact__lead">
        Conte um pouco sobre o seu projeto. Podemos marcar uma conversa rápida por vídeo, sem
        compromisso, ou seguir por e-mail.
      </p>
      <a className="btn" href={site.scheduleUrl}>
        Agendar uma conversa gratuita
      </a>
      <p className="contact__note">
        Prefere por escrito? <a href={`mailto:${site.email}`}>Envie um e-mail</a>.
      </p>
    </section>
  )
}
