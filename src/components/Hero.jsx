import ImageSlot from './ImageSlot'
import { site } from '../data/content'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__photo">
        <ImageSlot id="hero-foto" placeholder="Sua foto (retrato)" />
      </div>
      <div className="hero__copy">
        <h1 className="hero__title">
          Software <strong>bem construído</strong>, do primeiro commit ao deploy.
        </h1>
        <p className="hero__lead">
          Sou desenvolvedor web, mobile e de software. Ajudo empresas e equipes a tirar ideias do
          papel com aplicações rápidas, estáveis e fáceis de manter.
        </p>
        <a className="btn" href="#contato">
          Agendar uma conversa
        </a>
        <p className="hero__note">
          Prefere por escrito? <a href={`mailto:${site.email}`}>Envie um e-mail</a>.
        </p>
      </div>
    </section>
  )
}
