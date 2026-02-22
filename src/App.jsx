import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Examples from './components/Examples'
import SocialProof from './components/SocialProof'
import Benefits from './components/Benefits'
import Faq from './components/Faq'
import PriceEstimator from './components/PriceEstimator'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StructuredData from './components/StructuredData'

function App() {
  const [estimatorPrefill, setEstimatorPrefill] = useState(null)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSendEstimate = (estimatePayload) => {
    setEstimatorPrefill(estimatePayload)
    scrollToSection('contact')
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
      <PriceEstimator onSendEstimate={handleSendEstimate} />
      <Contact estimatorPrefill={estimatorPrefill} />
      <Footer />
    </div>
  )
}

export default App
