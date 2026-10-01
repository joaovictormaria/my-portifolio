import ImageSlot from './ImageSlot'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projetos" className="projects">
      <h2 className="section-title">Projetos recentes</h2>
      <p className="projects__lead">Alguns dos produtos que desenvolvi recentemente.</p>
      <div className="projects__grid">
        {projects.map((p) => (
          <article className="project" key={p.slotId}>
            <div className="project__media">
              {p.video ? (
                <video
                  className="project__video"
                  src={p.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <ImageSlot src={p.image} alt={p.title} placeholder={p.placeholder} />
              )}
            </div>
            <span className="project__tag">{p.tag}</span>
            <h3 className="project__title">{p.title}</h3>
            <p className="project__desc">{p.desc}</p>
          </article>
        ))}
      </div>
      <div className="projects__more">
        <a className="link-caps" href="#">
          Ver todos os projetos
        </a>
      </div>
    </section>
  )
}
