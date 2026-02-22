import React, { useMemo, useState } from 'react'
import Section from './Section'
import GlassCard from './GlassCard'
import AnimatedInView from './AnimatedInView'
import {
  ESTIMATOR_PRICING,
  calculateEstimator,
  defaultEstimatorSelection,
  formatAud,
  buildEstimatorSummary,
} from '../lib/estimatorPricing'

export default function PriceEstimator({ onSendEstimate }) {
  const [selection, setSelection] = useState(defaultEstimatorSelection)

  const estimate = useMemo(() => calculateEstimator(selection), [selection])

  const handleToggle = (key) => {
    setSelection((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleExtraPagesChange = (event) => {
    const value = Number(event.target.value)
    setSelection((prev) => ({
      ...prev,
      extraPages: Number.isFinite(value) ? Math.max(0, value) : 0,
    }))
  }

  const handleSendEstimate = () => {
    const summary = buildEstimatorSummary(estimate)
    onSendEstimate?.({
      estimator_breakdown: estimate.breakdown,
      estimator_total: estimate.oneTimeTotal,
      selected_addons: estimate.selectedAddons,
      monthly_care_plan: estimate.monthlyTotal || null,
      estimator_summary: summary,
    })
  }

  return (
    <Section id="price-estimator">
      <AnimatedInView>
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-4 mb-4">Website Price Estimator</h2>
          <p className="body-lg">Start with the base package and add what your business needs.</p>
        </div>
      </AnimatedInView>

      <AnimatedInView className="mt-12">
        <div className="grid md:grid-cols-2 gap-10">
          <GlassCard className="rounded-3xl p-8 md:p-10">
            <h3 className="text-xl font-light mb-6 text-white">Choose your options</h3>

            <div className="space-y-6">
              <div>
                <label htmlFor="extraPages" className="block text-sm font-medium text-slate-200 mb-2">
                  Extra pages
                </label>
                <input
                  id="extraPages"
                  name="extraPages"
                  type="number"
                  min="0"
                  step="1"
                  value={selection.extraPages}
                  onChange={handleExtraPagesChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-marina-400 focus:border-transparent"
                  aria-describedby="extraPagesHelp"
                />
                <p id="extraPagesHelp" className="text-xs text-slate-400 mt-2 font-light">
                  {formatAud(ESTIMATOR_PRICING.extraPage)} per additional page.
                </p>
              </div>

              <fieldset className="space-y-4">
                <legend className="text-sm font-medium text-slate-200">Add-ons</legend>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selection.bookingIntegration}
                    onChange={() => handleToggle('bookingIntegration')}
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900/60 text-marina-400 focus:ring-marina-400"
                  />
                  <span className="text-slate-200 text-sm">Booking integration ({formatAud(ESTIMATOR_PRICING.bookingIntegration)})</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selection.advancedContactForms}
                    onChange={() => handleToggle('advancedContactForms')}
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900/60 text-marina-400 focus:ring-marina-400"
                  />
                  <span className="text-slate-200 text-sm">
                    Advanced contact forms ({formatAud(ESTIMATOR_PRICING.advancedContactForms)})
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selection.basicSeoSetup}
                    onChange={() => handleToggle('basicSeoSetup')}
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900/60 text-marina-400 focus:ring-marina-400"
                  />
                  <span className="text-slate-200 text-sm">Basic SEO setup ({formatAud(ESTIMATOR_PRICING.basicSeoSetup)})</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selection.copywritingAssistance}
                    onChange={() => handleToggle('copywritingAssistance')}
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900/60 text-marina-400 focus:ring-marina-400"
                  />
                  <span className="text-slate-200 text-sm">
                    Copywriting assistance ({formatAud(ESTIMATOR_PRICING.copywritingAssistance)})
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selection.cmsBlogCapability}
                    onChange={() => handleToggle('cmsBlogCapability')}
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900/60 text-marina-400 focus:ring-marina-400"
                  />
                  <span className="text-slate-200 text-sm">CMS/blog capability ({formatAud(ESTIMATOR_PRICING.cmsBlogCapability)})</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selection.ecommerceStarter}
                    onChange={() => handleToggle('ecommerceStarter')}
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900/60 text-marina-400 focus:ring-marina-400"
                  />
                  <span className="text-slate-200 text-sm">
                    Ecommerce starter (up to 10 products) ({formatAud(ESTIMATOR_PRICING.ecommerceStarter)})
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selection.rushDelivery}
                    onChange={() => handleToggle('rushDelivery')}
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900/60 text-marina-400 focus:ring-marina-400"
                  />
                  <span className="text-slate-200 text-sm">Rush delivery under 5 days ({formatAud(ESTIMATOR_PRICING.rushDelivery)})</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selection.ongoingMonthlyCarePlan}
                    onChange={() => handleToggle('ongoingMonthlyCarePlan')}
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900/60 text-marina-400 focus:ring-marina-400"
                  />
                  <span className="text-slate-200 text-sm">
                    Ongoing monthly care plan ({formatAud(ESTIMATOR_PRICING.ongoingMonthlyCarePlan)}/month)
                  </span>
                </label>
              </fieldset>
            </div>
          </GlassCard>

          <GlassCard className="rounded-3xl p-8 md:p-10">
            <h3 className="text-xl font-light mb-6 text-white">Estimate summary</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-slate-200">
                <span>Base package</span>
                <span className="font-medium">{formatAud(estimate.basePrice)}</span>
              </div>

              {estimate.oneTimeAddons.map((item) => (
                <div key={item.key} className="flex items-center justify-between text-slate-200">
                  <span>{item.label}</span>
                  <span className="font-medium">{formatAud(item.amount)}</span>
                </div>
              ))}

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-white">
                <span className="text-lg">Estimated total (AUD)</span>
                <span className="text-2xl font-semibold">{formatAud(estimate.oneTimeTotal)}</span>
              </div>

              <div className="flex items-center justify-between text-slate-300">
                <span>Monthly care plan</span>
                <span>{estimate.monthlyTotal > 0 ? `${formatAud(estimate.monthlyTotal)}/month` : 'Not selected'}</span>
              </div>

              <p className="text-xs text-slate-400 font-light">Final quote may vary after discovery.</p>

              <button
                type="button"
                onClick={handleSendEstimate}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-marina-400 to-sky-400 text-slate-950 font-semibold shadow-[0_14px_30px_rgba(56,189,248,0.35)] transition-transform duration-200 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Send this estimate
              </button>
            </div>
          </GlassCard>
        </div>
      </AnimatedInView>
    </Section>
  )
}
