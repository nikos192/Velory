import React from 'react'
import Section from './Section'
import AnimatedInView from './AnimatedInView'

export default function Faq() {
  return (
    <Section id="faq">
      <AnimatedInView>
        <div className="max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 mb-4">Questions, answered</h2>
          <p className="body-lg">
            Quick answers to common questions about working with Nikosta Systems.
          </p>
        </div>
      </AnimatedInView>

      <AnimatedInView className="mt-10">
        <dl className="space-y-6">
          <div>
            <dt className="text-white font-medium">What kinds of businesses do you work with?</dt>
            <dd className="mt-2 text-slate-300 font-light">
              Local service businesses that want a clean, trustworthy online presence.
            </dd>
          </div>

          <div>
            <dt className="text-white font-medium">How fast can you launch?</dt>
            <dd className="mt-2 text-slate-300 font-light">
              Most websites go live in 1-2 days, depending on content and approvals.
            </dd>
          </div>

          <div>
            <dt className="text-white font-medium">Do you handle hosting and domains?</dt>
            <dd className="mt-2 text-slate-300 font-light">
              Yes. We can set up hosting and domains or work with what you already have.
            </dd>
          </div>

          <div>
            <dt className="text-white font-medium">Can you update my existing website?</dt>
            <dd className="mt-2 text-slate-300 font-light">
              Absolutely. We can refresh your current site or rebuild it with clearer messaging.
            </dd>
          </div>

          <div>
            <dt className="text-white font-medium">What do you need from me to start?</dt>
            <dd className="mt-2 text-slate-300 font-light">
              A short brief about your business, your services, and any photos or logos you want used.
            </dd>
          </div>

          <div>
            <dt className="text-white font-medium">Will my website work on mobile?</dt>
            <dd className="mt-2 text-slate-300 font-light">
              Yes. Every site is built mobile-first and tested across common screen sizes.
            </dd>
          </div>
        </dl>
      </AnimatedInView>
    </Section>
  )
}
