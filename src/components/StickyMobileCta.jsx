import React from 'react'
import { trackPixelEvent } from '../lib/facebookPixel'
import { siteConfig } from '../lib/siteConfig'

export default function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-3 md:hidden">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/15 bg-slate-900/90 backdrop-blur-xl p-2 shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="/estimator"
            onClick={() => trackPixelEvent('ViewContent')}
            className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-marina-400 to-sky-400"
          >
            Get Estimate
          </a>
          <a
            href={siteConfig.bookingHref}
            onClick={() => trackPixelEvent('Contact')}
            className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-medium border border-white/20 text-white"
          >
            Book Call
          </a>
        </div>
      </div>
    </div>
  )
}
