import React from 'react'
import Section from './Section'
import { siteConfig } from '../lib/siteConfig'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const contactEmail = siteConfig.contactEmail

  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-200">
      <Section as="div" className="py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-white/5 border border-white/10 p-1 shadow-lg overflow-hidden flex items-center justify-center">
              <img src="/velory-logo.png" alt="VELORY" className="h-full w-full object-contain" />
            </div>
            <div>
              <h4 className="text-lg font-light text-white mb-0">VELORY</h4>
              <p className="text-sm text-slate-400 font-light">
                Premium websites for local businesses on the Gold Coast.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-slate-300 mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#work" className="text-slate-400 hover:text-white transition-colors font-light">
                  Work
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="text-slate-400 hover:text-white transition-colors font-light">
                  Process
                </a>
              </li>
              <li>
                <a href="/#benefits" className="text-slate-400 hover:text-white transition-colors font-light">
                  Benefits
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-slate-400 hover:text-white transition-colors font-light">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-slate-400 hover:text-white transition-colors font-light">
                  Contact us
                </a>
              </li>
              <li>
                <a href="/estimator" className="text-slate-400 hover:text-white transition-colors font-light">
                  Get My Estimate
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors font-light">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-slate-400 hover:text-white transition-colors font-light">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-medium text-slate-300 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={siteConfig.contactPhoneHref} className="text-slate-400 hover:text-white transition-colors font-light">
                  {siteConfig.contactPhoneDisplay}
                </a>
              </li>
              <li>
                <a href={siteConfig.bookingHref} className="text-slate-400 hover:text-white transition-colors font-light">
                  Book 15-min call
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-slate-400 hover:text-white transition-colors font-light"
                  aria-label={`Email VELORY at ${contactEmail}`}
                >
                  Email VELORY
                </a>
              </li>
              <li className="text-slate-400 font-light">
                Gold Coast, Australia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-slate-400 font-light">
            © {currentYear} VELORY. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 font-light mt-4 md:mt-0">
            Premium web design for local businesses.
          </p>
        </div>
      </Section>
    </footer>
  )
}
