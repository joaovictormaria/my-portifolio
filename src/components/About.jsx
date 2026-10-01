import ImageSlot from './ImageSlot'
import TypedTitle from './TypedTitle'
import { about, aboutLinks, site } from '../data/content'

export default function About() {
  const links = aboutLinks.filter((l) => l.href)

  return (
    <section id="sobre" className="about reveal">
      <header className="about__head">
        <p className="about__eyebrow">
          <span className="about__eyebrow-index">01</span>
          {about.tab}
        </p>
        <TypedTitle
          as="h2"
          className="about__title"
          segments={[{ text: about.title }]}
        />
      </header>
      <div className="about__grid">
        <figure className="about__portrait">
          <div className="about__photo">
            <ImageSlot
              src={about.photo}
              alt={about.photoAlt}
              zoom={about.photoZoom}
              focusY={about.photoFocusY}
              placeholder={about.photoPlaceholder}
            />
          </div>
          <figcaption className="about__caption">
            <span className="about__caption-name">{site.name}</span>
            <span className="about__caption-meta">{site.location}</span>
          </figcaption>
        </figure>
        <div className="about__text">
          <p className="about__lead">{about.paragraphs[0]}</p>
          <div className="about__story">
            {about.paragraphs.slice(1).map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
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
