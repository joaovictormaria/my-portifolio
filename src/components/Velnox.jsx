import { velnox } from '../data/content'

export default function Velnox() {
  return (
    <section id="velnox" className="velnox band reveal">
      <div className="container velnox__inner">
        <div>
          <span className="velnox__eyebrow">{velnox.eyebrow}</span>
          <h2 className="velnox__title">{velnox.title}</h2>
          <p className="velnox__motto">{velnox.motto}</p>
        </div>
        <div>
          <p className="velnox__lead">{velnox.lead}</p>
          <a className="btn btn--light" href={velnox.url} target="_blank" rel="noreferrer">
            {velnox.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
