import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhoItFor from './components/WhoItFor'
import Examples from './components/Examples'
import Why from './components/Why'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onScrollToSection={scrollToSection} />
      <Hero onScrollToSection={scrollToSection} />
      <HowItWorks />
      <WhoItFor />
      <Examples />
      <Why />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
