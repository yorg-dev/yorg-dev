import { Link } from 'react-router-dom'

const FEATURED = [
  {
    icon: '💬',
    name: 'Slack',
    description: 'Send alerts, summaries, and reports directly to your Slack channels — automatically.',
  },
  {
    icon: '🏆',
    name: 'HubSpot',
    description: 'Sync contacts, manage deals, and automate follow-ups without touching your CRM.',
  },
  {
    icon: '⚡',
    name: 'Zapier',
    description: 'Connect your Yorg agents to thousands of apps without writing a single line of code.',
  },
]

export default function IntegrationsPreview() {
  return (
    <section
      className="relative px-6 py-20 overflow-hidden bg-[#1a2840]"
      style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 31px, rgba(255,255,255,0.03) 32px),
          repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 31px, rgba(255,255,255,0.03) 32px)
        `,
        backgroundSize: '32px 32px',
      }}
    >
      {/* Top border */}
      <div
        className="benefits-top-border"
        style={{ background: 'repeating-linear-gradient(90deg, #1e3a5a 0px, #1e3a5a 28px, #162e4a 28px, #162e4a 32px)' }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 65% 60% at 50% 50%, rgba(30,80,140,0.4) 0%, transparent 100%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <div className="pixel-billboard px-10 py-4 mb-5">
            <span className="pixel-font text-wood-950" style={{ fontSize: 11, letterSpacing: '0.12em' }}>
              ✦ CONNECT YOUR TOOLS ✦
            </span>
          </div>
          <p
            className="text-[17px] font-bold text-[#8ab8e8] max-w-lg text-center leading-relaxed"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Your agents plug right into the apps you already use — so your whole business runs together.
          </p>
        </div>

        {/* Featured integration cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {FEATURED.map(integration => (
            <div
              key={integration.name}
              className="bg-wood-100 border-4 border-wood-700 p-6 flex flex-col gap-4 shadow-[inset_2px_2px_0_rgba(255,255,255,0.45),inset_-2px_-2px_0_rgba(100,60,0,0.3),5px_5px_0_rgba(0,0,0,0.4)]"
            >
              {/* Icon + name */}
              <div className="flex items-center gap-3">
                <span
                  className="text-2xl flex items-center justify-center bg-wood-200 border-2 border-wood-600 shrink-0"
                  style={{
                    width: 44,
                    height: 44,
                    boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.5), inset -1px -1px 0 rgba(0,0,0,0.15)',
                  }}
                >
                  {integration.icon}
                </span>
                <p className="pixel-font text-wood-950" style={{ fontSize: 8, lineHeight: 1.6 }}>
                  {integration.name}
                </p>
              </div>

              {/* Description */}
              <p
                className="text-wood-800 text-sm font-semibold leading-relaxed"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                {integration.description}
              </p>

              {/* Live badge */}
              <div className="mt-auto pt-3 border-t-2 border-dashed border-wood-400">
                <span
                  className="pixel-font text-[5px] px-2 py-1 bg-grass-700 text-grass-100 border-2 border-grass-900"
                  style={{ boxShadow: '2px 2px 0 rgba(0,0,0,0.3)' }}
                >
                  ● LIVE
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            to="/integrations"
            className="inline-block bg-grass-700 border-4 border-grass-900 px-10 py-4 cursor-pointer no-underline transition-[transform,box-shadow,background] duration-[80ms] shadow-[inset_3px_3px_0_rgba(255,255,255,0.28),inset_-3px_-3px_0_rgba(0,0,0,0.3),0_0_24px_rgba(80,160,30,0.35),5px_5px_0_rgba(0,0,0,0.5)] hover:-translate-y-0.5 hover:bg-grass-600 hover:shadow-[inset_3px_3px_0_rgba(255,255,255,0.28),inset_-3px_-3px_0_rgba(0,0,0,0.3),0_0_40px_rgba(100,190,40,0.5),5px_7px_0_rgba(0,0,0,0.45)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[inset_3px_3px_0_rgba(255,255,255,0.15),2px_2px_0_rgba(0,0,0,0.4)]"
          >
            <span className="pixel-font text-[#e8f8d0] tracking-[0.08em]" style={{ fontSize: 9 }}>
              🔌 VIEW ALL INTEGRATIONS
            </span>
          </Link>

          <p
            className="text-[#4a7090] text-sm font-semibold"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            24 integrations · more coming soon
          </p>
        </div>

      </div>
    </section>
  )
}
