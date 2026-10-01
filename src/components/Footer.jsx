import { site, footerLinks } from '../data/content'

export default function Footer() {
  const links = footerLinks.filter((l) => l.href)

  return (
    <footer className="footer reveal">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="footer__name">
            {site.name} <span>↘</span>
          </div>
          <p className="footer__tagline">{site.tagline}</p>
        </div>
        <nav className="footer__nav" aria-label="Navegação do rodapé">
          <h2 className="footer__heading">Explorar</h2>
          <div className="footer__links">
            {links.map((l) => (
              <a
                className="nav-link"
                href={l.href}
                key={l.label}
                {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
      <div className="footer__bar">
        <span>{site.copyright}</span>
        <span className="footer__meta">
          <span>{site.location}</span>
        </span>
      </div>
    </footer>
  )
}
