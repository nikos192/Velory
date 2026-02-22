const MAX_FIELD_LENGTH = 2000

function trimString(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function clamp(value, maxLength = MAX_FIELD_LENGTH) {
  return value.slice(0, maxLength)
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

  if (!response.ok) {
    throw new Error(`Webhook failed with status ${response.status}`)
  }

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
    '',
    `Source URL: ${payload.sourceUrl || 'unknown'}`,
    `Submitted at: ${payload.submittedAt}`,
  ]

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

  if (!response.ok) {
    throw new Error(`Resend failed with status ${response.status}`)
  }

  return { sent: true, provider: 'resend' }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const name = clamp(trimString(body?.name))
    const businessName = clamp(trimString(body?.businessName))
    const phone = clamp(trimString(body?.phone))
    const message = clamp(trimString(body?.message))
    const website = trimString(body?.website)
    const sourceUrl = clamp(trimString(body?.sourceUrl), 500)

    // Honeypot field: silently succeed for bots.
    if (website) {
      return Response.json({ ok: true }, { status: 200 })
    }

    if (!name || !businessName || !phone) {
      return Response.json(
        { ok: false, error: 'Name, business name, and phone are required.' },
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
    }

    const webhookResult = await sendLeadToWebhook(payload)
    if (webhookResult.sent) {
      return Response.json({ ok: true, provider: webhookResult.provider }, { status: 200 })
    }

    const resendResult = await sendLeadToResend(payload)
    if (resendResult.sent) {
      return Response.json({ ok: true, provider: resendResult.provider }, { status: 200 })
    }

    return Response.json(
      {
        ok: false,
        error:
          'Lead destination is not configured. Set CONTACT_WEBHOOK_URL or RESEND_API_KEY + LEAD_TO_EMAIL.',
      },
      { status: 503 }
    )
  } catch (error) {
    console.error('Contact API error:', error)
    return Response.json(
      { ok: false, error: 'Something went wrong sending your message. Please try again.' },
      { status: 500 }
    )
  }
}
