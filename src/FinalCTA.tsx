export default function FinalCTA() {
  return (
    <section className="final-cta-section relative px-6 py-28 text-center overflow-hidden">
      <div
        className="benefits-top-border"
        style={{ background: 'repeating-linear-gradient(90deg, #2a5018 0px, #2a5018 28px, #1e4010 28px, #1e4010 32px)' }}
      />

      {/* Radial glow */}
      <div className="cta-glow" />

      <div className="relative z-10 flex flex-col items-center">

        {/* Headline in scroll panel */}
        <div className="pixel-scroll px-8 py-7 mb-10 text-center" style={{ maxWidth: 600 }}>
          <p className="pixel-font" style={{ fontSize: 9, color: '#3a2008', lineHeight: 2.4 }}>
            YOU DIDN'T START YOUR BUSINESS<br />
            TO TEND EVERY INCH OF IT<br />
            ALONE, FOREVER.
          </p>
        </div>

        <p style={{ fontFamily: 'Nunito, sans-serif', color: '#90c850', fontSize: 18, lineHeight: 1.8, fontWeight: 700, maxWidth: 520, marginBottom: 44 }}>
          It's time to plant something better. Your first Agent is waiting. Your first harvest is closer than you think.
        </p>

        <button className="cta-button-xl px-12 py-5 mb-7">
          <span className="pixel-font" style={{ fontSize: 11, color: '#e8f8d0', letterSpacing: '0.08em' }}>
            🌱 PLANT YOUR FIRST AGENT — FREE
          </span>
        </button>

        <p style={{ fontFamily: 'Nunito, sans-serif', color: '#507838', fontSize: 14, fontWeight: 600 }}>
          No tech skills required · No credit card needed · First harvest in 10 minutes
        </p>

      </div>
    </section>
  )
}
