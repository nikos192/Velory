import { siteConfig } from '../../src/lib/siteConfig'

export const metadata = {
  title: 'Privacy Policy | VELORY',
  description: 'Privacy Policy for VELORY. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: '/privacy-policy',
  },
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

        <div className="mt-10 space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white">Who We Are</h2>
            <p className="mt-3">
              VELORY is a sole trader business operating in Australia, specialising in website design and development services for local businesses. We're based on the Gold Coast and committed to protecting your personal information.
            </p>
            <p className="mt-3">
              <strong>Australian Business Number (ABN):</strong> 31 574 585 058<br />
              <strong>Contact:</strong> <a href={`mailto:${siteConfig.contactEmail}`} className="text-sky-300 hover:text-sky-200">{siteConfig.contactEmail}</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Personal Information We Collect</h2>
            <p className="mt-3">When you submit our contact form or enquiry, we collect:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Required:</strong> Your name, business name, phone number, and message</li>
              <li><strong>Optional:</strong> Details about your business needs or additional information you provide</li>
              <li><strong>Automatically:</strong> Your IP address, browser information, and the page you were visiting (via our analytics)</li>
              <li><strong>Marketing:</strong> UTM tracking parameters if you arrive via a marketing link (utm_source, utm_medium, utm_campaign, etc.)</li>
            </ul>
            <p className="mt-3">
              We also collect information about your website behaviour through cookies and pixels as described below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">How We Use Your Information</h2>
            <p className="mt-3">We use your personal information for the following purposes:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>To respond to your enquiry</strong> and provide information about our services</li>
              <li><strong>To provide quotes, estimates,</strong> and project planning information</li>
              <li><strong>To contact you</strong> regarding your request (via email, phone, or SMS)</li>
              <li><strong>To improve our website</strong> and service quality based on usage patterns</li>
              <li><strong>To track campaign performance</strong> using your marketing source data</li>
              <li><strong>To comply with legal obligations</strong> and resolve disputes</li>
              <li><strong>To send you updates</strong> about new services or special offers (only with your consent)</li>
            </ul>
            <p className="mt-3">
              We only process personal information for these purposes and do not use it for automated decision-making or profiling.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Analytics, Cookies, and Tracking</h2>
            <p className="mt-3">
              Our website uses cookies and tracking technologies to understand how visitors use our site and measure the effectiveness of our advertising.
            </p>
            <div className="mt-3 space-y-3">
              <div>
                <strong className="text-white">Facebook Pixel</strong>
                <p className="mt-1">
                  We use Facebook's tracking pixel to measure website visits, form submissions, and conversions. This helps us understand which ads are working and optimise our marketing spend. Facebook may use this data to show you relevant ads on Facebook and other platforms. You can opt out of this tracking in your Facebook settings or visit{' '}
                  <a href="https://www.facebook.com/policies/cookies/" className="text-sky-300 hover:text-sky-200" target="_blank" rel="noopener noreferrer">
                    Facebook's cookie policy
                  </a>.
                </p>
              </div>
              <div>
                <strong className="text-white">Essential Cookies</strong>
                <p className="mt-1">
                  Some cookies are essential for our website to function (e.g., session management, security). These cannot be disabled.
                </p>
              </div>
              <div>
                <strong className="text-white">Your Cookie Choices</strong>
                <p className="mt-1">
                  You can disable non-essential cookies in your browser settings. However, this may affect your browsing experience.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Who We Share Your Information With</h2>
            <p className="mt-3">
              We do not sell your personal information. However, we may share your data with trusted third parties who help us operate our business:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Supabase (Database Provider):</strong> We store your enquiry details securely on Supabase, a cloud database service. Supabase processes data according to their <a href="https://supabase.com/privacy" className="text-sky-300 hover:text-sky-200" target="_blank" rel="noopener noreferrer">privacy policy</a>.
              </li>
              <li>
                <strong>Email Service Providers:</strong> If needed, we may use email services to send you responses or project updates.
              </li>
              <li>
                <strong>Facebook Inc.:</strong> Marketing and analytics data is shared with Facebook for audience insights and ad optimisation.
              </li>
              <li>
                <strong>Legal Authorities:</strong> We may disclose information if required by law enforcement or court order.
              </li>
            </ul>
            <p className="mt-3">
              These service providers are contractually bound to keep your information confidential and only use it for the purposes we specify.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Data Retention</h2>
            <p className="mt-3">
              We retain your enquiry information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Respond to your request and provide ongoing support</li>
              <li>Fulfil any contract between us</li>
              <li>Comply with legal obligations (typically 5–7 years for tax and business records)</li>
              <li>Resolve disputes and enforce agreements</li>
            </ul>
            <p className="mt-3">
              After these periods, we securely delete or anonymise your data unless we're required by law to retain it longer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Security of Your Information</h2>
            <p className="mt-3">
              We take reasonable precautions to protect your personal information from unauthorised access, loss, or misuse. Our measures include:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Encrypted data transmission (HTTPS)</li>
              <li>Secure database storage (Supabase with encryption)</li>
              <li>Limited staff access to sensitive data</li>
              <li>Regular security reviews and updates</li>
            </ul>
            <p className="mt-3">
              However, no system is completely secure. If we become aware of a data breach, we will notify affected individuals promptly in accordance with Australian Privacy Principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Your Rights</h2>
            <p className="mt-3">
              Under the <strong>Privacy Act 1988 (Cth)</strong> and Australian Privacy Principles, you have the right to:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Access your data:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correct your data:</strong> Ask us to update or correct inaccurate information</li>
              <li><strong>Delete your data:</strong> Request deletion or anonymisation (subject to legal obligations)</li>
              <li><strong>Port your data:</strong> Obtain your information in a portable format</li>
              <li><strong>Withdraw consent:</strong> Opt out of marketing communications or analytics tracking</li>
              <li><strong>Lodge a complaint:</strong> File a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{' '}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-sky-300 hover:text-sky-200">{siteConfig.contactEmail}</a>.
              We'll respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Policy Updates</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The date at the top of this page indicates when it was last updated. We recommend reviewing this policy periodically. Continued use of our website constitutes acceptance of updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy or your personal information, please contact:
            </p>
            <div className="mt-3 p-4 rounded-lg bg-slate-900/50 border border-white/10">
              <p><strong>VELORY</strong></p>
              <p>Email: <a href={`mailto:${siteConfig.contactEmail}`} className="text-sky-300 hover:text-sky-200">{siteConfig.contactEmail}</a></p>
              <p>Phone: <a href={siteConfig.contactPhoneHref} className="text-sky-300 hover:text-sky-200">{siteConfig.contactPhoneDisplay}</a></p>
              <p>ABN: 31 574 585 058</p>
            </div>
            <p className="mt-4 text-sm text-slate-400 border-t border-white/10 pt-4">
              <em>This Privacy Policy provides general information and is not legal advice. If you have concerns about privacy practices, please consult with a legal professional.</em>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
