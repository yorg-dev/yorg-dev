const WEEDS = [
  {
    icon: '🌾',
    title: 'LEADS GOING COLD',
    quote: '"By the time I get to them, they\'ve moved on."',
  },
  {
    icon: '📱',
    title: 'SOCIAL GOING DARK',
    quote: '"I haven\'t posted in three weeks. I know I should."',
  },
  {
    icon: '📧',
    title: 'INBOX OUT OF CONTROL',
    quote: '"I\'m drowning in emails and missing real opportunities."',
  },
  {
    icon: '📞',
    title: 'FOLLOW-UP FAILING',
    quote: '"I lose deals because I forget to follow up."',
  },
  {
    icon: '🕐',
    title: 'DOING $20/HR WORK',
    quote: '"I spend half my day on tasks that don\'t grow anything."',
  },
  {
    icon: '😰',
    title: "CAN'T AFFORD HELP",
    quote: '"I need help but a full-time hire would eat my margins."',
  },
]

export default function Problem() {
  return (
    <section className="problem-section relative px-6 py-20">
      <div
        className="benefits-top-border"
        style={{
          background:
            'repeating-linear-gradient(90deg, #4a3828 0px, #4a3828 28px, #3a2818 28px, #3a2818 32px)',
        }}
      />

      <div className="flex flex-col items-center text-center mb-14">
        <h3 className="text-4xl text-white/90 mb-4">Your Business is Overgrown</h3>
        <h2 className="text-xl text-white/90 mb-4">and You're the Only One tending it</h2>
      </div>

      {/* Weed cards */}
      <div className="pixel-grid-3col" style={{ maxWidth: 880, margin: '0 auto 48px' }}>
        {WEEDS.map((w) => (
          <div key={w.title} className="weed-card">
            <div
              className="benefit-icon-slot"
              style={{ background: '#2e1c0c', borderColor: '#180e06' }}
            >
              <span style={{ fontSize: 24 }}>{w.icon}</span>
            </div>
            <p
              className="pixel-font mt-4 mb-3"
              style={{ fontSize: 7, color: '#c89060', lineHeight: 2, letterSpacing: '0.06em' }}
            >
              {w.title}
            </p>
            <p
              style={{
                fontFamily: 'Nunito, sans-serif',
                color: '#a07848',
                fontSize: 14,
                lineHeight: 1.7,
                fontWeight: 600,
                fontStyle: 'italic',
              }}
            >
              {w.quote}
            </p>
          </div>
        ))}
      </div>

      {/* Closing line */}
      <div className="flex justify-center">
        <div className="weed-card text-center" style={{ maxWidth: 560 }}>
          <p
            style={{
              fontFamily: 'Nunito, sans-serif',
              color: '#c89060',
              fontSize: 16,
              lineHeight: 1.8,
              fontWeight: 700,
            }}
          >
            You're doing the work of five people for the harvest of one. That's not running a
            business. That's being the only farmhand on your own land.
          </p>
        </div>
      </div>
    </section>
  )
}
