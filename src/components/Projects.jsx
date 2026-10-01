import ImageSlot from './ImageSlot'
import { projects } from '../data/content'

export default function Projects() {
  if (!projects.length) return null

  return (
    <section id="projetos" className="projects band reveal">
      <div className="container">
        <header className="projects__head">
          <h2 className="projects__title">Projetos</h2>
          <p className="projects__lead">
            Produtos e sites que desenvolvi, do frontend à API.
          </p>
          <span className="projects__count">{String(projects.length).padStart(2, '0')}</span>
        </header>

        <div className="projects__grid">
          {projects.map((p, i) => {
            const body = (
              <>
                <div className="project__media">
                  {p.video ? (
                    <video className="project__video" src={p.video} autoPlay muted loop playsInline />
                  ) : (
                    <ImageSlot src={p.image} alt={p.title} placeholder={p.title} />
                  )}
                </div>
                <div className="project__foot">
                  <span className="project__num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="project__meta">
                    <span className="project__tag">{p.tag}</span>
                    <h3 className="project__title">{p.title}</h3>
                    <p className="project__desc">{p.desc}</p>
                  </div>
                  {p.url && (
                    <span className="project__arrow" aria-hidden="true">
                      ↗
                    </span>
                  )}
                </div>
              </>
            )

            const cls = `project${i === 0 ? ' project--featured' : ''}${p.url ? ' project--link' : ''}`

            return p.url ? (
              <a className={cls} href={p.url} target="_blank" rel="noreferrer" key={p.title}>
                {body}
              </a>
            ) : (
              <article className={cls} key={p.title}>
                {body}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
