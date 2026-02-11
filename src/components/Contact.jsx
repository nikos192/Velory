import React, { useState } from 'react'

export default function Contact() {
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
    // In a real application, you'd send this data to a server
    console.log('Form submitted:', formData)
    
    // Simulate submission
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', businessName: '', phone: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <h2 className="mb-4">Let's talk</h2>
          <p className="text-lg text-navy font-light">
            No pressure. No sales pitch. Just a genuine conversation about your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-light mb-8 text-navy-900">Send us a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="John"
                />
              </div>

              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-900 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Your Auto Repair"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="(07) 5555 1234"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Tell us a bit about your business
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                  placeholder="What do you do? What are your goals for a website..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-marina-500 text-white font-medium rounded-lg hover:bg-marina-600 transition-colors shadow-md"
              >
                {submitted ? 'Thanks! We\'ll be in touch.' : 'Send Message'}
              </button>

              {submitted && (
                <p className="text-green-600 text-sm text-center font-light">
                  ✓ Your message has been sent. We'll get back to you soon.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-light mb-8 text-navy-900">Get in touch</h3>
            
            <div className="space-y-10">
              <div>
                <h4 className="text-sm font-medium text-navy-900 mb-2">Phone</h4>
                <a
                  href="tel:+61497469408"
                    className="text-lg text-navy-900 hover:text-marina-500 transition-colors font-medium"
                  >
                    0497 469 408
                </a>
                <p className="text-sm text-navy-700 mt-2 font-light">
                  Call or text us. We're usually available during business hours.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-navy mb-2">Address</h4>
                <p className="text-navy font-light">
                  Nikosta Systems<br />
                  Gold Coast, Australia
                </p>
                <p className="text-sm text-navy/80 mt-2 font-light">
                  We serve local businesses throughout the Gold Coast region.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-navy mb-4">Response Time</h4>
                <p className="text-navy font-light">
                  We try to get back to you within 24 hours. Sometimes faster if we're free.
                </p>
              </div>

              <div className="p-6 bg-marina/20 rounded-lg border border-marina">
                <h4 className="text-sm font-medium text-navy mb-3">Not sure if it's right for you?</h4>
                <p className="text-sm text-navy font-light leading-relaxed">
                  That's okay. Send us a message anyway. We can chat about whether a website makes
                  sense for your business right now. No commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
