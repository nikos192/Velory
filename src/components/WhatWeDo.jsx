import React from 'react'

export default function WhatWeDo() {
  const services = [
    "Design and launch modern websites for local businesses",
    "Build trust with a clean, premium online presence",
    "Mobile-first, fast loading, and easy to contact you",
    "Set up contact forms and lead capture",
    "Handle domain/hosting setup if needed",
    "Most websites go live in as little as 1–2 days"
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">What Nikosta Systems does</h2>
          <p className="text-lg text-navy-700 font-light max-w-2xl mx-auto">
            We help local businesses establish a professional online presence quickly and affordably.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-navy-50 rounded-xl border border-navy-100 p-8 md:p-10">
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-marina-500 text-white flex items-center justify-center text-sm font-medium mt-0.5">
                    ✓
                  </span>
                  <span className="text-navy-800 font-light text-base leading-relaxed">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 text-center">
            <p className="text-navy-700 text-sm font-light mb-6">
              Every project is tailored to your specific business needs. We focus on getting you online fast without compromising on quality.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-marina-500 text-white font-medium rounded-full shadow-md hover:bg-marina-400 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
