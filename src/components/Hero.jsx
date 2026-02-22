import React from 'react'
import AnimatedInView from './AnimatedInView'
import GlowBackground from './GlowBackground'
import { trackPixelEvent } from '../lib/facebookPixel'
import { siteConfig } from '../lib/siteConfig'

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
              Premium websites built fast and focused on results
            </h1>

            <p className="body-lg mb-7 max-w-xl">
              We design fast, modern websites that make your business look established and attract more customers.
            </p>

            <p className="text-sm text-marina-200/90 mb-4">
              Limited build slots this week. Most enquiries get a response in under 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
              <a
                href="/estimator"
                onClick={(event) => {
                  trackPixelEvent('ViewContent')
                }}
                className="btn-primary"
              >
                Get My Estimate
              </a>

              <a
                href={siteConfig.bookingHref}
                onClick={() => {
                  trackPixelEvent('Contact')
                }}
                className="btn-secondary"
              >
                Book 15-min Call
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
              src="/hero-premium.svg"
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
