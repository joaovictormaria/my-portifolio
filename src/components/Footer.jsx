import { site } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
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
            <a className="nav-link" href="#">
              Início
            </a>
            <a className="nav-link" href="#projetos">
              Projetos
            </a>
            <a className="nav-link" href={`mailto:${site.email}`}>
              E-mail
            </a>
            <a className="nav-link" href={site.linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="nav-link" href={site.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        <span>{site.copyright}</span>
        <span className="footer__meta">
          <span>Privacidade</span>
          <span>Brasil</span>
        </span>
      </div>
    </footer>
  )
}
