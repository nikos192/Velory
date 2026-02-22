import { siteConfig } from '../../src/lib/siteConfig'

export const metadata = {
  title: 'Terms of Service | VELORY',
  description: 'Terms of Service for VELORY. Our service conditions, scope, and client responsibilities.',
  alternates: {
    canonical: '/terms',
  },
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

        <div className="mt-10 space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white">About These Terms</h2>
            <p className="mt-3">
              These Terms of Service govern the relationship between VELORY (ABN 31 574 585 058) and clients who engage our website design, development, and related digital services. By contacting us or engaging our services, you agree to these terms.
            </p>
            <p className="mt-3">
              <strong>Sole Trader:</strong> VELORY operates as a sole trader business in Australia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Services Provided</h2>
            <p className="mt-3">
              VELORY provides website strategy, design, development, and related digital services tailored to your business needs. Our typical services include:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Website design and user experience (UX)</li>
              <li>Website development and coding</li>
              <li>Content strategy and copywriting support</li>
              <li>Search engine optimisation (SEO) basics</li>
              <li>Integration of booking, contact, or ecommerce features</li>
              <li>Website maintenance and updates</li>
            </ul>
            <p className="mt-3">
              Specific services for your project will be confirmed in writing (in a separate scope document or quote).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Quotes, Scope, and Changes</h2>
            <div className="mt-3 space-y-3">
              <div>
                <strong className="text-white">Project Scope</strong>
                <p className="mt-1">
                  Every project is quoted based on an agreed scope of work. The scope includes specific deliverables, pages, features, and revisions (usually 2–3 rounds of feedback).
                </p>
              </div>
              <div>
                <strong className="text-white">Scope Changes</strong>
                <p className="mt-1">
                  Additional work or changes outside the agreed scope may require a revised quote and extended timeline. We will inform you of any cost or timeline adjustments before proceeding.
                </p>
              </div>
              <div>
                <strong className="text-white">Quote Validity</strong>
                <p className="mt-1">
                  Quotes are valid for 14 days from issue. After this period, we may revise pricing or availability.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Client Responsibilities</h2>
            <p className="mt-3">
              To ensure timely delivery, clients agree to:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Provide accurate business information, branding guidelines, and website content</li>
              <li>Deliver assets (logos, images, text) on time or as requested</li>
              <li>Provide timely feedback and approval on drafts and deliverables</li>
              <li>Respond to emails and meeting requests within 3–5 business days</li>
              <li>Ensure all content provided is original or properly licensed</li>
              <li>Inform us promptly of any issues or concerns with the work in progress</li>
            </ul>
            <p className="mt-3">
              Delays in providing feedback or assets may extend the project timeline at no additional cost, but may delay final delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Payment Terms</h2>
            <div className="mt-3 space-y-3">
              <div>
                <strong className="text-white">Invoicing</strong>
                <p className="mt-1">
                  Payment terms are confirmed in writing before project commencement. Invoices are issued at agreed milestones or upon project completion.
                </p>
              </div>
              <div>
                <strong className="text-white">Payment Methods</strong>
                <p className="mt-1">
                  We accept bank transfers (EFT) and may accept other methods at our discretion.
                </p>
              </div>
              <div>
                <strong className="text-white">Late Payments</strong>
                <p className="mt-1">
                  If payment is not received by the due date, we may suspend work, delay delivery, or pause support services. For invoices overdue by 14+ days, we may apply a late payment fee or pursue recovery action.
                </p>
              </div>
              <div>
                <strong className="text-white">Deposits</strong>
                <p className="mt-1">
                  We may require a non-refundable deposit (typically 50%) before commencing work to confirm the project and secure your timeline.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Project Timelines and Delays</h2>
            <p className="mt-3">
              Estimated timelines are based on the agreed scope and timely client feedback. We make reasonable efforts to meet agreed deadlines, but timelines may be extended due to:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Client delays in providing feedback, content, or assets</li>
              <li>Scope changes or additional requests</li>
              <li>Third-party service outages (hosting, domain registrars, payment gateways)</li>
              <li>Unforeseen technical challenges or browser compatibility issues</li>
              <li>Events beyond our reasonable control</li>
            </ul>
            <p className="mt-3">
              We will communicate timeline changes promptly and discuss the revised schedule with you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Intellectual Property and Licensing</h2>
            <div className="mt-3 space-y-3">
              <div>
                <strong className="text-white">Your Content</strong>
                <p className="mt-1">
                  You retain ownership of all content you provide (text, images, logos, etc.). By providing it, you grant VELORY permission to use it solely for building and maintaining your website.
                </p>
              </div>
              <div>
                <strong className="text-white">Our Work</strong>
                <p className="mt-1">
                  Upon full payment, you receive a non-exclusive, perpetual licence to use the website design and code we create for you. VELORY retains the right to use design concepts and methodologies in future projects.
                </p>
              </div>
              <div>
                <strong className="text-white">Third-Party Assets</strong>
                <p className="mt-1">
                  Some elements (fonts, icons, plugins) may be subject to third-party licences. We ensure proper licensing and will inform you of any restrictions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Limitation of Liability</h2>
            <p className="mt-3">
              To the maximum extent permitted by Australian Consumer Law:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>VELORY is not liable for indirect, incidental, consequential, or punitive damages arising from the use of our website or services</li>
              <li>Our total liability for any claim is limited to the amount you paid for the services in question</li>
              <li>We are not responsible for third-party services, hosting outages, or domain registrar issues</li>
              <li>We are not liable for loss of data, revenue, or business opportunities resulting from website downtime or changes</li>
            </ul>
            <p className="mt-3">
              These limitations do not exclude liability for death, personal injury, fraud, or breach of consumer guarantees under Australian law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Website Maintenance and Support</h2>
            <div className="mt-3 space-y-3">
              <div>
                <strong className="text-white">Post-Launch</strong>
                <p className="mt-1">
                  After launch, website maintenance, hosting, and domain management are typically the client's responsibility. We offer optional ongoing support and care packages.
                </p>
              </div>
              <div>
                <strong className="text-white">Third-Party Services</strong>
                <p className="mt-1">
                  You are responsible for renewing hosting, domain registrations, SSL certificates, and third-party plugin licences to keep your website secure and online.
                </p>
              </div>
              <div>
                <strong className="text-white">Security Updates</strong>
                <p className="mt-1">
                  Regular security updates and backups are essential. We recommend either our managed care plan or regular professional maintenance to protect your website.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Termination</h2>
            <p className="mt-3">
              Either party may terminate a project at any time by providing written notice. Upon termination:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>You remain responsible for paying for work completed up to the termination date</li>
              <li>Any deposits or advance payments are forfeited (unless otherwise negotiated)</li>
              <li>We will provide deliverables completed to date in a usable format</li>
              <li>Incomplete work is not transferred to you unless a settlement agreement is reached</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">No Warranties</h2>
            <p className="mt-3">
              Our website and services are provided on an "as-is" basis. VELORY makes no warranties about:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Uninterrupted website performance or availability</li>
              <li>Specific business results or ROI from your website</li>
              <li>Search engine rankings or traffic increases</li>
              <li>Compatibility with all browsers, devices, or operating systems (we support modern standards)</li>
            </ul>
            <p className="mt-3">
              You are responsible for testing the website and ensuring it meets your business needs before launch.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Governing Law and Jurisdiction</h2>
            <p className="mt-3">
              These terms are governed by the laws of Queensland, Australia, and the parties submit to the exclusive jurisdiction of Queensland courts. Any disputes will be resolved in accordance with Australian law.
            </p>
            <p className="mt-3">
              Before pursuing legal action, we encourage both parties to attempt resolution through good-faith discussion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Entire Agreement</h2>
            <p className="mt-3">
              These Terms of Service, along with your signed quote or scope document, constitute the entire agreement between you and VELORY regarding your project. Any prior discussions or agreements are superseded.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Changes to These Terms</h2>
            <p className="mt-3">
              We may update these Terms of Service from time to time. Changes will not affect ongoing projects unless both parties agree. Your continued engagement with us implies acceptance of updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Contact and Disputes</h2>
            <p className="mt-3">
              For questions about these terms or to resolve disputes, please contact:
            </p>
            <div className="mt-3 p-4 rounded-lg bg-slate-900/50 border border-white/10">
              <p><strong>VELORY</strong></p>
              <p>Email: <a href={`mailto:${siteConfig.contactEmail}`} className="text-sky-300 hover:text-sky-200">{siteConfig.contactEmail}</a></p>
              <p>Phone: <a href={siteConfig.contactPhoneHref} className="text-sky-300 hover:text-sky-200">{siteConfig.contactPhoneDisplay}</a></p>
              <p>ABN: 31 574 585 058</p>
              <p>Location: Gold Coast, Queensland, Australia</p>
            </div>
            <p className="mt-4 text-sm text-slate-400 border-t border-white/10 pt-4">
              <em>These Terms of Service provide general information and are not legal advice. If you have concerns about contract terms, please consult with a legal professional.</em>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
