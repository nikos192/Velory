export function trackPixelEvent(eventName, params) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') {
    return
  }

  if (params) {
    window.fbq('track', eventName, params)
    return
  }

  window.fbq('track', eventName)
}
