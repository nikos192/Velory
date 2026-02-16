import React from 'react'

export default function GlowBackground() {
  return (
    <>
      <div className="absolute inset-0 hero-animated bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" aria-hidden="true" />
      <div className="absolute -top-28 -left-24 h-80 w-80 rounded-full bg-marina-400/20 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" aria-hidden="true" />
      <div className="absolute inset-0 hero-grid" aria-hidden="true" />
      <div className="absolute inset-0 hero-vignette" aria-hidden="true" />
    </>
  )
}
