'use client'

import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import EstimatorWizard from '../../src/components/estimator/EstimatorWizard'

export default function EstimatorPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <EstimatorWizard />
      <Footer />
    </div>
  )
}
