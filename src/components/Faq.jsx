import React from 'react'

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl">
          <h2 className="mb-4">FAQ</h2>
          <p className="text-lg text-navy-700 font-light">
            Quick answers to common questions about working with Nikosta Systems.
          </p>
        </div>

        <dl className="mt-10 space-y-8">
          <div>
            <dt className="text-navy-900 font-medium">What kinds of businesses do you work with?</dt>
            <dd className="mt-2 text-navy-700 font-light">
              Local service businesses that want a clean, trustworthy online presence.
            </dd>
          </div>

          <div>
            <dt className="text-navy-900 font-medium">How fast can you launch?</dt>
            <dd className="mt-2 text-navy-700 font-light">
              Most websites go live in 1-2 days, depending on content and approvals.
            </dd>
          </div>

          <div>
            <dt className="text-navy-900 font-medium">Do you handle hosting and domains?</dt>
            <dd className="mt-2 text-navy-700 font-light">
              Yes. We can set up hosting and domains or work with what you already have.
            </dd>
          </div>

          <div>
            <dt className="text-navy-900 font-medium">Can you update my existing website?</dt>
            <dd className="mt-2 text-navy-700 font-light">
              Absolutely. We can refresh your current site or rebuild it with clearer messaging.
            </dd>
          </div>

          <div>
            <dt className="text-navy-900 font-medium">What do you need from me to start?</dt>
            <dd className="mt-2 text-navy-700 font-light">
              A short brief about your business, your services, and any photos or logos you want used.
            </dd>
          </div>

          <div>
            <dt className="text-navy-900 font-medium">Will my website work on mobile?</dt>
            <dd className="mt-2 text-navy-700 font-light">
              Yes. Every site is built mobile-first and tested across common screen sizes.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
