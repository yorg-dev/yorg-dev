import { useState } from 'react'

const FAQS = [
  {
    q: "I'm not technical at all.",
    a: "Yorg was grown for exactly that. If you can tap a screen, you can plant your first Agent. The game teaches you by doing — not by reading. Most Business Owners have their first Agent live before they finish their coffee.",
  },
  {
    q: "I've tried AI tools before and they didn't deliver.",
    a: "Tools wither without a system behind them. Yorg gives you the system, the Agents, and the community — not just another tool that sits in a drawer. The difference is the game: it walks you through setup, explains the why, and keeps you tending until the harvest comes in.",
  },
  {
    q: "I don't have time to learn something new.",
    a: "That's exactly why your farm needs this. You're tending every row yourself. One Agent gives you time back — starting today. Your first session is 10–15 minutes. After that, your Agent runs without you.",
  },
  {
    q: "Is this actually a game? Or a business tool?",
    a: "Both. That's the point. It's a warm, approachable game that teaches you real AI skills you'll use in your real business — while you're having fun. The two grow together.",
  },
  {
    q: "What does it actually cost?",
    a: "Less than the hours you're losing to manual work every week. Less than a single day's worth of missed follow-up. And there's a free plan to plant your first Agent and see the harvest for yourself.",
  },
  {
    q: "What if I get stuck?",
    a: "You're never growing alone. The Yorg community — thousands of Business Owners tending their own gardens — is right there every step of the way. Plus our Plot Guides are available to walk you through any tricky terrain.",
  },
  {
    q: "My business is different.",
    a: "Coaches, contractors, agencies, e-commerce stores, local shops, consultants — if you have customers to serve and leads to tend, Yorg grows with you. The farm takes the shape of your business.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="faq-section relative px-6 py-20">
      <div
        className="benefits-top-border"
        style={{ background: 'repeating-linear-gradient(90deg, #b88840 0px, #b88840 28px, #a87830 28px, #a87830 32px)' }}
      />

      {/* Header */}
      <div className="flex justify-center mb-14">
        <div className="pixel-billboard px-10 py-4">
          <span className="pixel-font" style={{ fontSize: 11, color: '#3a2008', letterSpacing: '0.12em' }}>
            ✦ QUESTIONS FROM THE FIELD ✦
          </span>
        </div>
      </div>

      {/* FAQ items */}
      <div style={{ maxWidth: 740, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {FAQS.map((item, i) => (
          <div
            key={i}
            className="faq-item"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="faq-item-header">
              <p className="pixel-font" style={{ fontSize: 8, color: '#3a2008', lineHeight: 1.9, paddingRight: 16 }}>
                {item.q}
              </p>
              <div className="faq-toggle">
                <span className="pixel-font" style={{ fontSize: 12, color: '#3a2008', lineHeight: 1 }}>
                  {open === i ? '−' : '+'}
                </span>
              </div>
            </div>
            {open === i && (
              <div className="faq-item-body">
                <p style={{ fontFamily: 'Nunito, sans-serif', color: '#5a3a18', fontSize: 15, lineHeight: 1.75, fontWeight: 600 }}>
                  {item.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
