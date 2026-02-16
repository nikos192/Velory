import React from 'react'

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl">
          <h2 className="mb-4">What Nikosta Systems does</h2>
          <p className="text-lg text-navy-700 font-light">
            Clear, premium websites for local businesses, delivered fast and built to earn trust.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 text-navy-800 font-light list-disc list-inside">
          <li>Design and launch modern websites for local businesses.</li>
          <li>Build trust with a clean, premium online presence.</li>
          <li>Mobile-first, fast loading, and easy to contact you.</li>
          <li>Set up contact forms and lead capture.</li>
          <li>Handle domain and hosting setup if needed.</li>
          <li>Most websites go live in as little as 1-2 days.</li>
        </ul>
      </div>
    </section>
  )
}
