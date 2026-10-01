import { stack } from '../data/content'

// A lista é renderizada duas vezes: a cópia emenda no fim da primeira e
// torna o loop contínuo. A segunda fica aria-hidden para não ser lida em dobro.
function Row({ hidden }) {
  return (
    <ul className="stack__row" aria-hidden={hidden || undefined}>
      {stack.items.map((t) => (
        <li className="stack__item" key={t}>
          {t}
          <span className="stack__dot" aria-hidden="true" />
        </li>
      ))}
    </ul>
  )
}

export default function Stack() {
  return (
    <section className="stack" aria-label={stack.label}>
      <div className="stack__viewport">
        <div className="stack__track">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  )
}
