import ImageSlot from './ImageSlot'
import { site } from '../data/content'

export default function About() {
  return (
    <section className="about">
      <div className="about__wide">
        <ImageSlot placeholder="Foto ampla – você trabalhando / ambiente" />
      </div>
      <h2 className="about__title">
        Do protótipo à produção: tecnologia que resolve problemas reais e cresce junto com o seu
        negócio.
      </h2>
      <div className="about__tabwrap">
        <span className="about__tab">Mais sobre mim</span>
      </div>
      <div className="about__grid">
        <div />
        <div className="about__text">
          <p>
            Desenvolvo software há mais de X anos, passando por startups, agências e empresas que
            precisavam de produtos digitais confiáveis.
          </p>
          <p>
            Nesse tempo aprendi que boa tecnologia é aquela que o usuário nem percebe: rápida,
            estável e simples de usar. Cuido da arquitetura, do código e da entrega.
          </p>
          <p>
            Trabalho de forma próxima e transparente, com entregas frequentes para que você
            acompanhe cada etapa do projeto.
          </p>
          <p>
            Se você procura um parceiro técnico para tirar seu projeto do papel, entre em contato.
          </p>
          <div className="about__links">
            <a className="about__link" href="#contato">
              <span className="about__bullet" />
              Agendar conversa
            </a>
            <a className="about__link" href={`mailto:${site.email}`}>
              <span className="about__bullet" />
              Enviar e-mail
            </a>
            <a
              className="about__link"
              href={site.linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="about__bullet" />
              LinkedIn
            </a>
            <a className="about__link" href={site.githubUrl} target="_blank" rel="noreferrer">
              <span className="about__bullet" />
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="about__wide--last">
        <ImageSlot placeholder="Foto ou vídeo – bastidores / equipe" />
      </div>
    </section>
  )
}
