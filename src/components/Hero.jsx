import React from 'react'

export default function Hero({ onScrollToSection }) {
  return (
    <section className="min-h-[85vh] pt-28 pb-16 bg-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <img src="/src/assets/logo.png" alt="Nikosta Systems" className="h-14 mb-6" />
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-marina-50 text-marina-600 text-sm font-medium">Gold Coast service websites</div>
          <h1 className="mb-4 text-navy-900 leading-tight">
            Websites for local businesses — built free, pay only if you want it.
          </h1>

          <p className="text-lg text-navy-700 mb-6 max-w-xl leading-relaxed font-light">
            We design and build a professional website for your business at no cost. You review it — keep it only if you like it. No pressure, no contracts.
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-6">
            <a href="tel:+61497469408" className="inline-flex items-center gap-3 px-5 py-3 bg-marina-500 text-white font-medium rounded-full shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l2 7 4-4 5 5 3-3v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"/></svg>
              Call 0497 469 408
            </a>

            <button onClick={() => onScrollToSection('how-it-works')} className="px-5 py-3 border border-navy-700 text-navy-700 rounded-full hover:bg-navy-700 hover:text-white transition">
              See packages
            </button>
          </div>

          <div className="flex gap-6 mt-4">
            <div className="text-center">
              <div className="text-2xl font-semibold text-navy-900">500+</div>
              <div className="text-sm text-navy-600">Happy clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-navy-900">5★</div>
              <div className="text-sm text-navy-600">Rated Service</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-navy-900">10+</div>
              <div className="text-sm text-navy-600">Years experience</div>
            </div>
          </div>
        </div>

        <div className="order-first md:order-last">
          <div className="rounded-xl overflow-hidden shadow-premium">
            <img src="/src/assets/hero-sample.jpg" alt="Website sample" className="w-full h-64 object-cover md:h-96" onError={(e)=>{e.target.src='https://images.unsplash.com/photo-1460925895917-adf4e9546f43?auto=format&fit=crop&w=1500&q=80'}}/>
          </div>
        </div>
      </div>
    </section>
  )
}
