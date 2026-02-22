import { siteConfig } from '../../src/lib/siteConfig'

export const metadata = {
  title: 'Privacy Policy | VELORY',
  description: 'Privacy Policy for VELORY website visitors and lead enquiries.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-20">
        <a href="/" className="text-sm text-slate-300 hover:text-white">
          ← Back to home
        </a>
        <h1 className="mt-6">Privacy Policy</h1>
        <p className="text-sm text-slate-400 mt-3">Last updated: {siteConfig.legalUpdatedAt}</p>

        <div className="mt-10 space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl">Who we are</h2>
            <p className="mt-3">
              VELORY provides website design and development services for local businesses in Australia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl">What we collect</h2>
            <p className="mt-3">
              When you submit our contact form, we collect your name, business name, phone number, and message.
            </p>
          </section>

          <section>
            <h2 className="text-2xl">How we use your information</h2>
            <p className="mt-3">We use your details to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Respond to your enquiry.</li>
              <li>Provide quotes and project information.</li>
              <li>Improve our website and service quality.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl">Analytics and tracking</h2>
            <p className="mt-3">
              We use analytics and advertising pixels to understand website usage and campaign performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl">Data sharing</h2>
            <p className="mt-3">
              We do not sell your personal information. We may share data with service providers that help us operate
              our site and handle enquiries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl">Your rights</h2>
            <p className="mt-3">
              You can request access, correction, or deletion of your personal data by contacting us at{' '}
              <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
