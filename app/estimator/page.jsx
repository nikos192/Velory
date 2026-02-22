import EstimatorPageClient from '../../src/components/estimator/EstimatorPageClient'

export const metadata = {
  title: 'Website Price Estimator | VELORY',
  description:
    'Build a tailored website estimate in minutes. Choose pages, features, and delivery speed to get your projected investment.',
  alternates: {
    canonical: '/estimator',
  },
}

export default function EstimatorPage() {
  return <EstimatorPageClient />
}
