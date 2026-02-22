import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Examples from './components/Examples'
import SocialProof from './components/SocialProof'
import Benefits from './components/Benefits'
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
    <div className="min-h-screen bg-slate-950">
      <StructuredData />
      <Header onScrollToSection={scrollToSection} />
      <Hero onScrollToSection={scrollToSection} />
      <SocialProof />
      <Examples />
      <HowItWorks />
      <Benefits />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
