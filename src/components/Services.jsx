import React from 'react'

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-navy-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl">
          <h2 className="mb-4">Services</h2>
          <p className="text-lg text-navy-700 font-light">
            Everything you need to launch a premium website quickly, with clear communication and minimal fuss.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-white border border-navy-100 rounded-2xl shadow-sm">
            <h3 className="text-lg font-medium text-navy-900 mb-3">Website design</h3>
            <p className="text-sm text-navy-700 font-light leading-relaxed">
              Modern layouts and brand-aware visuals that make your business feel credible and premium.
            </p>
          </div>

          <div className="p-6 bg-white border border-navy-100 rounded-2xl shadow-sm">
            <h3 className="text-lg font-medium text-navy-900 mb-3">Website development</h3>
            <p className="text-sm text-navy-700 font-light leading-relaxed">
              Fast, mobile-first builds that load quickly and make it easy for customers to contact you.
            </p>
          </div>

          <div className="p-6 bg-white border border-navy-100 rounded-2xl shadow-sm">
            <h3 className="text-lg font-medium text-navy-900 mb-3">Website refresh</h3>
            <p className="text-sm text-navy-700 font-light leading-relaxed">
              Improve an existing site with clearer messaging, cleaner structure, and a premium finish.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-3 bg-marina-500 text-white font-medium rounded-full shadow-md hover:bg-marina-400 transition-colors"
          >
            Talk to us about your website
          </a>
        </div>
      </div>
    </section>
  )
}
