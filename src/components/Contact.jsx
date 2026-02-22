import React, { useState } from 'react'
import Section from './Section'
import GlassCard from './GlassCard'
import AnimatedInView from './AnimatedInView'
import { trackPixelEvent } from '../lib/facebookPixel'

export default function Contact() {
  const emailAddress = 'velorysystems@outlook.com'
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    trackPixelEvent('Lead')

    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Business: ${formData.businessName}\n` +
      `Phone: ${formData.phone}\n` +
      `Message: ${formData.message || '(none)'}`
    )

    const mailtoLink = `mailto:${emailAddress}?subject=Website Enquiry from ${encodeURIComponent(formData.name)}&body=${emailBody}`
    window.location.href = mailtoLink

    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', businessName: '', phone: '', message: '' })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <Section id="contact">
      <AnimatedInView>
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Final step</p>
          <h2 className="mt-4 mb-4">Get your website started today</h2>
          <p className="body-lg">
            Fast turnaround, premium design, and a website that gets you more enquiries.
          </p>
        </div>
      </AnimatedInView>

      <AnimatedInView className="mt-12">
        <div className="grid md:grid-cols-2 gap-10">
          <GlassCard className="rounded-3xl p-8 md:p-10">
            <h3 className="text-xl font-light mb-8 text-white">Send us a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-marina-400 focus:border-transparent"
                  placeholder="John"
                />
              </div>

              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-slate-200 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-marina-400 focus:border-transparent"
                  placeholder="Your Auto Repair"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-200 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-marina-400 focus:border-transparent"
                  placeholder="(07) 5555 1234"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                  Tell us a bit about your business
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-marina-400 focus:border-transparent resize-none"
                  placeholder="What do you do? What are your goals for a website..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-marina-400 to-sky-400 text-slate-950 font-semibold shadow-[0_14px_30px_rgba(56,189,248,0.35)] transition-transform duration-200 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {submitted ? 'Opening email...' : 'Send Message'}
              </button>

              {submitted && (
                <p className="text-emerald-400 text-sm text-center font-light">
                  ✓ Opening your email client. Send the message to get in touch.
                </p>
              )}
            </form>
          </GlassCard>

          <GlassCard className="rounded-3xl p-8 md:p-10">
            <h3 className="text-xl font-light mb-8 text-white">Get in touch</h3>
            
            <div className="space-y-10">
              <div>
                <h4 className="text-sm font-medium text-slate-200 mb-2">Phone</h4>
                <a
                  href="tel:+61497469408"
                  onClick={() => {
                    trackPixelEvent('Contact')
                  }}
                  className="text-lg text-white hover:text-marina-300 transition-colors font-medium"
                >
                  0497 469 408
                </a>
                <p className="text-sm text-slate-400 mt-2 font-light">
                  Call or text us. We respond quickly during business hours.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-slate-200 mb-2">Email</h4>
                <a
                  href="mailto:velorysystems@outlook.com"
                  onClick={() => {
                    trackPixelEvent('Contact')
                  }}
                  className="text-lg text-white hover:text-marina-300 transition-colors font-medium"
                >
                  velorysystems@outlook.com
                </a>
                <p className="text-sm text-slate-400 mt-2 font-light">
                  Send us an email anytime. We'll respond within 24 hours.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-slate-200 mb-2">Address</h4>
                <p className="text-slate-200 font-light">
                  VELORY<br />
                  Gold Coast, Australia
                </p>
                <p className="text-sm text-slate-400 mt-2 font-light">
                  We serve local businesses throughout the Gold Coast region.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-slate-200 mb-4">Response Time</h4>
                <p className="text-slate-300 font-light">
                  We respond within 24 hours, often much faster.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <h4 className="text-sm font-medium text-white mb-3">Not sure if it's right for you?</h4>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  That's okay. Send us a message anyway. We can chat about whether a website makes
                  sense for your business right now. No commitment required.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </AnimatedInView>
    </Section>
  )
}
