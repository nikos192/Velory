import React from 'react'
import Section from './Section'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const contactEmail = 'nikosta.systems@outlook.com'

  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-200">
      <Section as="div" className="py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 p-1.5 shadow-lg overflow-hidden flex items-center justify-center">
              <img src="/nikosta_square_transparent_1024.png" alt="Nikosta Systems" className="h-full w-full object-contain" />
            </div>
            <div>
              <h4 className="text-lg font-light text-white mb-0">Nikosta Systems</h4>
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
                <a href="#work" className="text-slate-400 hover:text-white transition-colors font-light">
                  Work
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors font-light">
                  Process
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-slate-400 hover:text-white transition-colors font-light">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-white transition-colors font-light">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors font-light">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-medium text-slate-300 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+61497469408" className="text-slate-400 hover:text-white transition-colors font-light">
                  0497 469 408
                </a>
              </li>
              <li>
                <a href={`mailto:${contactEmail}`} className="text-slate-400 hover:text-white transition-colors font-light">
                  {contactEmail}
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
            © {currentYear} Nikosta Systems. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 font-light mt-4 md:mt-0">
            Premium web design for local businesses.
          </p>
        </div>
      </Section>
    </footer>
  )
}
