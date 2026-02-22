import React from 'react'
import Section from './Section'
import GlassCard from './GlassCard'
import AnimatedInView from './AnimatedInView'

export default function HowItWorks() {
  const steps = [
    {
      title: 'We learn about your business',
      description: 'A fast discovery call to understand your services, brand voice, and ideal customers.',
    },
    {
      title: 'We design your website',
      description: 'Premium, conversion-focused design with a modern layout and clear messaging.',
    },
    {
      title: 'Your website launches on a clear timeline',
      description: 'We launch efficiently, test everything, and make sure it looks perfect on mobile.',
    },
  ]

  return (
    <Section id="how-it-works">
      <AnimatedInView>
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Process</p>
          <h2 className="mt-4 mb-4">How It Works</h2>
          <p className="body-lg">Three precise steps, zero noise.</p>
        </div>
      </AnimatedInView>

      <AnimatedInView className="mt-12">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <GlassCard key={step.title} className="rounded-2xl p-8 card-hover">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-semibold mb-6">
                {index + 1}
              </div>
              <h3 className="mb-4">{step.title}</h3>
              <p className="text-white/70 font-light leading-relaxed">{step.description}</p>
            </GlassCard>
          ))}
        </div>
      </AnimatedInView>
    </Section>
  )
}
