const STEPS = [
  {
    n: '01',
    icon: '🗺️',
    title: 'Create a New Land',
    body: 'Pick the part of your business that needs tending most. Sales? Social? Follow-up? Each land is waiting.',
  },
  {
    n: '02',
    icon: '🌱',
    title: 'Connect your Tools',
    body: 'Integrate your favorite Tools.  The game walks you through everything you need to get started.  No jargon. No tech speak. Just clear, warm guidance.',
  },
  {
    n: '03',
    icon: '🌿',
    title: 'Add Agents',
    body: 'Your Agent knows how to use your integrations. Step by step, you set up the real Agent in your actual business. Takes 10–15 minutes.',
  },
  {
    n: '04',
    icon: '🌾',
    title: 'Watch the Magic Happen',
    body: 'Your Agent tends your business around the clock. It handles conversations, qualifies leads, and publishes posts. You focus on what you love.',
  },
  {
    n: '05',
    icon: '🏡',
    title: 'Learn from Others',
    body: 'Unlock new Agents. Connect your lands.  Watch your whole land hum along.  Each Agent handing off tasks to the next, tending your business like a well-run operation.',
  },
]

export default function HowItWorks() {
  return (
    <section className="howto-section relative px-6 py-20" id="how">
      <div
        className="benefits-top-border"
        style={{
          background:
            'repeating-linear-gradient(90deg, #4a9028 0px, #4a9028 28px, #3a8020 28px, #3a8020 32px)',
        }}
      />

      {/* Header */}
      <div className="flex flex-col items-center mb-14">
        <div className="pixel-billboard px-10 py-4 mb-6">
          <span
            className="pixel-font"
            style={{ fontSize: 11, color: '#3a2008', letterSpacing: '0.12em' }}
          >
            ✦ HOW IT WORKS ✦
          </span>
        </div>
        <p
          style={{
            fontFamily: 'Nunito, sans-serif',
            color: '#1a3a08',
            fontSize: 17,
            fontWeight: 700,
          }}
        >
          From bare soil to first harvest all in one session.
        </p>
      </div>

      {/* Steps */}
      <div
        style={{
          maxWidth: 660,
          margin: '0 auto 48px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        {STEPS.map((step) => (
          <div key={step.n} className="step-card">
            <div className="step-number">
              <span className="text-wood-900">{step.n}</span>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <p className="text-lg text-wood-800">{step.title}</p>
              </div>
              <p
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  color: '#5a3a18',
                  fontSize: 14,
                  lineHeight: 1.7,
                  fontWeight: 600,
                }}
              >
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href={import.meta.env.VITE_GAME_URL}
          className="cta-button-xl px-12 py-5 mb-7 inline-block no-underline"
        >
          <span
            className="pixel-font"
            style={{ fontSize: 11, color: '#e8f8d0', letterSpacing: '0.08em' }}
          >
            🌱 START YOUR FIRST QUEST — FREE
          </span>
        </a>
      </div>
    </section>
  )
}
