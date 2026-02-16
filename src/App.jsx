import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WhatWeDo from './components/WhatWeDo'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhoItFor from './components/WhoItFor'
import Why from './components/Why'
import Examples from './components/Examples'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StructuredData from './components/StructuredData'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (!elements.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

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
      <About />
      <WhatWeDo />
      <Services />
      <Examples />
      <Testimonials />
      <HowItWorks />
      <WhoItFor />
      <Why />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
