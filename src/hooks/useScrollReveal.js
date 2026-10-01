import { useEffect } from 'react'

// Revela os elementos .reveal conforme entram na viewport.
export default function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement
    const els = document.querySelectorAll('.reveal')
    if (!els.length) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const supported = 'IntersectionObserver' in window

    // A classe no <html> é o que ativa o estado inicial escondido no CSS.
    root.classList.add('has-reveal')

    if (reduce || !supported) {
      els.forEach((el) => el.classList.add('is-visible'))
      return () => root.classList.remove('has-reveal')
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    )

    els.forEach((el) => io.observe(el))

    return () => {
      io.disconnect()
      root.classList.remove('has-reveal')
    }
  }, [])
}
