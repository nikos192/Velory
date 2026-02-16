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
      preview: 'https://morgans-teal.vercel.app/',
      link: 'https://morgans-teal.vercel.app/'
    },
    {
      name: 'North GC Landscape',
      description: 'Project highlights, services, and trust signals that convert.',
      tag: 'Trades',
      preview: 'https://north-gc-landscape-sups-2vij.vercel.app/',
      link: 'https://north-gc-landscape-sups-2vij.vercel.app/'
    },
    {
      name: "Sel's Auto",
      description: "Clean service pages, gallery, and premium positioning.",
      tag: 'Detailing',
      preview: 'https://selsauto.vercel.app/',
      previewImage: '/hero-sample.jpg',
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
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  {example.previewImage ? (
                    <img
                      src={example.previewImage}
                      alt={`${example.name} preview`}
                      className="absolute left-0 top-0 h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <iframe
                      title={`${example.name} preview`}
                      src={example.preview}
                      className="absolute left-0 top-0 h-[720px] w-[1200px] origin-top-left scale-[0.33] pointer-events-none"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-white/10" aria-hidden="true" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white/5" aria-hidden="true" />
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
