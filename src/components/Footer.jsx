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
        <div>
          <div className="footer__heading">Links</div>
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
        </div>
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
