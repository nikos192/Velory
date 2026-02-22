import { siteConfig } from '../../src/lib/siteConfig'

export const metadata = {
  title: 'Terms of Service | VELORY',
  description: 'Terms of Service for VELORY website visitors and clients.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-20">
        <a href="/" className="text-sm text-slate-300 hover:text-white">
          ← Back to home
        </a>
        <h1 className="mt-6">Terms of Service</h1>
        <p className="text-sm text-slate-400 mt-3">Last updated: {siteConfig.legalUpdatedAt}</p>

        <div className="mt-10 space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl">Services</h2>
            <p className="mt-3">
              VELORY provides website strategy, design, development, and related digital services for businesses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl">Quotes and project scope</h2>
            <p className="mt-3">
              Every project is quoted based on agreed scope. Any additional work outside scope may require a revised
              quote.
            </p>
          </section>

          <section>
            <h2 className="text-2xl">Client responsibilities</h2>
            <p className="mt-3">Clients are responsible for providing accurate content, assets, and approvals on time.</p>
          </section>

          <section>
            <h2 className="text-2xl">Payments</h2>
            <p className="mt-3">
              Payment terms are confirmed in writing before project commencement. Late payments may delay delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl">Liability</h2>
            <p className="mt-3">
              To the maximum extent permitted by law, VELORY is not liable for indirect or consequential losses arising
              from use of our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl">Contact</h2>
            <p className="mt-3">
              For terms questions, contact <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
