import { useEffect, useRef, useState } from 'react'

/**
 * Título com efeito de digitação e cursor piscando.
 *
 * `segments` é a lista de trechos ({ text, bold }), para o <strong> sobreviver
 * ao fatiamento. Um "fantasma" invisível com o texto completo segura a altura
 * da caixa, senão a página saltaria a cada letra ao mudar de linha.
 */
export default function TypedTitle({ segments, speed = 38, startDelay = 350, className }) {
  const full = segments.map((s) => s.text).join('')
  // Começa completo: sem JS, ou antes do efeito rodar, o título aparece inteiro.
  const [count, setCount] = useState(full.length)
  const [done, setDone] = useState(true)
  const timers = useRef([])

  useEffect(() => {
    const clearAll = () => {
      timers.current.forEach(clearTimeout)
      timers.current = []
    }
    clearAll()

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(full.length)
      setDone(true)
      return clearAll
    }

    setCount(0)
    setDone(false)
    for (let i = 1; i <= full.length; i++) {
      timers.current.push(
        setTimeout(() => {
          setCount(i)
          if (i === full.length) setDone(true)
        }, startDelay + i * speed)
      )
    }
    return clearAll
  }, [full, speed, startDelay])

  // Fatia os segmentos mantendo onde cada um começa e termina.
  let remaining = count
  const typed = segments.map((s, i) => {
    const take = Math.max(0, Math.min(s.text.length, remaining))
    remaining -= take
    const slice = s.text.slice(0, take)
    return s.bold ? <strong key={i}>{slice}</strong> : <span key={i}>{slice}</span>
  })

  return (
    <h1 className={className} aria-label={full}>
      <span className="type__ghost" aria-hidden="true">
        {segments.map((s, i) => (s.bold ? <strong key={i}>{s.text}</strong> : <span key={i}>{s.text}</span>))}
      </span>
      <span className="type__live" aria-hidden="true">
        {typed}
        <span className={`type__caret${done ? ' type__caret--done' : ''}`} />
      </span>
    </h1>
  )
}
