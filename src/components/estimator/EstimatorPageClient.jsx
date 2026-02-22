'use client'

import Header from '../Header'
import Footer from '../Footer'
import EstimatorWizard from './EstimatorWizard'

export default function EstimatorPageClient() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <EstimatorWizard />
      <Footer />
    </div>
  )
}
