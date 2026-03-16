import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const EFFECTIVE_DATE = 'March 15, 2026'

interface Section {
  title: string
  content: (string | { list: string[] })[]
}

const SECTIONS: Section[] = [
  {
    title: '1. Information We Collect',
    content: [
      'We collect information you provide directly to us, including:',
      {
        list: [
          'Contact form submissions: name, email address, subject, and message body.',
          'Newsletter sign-ups: email address.',
          'Account registration: name, email address, and password.',
          'Billing information: handled entirely by our payment processor (Stripe). We never store raw card numbers.',
        ],
      },
      'We also collect certain information automatically when you visit our site:',
      {
        list: [
          'Log data: IP address, browser type, referring page, and pages visited.',
          'Cookies and similar technologies: used for session management, preferences, and analytics.',
          'Device information: browser version, operating system, and screen resolution.',
        ],
      },
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'We use the information we collect to:',
      {
        list: [
          'Operate, maintain, and improve our platform and services.',
          'Respond to contact form submissions and support requests.',
          'Send newsletters and product updates you have subscribed to.',
          'Process payments and manage your subscription.',
          'Detect, investigate, and prevent fraudulent or abusive activity.',
          'Comply with legal obligations.',
        ],
      },
      'We do not sell your personal information to third parties.',
    ],
  },
  {
    title: '3. Cookies',
    content: [
      'We use cookies and similar tracking technologies to:',
      {
        list: [
          'Keep you signed in across sessions.',
          'Remember your preferences.',
          'Understand how visitors use our site through analytics.',
        ],
      },
      'You can control cookies through your browser settings. Disabling cookies may affect the functionality of certain features.',
    ],
  },
  {
    title: '4. Third-Party Services',
    content: [
      'We integrate with third-party services to deliver our platform. These providers have access to your information only as needed to perform their services on our behalf:',
      {
        list: [
          'Stripe — payment processing.',
          'Amazon Web Services (AWS) — cloud infrastructure and data storage.',
          'Analytics providers — aggregated, anonymised site usage data.',
        ],
      },
      'When you connect a third-party integration (such as Slack, HubSpot, or Shopify) to your Yorg account, you are subject to that service\'s own privacy policy. We access only the data you explicitly authorise.',
    ],
  },
  {
    title: '5. Data Retention',
    content: [
      'We retain your personal information for as long as your account is active or as needed to provide our services.',
      'Contact form submissions are retained for up to 2 years to allow for follow-up and audit purposes.',
      'Newsletter subscription data is retained until you unsubscribe. You may unsubscribe at any time via the link in any email we send.',
      'When you delete your account, we delete or anonymise your personal information within 30 days, except where we are required to retain it by law.',
    ],
  },
  {
    title: '6. Data Security',
    content: [
      'We implement industry-standard security measures to protect your information, including encryption in transit (TLS) and at rest, access controls, and regular security reviews.',
      'No method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.',
    ],
  },
  {
    title: '7. Your Rights',
    content: [
      'Depending on your location, you may have the following rights regarding your personal information:',
      {
        list: [
          'Access — request a copy of the personal data we hold about you.',
          'Correction — request that we correct inaccurate or incomplete data.',
          'Deletion — request that we delete your personal data.',
          'Portability — request your data in a structured, machine-readable format.',
          'Objection — object to certain types of processing, including direct marketing.',
          'Withdrawal of consent — where processing is based on consent, withdraw it at any time.',
        ],
      },
      'To exercise any of these rights, contact us at privacy@yorg.dev. We will respond within 30 days.',
    ],
  },
  {
    title: '8. Children\'s Privacy',
    content: [
      'Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.',
    ],
  },
  {
    title: '9. Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time. When we do, we will revise the effective date at the top of this page. If the changes are material, we will notify you by email or by a prominent notice on our site.',
      'Your continued use of our services after any changes constitutes your acceptance of the updated policy.',
    ],
  },
  {
    title: '10. Contact Us',
    content: [
      'If you have questions or concerns about this Privacy Policy or our data practices, please contact us:',
      {
        list: [
          'Email: privacy@yorg.dev',
          'Contact form: yorg.dev/contact',
        ],
      },
    ],
  },
]

export default function Privacy() {
  return (
    <div className="min-h-screen bg-soil-900">

      {/* Header */}
      <div
        className="relative overflow-hidden bg-grass-950 px-6 pt-5 pb-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(20,60,10,0.4) 0px, transparent 1px, transparent 31px, rgba(20,60,10,0.4) 32px),
            repeating-linear-gradient(90deg, rgba(20,60,10,0.4) 0px, transparent 1px, transparent 31px, rgba(20,60,10,0.4) 32px)
          `,
          backgroundSize: '32px 32px',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(50,120,20,0.3) 0%, transparent 100%)' }}
        />

        <Navigation />

        <div className="relative z-10 max-w-2xl mx-auto text-center mt-16">
          <div className="pixel-scroll inline-block px-10 py-6 mb-6">
            <p className="pixel-font text-wood-950" style={{ fontSize: 10, lineHeight: 2.4 }}>
              PRIVACY POLICY
            </p>
          </div>
          <p
            className="text-grass-300 text-base font-bold"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>
      </div>

      {/* Content card */}
      <div className="max-w-3xl mx-auto px-6 -mt-8 pb-20 relative z-10">
        <div className="bg-wood-100 border-4 border-wood-700 shadow-[inset_2px_2px_0_rgba(255,255,255,0.45),inset_-2px_-2px_0_rgba(100,60,0,0.3),6px_6px_0_rgba(0,0,0,0.45)]">

          {/* Intro */}
          <div className="px-8 pt-8 pb-6 border-b-4 border-dashed border-wood-400">
            <p
              className="text-wood-800 text-base font-semibold leading-relaxed"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Yorg ("we", "our", or "us") operates the website at yorg.dev and the Yorg platform. This Privacy Policy explains what personal information we collect, how we use it, and your rights with respect to that information. By using our services, you agree to the practices described here.
            </p>
          </div>

          {/* Sections */}
          <div className="divide-y-4 divide-dashed divide-wood-300">
            {SECTIONS.map(section => (
              <div key={section.title} className="px-8 py-7">
                <h2
                  className="pixel-font text-wood-950 mb-5"
                  style={{ fontSize: 8, lineHeight: 2 }}
                >
                  {section.title}
                </h2>
                <div className="flex flex-col gap-3">
                  {section.content.map((block, i) =>
                    typeof block === 'string' ? (
                      <p
                        key={i}
                        className="text-wood-800 text-sm font-semibold leading-relaxed"
                        style={{ fontFamily: 'Nunito, sans-serif' }}
                      >
                        {block}
                      </p>
                    ) : (
                      <ul key={i} className="flex flex-col gap-1.5 pl-2">
                        {block.list.map(item => (
                          <li
                            key={item}
                            className="text-wood-800 text-sm font-semibold leading-relaxed flex gap-2"
                            style={{ fontFamily: 'Nunito, sans-serif' }}
                          >
                            <span className="text-grass-700 shrink-0 mt-0.5">▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}
