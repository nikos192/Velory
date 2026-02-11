import React from 'react'

export default function Header({ onScrollToSection }) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-navy-900 rounded-full p-1 shadow-lg flex items-center justify-center">
            <img src="/logo.png" alt="Nikosta Systems" className="h-8 md:h-10 object-contain rounded-full" />
          </div>
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm">
          <button
            onClick={() => onScrollToSection('how-it-works')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            How it works
          </button>
          <button
            onClick={() => onScrollToSection('who-its-for')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Who it's for
          </button>
          <button
            onClick={() => onScrollToSection('contact')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </button>
        </nav>

        <button
          onClick={() => onScrollToSection('contact')}
          className="text-sm px-5 py-2 bg-marina-500 text-white rounded-full hover:bg-marina-600 transition-colors"
        >
          Get in touch
        </button>
      </div>
    </header>
  )
}
