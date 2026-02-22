import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-950 reveal">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-marina-300/80">About VELORY</p>
            <h2 className="mt-4 mb-6">Built for local businesses that want to look premium fast.</h2>
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              VELORY helps local businesses establish a premium online presence with fast, modern websites designed to attract customers and build trust.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Get your website started today
              </a>
              <a href="#services" className="btn-secondary">
                Explore services
              </a>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-10">
            <div className="space-y-6 text-slate-200/90 font-light">
              <div className="flex items-start gap-4">
                <span className="text-marina-300">●</span>
                <p>Premium design with clean structure, intentional typography, and trust-driven messaging.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-marina-300">●</span>
                <p>Mobile-first builds that load quickly and make contacting you effortless.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-marina-300">●</span>
                <p>Clear launch timelines with practical milestones and review points.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
