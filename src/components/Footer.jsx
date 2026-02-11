import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 border-t border-navy-800 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <img src="/src/assets/logo.png" alt="Nikosta Systems" className="h-8" />
            <div>
              <h4 className="text-lg font-light text-marina-200 mb-0">Nikosta Systems</h4>
              <p className="text-sm text-marina-200 font-light">
                Building professional websites for local businesses on the Gold Coast.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-marina-200 mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#how-it-works" className="text-marina-200 hover:text-white transition-colors font-light">
                  How it works
                </a>
              </li>
              <li>
                <a href="#who-its-for" className="text-marina-200 hover:text-white transition-colors font-light">
                  Who it's for
                </a>
              </li>
              <li>
                <a href="#contact" className="text-marina-200 hover:text-white transition-colors font-light">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-medium text-marina-200 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+61497469408" className="text-marina-200 hover:text-white transition-colors font-light">
                  0497 469 408
                </a>
              </li>
              <li className="text-marina-200 font-light">
                Gold Coast, Australia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-marina-200 font-light">
            © {currentYear} Nikosta Systems. All rights reserved.
          </p>
          <p className="text-xs text-marina-200 font-light mt-4 md:mt-0">
            No-risk, no-contract web design for local businesses.
          </p>
        </div>
      </div>
    </footer>
  )
}
