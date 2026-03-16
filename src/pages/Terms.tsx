import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const EFFECTIVE_DATE = 'March 15, 2026'

interface Section {
  title: string
  content: (string | { list: string[] })[]
}

const SECTIONS: Section[] = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing or using the Yorg website (yorg.dev) or any Yorg services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Services.',
      'We may update these Terms from time to time. Continued use of the Services after changes are posted constitutes your acceptance of the revised Terms.',
    ],
  },
  {
    title: '2. Description of Services',
    content: [
      'Yorg provides a platform that allows individuals and businesses to deploy AI-powered automation agents to automate workflows, communications, and business operations.',
      'We reserve the right to modify, suspend, or discontinue any part of the Services at any time with or without notice. We will not be liable to you or any third party for any such modification, suspension, or discontinuation.',
    ],
  },
  {
    title: '3. Accounts and Registration',
    content: [
      'To access certain features you must create an account. You agree to:',
      {
        list: [
          'Provide accurate, current, and complete information during registration.',
          'Maintain and promptly update your account information.',
          'Keep your password confidential and not share it with others.',
          'Notify us immediately of any unauthorised use of your account.',
          'Accept responsibility for all activity that occurs under your account.',
        ],
      },
      'We reserve the right to suspend or terminate accounts that violate these Terms or that we believe pose a risk to the Services or other users.',
    ],
  },
  {
    title: '4. Acceptable Use',
    content: [
      'You agree not to use the Services to:',
      {
        list: [
          'Violate any applicable law or regulation.',
          'Send spam, unsolicited messages, or engage in any form of harassment.',
          'Transmit malware, viruses, or any other malicious code.',
          'Attempt to gain unauthorised access to any part of the Services or any connected systems.',
          'Scrape, crawl, or systematically extract data from the Services without our written consent.',
          'Impersonate any person or entity or misrepresent your affiliation with any person or entity.',
          'Use the Services to build a competing product or service.',
          'Engage in any activity that disrupts or interferes with the Services.',
        ],
      },
      'We reserve the right to investigate and take appropriate action against anyone who, in our sole discretion, violates these provisions, including suspending or terminating their account.',
    ],
  },
  {
    title: '5. AI Agents and Automation',
    content: [
      'Yorg provides AI-powered automation agents. By using these agents, you acknowledge and agree that:',
      {
        list: [
          'You are responsible for configuring agents appropriately and reviewing their outputs.',
          'AI-generated content and actions may contain errors, and you should not rely on them without human review where accuracy is critical.',
          'You are solely responsible for any communications, actions, or decisions made on your behalf by agents you have deployed.',
          'You will not use agents to generate, distribute, or amplify content that is harmful, deceptive, or illegal.',
          'We may impose usage limits or rate limits on agent activity to protect the stability of the platform.',
        ],
      },
    ],
  },
  {
    title: '6. Third-Party Integrations',
    content: [
      'The Services allow you to connect third-party applications (such as Slack, HubSpot, Shopify, and others). By enabling a third-party integration, you:',
      {
        list: [
          'Authorise Yorg to access and interact with that third-party service on your behalf.',
          'Agree to comply with the third party\'s own terms of service and acceptable use policies.',
          'Acknowledge that Yorg is not responsible for the availability, accuracy, or conduct of any third-party service.',
        ],
      },
      'You can revoke integration access at any time from your account settings or from within the third-party service.',
    ],
  },
  {
    title: '7. Subscription and Payment',
    content: [
      'Certain features of the Services require a paid subscription. By subscribing, you agree to:',
      {
        list: [
          'Pay all fees associated with your chosen plan.',
          'Provide accurate and current billing information.',
          'Authorise us to charge your payment method on a recurring basis for the subscription period.',
        ],
      },
      'All fees are stated in US dollars and are non-refundable except as expressly set out in these Terms or required by law. We reserve the right to change our pricing with 30 days\' notice. Continued use after a price change constitutes acceptance of the new pricing.',
    ],
  },
  {
    title: '8. Cancellation and Refunds',
    content: [
      'You may cancel your subscription at any time from your account settings. Cancellation takes effect at the end of the current billing period; you will retain access to paid features until then.',
      'We do not offer pro-rated refunds for unused time within a billing period. If you believe you are entitled to a refund due to a Service error or exceptional circumstance, contact us at support@yorg.dev within 14 days of the charge.',
    ],
  },
  {
    title: '9. Intellectual Property',
    content: [
      'All content, software, designs, and technology comprising the Services are the property of Yorg or its licensors and are protected by intellectual property laws. These Terms do not grant you any ownership rights in the Services.',
      'You retain full ownership of any content, data, or materials you upload or create through the Services ("Your Content"). By using the Services, you grant Yorg a limited, non-exclusive licence to process Your Content solely as necessary to provide the Services to you.',
      'You must not copy, modify, distribute, sell, or create derivative works from any part of the Services without our prior written consent.',
    ],
  },
  {
    title: '10. Confidentiality and Data',
    content: [
      'We treat your data in accordance with our Privacy Policy (yorg.dev/privacy), which is incorporated into these Terms by reference.',
      'We will not access, share, or use your content for any purpose other than providing the Services, unless required by law or with your explicit consent.',
    ],
  },
  {
    title: '11. Disclaimers',
    content: [
      'THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
      'We do not warrant that the Services will be uninterrupted, error-free, or free of harmful components. We do not warrant the accuracy or completeness of any content generated by AI agents.',
    ],
  },
  {
    title: '12. Limitation of Liability',
    content: [
      'TO THE MAXIMUM EXTENT PERMITTED BY LAW, YORG AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES.',
      'OUR TOTAL CUMULATIVE LIABILITY TO YOU FOR ANY CLAIM ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM OR (B) $100.',
    ],
  },
  {
    title: '13. Indemnification',
    content: [
      'You agree to indemnify, defend, and hold harmless Yorg and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or related to:',
      {
        list: [
          'Your use of the Services.',
          'Your violation of these Terms.',
          'Your violation of any third-party rights.',
          'Any content or actions produced by agents you have deployed.',
        ],
      },
    ],
  },
  {
    title: '14. Governing Law and Disputes',
    content: [
      'These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.',
      'Any dispute arising from these Terms or your use of the Services shall first be submitted to informal negotiation by contacting us at legal@yorg.dev. If not resolved within 30 days, disputes shall be resolved by binding arbitration under the rules of the American Arbitration Association, except that either party may seek injunctive relief in a court of competent jurisdiction.',
      'You waive any right to participate in a class action lawsuit or class-wide arbitration.',
    ],
  },
  {
    title: '15. Termination',
    content: [
      'We may suspend or terminate your access to the Services immediately, without notice or liability, if you breach these Terms or if we determine your account poses a risk to the platform or other users.',
      'Upon termination, your right to use the Services ceases immediately. Provisions that by their nature should survive termination — including intellectual property, disclaimers, limitation of liability, and governing law — will survive.',
    ],
  },
  {
    title: '16. Contact Us',
    content: [
      'If you have questions about these Terms, please contact us:',
      {
        list: [
          'Email: legal@yorg.dev',
          'Contact form: yorg.dev/contact',
        ],
      },
    ],
  },
]

export default function Terms() {
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
              TERMS OF SERVICE
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
              Please read these Terms of Service carefully before using Yorg. These Terms form a legally binding agreement between you and Yorg. If you are using the Services on behalf of a business or organisation, you represent that you have authority to bind that entity to these Terms.
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
