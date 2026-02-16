import React, { useEffect, useRef } from 'react'

export default function AnimatedInView({ className = '', children }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) {
      return undefined
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      node.dataset.inview = 'true'
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.inview = 'true'
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  const classes = ['reveal', className].filter(Boolean).join(' ')

  return (
    <div ref={ref} className={classes} data-inview="false">
      {children}
    </div>
  )
}
