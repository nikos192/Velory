import React from 'react'
import Section from './Section'
import GlassCard from './GlassCard'
import AnimatedInView from './AnimatedInView'

export default function Examples() {
  const examples = [
    {
      name: "Morgan's Mobile Mechanic",
      description: "Bold landing, clear services, and frictionless contact flow.",
      tag: 'Mechanic',
      gradient: 'from-cyan-500/30 via-sky-500/20 to-blue-500/30',
      link: 'https://morgans-teal.vercel.app/'
    },
    {
      name: 'North GC Landscape',
      description: 'Project highlights, services, and trust signals that convert.',
      tag: 'Trades',
      gradient: 'from-emerald-500/30 via-green-500/20 to-lime-400/30',
      link: 'https://north-gc-landscape-sups-2vij.vercel.app/'
    },
    {
      name: "Sel's Auto",
      description: "Clean service pages, gallery, and premium positioning.",
      tag: 'Detailing',
      gradient: 'from-amber-400/30 via-orange-500/20 to-rose-500/30',
      link: 'https://selsauto.vercel.app/'
    }
  ]

  return (
    <Section id="work">
      <AnimatedInView>
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Portfolio</p>
          <h2 className="mt-4 mb-4">Recent Work</h2>
          <p className="body-lg">
            A curated selection of high-converting local business websites.
          </p>
        </div>
      </AnimatedInView>

      <AnimatedInView className="mt-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {examples.map((example) => (
            <a
              key={example.name}
              href={example.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <GlassCard className="rounded-2xl overflow-hidden h-full card-hover border border-white/10 group-hover:border-white/25 transition-colors">
                <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${example.gradient}`}>
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white/5" aria-hidden="true" />
                  <div className="absolute inset-0 scale-105 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 bg-gradient-to-tr from-white/5 via-transparent to-white/10" aria-hidden="true" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50">{example.tag}</span>
                  <h3 className="text-lg font-semibold mt-3 mb-3">{example.name}</h3>
                  <p className="text-sm text-white/70 mb-6 font-light">{example.description}</p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center px-4 py-2 rounded-full border border-white/15 text-sm text-white/80">
                      View site
                    </span>
                  </div>
                </div>
              </GlassCard>
            </a>
          ))}
        </div>
      </AnimatedInView>
    </Section>
  )
}
