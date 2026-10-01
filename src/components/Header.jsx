import { site } from '../data/content'

export default function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__name">{site.name}</span>
        <span className="header__role">{site.role}</span>
      </div>
      <nav className="header__nav">
        <a className="header__mail" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <a className="nav-link" href="#projetos">
          Projetos
        </a>
        <a className="nav-link" href="#velnox">
          VELNOX.IA
        </a>
      </nav>
    </header>
  )
}
