import React from 'react'

export default function Hero({ onScrollToSection }) {
  return (
    <section className="min-h-[85vh] pt-28 pb-16 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 flex items-center">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left text-marina-100">
          <div className="inline-flex flex-col items-center mb-6">
            <div className="h-20 w-20 rounded-full bg-navy-900/70 border border-marina-200/30 p-2 shadow-xl overflow-hidden flex items-center justify-center">
              <img src="/nikosta_square_transparent_1024.png" alt="Nikosta Systems" className="h-full w-full object-contain" />
            </div>
            <span className="mt-2 text-xs tracking-widest text-marina-200 font-semibold uppercase">Nikosta Systems</span>
          </div>
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-marina-100/20 text-marina-100 text-sm font-medium">Gold Coast websites, built fast</div>
          <h1 className="mb-4 text-marina-50 leading-tight">
            Fast, premium websites for local businesses.
          </h1>

          <p className="text-lg text-marina-100/80 mb-6 max-w-xl leading-relaxed font-light">
            Nikosta Systems designs and launches modern, professional websites for local businesses with fast turnaround, often in 1-2 days.
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-6">
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault()
                onScrollToSection('contact')
              }}
              className="inline-flex items-center gap-3 px-5 py-3 bg-marina-500 text-white font-medium rounded-full shadow-md hover:bg-marina-400 transition-colors"
            >
              Start your website
            </a>

            <a href="tel:+61497469408" className="inline-flex items-center gap-3 px-5 py-3 border border-marina-200 text-marina-100/80 rounded-full hover:bg-marina-100/20 hover:text-marina-50 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l2 7 4-4 5 5 3-3v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"/></svg>
              Call 0497 469 408
            </a>
          </div>

          <div className="flex gap-6 mt-4">
            <div className="text-center">
              <div className="text-2xl font-semibold text-marina-50">500+</div>
              <div className="text-sm text-marina-100/70">Happy clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-marina-50">5★</div>
              <div className="text-sm text-marina-100/70">Rated Service</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-marina-50">10+</div>
              <div className="text-sm text-marina-100/70">Years experience</div>
            </div>
          </div>
        </div>

        <div className="order-first md:order-last">
          <div className="relative rounded-2xl border border-marina-200/30 bg-navy-800/60 shadow-premium overflow-hidden">
            <img
              src="/hero.png"
              alt="Workstation with laptop"
              className="w-full h-64 object-cover md:h-96"
            />
            <div className="absolute inset-0 bg-navy-900/35" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
