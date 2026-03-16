const BENEFITS = [
  {
    icon: '🌱',
    title: 'No tech skills required',
    body: 'No coding. No dev team. No computer science degree. If you can tap a screen, you can grow your first Agent. Yorg was specifically built for the Business Owner who finds AI intimidating.',
  },
  {
    icon: '⚒️',
    title: 'Real AI Agents',
    body: 'Most AI tools leave you with theory. Yorg gets you from "I don\'t know where to start" to a live Agent tending your business in under 10 minutes. The game and the real-world setup happen together.',
  },
  {
    icon: '🗺️',
    title: 'Your business keeps growing',
    body: "Your Agents tend leads, follow up with prospects, qualify buyers, and book calls 24/7.  They work through every holiday, every weekend, every night you're offline. That's something no hire can match.",
  },
  {
    icon: '⚔️',
    title: 'It compounds',
    body: 'Every day your Agents work, they generate data that makes them sharper. Business Owners who start now will be six months ahead of competitors who wait. The harvest keeps growing on its own.',
  },
  {
    icon: '✨',
    title: 'Grow your Team',
    body: 'One AI Agent tending 5 extra qualified conversations a week can add $4,000/month in new revenue.  Sales, email, follow-up, social, and copy gives a one-person business the output of a 10-person team, at a fraction of the cost.',
  },
]

/*

*/

const Benefits = () => (
  <section className="benefits-section relative px-6 py-20" id="benefits">
    {/* Top edge — scalloped stone border illusion */}
    <div className="benefits-top-border" />

    {/* Section header sign */}
    <div className="flex justify-center mb-14">
      <div className="pixel-billboard px-10 py-4">
        <span
          className="pixel-font"
          style={{ fontSize: 11, color: '#3a2008', letterSpacing: '0.12em' }}
        >
          ✦ WHY PLAY YORG? ✦
        </span>
      </div>
    </div>

    {/* Cards grid — 2 col, last card centered */}
    <div className="benefits-grid" style={{ maxWidth: 820, margin: '0 auto' }}>
      {BENEFITS.map((b, i) => (
        <div
          key={b.title}
          className={`benefit-card pixel-scroll${i === 4 ? ' benefit-card-last' : ''}`}
        >
          {/* Icon slot */}
          <div className="benefit-icon-slot">
            <span style={{ fontSize: 26, lineHeight: 1 }}>{b.icon}</span>
          </div>

          {/* Title */}
          <p className="font-lg font-bold mt-4 mb-3 text-wood-900">{b.title}</p>

          {/* Body */}
          <p
            style={{
              fontFamily: 'Nunito, sans-serif',
              color: '#5a3a18',
              fontSize: 14,
              lineHeight: 1.7,
              fontWeight: 600,
            }}
          >
            {b.body}
          </p>
        </div>
      ))}
    </div>

    <div className="flex flex-col items-center my-16">
      <h3 className="text-white/90 text-2xl mb-8">
        Your Business Grows without you doing every task by hand.
      </h3>
      <a
        href={import.meta.env.VITE_GAME_URL}
        className="cta-button-xl px-12 py-5 inline-block no-underline"
      >
        <span
          className="pixel-font"
          style={{ fontSize: 11, color: '#e8f8d0', letterSpacing: '0.08em' }}
        >
          Play Now
        </span>
      </a>
    </div>
  </section>
)

export default Benefits
