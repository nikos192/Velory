import React from 'react'
import AnimatedInView from './AnimatedInView'
import GlowBackground from './GlowBackground'
import { trackPixelEvent } from '../lib/facebookPixel'

export default function Hero({ onScrollToSection }) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 bg-slate-950 overflow-hidden">
      <GlowBackground />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <AnimatedInView>
          <div className="text-left text-white">
            <div className="inline-flex items-center gap-3 mb-5 glass-muted rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] text-marina-200/80">
              Premium Gold Coast Agency
            </div>
            <h1 className="mb-5 leading-tight text-white">
              Get a premium website for your business in 48 hours
            </h1>

            <p className="body-lg mb-7 max-w-xl">
              We design fast, modern websites that make your business look established and attract more customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
              <a
                href="#contact"
                onClick={(event) => {
                  trackPixelEvent('Contact')
                  event.preventDefault()
                  onScrollToSection('contact')
                }}
                className="btn-primary"
              >
                Get Started
              </a>

              <a
                href="#work"
                onClick={() => {
                  trackPixelEvent('ViewContent')
                }}
                className="btn-secondary"
              >
                View Examples
              </a>
            </div>

            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/50">
              Gold Coast based / Fast turnaround / Modern builds
            </p>
          </div>
        </AnimatedInView>

        <AnimatedInView className="order-first md:order-last">
          <div className="group relative rounded-3xl glass-card p-4 md:p-6 float-slow">
            <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-marina-400/30 blur-2xl" aria-hidden="true" />
            <img
              src="/hero.png"
              alt="VELORY website mockup"
              className="w-full h-72 md:h-[420px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-[1.02] group-hover:-rotate-1"
              loading="eager"
              decoding="async"
            />
          </div>
        </AnimatedInView>
      </div>
    </section>
  )
}
