import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhoItFor from './components/WhoItFor'
import Why from './components/Why'
import Examples from './components/Examples'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StructuredData from './components/StructuredData'

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-navy-50">
      <StructuredData />
      <Header onScrollToSection={scrollToSection} />
      <Hero onScrollToSection={scrollToSection} />
      <WhatWeDo />
      <Services />
      <HowItWorks />
      <WhoItFor />
      <Why />
      <Examples />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
