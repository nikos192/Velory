const MAX_FIELD_LENGTH = 2000
const ALLOWED_DELIVERY_SPEEDS = new Set(['standard', 'rush'])
const ESTIMATOR_BOOLEAN_SELECTION_KEYS = [
  'bookingIntegration',
  'advancedContactForms',
  'basicSeoSetup',
  'copywritingAssistance',
  'cmsBlogCapability',
  'ecommerceStarter',
  'ongoingMonthlyCarePlan',
]

function trimString(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function clamp(value, maxLength = MAX_FIELD_LENGTH) {
  return value.slice(0, maxLength)
}

function sanitizeStringArray(value) {
  if (!Array.isArray(value)) return []
  return value
    .map((item) => clamp(trimString(item), 120))
    .filter(Boolean)
    .slice(0, 30)
}

function sanitizeUtmParam(value, maxLength = 100) {
  return value ? clamp(trimString(value), maxLength) : null
}

function sanitizeLaunchWindow(value) {
  const normalized = trimString(value)
  if (!normalized) return null

  const allowed = new Set(['asap', '2-4_weeks', '1-2_months', 'just_researching'])
  return allowed.has(normalized) ? normalized : null
}

function sanitizeNonNegativeInteger(value) {
  const numeric = Number(value)
  if (!Number.isFinite(numeric)) return null
  return Math.max(0, Math.round(numeric))
}

function sanitizeEstimatorSelection(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null

  const safe = {}
  const extraPages = sanitizeNonNegativeInteger(value.extraPages)
  if (extraPages !== null) safe.extraPages = extraPages

  for (const key of ESTIMATOR_BOOLEAN_SELECTION_KEYS) {
    if (typeof value[key] === 'boolean') safe[key] = value[key]
  }

  const deliverySpeed = trimString(value.deliverySpeed)
  if (ALLOWED_DELIVERY_SPEEDS.has(deliverySpeed)) safe.deliverySpeed = deliverySpeed

  return Object.keys(safe).length ? safe : null
}

function sanitizeEstimatorLineItems(value) {
  if (!Array.isArray(value)) return []

  return value
    .slice(0, 20)
    .map((item) => {
      if (!item || typeof item !== 'object' || Array.isArray(item)) return null

      const key = clamp(trimString(item.key), 80)
      const label = clamp(trimString(item.label), 160)
      const amount = sanitizeNonNegativeInteger(item.amount)
      if (!key || !label || amount === null) return null

      return { key, label, amount }
    })
    .filter(Boolean)
}

function sanitizeEstimatorBreakdown(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null

  const safe = {}

  const selection = sanitizeEstimatorSelection(value.selection)
  if (selection) safe.selection = selection

  const oneTimeLineItems = sanitizeEstimatorLineItems(value.oneTimeLineItems)
  if (oneTimeLineItems.length) safe.oneTimeLineItems = oneTimeLineItems

  const subtotalBeforeRush = sanitizeNonNegativeInteger(value.subtotalBeforeRush)
  if (subtotalBeforeRush !== null) safe.subtotalBeforeRush = subtotalBeforeRush

  const rushSurcharge = sanitizeNonNegativeInteger(value.rushSurcharge)
  if (rushSurcharge !== null) safe.rushSurcharge = rushSurcharge

  const oneTimeTotal = sanitizeNonNegativeInteger(value.oneTimeTotal)
  if (oneTimeTotal !== null) safe.oneTimeTotal = oneTimeTotal

  const monthlyCarePlan = sanitizeNonNegativeInteger(value.monthlyCarePlan)
  if (monthlyCarePlan !== null) safe.monthlyCarePlan = monthlyCarePlan

  return Object.keys(safe).length ? safe : null
}

function buildEstimatorSnapshot({ estimatorBreakdown, estimatorTotal, monthlyCarePlan, selectedAddons }) {
  const selection = estimatorBreakdown?.selection || {}
  const lineItems = Array.isArray(estimatorBreakdown?.oneTimeLineItems)
    ? estimatorBreakdown.oneTimeLineItems
    : []

  const lineItemByKey = new Map(lineItems.map((item) => [item.key, item]))
  const basePackage = lineItemByKey.get('basePackage')
  const extraPages = lineItemByKey.get('extraPages')
  const rushDelivery = lineItemByKey.get('rushDelivery')

  const monthlyPlanCost =
    monthlyCarePlan ?? sanitizeNonNegativeInteger(estimatorBreakdown?.monthlyCarePlan) ?? null
  const totalFromBreakdown = sanitizeNonNegativeInteger(estimatorBreakdown?.oneTimeTotal)

  return {
    currency: 'AUD',
    base_package_cost: sanitizeNonNegativeInteger(basePackage?.amount),
    extra_pages_count: sanitizeNonNegativeInteger(selection.extraPages),
    extra_pages_cost: sanitizeNonNegativeInteger(extraPages?.amount),
    booking_integration: typeof selection.bookingIntegration === 'boolean' ? selection.bookingIntegration : null,
    advanced_contact_forms:
      typeof selection.advancedContactForms === 'boolean' ? selection.advancedContactForms : null,
    basic_seo_setup: typeof selection.basicSeoSetup === 'boolean' ? selection.basicSeoSetup : null,
    copywriting_assistance:
      typeof selection.copywritingAssistance === 'boolean' ? selection.copywritingAssistance : null,
    cms_blog_capability:
      typeof selection.cmsBlogCapability === 'boolean' ? selection.cmsBlogCapability : null,
    ecommerce_starter: typeof selection.ecommerceStarter === 'boolean' ? selection.ecommerceStarter : null,
    delivery_speed: ALLOWED_DELIVERY_SPEEDS.has(selection.deliverySpeed) ? selection.deliverySpeed : null,
    rush_surcharge:
      sanitizeNonNegativeInteger(estimatorBreakdown?.rushSurcharge) ??
      sanitizeNonNegativeInteger(rushDelivery?.amount),
    subtotal: sanitizeNonNegativeInteger(estimatorBreakdown?.subtotalBeforeRush),
    total: estimatorTotal ?? totalFromBreakdown ?? null,
    monthly_care_plan_selected:
      typeof selection.ongoingMonthlyCarePlan === 'boolean'
        ? selection.ongoingMonthlyCarePlan
        : monthlyPlanCost !== null,
    monthly_care_plan_cost: monthlyPlanCost,
    selected_option_count: selectedAddons.length,
    line_items: lineItems.length ? lineItems : null,
  }
}

async function sendLeadToWebhook(payload) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL
  if (!webhookUrl) return { sent: false }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) throw new Error(`Webhook failed with status ${response.status}`)

  return { sent: true, provider: 'webhook' }
}

