import React, { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What kinds of businesses do you work with?",
      answer: "We work with all types of local service businesses on the Gold Coast — mechanics, plumbers, electricians, hairdressers, mobile detailers, real estate agents, and more. If you serve customers locally, we can help you get online."
    },
    {
      question: "How fast can you launch?",
      answer: "Most websites go live in 1–2 days. We understand that time matters for small businesses, so we work efficiently without cutting corners on quality. Complex projects may take a bit longer, but we always keep you informed."
    },
    {
      question: "Do you handle hosting and domains?",
      answer: "Yes, we can handle everything — from registering your domain name to setting up hosting. Or if you already have these, we can work with what you have. We make it as easy as possible for you."
    },
    {
      question: "Can you update my existing website?",
      answer: "Absolutely. If you have an outdated website that needs a refresh, we can rebuild it with a modern design. We'll make sure it's mobile-friendly, fast, and easy for customers to use."
    },
    {
      question: "What do you need from me to start?",
      answer: "Not much! We need some basic information about your business, any photos or logos you want to include, and a conversation about what you want your website to achieve. We'll guide you through the rest."
    },
    {
      question: "Will my website work on mobile?",
      answer: "Yes, every website we build is mobile-first. Most people browse on their phones, so we make sure your site looks great and works perfectly on all devices — phones, tablets, and desktops."
    },
    {
      question: "What if I don't like the website you build?",
      answer: "Then you don't pay for it. We build it first, you review it, and you only keep it if you love it. There's no risk and no obligation. We're confident in our work, so we're happy to prove it upfront."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 md:py-32 bg-navy-50">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-navy-700 font-light">
            Quick answers to common questions about our service.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-navy-100 overflow-hidden hover:border-marina-300 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-navy-50/50 transition-colors"
              >
                <h3 className="text-lg font-medium text-navy-900 pr-4">
                  {faq.question}
                </h3>
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-marina-100 text-marina-600 flex items-center justify-center text-xl font-light">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-1">
                  <p className="text-navy-700 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-white rounded-lg border border-navy-100">
          <p className="text-navy-800 font-light mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-navy-900 text-marina-100 rounded-full hover:bg-navy-800 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
