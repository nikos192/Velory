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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center text-white">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/5 border border-white/10 p-1.5 shadow-lg overflow-hidden flex items-center justify-center">
            <img src="/nikosta_square_transparent_1024.png" alt="Nikosta Systems" className="h-full w-full object-contain" />
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-slate-200">
          <a href="#services" onClick={handleNavClick('services')} className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#how-it-works" onClick={handleNavClick('how-it-works')} className="hover:text-white transition-colors">
            How it works
          </a>
          <a href="#who-its-for" onClick={handleNavClick('who-its-for')} className="hover:text-white transition-colors">
            Who it's for
          </a>
          <a href="#examples" onClick={handleNavClick('examples')} className="hover:text-white transition-colors">
            Examples
          </a>
          <a href="#contact" onClick={handleNavClick('contact')} className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          onClick={handleNavClick('contact')}
          className="text-sm px-5 py-2 rounded-full border border-white/20 text-white hover:border-white/40 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}