async function sendLeadToResend(payload) {
  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.LEAD_TO_EMAIL
  if (!apiKey || !toEmail) return { sent: false }

  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'
  const messageLines = [
    `Name: ${payload.name}`,
    `Business: ${payload.businessName}`,
    `Phone: ${payload.phone}`,
    `Message: ${payload.message || '(none provided)'}`,
    payload.estimator_total ? `Estimated total: ${payload.estimator_total} AUD` : null,
    payload.selected_addons?.length ? `Selected add-ons: ${payload.selected_addons.join(', ')}` : null,
    payload.monthly_care_plan ? `Monthly care plan: ${payload.monthly_care_plan} AUD/month` : null,
    payload.preferred_launch_window ? `Preferred launch window: ${payload.preferred_launch_window}` : null,
    '',
    `Source URL: ${payload.sourceUrl || 'unknown'}`,
    `Submitted at: ${payload.submittedAt}`,
  ].filter(Boolean)

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: toEmail,
      subject: `New website enquiry from ${payload.name}`,
      text: messageLines.join('\n'),
    }),
  })

  if (!response.ok) throw new Error(`Resend failed with status ${response.status}`)

  return { sent: true, provider: 'resend' }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const name = clamp(trimString(body?.name))
    const businessNameInput = clamp(trimString(body?.businessName))
    const businessName = businessNameInput || 'Not provided'
    const phone = clamp(trimString(body?.phone))
    const message = clamp(trimString(body?.message))
    const website = trimString(body?.website)
    const sourceUrl = clamp(trimString(body?.sourceUrl), 500)
    const estimatorTotalRaw = Number(body?.estimator_total)
    const estimatorTotal = Number.isFinite(estimatorTotalRaw) ? Math.max(0, Math.round(estimatorTotalRaw)) : null
    const monthlyCarePlanRaw = Number(body?.monthly_care_plan)
    const monthlyCarePlan = Number.isFinite(monthlyCarePlanRaw)
      ? Math.max(0, Math.round(monthlyCarePlanRaw))
      : null
    const selectedAddons = sanitizeStringArray(body?.selected_addons)
    const estimatorBreakdown = sanitizeEstimatorBreakdown(body?.estimator_breakdown)
    const estimatorSnapshot = buildEstimatorSnapshot({
      estimatorBreakdown,
      estimatorTotal,
      monthlyCarePlan,
      selectedAddons,
    })

    const utmSource = sanitizeUtmParam(body?.utm_source)
    const utmMedium = sanitizeUtmParam(body?.utm_medium)
    const utmCampaign = sanitizeUtmParam(body?.utm_campaign)
    const utmContent = sanitizeUtmParam(body?.utm_content)
    const utmTerm = sanitizeUtmParam(body?.utm_term)
    const preferredLaunchWindow = sanitizeLaunchWindow(body?.preferred_launch_window)

    // Honeypot field: silently succeed for bots.
    if (website) {
      return Response.json({ ok: true }, { status: 200 })
    }

    if (!name || !phone) {
      return Response.json(
        { ok: false, error: 'Name and phone are required.' },
        { status: 400 }
      )
    }

    const payload = {
      name,
      businessName,
      phone,
      message,
      sourceUrl,
      submittedAt: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || '',
      referer: request.headers.get('referer') || '',
      estimator_total: estimatorTotal,
      selected_addons: selectedAddons,
      estimator_breakdown: estimatorBreakdown,
      estimator_snapshot: estimatorSnapshot,
      monthly_care_plan: monthlyCarePlan,
      preferred_launch_window: preferredLaunchWindow,
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      utm_content: utmContent,
      utm_term: utmTerm,
    }

    const deliveryErrors = []

    try {
      const webhookResult = await sendLeadToWebhook(payload)
      if (webhookResult.sent) {
        return Response.json({ ok: true, provider: webhookResult.provider }, { status: 200 })
      }
    } catch (error) {
      deliveryErrors.push(error instanceof Error ? error.message : String(error))
    }

    try {
      const resendResult = await sendLeadToResend(payload)
      if (resendResult.sent) {
        return Response.json({ ok: true, provider: resendResult.provider }, { status: 200 })
      }
    } catch (error) {
      deliveryErrors.push(error instanceof Error ? error.message : String(error))
    }

    return Response.json(
      {
        ok: false,
        error: deliveryErrors.length
          ? `Lead delivery failed: ${deliveryErrors.join(' | ')}`
          : 'Lead destination is not configured. Set CONTACT_WEBHOOK_URL or RESEND_API_KEY + LEAD_TO_EMAIL.',
      },
      { status: deliveryErrors.length ? 502 : 503 }
    )
  } catch (error) {
    console.error('Contact API error:', error)
    return Response.json(
      { ok: false, error: 'Something went wrong sending your message. Please try again.' },
      { status: 500 }
    )
  }
}
