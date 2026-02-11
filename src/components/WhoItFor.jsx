import React from 'react'

export default function WhoItFor() {
  const businesses = [
    {
      icon: '🔧',
      title: 'Mechanics & Auto Repair',
      description: 'Show your expertise and services to car owners in the area.',
    },
    {
      icon: '🚗',
      title: 'Mobile Detailers',
      description: 'Display your portfolio and make it easy for customers to book.',
    },
    {
      icon: '🏗️',
      title: 'Trades & Contractors',
      description: 'Plumbers, electricians, builders — anyone with a local service.',
    },
    {
      icon: '💇',
      title: 'Hair & Beauty',
      description: 'Salons, studios, and personal services looking for a digital home.',
    },
    {
      icon: '🏠',
      title: 'Real Estate & Property',
      description: 'Real estate agents, property managers, and home services.',
    },
    {
      icon: '🎯',
      title: 'Any Local Service',
      description: 'If you serve customers in the Gold Coast, we can help.',
    },
  ]

  return (
    <section id="who-its-for" className="py-20 md:py-32 bg-marina/10">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <h2 className="mb-4">Who it's for</h2>
          <p className="text-lg text-navy font-light">
            Any local service business on the Gold Coast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {businesses.map((business, index) => (
            <div
              key={index}
              className="p-8 bg-marina/20 rounded-lg border border-marina hover:border-navy hover:shadow-md transition-all"
            >
              <div className="text-4xl mb-4 text-navy">{business.icon}</div>
              <h3 className="text-lg font-medium mb-3 text-navy">{business.title}</h3>
              <p className="text-navy/80 text-sm leading-relaxed font-light">
                {business.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-navy/90 rounded-lg border border-marina p-10">
          <h3 className="text-xl font-light mb-4 text-marina">Why local businesses trust us</h3>
          <ul className="space-y-3 text-marina font-light">
            <li className="flex gap-3">
              <span className="text-marina font-medium">✓</span>
              <span>We are based on the Gold Coast, we know local businesses</span>
            </li>
            <li className="flex gap-3">
              <span className="text-marina font-medium">✓</span>
              <span>We do not lock you in with contracts or ongoing retainers</span>
            </li>
            <li className="flex gap-3">
              <span className="text-marina font-medium">✓</span>
              <span>We build websites that are simple to understand and update</span>
            </li>
            <li className="flex gap-3">
              <span className="text-marina font-medium">✓</span>
              <span>We talk straight — no agency jargon or buzzwords</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
