import React from 'react'

export default function Header({ onScrollToSection }) {
  const handleNavClick = (sectionId) => (event) => {
    if (!onScrollToSection) {
      return
    }

    event.preventDefault()
    onScrollToSection(sectionId)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-navy-900 z-50 border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex justify-between items-center text-marina-100">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-navy-900/70 border border-marina-200/30 p-1.5 shadow-lg overflow-hidden flex items-center justify-center">
            <img src="/nikosta_square_transparent_1024.png" alt="Nikosta Systems" className="h-full w-full object-contain" />
          </div>
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm">
          <a
            href="#services"
            onClick={handleNavClick('services')}
            className="text-marina-100/80 hover:text-marina-50 transition-colors"
          >
            Services
          </a>
          <a
            href="#how-it-works"
            onClick={handleNavClick('how-it-works')}
            className="text-marina-100/80 hover:text-marina-50 transition-colors"
          >
            How it works
          </a>
          <a
            href="#who-its-for"
            onClick={handleNavClick('who-its-for')}
            className="text-marina-100/80 hover:text-marina-50 transition-colors"
          >
            Who it's for
          </a>
          <a
            href="#examples"
            onClick={handleNavClick('examples')}
            className="text-marina-100/80 hover:text-marina-50 transition-colors"
          >
            Examples
          </a>
          <a
            href="#contact"
            onClick={handleNavClick('contact')}
            className="text-marina-100/80 hover:text-marina-50 transition-colors"
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          onClick={handleNavClick('contact')}
          className="text-sm px-5 py-2 bg-marina-500 text-white rounded-full hover:bg-marina-400 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}
