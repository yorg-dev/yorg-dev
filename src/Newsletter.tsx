import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) return
    if (website) { setStatus('success'); return }

    setStatus('loading')

    const apiUrl = import.meta.env.VITE_API_URL as string | undefined
    if (apiUrl) {
      try {
        const res = await fetch(`${apiUrl}/newsletter_subscriptions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: trimmed }),
        })
        setStatus(res.ok ? 'success' : 'error')
      } catch {
        setStatus('error')
      }
    } else {
      setStatus('success')
    }
  }

  return (
    <section
      className="relative px-6 py-24 text-center overflow-hidden bg-[#0d1830]"
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(140,180,240,0.22) 1px, transparent 1px),
          radial-gradient(circle, rgba(200,230,255,0.10) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px, 64px 64px',
        backgroundPosition: '0 0, 16px 16px',
      }}
    >
      {/* top border */}
      <div
        className="benefits-top-border"
        style={{ background: 'repeating-linear-gradient(90deg, #1a2a50 0px, #1a2a50 28px, #0f1e3e 28px, #0f1e3e 32px)' }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(30,60,120,0.55) 0%, transparent 100%)' }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <h3 className="text-4xl text-white/90 mb-4">Join the Newsletter</h3>

        <p
          className="text-[17px] leading-[1.8] font-bold max-w-[500px] mb-9 text-[#8ab0e8]"
          style={{ fontFamily: 'Nunito, sans-serif' }}
        >
          Get early access updates, new agent drops, and cultivation tips delivered straight to your inbox.
        </p>

        {status === 'success' ? (
          <div className="bg-wood-100 border-4 border-wood-700 px-10 py-8 text-center max-w-[480px] shadow-[inset_2px_2px_0_rgba(255,255,255,0.5),inset_-2px_-2px_0_rgba(120,70,10,0.28),5px_5px_0_rgba(0,0,0,0.38)]">
            <div className="text-4xl mb-3">🌱</div>
            <p className="pixel-font text-wood-950" style={{ fontSize: 8, lineHeight: 2.2 }}>
              SEED PLANTED!
            </p>
            <p
              className="text-[15px] font-bold mt-2.5 text-grass-800"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              You're on the list. We'll be in touch soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 items-stretch w-full max-w-[520px]"
          >
            <input
              type="text"
              name="website"
              value={website}
              onChange={e => setWebsite(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ display: 'none' }}
            />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={status === 'loading'}
              className="flex-1 bg-wood-100 border-4 border-wood-700 px-[18px] py-[14px] text-base font-bold text-wood-950 outline-none placeholder:text-wood-500 transition-shadow duration-[80ms] disabled:opacity-65 shadow-[inset_2px_2px_0_rgba(255,255,255,0.5),inset_-2px_-2px_0_rgba(120,70,10,0.28),4px_4px_0_rgba(0,0,0,0.45)] focus:shadow-[inset_2px_2px_0_rgba(255,255,255,0.5),inset_-2px_-2px_0_rgba(120,70,10,0.28),0_0_0_3px_rgba(140,200,80,0.5),4px_4px_0_rgba(0,0,0,0.45)]"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-grass-700 border-4 border-grass-800 px-6 py-[14px] cursor-pointer whitespace-nowrap transition-[transform,box-shadow,background] duration-[80ms] disabled:opacity-65 disabled:cursor-not-allowed shadow-[inset_3px_3px_0_rgba(255,255,255,0.28),inset_-3px_-3px_0_rgba(0,0,0,0.3),0_0_20px_rgba(80,160,30,0.35),4px_4px_0_rgba(0,0,0,0.5)] hover:not-disabled:bg-grass-600 hover:not-disabled:-translate-y-0.5 hover:not-disabled:shadow-[inset_3px_3px_0_rgba(255,255,255,0.28),inset_-3px_-3px_0_rgba(0,0,0,0.3),0_0_35px_rgba(100,190,40,0.5),4px_6px_0_rgba(0,0,0,0.45)] active:not-disabled:translate-x-[3px] active:not-disabled:translate-y-[3px] active:not-disabled:shadow-[inset_3px_3px_0_rgba(255,255,255,0.15),2px_2px_0_rgba(0,0,0,0.4)]"
            >
              <span className="pixel-font text-[#e8f8d0] tracking-[0.08em]" style={{ fontSize: 9 }}>
                {status === 'loading' ? 'Planting...' : 'Subscribe'}
              </span>
            </button>
            {status === 'error' && (
              <p
                className="text-sm font-semibold mt-3 w-full text-red-400"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}

        <p
          className="text-[13px] font-semibold mt-5 text-grass-300"
          style={{ fontFamily: 'Nunito, sans-serif' }}
        >
          No spam · Unsubscribe anytime
        </p>
      </div>
    </section>
  )
}
