import React from 'react'
import Section from './Section'
import GlassCard from './GlassCard'
import AnimatedInView from './AnimatedInView'

const benefits = [
  {
    title: 'Look established instantly',
    description: 'A premium online presence that builds trust before you answer the phone.'
  },
  {
    title: 'Fast turnaround',
    description: 'Efficient delivery timelines with clear milestones and quality checks.'
  },
  {
    title: 'Designed for enquiries',
    description: 'Clear messaging, strong CTAs, and mobile-first UX that converts.'
  },
  {
    title: 'Local business focus',
    description: 'We know the Gold Coast market and what local customers respond to.'
  }
]

export default function Benefits() {
  return (
    <Section id="benefits">
      <AnimatedInView>
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Benefits</p>
          <h2 className="mt-4 mb-4">Why local businesses choose VELORY</h2>
          <p className="body-lg">High-end design and fast delivery, without the agency chaos.</p>
        </div>
      </AnimatedInView>

      <AnimatedInView className="mt-12">
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <GlassCard key={benefit.title} className="rounded-2xl p-8 card-hover">
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-white/70 font-light leading-relaxed">{benefit.description}</p>
            </GlassCard>
          ))}
        </div>
      </AnimatedInView>
    </Section>
  )
}
