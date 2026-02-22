import {
  ESTIMATOR_CONTENT,
  ESTIMATOR_STORAGE_KEY,
  PRICING_CONFIG,
} from './pricingConfig'

export { ESTIMATOR_STORAGE_KEY }

export const defaultEstimateSelection = {
  extraPages: 0,
  bookingIntegration: false,
  advancedContactForms: false,
  basicSeoSetup: false,
  copywritingAssistance: false,
  cmsBlogCapability: false,
  ecommerceStarter: false,
  deliverySpeed: 'standard',
  ongoingMonthlyCarePlan: false,
}

export function formatAud(amount) {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function calculateEstimate(selection) {
  const normalizedExtraPages = Math.max(0, Number(selection?.extraPages || 0))
  const extraPages = Math.floor(normalizedExtraPages)

  const oneTimeLineItems = [
    {
      key: 'basePackage',
      label: 'Base package (Home + About + Contact + Services + Gallery)',
      description: ESTIMATOR_CONTENT.base.description,
      amount: PRICING_CONFIG.basePackage,
    },
  ]

  if (extraPages > 0) {
    oneTimeLineItems.push({
      key: 'extraPages',
      label: `Extra pages (${extraPages})`,
      description: ESTIMATOR_CONTENT.extraPages.description,
      amount: extraPages * PRICING_CONFIG.extraPage,
    })
  }

  if (selection?.bookingIntegration) {
    oneTimeLineItems.push({
      key: 'bookingIntegration',
      label: ESTIMATOR_CONTENT.bookingIntegration.title,
      description: ESTIMATOR_CONTENT.bookingIntegration.description,
      amount: PRICING_CONFIG.bookingIntegration,
    })
  }

  if (selection?.advancedContactForms) {
    oneTimeLineItems.push({
      key: 'advancedContactForms',
      label: ESTIMATOR_CONTENT.advancedContactForms.title,
      description: ESTIMATOR_CONTENT.advancedContactForms.description,
      amount: PRICING_CONFIG.advancedContactForms,
    })
  }

  if (selection?.basicSeoSetup) {
    oneTimeLineItems.push({
      key: 'basicSeoSetup',
      label: ESTIMATOR_CONTENT.basicSeoSetup.title,
      description: ESTIMATOR_CONTENT.basicSeoSetup.description,
      amount: PRICING_CONFIG.basicSeoSetup,
    })
  }

  if (selection?.copywritingAssistance) {
    oneTimeLineItems.push({
      key: 'copywritingAssistance',
      label: ESTIMATOR_CONTENT.copywritingAssistance.title,
      description: ESTIMATOR_CONTENT.copywritingAssistance.description,
      amount: PRICING_CONFIG.copywritingAssistance,
    })
  }

  if (selection?.cmsBlogCapability) {
    oneTimeLineItems.push({
      key: 'cmsBlogCapability',
      label: ESTIMATOR_CONTENT.cmsBlogCapability.title,
      description: ESTIMATOR_CONTENT.cmsBlogCapability.description,
      amount: PRICING_CONFIG.cmsBlogCapability,
    })
  }

  if (selection?.ecommerceStarter) {
    oneTimeLineItems.push({
      key: 'ecommerceStarter',
      label: ESTIMATOR_CONTENT.ecommerceStarter.title,
      description: ESTIMATOR_CONTENT.ecommerceStarter.description,
      amount: PRICING_CONFIG.ecommerceStarter,
    })
  }

  const subtotalBeforeRush = oneTimeLineItems.reduce((sum, item) => sum + item.amount, 0)
  const rushSurcharge =
    selection?.deliverySpeed === 'rush' ? Math.round(subtotalBeforeRush * PRICING_CONFIG.rushDeliveryPercent) : 0

  if (rushSurcharge > 0) {
    oneTimeLineItems.push({
      key: 'rushDelivery',
      label: `Rush delivery (${Math.round(PRICING_CONFIG.rushDeliveryPercent * 100)}% surcharge)`,
      description: ESTIMATOR_CONTENT.rushDelivery.description,
      amount: rushSurcharge,
    })
  }

  const oneTimeTotal = subtotalBeforeRush + rushSurcharge
  const monthlyCarePlan = selection?.ongoingMonthlyCarePlan ? PRICING_CONFIG.ongoingMonthlyCarePlan : 0

  const selectedAddons = oneTimeLineItems
    .filter((item) => item.key !== 'basePackage')
    .map((item) => item.label)

  if (monthlyCarePlan > 0) {
    selectedAddons.push('Ongoing monthly care plan')
  }

  return {
    oneTimeLineItems,
    subtotalBeforeRush,
    rushSurcharge,
    oneTimeTotal,
    monthlyCarePlan,
    selectedAddons,
    breakdown: {
      selection: {
        ...defaultEstimateSelection,
        ...selection,
        extraPages,
      },
      oneTimeLineItems,
      subtotalBeforeRush,
      rushSurcharge,
      oneTimeTotal,
      monthlyCarePlan,
    },
  }
}

export function buildEstimateSummary(estimate) {
  const lines = [
    'Website Price Estimate',
    ...estimate.oneTimeLineItems.map((item) => `${item.label}: ${formatAud(item.amount)}`),
    `Estimated one-time total: ${formatAud(estimate.oneTimeTotal)}`,
  ]

  if (estimate.monthlyCarePlan > 0) {
    lines.push(`Ongoing monthly care plan: ${formatAud(estimate.monthlyCarePlan)}/month`)
  }

  lines.push('Estimate only. Final quote may vary after discovery.')

  return lines.join('\n')
}

export function buildEstimatorLeadPayload(estimate) {
  return {
    estimator_breakdown: estimate.breakdown,
    estimator_total: estimate.oneTimeTotal,
    selected_addons: estimate.selectedAddons,
    monthly_care_plan: estimate.monthlyCarePlan || null,
    estimator_summary: buildEstimateSummary(estimate),
  }
}
