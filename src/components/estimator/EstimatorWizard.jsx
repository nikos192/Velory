'use client'

import React, { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import GlassCard from '../GlassCard'
import {
  buildEstimatorLeadPayload,
  calculateEstimate,
  defaultEstimateSelection,
  ESTIMATOR_STORAGE_KEY,
  formatAud,
} from '../../lib/estimateCalculator'
import { ESTIMATOR_CONTENT, ESTIMATOR_TOTAL_STEPS, PRICING_CONFIG } from '../../lib/pricingConfig'

export default function EstimatorWizard() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [selection, setSelection] = useState(defaultEstimateSelection)

  const estimate = useMemo(() => calculateEstimate(selection), [selection])

  const updateSelection = (key, value) => {
    setSelection((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const goBack = () => setStep((prev) => Math.max(1, prev - 1))
  const goNext = () => setStep((prev) => Math.min(ESTIMATOR_TOTAL_STEPS, prev + 1))

  const handleSendEstimate = () => {
    const payload = buildEstimatorLeadPayload(estimate)
    window.localStorage.setItem(ESTIMATOR_STORAGE_KEY, JSON.stringify(payload))
    router.push('/#contact')
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Base package included</h2>
            <p className="text-slate-300 leading-relaxed">{ESTIMATOR_CONTENT.base.description}</p>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-white font-medium">{ESTIMATOR_CONTENT.base.title}</p>
              <p className="text-slate-300 text-sm mt-1">Home + About + Contact + Services + Gallery</p>
              <p className="text-sky-300 font-semibold mt-2">{formatAud(PRICING_CONFIG.basePackage)}</p>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Add extra pages</h2>
            <p className="text-slate-300 leading-relaxed">{ESTIMATOR_CONTENT.extraPages.description}</p>
            <div>
              <label htmlFor="extraPages" className="block text-sm font-medium text-slate-200 mb-2">
                Number of extra pages
              </label>
              <input
                id="extraPages"
                type="number"
                min="0"
                step="1"
                value={selection.extraPages}
                onChange={(event) => updateSelection('extraPages', Math.max(0, Number(event.target.value) || 0))}
                className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-marina-400 focus:border-transparent"
              />
              <p className="text-xs text-slate-400 mt-2">{formatAud(PRICING_CONFIG.extraPage)} per page</p>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Lead and booking features</h2>

            <label className="block rounded-xl border border-white/10 bg-white/5 p-4 cursor-pointer">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={selection.bookingIntegration}
                  onChange={() => updateSelection('bookingIntegration', !selection.bookingIntegration)}
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900/60 text-marina-400 focus:ring-marina-400"
                />
                <div>
                  <p className="text-white font-medium">{ESTIMATOR_CONTENT.bookingIntegration.title}</p>
                  <p className="text-sm text-slate-300 mt-1">{ESTIMATOR_CONTENT.bookingIntegration.description}</p>
                  <p className="text-sky-300 mt-2 font-medium">+{formatAud(PRICING_CONFIG.bookingIntegration)}</p>
                </div>
              </div>
            </label>

            <label className="block rounded-xl border border-white/10 bg-white/5 p-4 cursor-pointer">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={selection.advancedContactForms}
                  onChange={() => updateSelection('advancedContactForms', !selection.advancedContactForms)}
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900/60 text-marina-400 focus:ring-marina-400"
                />
                <div>
                  <p className="text-white font-medium">{ESTIMATOR_CONTENT.advancedContactForms.title}</p>
                  <p className="text-sm text-slate-300 mt-1">{ESTIMATOR_CONTENT.advancedContactForms.description}</p>
                  <p className="text-sky-300 mt-2 font-medium">+{formatAud(PRICING_CONFIG.advancedContactForms)}</p>
                </div>
              </div>
            </label>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Marketing and content</h2>

            <label className="block rounded-xl border border-white/10 bg-white/5 p-4 cursor-pointer">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={selection.basicSeoSetup}
                  onChange={() => updateSelection('basicSeoSetup', !selection.basicSeoSetup)}
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900/60 text-marina-400 focus:ring-marina-400"
                />
                <div>
                  <p className="text-white font-medium">{ESTIMATOR_CONTENT.basicSeoSetup.title}</p>
                  <p className="text-sm text-slate-300 mt-1">{ESTIMATOR_CONTENT.basicSeoSetup.description}</p>
                  <p className="text-sky-300 mt-2 font-medium">+{formatAud(PRICING_CONFIG.basicSeoSetup)}</p>
                </div>
              </div>
            </label>

            <label className="block rounded-xl border border-white/10 bg-white/5 p-4 cursor-pointer">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={selection.copywritingAssistance}
                  onChange={() => updateSelection('copywritingAssistance', !selection.copywritingAssistance)}
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900/60 text-marina-400 focus:ring-marina-400"
                />
                <div>
                  <p className="text-white font-medium">{ESTIMATOR_CONTENT.copywritingAssistance.title}</p>
                  <p className="text-sm text-slate-300 mt-1">{ESTIMATOR_CONTENT.copywritingAssistance.description}</p>
                  <p className="text-sky-300 mt-2 font-medium">+{formatAud(PRICING_CONFIG.copywritingAssistance)}</p>
                </div>
              </div>
            </label>

            <label className="block rounded-xl border border-white/10 bg-white/5 p-4 cursor-pointer">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={selection.cmsBlogCapability}
                  onChange={() => updateSelection('cmsBlogCapability', !selection.cmsBlogCapability)}
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900/60 text-marina-400 focus:ring-marina-400"
                />
                <div>
                  <p className="text-white font-medium">{ESTIMATOR_CONTENT.cmsBlogCapability.title}</p>
                  <p className="text-sm text-slate-300 mt-1">{ESTIMATOR_CONTENT.cmsBlogCapability.description}</p>
                  <p className="text-sky-300 mt-2 font-medium">+{formatAud(PRICING_CONFIG.cmsBlogCapability)}</p>
                </div>
              </div>
            </label>
          </div>
        )
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Ecommerce setup</h2>
            <label className="block rounded-xl border border-white/10 bg-white/5 p-4 cursor-pointer">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={selection.ecommerceStarter}
                  onChange={() => updateSelection('ecommerceStarter', !selection.ecommerceStarter)}
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900/60 text-marina-400 focus:ring-marina-400"
                />
                <div>
                  <p className="text-white font-medium">{ESTIMATOR_CONTENT.ecommerceStarter.title}</p>
                  <p className="text-sm text-slate-300 mt-1">{ESTIMATOR_CONTENT.ecommerceStarter.description}</p>
                  <p className="text-sky-300 mt-2 font-medium">+{formatAud(PRICING_CONFIG.ecommerceStarter)}</p>
                </div>
              </div>
            </label>
          </div>
        )
      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Delivery speed</h2>

            <label className="block rounded-xl border border-white/10 bg-white/5 p-4 cursor-pointer">
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  name="deliverySpeed"
                  value="standard"
                  checked={selection.deliverySpeed === 'standard'}
                  onChange={() => updateSelection('deliverySpeed', 'standard')}
                  className="mt-1 h-4 w-4 border-white/20 bg-slate-900/60 text-marina-400 focus:ring-marina-400"
                />
                <div>
                  <p className="text-white font-medium">Standard delivery</p>
                  <p className="text-sm text-slate-300 mt-1">Standard build timeline with no surcharge.</p>
                  <p className="text-sky-300 mt-2 font-medium">+{formatAud(0)}</p>
                </div>
              </div>
            </label>

            <label className="block rounded-xl border border-white/10 bg-white/5 p-4 cursor-pointer">
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  name="deliverySpeed"
                  value="rush"
                  checked={selection.deliverySpeed === 'rush'}
                  onChange={() => updateSelection('deliverySpeed', 'rush')}
                  className="mt-1 h-4 w-4 border-white/20 bg-slate-900/60 text-marina-400 focus:ring-marina-400"
                />
                <div>
                  <p className="text-white font-medium">Rush delivery (under 5 days)</p>
                  <p className="text-sm text-slate-300 mt-1">{ESTIMATOR_CONTENT.rushDelivery.description}</p>
                  <p className="text-sky-300 mt-2 font-medium">
                    +{Math.round(PRICING_CONFIG.rushDeliveryPercent * 100)}% ({formatAud(Math.round(estimate.subtotalBeforeRush * PRICING_CONFIG.rushDeliveryPercent))} based on current subtotal)
                  </p>
                </div>
              </div>
            </label>
          </div>
        )
      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Care plan</h2>

            <label className="block rounded-xl border border-white/10 bg-white/5 p-4 cursor-pointer">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={selection.ongoingMonthlyCarePlan}
                  onChange={() => updateSelection('ongoingMonthlyCarePlan', !selection.ongoingMonthlyCarePlan)}
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900/60 text-marina-400 focus:ring-marina-400"
                />
                <div>
                  <p className="text-white font-medium">{ESTIMATOR_CONTENT.monthlyCare.title}</p>
                  <p className="text-sm text-slate-300 mt-1">{ESTIMATOR_CONTENT.monthlyCare.description}</p>
                  <p className="text-sky-300 mt-2 font-medium">{formatAud(PRICING_CONFIG.ongoingMonthlyCarePlan)}/month</p>
                </div>
              </div>
            </label>
          </div>
        )
      case 8:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Final review</h2>
            <p className="text-slate-300 leading-relaxed">
              Review your estimate below, then send it through and we will follow up with a tailored final quote.
            </p>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
              {estimate.oneTimeLineItems.map((item) => (
                <div key={item.key} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-white">{item.label}</p>
                    <p className="text-xs text-slate-400 mt-1">{item.description}</p>
                  </div>
                  <p className="text-slate-200 font-medium">{formatAud(item.amount)}</p>
                </div>
              ))}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <p className="text-white text-lg">Estimated one-time total (AUD)</p>
                <p className="text-white text-2xl font-semibold">{formatAud(estimate.oneTimeTotal)}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-slate-300">Ongoing monthly care plan</p>
                <p className="text-slate-200">
                  {estimate.monthlyCarePlan > 0 ? `${formatAud(estimate.monthlyCarePlan)}/month` : 'Not selected'}
                </p>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section className="section pt-28 md:pt-32">
      <div className="section-inner">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="eyebrow">Estimator</p>
          <h1 className="mt-4 mb-4 text-4xl md:text-5xl">Website Price Estimator</h1>
          <p className="body-lg">Build your estimate step by step and send it straight to our team.</p>
        </div>

        <div className="grid lg:grid-cols-[1.45fr_1fr] gap-8 items-start">
          <GlassCard className="rounded-3xl p-6 md:p-8">
            <p className="text-sm text-slate-300 mb-6">Step {step} of {ESTIMATOR_TOTAL_STEPS}</p>

            {renderStep()}

            <div className="mt-8 flex flex-wrap gap-3 justify-between">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 1}
                className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Back
              </button>

              {step < ESTIMATOR_TOTAL_STEPS ? (
                <button type="button" onClick={goNext} className="btn-primary">
                  Next
                </button>
              ) : (
                <button type="button" onClick={handleSendEstimate} className="btn-primary">
                  Send Estimate
                </button>
              )}
            </div>
          </GlassCard>

          <GlassCard className="rounded-3xl p-6 md:p-8 lg:sticky lg:top-28">
            <h3 className="text-xl font-light mb-5 text-white">Running total</h3>

            <div className="space-y-3">
              {estimate.oneTimeLineItems.map((item) => (
                <div key={item.key} className="flex items-center justify-between text-sm text-slate-200 gap-4">
                  <span>{item.label}</span>
                  <span className="font-medium">{formatAud(item.amount)}</span>
                </div>
              ))}

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-white">
                <span>Estimated total (AUD)</span>
                <span className="text-xl font-semibold">{formatAud(estimate.oneTimeTotal)}</span>
              </div>

              <div className="flex items-center justify-between text-slate-300">
                <span>Monthly care plan</span>
                <span>
                  {estimate.monthlyCarePlan > 0 ? `${formatAud(estimate.monthlyCarePlan)}/month` : 'Not selected'}
                </span>
              </div>

              <p className="text-xs text-slate-400 pt-2">Estimate only. Final quote may vary after discovery.</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
