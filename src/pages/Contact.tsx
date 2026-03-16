import { useState } from 'react'
import NavBar from '../components/NavBar'
import NavItems from '../components/NavItems'
import Footer from '../components/Footer'

type Status = 'idle' | 'loading' | 'success' | 'error'

const CATEGORIES = [
  { value: 'question', label: 'General Question' },
  { value: 'bug', label: 'Bug Report' },
  { value: 'feature_request', label: 'Feature Request' },
  { value: 'integration_request', label: 'Integration Request' },
  { value: 'billing', label: 'Billing' },
]

const inputClass = [
  'w-full bg-wood-100 border-4 border-wood-700 px-4 py-3',
  'text-base font-bold text-wood-950 outline-none',
  'placeholder:text-wood-500',
  'transition-shadow duration-[80ms]',
  'disabled:opacity-60',
  'shadow-[inset_2px_2px_0_rgba(255,255,255,0.5),inset_-2px_-2px_0_rgba(120,70,10,0.28),3px_3px_0_rgba(0,0,0,0.35)]',
  'focus:shadow-[inset_2px_2px_0_rgba(255,255,255,0.5),inset_-2px_-2px_0_rgba(120,70,10,0.28),0_0_0_3px_rgba(140,200,80,0.5),3px_3px_0_rgba(0,0,0,0.35)]',
].join(' ')

const labelClass = 'block pixel-font text-wood-300 mb-2'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'question',
    body: '',
  })
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (website) {
      setStatus('success')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    const apiUrl = import.meta.env.VITE_API_URL as string | undefined
    if (!apiUrl) {
      // No API configured — show success in dev
      setStatus('success')
      return
    }

    try {
      const res = await fetch(`${apiUrl}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact: { ...form, source: 'web' } }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data?.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Could not reach the server. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-soil-900">
      {/* Header */}
      <div
        className="relative overflow-hidden bg-grass-950 px-6 pb-20"
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

        <div className="relative z-10 max-w-2xl mx-auto text-center mt-16">
          <h3 className="text-4xl text-white/90 mb-4">Contact Us</h3>

          <p
            className="text-grass-300 text-lg font-bold leading-relaxed"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Got a question, bug, or idea? Send us a message and we'll get back to you.
          </p>
        </div>
      </div>

      {/* Form card */}
      <div className="max-w-2xl mx-auto px-6 -mt-8 pb-20 relative z-10">
        <div className="bg-wood-100 border-4 border-wood-700 p-8 shadow-[inset_2px_2px_0_rgba(255,255,255,0.45),inset_-2px_-2px_0_rgba(100,60,0,0.3),6px_6px_0_rgba(0,0,0,0.45)]">
          {status === 'success' ? (
            <div className="py-12 flex flex-col items-center text-center gap-4">
              <p className="pixel-font text-wood-950" style={{ fontSize: 9, lineHeight: 2.4 }}>
                MESSAGE SENT!
              </p>
              <p
                className="text-wood-700 font-bold text-base leading-relaxed max-w-sm"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Thanks for reaching out. We'll get back to you as soon as we can.
              </p>
              <button
                onClick={() => {
                  setStatus('idle')
                  setForm({ name: '', email: '', subject: '', category: 'question', body: '' })
                }}
                className="mt-4 pixel-button px-6 py-3 cursor-pointer"
              >
                <span className="pixel-font text-wood-950" style={{ fontSize: 8 }}>
                  SEND ANOTHER
                </span>
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: 'none' }}
              />

              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass} style={{ fontSize: 7 }}>
                    NAME
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                    placeholder="Your name"
                    disabled={status === 'loading'}
                    className={inputClass}
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  />
                </div>
                <div>
                  <label className={labelClass} style={{ fontSize: 7 }}>
                    EMAIL
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                    placeholder="your@email.com"
                    disabled={status === 'loading'}
                    className={inputClass}
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className={labelClass} style={{ fontSize: 7 }}>
                  CATEGORY
                </label>
                <select
                  value={form.category}
                  onChange={(e) => set('category', e.target.value)}
                  disabled={status === 'loading'}
                  className={inputClass + ' cursor-pointer appearance-none'}
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subject */}
              <div>
                <label className={labelClass} style={{ fontSize: 7 }}>
                  SUBJECT
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => set('subject', e.target.value)}
                  placeholder="What's this about?"
                  disabled={status === 'loading'}
                  className={inputClass}
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                />
              </div>

              {/* Message */}
              <div>
                <label className={labelClass} style={{ fontSize: 7 }}>
                  MESSAGE{' '}
                  <span className="text-wood-500" style={{ fontSize: 6 }}>
                    (required)
                  </span>
                </label>
                <textarea
                  value={form.body}
                  onChange={(e) => set('body', e.target.value)}
                  placeholder="Tell us what's on your mind..."
                  required
                  rows={6}
                  disabled={status === 'loading'}
                  className={inputClass + ' resize-y leading-relaxed'}
                  style={{ fontFamily: 'Nunito, sans-serif', minHeight: 140 }}
                />
              </div>

              {/* Error */}
              {status === 'error' && (
                <p className="text-red-500 font-semibold text-sm -mt-2">{errorMsg}</p>
              )}

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-grass-700 border-4 border-grass-900 px-10 py-4 cursor-pointer transition-[transform,box-shadow,background] duration-[80ms] disabled:opacity-60 disabled:cursor-not-allowed shadow-[inset_3px_3px_0_rgba(255,255,255,0.28),inset_-3px_-3px_0_rgba(0,0,0,0.3),0_0_20px_rgba(80,160,30,0.3),4px_4px_0_rgba(0,0,0,0.5)] hover:not-disabled:bg-grass-600 hover:not-disabled:-translate-y-0.5 hover:not-disabled:shadow-[inset_3px_3px_0_rgba(255,255,255,0.28),inset_-3px_-3px_0_rgba(0,0,0,0.3),0_0_35px_rgba(100,190,40,0.5),4px_6px_0_rgba(0,0,0,0.45)] active:not-disabled:translate-x-[3px] active:not-disabled:translate-y-[3px] active:not-disabled:shadow-[inset_3px_3px_0_rgba(255,255,255,0.15),2px_2px_0_rgba(0,0,0,0.4)]"
                >
                  <span
                    className="pixel-font text-[#e8f8d0] tracking-[0.08em]"
                    style={{ fontSize: 9 }}
                  >
                    {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
