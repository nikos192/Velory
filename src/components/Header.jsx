"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { trackPixelEvent } from '../lib/facebookPixel'

export default function Header({ onScrollToSection }) {
  const pathname = usePathname()

  const handleNavClick = (sectionId) => (event) => {
    if (!onScrollToSection || pathname !== '/') {
      return
    }

    event.preventDefault()
    onScrollToSection(sectionId)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center text-white">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity" aria-label="VELORY home">
          <div className="h-8 w-8 md:h-9 md:w-9 rounded-full bg-white/5 border border-white/10 p-1 shadow-lg overflow-hidden flex items-center justify-center">
            <img src="/velory-logo.png" alt="VELORY" className="h-full w-full object-contain" />
          </div>
          <span className="text-sm md:text-base font-semibold tracking-tight">VELORY</span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm text-slate-200">
          <a href="/#work" onClick={handleNavClick('work')} className="hover:text-white transition-colors">
            Work
          </a>
          <a href="/#how-it-works" onClick={handleNavClick('how-it-works')} className="hover:text-white transition-colors">
            Process
          </a>
          <a href="/#benefits" onClick={handleNavClick('benefits')} className="hover:text-white transition-colors">
            Benefits
          </a>
          <a href="/#faq" onClick={handleNavClick('faq')} className="hover:text-white transition-colors">
            FAQ
          </a>
          <Link href="/estimator" className="hover:text-white transition-colors">
            Estimator
          </Link>
          <a href="/#contact" onClick={handleNavClick('contact')} className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        <a
          href="/#contact"
          onClick={(event) => {
            trackPixelEvent('Contact')
            handleNavClick('contact')(event)
          }}
          className="text-sm px-5 py-2 rounded-full border border-white/20 text-white hover:border-white/40 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}
