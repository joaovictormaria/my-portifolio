import ImageSlot from './ImageSlot'
import { about, aboutLinks } from '../data/content'

export default function About() {
  const links = aboutLinks.filter((l) => l.href)

  return (
    <section id="sobre" className="about reveal">
      <h2 className="about__title">{about.title}</h2>
      <div className="about__tabwrap">
        <span className="about__tab">{about.tab}</span>
      </div>
      <div className="about__grid">
        <div className="about__photo">
          <ImageSlot
            src={about.photo}
            alt={about.photoAlt}
            zoom={about.photoZoom}
            focusY={about.photoFocusY}
            placeholder={about.photoPlaceholder}
          />
        </div>
        <div className="about__text">
          {about.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          {links.length > 0 && (
            <div className="about__links">
              {links.map((l) => (
                <a
                  className="about__link"
                  href={l.href}
                  key={l.label}
                  {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <span className="about__bullet" />
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
