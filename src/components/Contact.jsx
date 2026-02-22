import React, { useEffect, useState } from 'react'
import Section from './Section'
import GlassCard from './GlassCard'
import AnimatedInView from './AnimatedInView'
import { trackAnalyticsEvent, trackPixelEvent } from '../lib/facebookPixel'
import { siteConfig } from '../lib/siteConfig'
import { ESTIMATOR_STORAGE_KEY, formatAud } from '../lib/estimateCalculator'
import { captureUtmParams } from '../lib/utmCapture'

export default function Contact({ estimatorPrefill }) {
  const emailAddress = siteConfig.contactEmail
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    preferredLaunchWindow: '',
    message: '',
    website: '',
  })
  const [utmParams, setUtmParams] = useState(null)
  const [estimatorData, setEstimatorData] = useState(null)
  const [submittedWithEstimate, setSubmittedWithEstimate] = useState(false)
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  useEffect(() => {
    const utm = captureUtmParams()
    setUtmParams(utm)
  }, [])

  const applyEstimatorData = (prefill) => {
    if (!prefill) return

    setEstimatorData(prefill)
    setFormData((prev) => {
      const summary = typeof prefill.estimator_summary === 'string' ? prefill.estimator_summary : ''
      if (!summary) return prev
      if (prev.message.includes(summary)) return prev

      return {
        ...prev,
        message: prev.message ? `${prev.message}\n\n${summary}` : summary,
      }
    })
  }

  useEffect(() => {
    if (!estimatorPrefill) return

    applyEstimatorData(estimatorPrefill)
  }, [estimatorPrefill])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const raw = window.localStorage.getItem(ESTIMATOR_STORAGE_KEY)
    if (!raw) return

    try {
      const parsed = JSON.parse(raw)
      applyEstimatorData(parsed)
    } catch {
    } finally {
      window.localStorage.removeItem(ESTIMATOR_STORAGE_KEY)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'submitting') return

    setStatus('submitting')
    setStatusMessage('')
    setSubmittedWithEstimate(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          sourceUrl: window.location.href,
          estimator_breakdown: estimatorData?.estimator_breakdown || null,
          estimator_total: estimatorData?.estimator_total || null,
          selected_addons: estimatorData?.selected_addons || [],
          monthly_care_plan: estimatorData?.monthly_care_plan || null,
          preferred_launch_window: formData.preferredLaunchWindow || null,
          utm_source: utmParams?.source || null,
          utm_medium: utmParams?.medium || null,
          utm_campaign: utmParams?.campaign || null,
          utm_content: utmParams?.content || null,
          utm_term: utmParams?.term || null,
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.ok) {
        throw new Error(result?.error || 'Unable to send your message at the moment.')
      }

      trackPixelEvent('Lead')
      trackPixelEvent('Purchase')
      trackAnalyticsEvent(
        'lead_submitted_success',
        {
          has_estimator: Boolean(estimatorData),
          estimator_total: estimatorData?.estimator_total || null,
          selected_addon_count: estimatorData?.selected_addons?.length || 0,
          preferred_launch_window: formData.preferredLaunchWindow || null,
          utm_source: utmParams?.source || null,
          utm_medium: utmParams?.medium || null,
          utm_campaign: utmParams?.campaign || null,
        },
        { pixelEventName: 'LeadSubmittedSuccess' }
      )
      setStatus('success')
      setStatusMessage("Thanks, your message has been sent. We'll reply shortly.")
      setSubmittedWithEstimate(Boolean(estimatorData))
      setEstimatorData(null)
      setFormData({
        name: '',
        businessName: '',
        phone: '',
        preferredLaunchWindow: '',
        message: '',
        website: '',
      })
    } catch (error) {
      setStatus('error')
      setStatusMessage(
        `${error.message} You can also contact us directly at ${emailAddress} or ${siteConfig.contactPhoneDisplay}.`
      )
    }
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

            {estimatorData && (
              <div className="mb-6 p-4 rounded-xl border border-marina-300/30 bg-sky-400/10">
                <p className="text-sm text-sky-100 font-medium">Estimate attached</p>
                <p className="text-sm text-slate-200 mt-1">
                  One-time estimate: {formatAud(estimatorData.estimator_total)}
                  {estimatorData.monthly_care_plan ? ` • Care plan: ${formatAud(estimatorData.monthly_care_plan)}/month` : ''}
                </p>
              </div>
            )}

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
                <label htmlFor="preferredLaunchWindow" className="block text-sm font-medium text-slate-200 mb-2">
                  Preferred launch window
                </label>
                <select
                  id="preferredLaunchWindow"
                  name="preferredLaunchWindow"
                  value={formData.preferredLaunchWindow}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-marina-400 focus:border-transparent"
                >
                  <option value="">Select timeframe (optional)</option>
                  <option value="asap">ASAP (rush)</option>
                  <option value="2-4_weeks">2-4 weeks</option>
                  <option value="1-2_months">1-2 months</option>
                  <option value="just_researching">Just researching</option>
                </select>
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

              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-marina-400 to-sky-400 text-slate-950 font-semibold shadow-[0_14px_30px_rgba(56,189,248,0.35)] transition-transform duration-200 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="rounded-xl border border-emerald-300/30 bg-emerald-400/10 p-4 text-center">
                  <p className="text-emerald-200 text-sm font-medium">{statusMessage}</p>
                  <p className="text-emerald-100/90 text-xs mt-2">Expected response time: within 24 hours.</p>
                  {submittedWithEstimate && (
                    <p className="text-emerald-100/90 text-xs mt-1">
                      Your estimator selections were included in this enquiry.
                    </p>
                  )}
                </div>
              )}

              {status === 'error' && <p className="text-rose-300 text-sm text-center font-light">{statusMessage}</p>}

              <p className="text-xs text-slate-400 text-center font-light">
                By sending this form, you agree to our <a href="/privacy-policy">Privacy Policy</a> and{' '}
                <a href="/terms">Terms of Service</a>.
              </p>
            </form>
          </GlassCard>

          <GlassCard className="rounded-3xl p-8 md:p-10">
            <h3 className="text-xl font-light mb-8 text-white">Get in touch</h3>
            
            <div className="space-y-10">
              <div>
                <h4 className="text-sm font-medium text-slate-200 mb-2">Phone</h4>
                <a
                  href={siteConfig.contactPhoneHref}
                  onClick={() => {
                    trackPixelEvent('Contact')
                  }}
                  className="text-lg text-white hover:text-marina-300 transition-colors font-medium"
                >
                  {siteConfig.contactPhoneDisplay}
                </a>
                <p className="text-sm text-slate-400 mt-2 font-light">
                  Call or text us. We respond quickly during business hours.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-slate-200 mb-2">Email</h4>
                <a
                  href={`mailto:${emailAddress}`}
                  onClick={() => {
                    trackPixelEvent('Contact')
                  }}
                  className="text-lg text-white hover:text-marina-300 transition-colors font-medium"
                >
                  {emailAddress}
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
