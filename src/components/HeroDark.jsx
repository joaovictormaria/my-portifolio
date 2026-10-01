import TypedTitle from './TypedTitle'
import { hero, site, navLinks, socialLinks, mailto } from '../data/content'

export default function HeroDark() {
  const socials = socialLinks.filter((l) => l.href)

  return (
    <section className="herod">
      <div className="container herod__inner">
        <div className="herod__brand">
          <span className="herod__name">{site.name}</span>
          <span className="herod__role">{site.role}</span>
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
