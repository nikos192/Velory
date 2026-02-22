const STANDARD_PIXEL_EVENTS = new Set([
  'AddPaymentInfo',
  'AddToCart',
  'AddToWishlist',
  'CompleteRegistration',
  'Contact',
  'CustomizeProduct',
  'Donate',
  'FindLocation',
  'InitiateCheckout',
  'Lead',
  'Purchase',
  'Schedule',
  'Search',
  'StartTrial',
  'SubmitApplication',
  'Subscribe',
  'ViewContent',
])

function canTrackPixel() {
  return typeof window !== 'undefined' && typeof window.fbq === 'function'
}

export function trackPixelEvent(eventName, params) {
  if (!canTrackPixel()) return

  if (params) {
    window.fbq('track', eventName, params)
    return
  }

  window.fbq('track', eventName)
}

export function trackAnalyticsEvent(eventName, params = {}, options = {}) {
  if (typeof window === 'undefined') return

  const cleanParams =
    params && typeof params === 'object'
      ? Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined))
      : {}

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, cleanParams)
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...cleanParams })
  }

  if (!canTrackPixel()) return

  const pixelEventName = options.pixelEventName || eventName
  if (STANDARD_PIXEL_EVENTS.has(pixelEventName)) {
    window.fbq('track', pixelEventName, cleanParams)
  } else {
    window.fbq('trackCustom', pixelEventName, cleanParams)
  }
}
