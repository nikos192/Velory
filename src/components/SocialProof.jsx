import React from 'react'
import Section from './Section'
import GlassCard from './GlassCard'
import AnimatedInView from './AnimatedInView'

const logos = ['Gold Coast Plumbing', 'Coastal Auto', 'Brightway Hair', 'Pacific Landscapes', 'TradePro']

const testimonials = [
  {
    name: 'Sophie Tran',
    business: 'Brightway Plumbing',
    quote: 'The site looks polished, loads fast, and customers trust us more.'
  },
  {
    name: 'Liam Hughes',
    business: 'Coastal Auto Care',
    quote: 'We launched fast and enquiries started coming through right away.'
  },
  {
    name: 'Isla Morgan',
    business: 'Gold Coast Landscapes',
    quote: 'Everything feels premium now. The website finally matches our work.'
  }
]

export default function SocialProof() {
  return (
    <Section id="social-proof">
      <AnimatedInView>
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Trusted by local businesses</p>
          <h2 className="mt-4 mb-4">Social proof that builds confidence</h2>
          <p className="body-lg">
            Premium websites that help local businesses look established and win more enquiries.
          </p>
        </div>
      </AnimatedInView>

      <AnimatedInView className="mt-10">
        <div className="flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
          {logos.map((logo) => (
            <span key={logo} className="px-4 py-2 rounded-full border border-white/10 bg-white/5">
              {logo}
            </span>
          ))}
        </div>
      </AnimatedInView>

      <AnimatedInView className="mt-12">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <GlassCard key={testimonial.name} className="rounded-2xl p-7 card-hover">
              <p className="text-white/85 font-light leading-relaxed">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-sm text-white/60">{testimonial.business}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </AnimatedInView>
    </Section>
  )
}
