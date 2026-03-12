const STEPS = [
  {
    n: '01',
    icon: '🗺️',
    title: 'CHOOSE YOUR PLOT',
    body: 'Pick the part of your business that needs tending most. Sales? Social? Follow-up? Each plot is waiting. Each one is overgrown right now.',
  },
  {
    n: '02',
    icon: '🌱',
    title: 'PLANT YOUR AGENT',
    body: 'Choose your first seed. The game walks you through everything — what this Agent does, how it works, and what your harvest will look like. No jargon. No tech speak. Just clear, warm guidance.',
  },
  {
    n: '03',
    icon: '🌿',
    title: 'WATCH IT TAKE ROOT',
    body: 'Your Agent blooms in the game — and the real-world tutorial unlocks right alongside it. Step by step, you set up the real Agent in your actual business. Takes 10–15 minutes.',
  },
  {
    n: '04',
    icon: '🌾',
    title: 'ENJOY THE HARVEST',
    body: 'Your Agent tends your business around the clock. Every conversation it handles, every lead it qualifies, every post it publishes — your harvest counter climbs. You focus on what you love.',
  },
  {
    n: '05',
    icon: '🏡',
    title: 'GROW YOUR GARDEN',
    body: 'Unlock new Agents. Build chains. Connect your plots. Watch your whole farm hum along — each Agent handing off to the next, tending your business like a well-run operation.',
  },
]

export default function HowItWorks() {
  return (
    <section className="howto-section relative px-6 py-20">
      <div
        className="benefits-top-border"
        style={{ background: 'repeating-linear-gradient(90deg, #4a9028 0px, #4a9028 28px, #3a8020 28px, #3a8020 32px)' }}
      />

      {/* Header */}
      <div className="flex flex-col items-center mb-14">
        <div className="pixel-billboard px-10 py-4 mb-6">
          <span className="pixel-font" style={{ fontSize: 11, color: '#3a2008', letterSpacing: '0.12em' }}>
            ✦ HOW IT WORKS ✦
          </span>
        </div>
        <p style={{ fontFamily: 'Nunito, sans-serif', color: '#1a3a08', fontSize: 17, fontWeight: 700 }}>
          From bare soil to first harvest — in one session.
        </p>
      </div>

      {/* Steps */}
      <div style={{ maxWidth: 660, margin: '0 auto 48px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {STEPS.map(step => (
          <div key={step.n} className="step-card">
            <div className="step-number">
              <span className="pixel-font" style={{ fontSize: 9, color: '#3a2008' }}>{step.n}</span>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 18 }}>{step.icon}</span>
                <p className="pixel-font" style={{ fontSize: 8, color: '#3a2008', lineHeight: 1.8 }}>{step.title}</p>
              </div>
              <p style={{ fontFamily: 'Nunito, sans-serif', color: '#5a3a18', fontSize: 14, lineHeight: 1.7, fontWeight: 600 }}>
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="pixel-button px-8 py-3">
          <span className="pixel-font text-[9px]" style={{ color: '#3a2008' }}>🌱 START YOUR FIRST QUEST — FREE</span>
        </button>
      </div>
    </section>
  )
}
