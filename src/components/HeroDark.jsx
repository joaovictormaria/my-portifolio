import TypedTitle from './TypedTitle'
import { hero, site, navLinks, socialLinks, mailto } from '../data/content'

export default function HeroDark() {
  const socials = socialLinks.filter((l) => l.href)

  return (
    <section className="herod">
      <div className="container herod__inner">
        <div className="herod__brand">
          <span className="herod__filename">developer.js</span>
          <code className="herod__code" aria-label={`${site.name}, ${site.role}`}>
            <span className="herod__code-line">
              <span className="herod__syntax">const</span> developer = {'{'}
            </span>
            <span className="herod__code-line">
              {'  '}name: <span className="herod__string">"{site.name}"</span>,
            </span>
            <span className="herod__code-line">
              {'  '}role: <span className="herod__string">"{site.role}"</span>,
            </span>
            <span className="herod__code-line">
              {'  '}skills: <span className="herod__bracket">[</span>
              <span className="herod__string">"frontend"</span>,{' '}
              <span className="herod__string">"backend"</span>
              <span className="herod__bracket">]</span>,
            </span>
            <span className="herod__code-line">
              {'  '}start: <span className="herod__function">() =&gt; true</span>
            </span>
            <span className="herod__code-line">{'}'}</span>
          </code>
        </div>

        <div className="herod__stage">
          <img className="herod__art" src={hero.art} alt={hero.photoAlt} />
        </div>

        <div className="herod__copy">
          <TypedTitle
            className="herod__title"
            segments={[
              { text: hero.titleBefore },
              { text: hero.titleStrong, bold: true },
              { text: hero.titleAfter },
            ]}
          />
          <p className="herod__lead">{hero.lead}</p>
          <a className="btn btn--light" href="#contato">
            {hero.ctaLabel}
          </a>
        </div>

        <nav className="herod__vnav">
          {navLinks.map((l) => (
            <a href={l.href} key={l.label}>
              {l.label}
            </a>
          ))}
        </nav>

        {(socials.length > 0 || mailto) && (
          <div className="herod__social">
            {mailto && <a href={mailto}>E-mail</a>}
            {socials.map((l) => (
              <a href={l.href} key={l.label} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
