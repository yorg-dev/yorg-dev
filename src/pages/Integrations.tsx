import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import NavItems from '../components/NavItems'
import Footer from '../components/Footer'

type Status = 'available' | 'coming-soon'

interface Integration {
  icon: string
  name: string
  description: string
  status: Status
}

interface Category {
  name: string
  items: Integration[]
}

const CATEGORIES: Category[] = [
  {
    name: 'Communication',
    items: [
      {
        icon: '💬',
        name: 'Slack',
        description: 'Send alerts, summaries, and reports directly to your Slack channels.',
        status: 'available',
      },
      {
        icon: '📧',
        name: 'Gmail',
        description: 'Read, draft, and send emails automatically on your behalf.',
        status: 'available',
      },
      {
        icon: '🎮',
        name: 'Discord',
        description: 'Post updates and notifications to your Discord server.',
        status: 'available',
      },
      {
        icon: '📬',
        name: 'Outlook',
        description: 'Manage Microsoft Outlook mail and calendar with your agents.',
        status: 'coming-soon',
      },
    ],
  },
  {
    name: 'CRM & Sales',
    items: [
      {
        icon: '🏆',
        name: 'HubSpot',
        description: 'Sync contacts, manage deals, and automate follow-ups in your pipeline.',
        status: 'available',
      },
      {
        icon: '☁️',
        name: 'Salesforce',
        description: 'Keep your CRM up-to-date without manual data entry.',
        status: 'coming-soon',
      },
      {
        icon: '🔧',
        name: 'Pipedrive',
        description: 'Advance deals through your pipeline automatically.',
        status: 'coming-soon',
      },
    ],
  },
  {
    name: 'E-Commerce',
    items: [
      {
        icon: '🛍️',
        name: 'Shopify',
        description: 'Monitor orders, update inventory, and respond to customers.',
        status: 'available',
      },
      {
        icon: '💳',
        name: 'Stripe',
        description: 'Track payments, subscriptions, and revenue in real time.',
        status: 'available',
      },
      {
        icon: '🛒',
        name: 'WooCommerce',
        description: 'Manage your WordPress store automatically.',
        status: 'coming-soon',
      },
      {
        icon: '💰',
        name: 'PayPal',
        description: 'Reconcile PayPal transactions and automate invoicing.',
        status: 'coming-soon',
      },
    ],
  },
  {
    name: 'Productivity',
    items: [
      {
        icon: '🗂️',
        name: 'Google Workspace',
        description: 'Work with Docs, Sheets, Calendar, and Drive seamlessly.',
        status: 'available',
      },
      {
        icon: '📓',
        name: 'Notion',
        description: 'Create pages, update databases, and manage projects.',
        status: 'available',
      },
      {
        icon: '📊',
        name: 'Airtable',
        description: 'Query and update your Airtable bases automatically.',
        status: 'coming-soon',
      },
      {
        icon: '✅',
        name: 'Asana',
        description: 'Create tasks, update projects, and report on progress.',
        status: 'coming-soon',
      },
    ],
  },
  {
    name: 'Marketing',
    items: [
      {
        icon: '✉️',
        name: 'Mailchimp',
        description: 'Build campaigns, manage subscribers, and report on performance.',
        status: 'available',
      },
      {
        icon: '🎯',
        name: 'Google Ads',
        description: 'Monitor performance and get AI-powered bid recommendations.',
        status: 'coming-soon',
      },
      {
        icon: '💼',
        name: 'LinkedIn',
        description: 'Schedule posts and engage with your professional network.',
        status: 'coming-soon',
      },
    ],
  },
  {
    name: 'Finance',
    items: [
      {
        icon: '💹',
        name: 'QuickBooks',
        description: 'Reconcile transactions and generate financial reports hands-free.',
        status: 'available',
      },
      {
        icon: '📈',
        name: 'Xero',
        description: 'Keep your books clean with automated expense categorization.',
        status: 'coming-soon',
      },
      {
        icon: '📑',
        name: 'FreshBooks',
        description: 'Send invoices and track time automatically.',
        status: 'coming-soon',
      },
    ],
  },
  {
    name: 'Automation',
    items: [
      {
        icon: '⚡',
        name: 'Zapier',
        description: 'Connect Yorg agents to thousands of apps via Zapier.',
        status: 'available',
      },
      {
        icon: '🔄',
        name: 'Make',
        description: 'Build complex automation scenarios with Make.com (formerly Integromat).',
        status: 'available',
      },
      {
        icon: '🔗',
        name: 'N8N',
        description: 'Send and receive data from any service with custom webhooks.',
        status: 'available',
      },
    ],
  },
]

const totalAvailable = CATEGORIES.flatMap((c) => c.items).filter(
  (i) => i.status === 'available'
).length
const totalSoon = CATEGORIES.flatMap((c) => c.items).filter(
  (i) => i.status === 'coming-soon'
).length

