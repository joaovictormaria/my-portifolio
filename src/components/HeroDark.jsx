import { useState } from 'react'
import TypedTitle from './TypedTitle'
import HeroNetwork from './HeroNetwork'
import { FaBars, FaLinkedin, FaXmark } from 'react-icons/fa6'
import { SiGithub, SiInstagram, SiWhatsapp } from 'react-icons/si'
import { hero, site, navLinks, socialLinks, mailto, whatsappUrl } from '../data/content'

const socialIcons = {
  LinkedIn: FaLinkedin,
  Instagram: SiInstagram,
  GitHub: SiGithub,
  WhatsApp: SiWhatsapp,
}

export default function HeroDark() {
  const [menuOpen, setMenuOpen] = useState(false)
  const socials = socialLinks.filter((l) => l.href)

  return (
    <section className="herod">
      <HeroNetwork />
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
          <a className="btn btn--light" href={whatsappUrl} target="_blank" rel="noreferrer">
            {hero.ctaLabel}
          </a>
        </div>

        <button
          className="herod__menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="hero-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <nav
          className={`herod__vnav${menuOpen ? ' is-open' : ''}`}
          id="hero-navigation"
          aria-label="Navegação principal"
          onClick={() => setMenuOpen(false)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setMenuOpen(false)
          }}
        >
          {navLinks.map((l) => (
            <a href={l.href} key={l.label}>
              {l.label}
            </a>
          ))}
        </nav>

      </div>
      {(socials.length > 0 || mailto) && (
        <div className="herod__social">
          {mailto && <a href={mailto}>E-mail</a>}
          {socials.map((l) => {
            const Icon = socialIcons[l.label]
            return (
              <a
                className="herod__social-link"
                href={l.href}
                key={l.label}
                target="_blank"
                rel="noreferrer"
                aria-label={l.label}
                title={l.label}
              >
                {Icon && <Icon aria-hidden="true" focusable="false" />}
              </a>
            )
          })}
        </div>
      )}
    </section>
  )
}
