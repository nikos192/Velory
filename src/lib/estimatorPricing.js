export const ESTIMATOR_PRICING = {
  basePackage: 699,
  extraPage: 120,
  bookingIntegration: 180,
  advancedContactForms: 140,
  basicSeoSetup: 150,
  copywritingAssistance: 200,
  cmsBlogCapability: 250,
  ecommerceStarter: 450,
  rushDelivery: 220,
  ongoingMonthlyCarePlan: 79,
}

export const ESTIMATOR_ADDONS = [
  { key: 'bookingIntegration', label: 'Booking integration', oneTime: true },
  { key: 'advancedContactForms', label: 'Advanced contact forms', oneTime: true },
  { key: 'basicSeoSetup', label: 'Basic SEO setup', oneTime: true },
  { key: 'copywritingAssistance', label: 'Copywriting assistance', oneTime: true },
  { key: 'cmsBlogCapability', label: 'CMS/blog capability', oneTime: true },
  { key: 'ecommerceStarter', label: 'Ecommerce starter (up to 10 products)', oneTime: true },
  { key: 'rushDelivery', label: 'Rush delivery (under 5 days)', oneTime: true },
  { key: 'ongoingMonthlyCarePlan', label: 'Ongoing monthly care plan', oneTime: false },
]

export const defaultEstimatorSelection = {
  extraPages: 0,
  bookingIntegration: false,
  advancedContactForms: false,
  basicSeoSetup: false,
  copywritingAssistance: false,
  cmsBlogCapability: false,
  ecommerceStarter: false,
  rushDelivery: false,
  ongoingMonthlyCarePlan: false,
}

export function formatAud(amount) {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function calculateEstimator(selection) {
  const normalizedExtraPages = Math.max(0, Number(selection?.extraPages || 0))
  const roundedExtraPages = Math.floor(normalizedExtraPages)

  const addOns = []

  if (roundedExtraPages > 0) {
    addOns.push({
      key: 'extraPages',
      label: `Extra pages (${roundedExtraPages})`,
      amount: roundedExtraPages * ESTIMATOR_PRICING.extraPage,
      quantity: roundedExtraPages,
      unitPrice: ESTIMATOR_PRICING.extraPage,
      oneTime: true,
    })
  }

  ESTIMATOR_ADDONS.forEach((addon) => {
    if (addon.key === 'ongoingMonthlyCarePlan') {
      if (selection?.ongoingMonthlyCarePlan) {
        addOns.push({
          key: addon.key,
          label: addon.label,
          amount: ESTIMATOR_PRICING[addon.key],
          oneTime: false,
        })
      }
      return
    }

    if (selection?.[addon.key]) {
      addOns.push({
        key: addon.key,
        label: addon.label,
        amount: ESTIMATOR_PRICING[addon.key],
        oneTime: true,
      })
    }
  })

  const oneTimeAddons = addOns.filter((item) => item.oneTime)
  const monthlyAddons = addOns.filter((item) => !item.oneTime)
  const oneTimeTotal = ESTIMATOR_PRICING.basePackage + oneTimeAddons.reduce((sum, item) => sum + item.amount, 0)
  const monthlyTotal = monthlyAddons.reduce((sum, item) => sum + item.amount, 0)

  const selectedAddons = addOns.map((item) => item.label)

  return {
    basePrice: ESTIMATOR_PRICING.basePackage,
    addOns,
    oneTimeAddons,
    monthlyAddons,
    oneTimeTotal,
    monthlyTotal,
    selectedAddons,
    breakdown: {
      basePackage: ESTIMATOR_PRICING.basePackage,
      extraPages: roundedExtraPages,
      selectedAddons,
      oneTimeAddons,
      monthlyAddons,
      oneTimeTotal,
      monthlyTotal,
    },
  }
}

export function buildEstimatorSummary(estimate) {
  const oneTimeLines = estimate.oneTimeAddons.map((item) => `${item.label}: ${formatAud(item.amount)}`)
  const monthlyLines = estimate.monthlyAddons.map((item) => `${item.label}: ${formatAud(item.amount)}/month`)

  const lines = [
    'Website Price Estimate',
    `Base package: ${formatAud(estimate.basePrice)}`,
    ...oneTimeLines,
    `Estimated one-time total: ${formatAud(estimate.oneTimeTotal)}`,
    ...monthlyLines,
  ]

  return lines.join('\n')
}
