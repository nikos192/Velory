export function captureUtmParams() {
  if (typeof window === 'undefined') return null

  const params = new URLSearchParams(window.location.search)
  const utm = {
    source: params.get('utm_source'),
    medium: params.get('utm_medium'),
    campaign: params.get('utm_campaign'),
    content: params.get('utm_content'),
    term: params.get('utm_term'),
  }

  const hasAnyParam = Object.values(utm).some((v) => v !== null)
  return hasAnyParam ? utm : null
}

export function buildUtmString(utm) {
  if (!utm) return null
  const parts = Object.entries(utm)
    .filter(([, v]) => v !== null)
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
  return parts.length > 0 ? parts.join('&') : null
}