export default function Integrations() {
  return (
    <div className="min-h-screen bg-soil-900">
      <div
        className="relative overflow-hidden bg-grass-950 px-6 pb-24"
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
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(50,120,20,0.3) 0%, transparent 100%)',
          }}
        />

        <NavBar>
          <NavItems />
        </NavBar>

        <div className="relative z-10 max-w-4xl mx-auto text-center mt-16">
          <h3 className="text-5xl font-display text-grass-400 mb-8">Integrations</h3>

          <p
            className="text-grass-300 text-lg font-bold max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Connect your Yorg Agents to the tools you already use. Automate across your entire
            business stack. The best part is, no code is required.
          </p>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="pixel-scroll px-6 py-3 flex items-center gap-3">
              <span className="text-xl">🌱</span>
              <div className="text-left">
                <p className="pixel-font text-grass-800" style={{ fontSize: 7 }}>
                  {totalAvailable} LIVE
                </p>
                <p className="pixel-font text-wood-700" style={{ fontSize: 6, marginTop: 4 }}>
                  integrations
                </p>
              </div>
            </div>
            <div className="pixel-scroll px-6 py-3 flex items-center gap-3">
              <span className="text-xl">🌿</span>
              <div className="text-left">
                <p className="pixel-font text-wood-700" style={{ fontSize: 7 }}>
                  {totalSoon} COMING
                </p>
                <p className="pixel-font text-wood-700" style={{ fontSize: 6, marginTop: 4 }}>
                  soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {CATEGORIES.map((category) => (
          <div key={category.name}>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="pixel-font text-wood-300" style={{ fontSize: 9 }}>
                {category.name.toUpperCase()}
              </h2>
              <div className="flex-1 h-[3px] bg-wood-900 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {category.items.map((integration) => (
                <div
                  key={integration.name}
                  className="bg-wood-100 border-4 border-wood-700 p-5 flex flex-col gap-3 shadow-[inset_2px_2px_0_rgba(255,255,255,0.45),inset_-2px_-2px_0_rgba(100,60,0,0.3),5px_5px_0_rgba(0,0,0,0.35)]"
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="flex items-center justify-center text-xl bg-wood-200 border-2 border-wood-600 shrink-0"
                        style={{
                          width: 40,
                          height: 40,
                          boxShadow:
                            'inset 1px 1px 0 rgba(255,255,255,0.5), inset -1px -1px 0 rgba(0,0,0,0.15)',
                        }}
                      >
                        {integration.icon}
                      </span>
                      <p className="text-wood-950 text-lg leading-snug">{integration.name}</p>
                    </div>

                    {/* Status badge */}
                    {integration.status === 'available' ? (
                      <span
                        className="pixel-font text-[5px] px-1.5 py-1 shrink-0 bg-grass-700 text-grass-100 border-2 border-grass-900"
                        style={{ boxShadow: '2px 2px 0 rgba(0,0,0,0.3)' }}
                      >
                        LIVE
                      </span>
                    ) : (
                      <span
                        className="pixel-font text-[5px] px-1.5 py-1 shrink-0 bg-soil-800 text-wood-500 border-2 border-soil-950"
                        style={{ boxShadow: '2px 2px 0 rgba(0,0,0,0.3)' }}
                      >
                        SOON
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    className="text-wood-800 text-sm font-semibold leading-relaxed"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    {integration.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className="relative overflow-hidden bg-grass-950 px-6 py-20 text-center"
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
          style={{
            background:
              'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(50,120,20,0.3) 0%, transparent 100%)',
          }}
        />
        <div className="relative z-10 flex flex-col items-center">
          <h3 className="text-4xl text-white/90 mb-4">Don't See Your Favorite Tool?</h3>

          <p
            className="text-grass-300 font-bold text-base max-w-md mx-auto mb-8 leading-relaxed"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            We're always adding new integrations. Tell us what you need and we'll plant it on the
            roadmap.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-grass-700 border-4 border-grass-900 px-10 py-4 cursor-pointer transition-[transform,box-shadow,background] duration-[80ms] no-underline shadow-[inset_3px_3px_0_rgba(255,255,255,0.28),inset_-3px_-3px_0_rgba(0,0,0,0.3),0_0_24px_rgba(80,160,30,0.4),5px_5px_0_rgba(0,0,0,0.5)] hover:-translate-y-0.5 hover:bg-grass-600 hover:shadow-[inset_3px_3px_0_rgba(255,255,255,0.28),inset_-3px_-3px_0_rgba(0,0,0,0.3),0_0_40px_rgba(100,190,40,0.5),5px_7px_0_rgba(0,0,0,0.45)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[inset_3px_3px_0_rgba(255,255,255,0.15),2px_2px_0_rgba(0,0,0,0.4)]"
          >
            <span className="text-lg font-bold text-[#e8f8d0]">Request An Integration</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
