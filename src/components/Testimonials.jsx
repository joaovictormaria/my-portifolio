import { useEffect, useRef, useState } from 'react'
import ImageSlot from './ImageSlot'
import { testimonials } from '../data/content'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  // Ref e não state: pausar no hover não deve causar re-render, igual ao original.
  const paused = useRef(false)

  useEffect(() => {
    if (!testimonials.length) return
    const timer = setInterval(() => {
      if (!paused.current) setActive((t) => (t + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  if (!testimonials.length) return null

  return (
    <section className="testimonials reveal">
      <div
        className="testimonials__stack"
        onMouseEnter={() => {
          paused.current = true
        }}
        onMouseLeave={() => {
          paused.current = false
        }}
      >
        {testimonials.map((t, i) => {
          const on = active === i
          return (
            <div
              className="testimonial"
              key={t.slotId}
              style={{
                opacity: on ? 1 : 0,
                transform: on ? 'translateY(0)' : 'translateY(12px)',
                pointerEvents: on ? 'auto' : 'none',
              }}
              aria-hidden={!on}
            >
              <blockquote className="testimonial__quote">“{t.quote}”</blockquote>
              <div className="testimonial__person">
                <div className="testimonial__avatar">
                  <ImageSlot src={t.avatar} shape="circle" placeholder=" " />
                </div>
                <span className="testimonial__author">{t.author}</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className="testimonials__dots">
        {testimonials.map((t, i) => {
          const on = active === i
          return (
            <button
              className="dot"
              key={t.slotId}
              onClick={() => setActive(i)}
              aria-label={`Depoimento ${i + 1}`}
              aria-current={on}
              style={{ width: on ? '32px' : '8px', background: on ? '#0C3570' : '#93C2FF' }}
            />
          )
        })}
      </div>
    </section>
  )
}
