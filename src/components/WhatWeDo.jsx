import React from 'react'

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 md:py-32 bg-slate-950 reveal">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-marina-300/80">What we do</p>
          <h2 className="mt-4 mb-4">What VELORY does</h2>
          <p className="text-lg text-slate-300 font-light">
            Clear, premium websites for local businesses, delivered fast and built to earn trust.
          </p>
        </div>

        <div className="mt-10 glass-card rounded-2xl p-8 md:p-10">
          <ul className="grid gap-4 sm:grid-cols-2 text-slate-200 font-light list-disc list-inside">
            <li>Design and launch modern websites for local businesses.</li>
            <li>Build trust with a clean, premium online presence.</li>
            <li>Mobile-first, fast loading, and easy to contact you.</li>
            <li>Set up contact forms and lead capture.</li>
            <li>Handle domain and hosting setup if needed.</li>
            <li>Delivery timelines tailored to scope, content, and approvals.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
