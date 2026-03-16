import { useState } from 'react'
import { Link } from 'react-router-dom'

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
)

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const DiscordIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
)

const NAV_LINKS = [
  { label: 'Benefits',     href: '/#benefits' },
  { label: 'Agents',       href: '/#agents' },
  { label: 'How It Works', href: '/#how' },
  { label: 'FAQ',          href: '/#faq' },
  { label: 'Integrations', to: '/integrations' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy',   to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Contact Us',       to: '/contact' },
]

const SOCIALS = [
  { label: 'Facebook',  href: 'https://facebook.com/yorgdev',  Icon: FacebookIcon  },
  { label: 'X',         href: 'https://x.com/yorgdev',         Icon: XIcon         },
  { label: 'Discord',   href: 'https://discord.gg/Dgz9w5zh43', Icon: DiscordIcon   },
  { label: 'YouTube',   href: 'https://youtube.com/@yorgdev',  Icon: YouTubeIcon   },
  { label: 'Instagram', href: 'https://instagram.com/yorgdev', Icon: InstagramIcon },
  { label: 'TikTok',    href: 'https://tiktok.com/@yorgdev',   Icon: TikTokIcon    },
]

const colHeadingClass = 'pixel-font text-wood-500 mb-5 block'
const linkClass = 'text-wood-600 hover:text-wood-300 transition-colors no-underline font-semibold text-sm leading-none'

function FooterNewsletter() {
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || website) { setStatus('success'); return }
    setStatus('loading')
    const url = import.meta.env.VITE_NEWSLETTER_URL as string | undefined
    if (!url) { setStatus('success'); return }
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className="pixel-font text-grass-700" style={{ fontSize: 7, lineHeight: 2 }}>
        ✓ YOU'RE ON THE LIST!
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
        className="bg-soil-900 border-2 border-wood-800 px-3 py-2 text-sm font-semibold text-wood-300 outline-none placeholder:text-wood-700 focus:border-wood-600 transition-colors disabled:opacity-60"
        style={{ fontFamily: 'Nunito, sans-serif' }}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-grass-800 border-2 border-grass-900 px-3 py-2 cursor-pointer text-left transition-colors hover:bg-grass-700 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <span className="pixel-font text-grass-300" style={{ fontSize: 7 }}>
          {status === 'loading' ? 'PLANTING...' : '+ SUBSCRIBE'}
        </span>
      </button>
      {status === 'error' && (
        <p className="text-red-500 text-xs font-semibold" style={{ fontFamily: 'Nunito, sans-serif' }}>
          Something went wrong.
        </p>
      )}
    </form>
  )
}

const Footer = () => {
  return (
    <footer className="bg-soil-950 border-t-4 border-wood-900 px-6 pt-12 pb-8">
      <div className="max-w-5xl mx-auto">

        {/* Main columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <span className="pixel-font text-wood-300 text-[10px] block mb-3">YORG</span>
            <p
              className="text-wood-600 text-sm font-semibold leading-relaxed mb-6"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              AI agents that grow your business while you focus on the work you love.
            </p>
            <p
              className="pixel-font text-wood-500 mb-3"
              style={{ fontSize: 7 }}
            >
              NEWSLETTER
            </p>
            <FooterNewsletter />
          </div>

          <div>
            <span className={colHeadingClass} style={{ fontSize: 7 }}>PRODUCT</span>
            <ul className="flex flex-col gap-3" style={{ fontFamily: 'Nunito, sans-serif' }}>
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  {'to' in link
                    ? <Link to={link.to!} className={linkClass}>{link.label}</Link>
                    : <a href={link.href} className={linkClass}>{link.label}</a>
                  }
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className={colHeadingClass} style={{ fontSize: 7 }}>LEGAL</span>
            <ul className="flex flex-col gap-3" style={{ fontFamily: 'Nunito, sans-serif' }}>
              {LEGAL_LINKS.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className={linkClass}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className={colHeadingClass} style={{ fontSize: 7 }}>COMMUNITY</span>
            <ul className="flex flex-col gap-3" style={{ fontFamily: 'Nunito, sans-serif' }}>
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass + ' flex items-center gap-2'}
                  >
                    <span className="text-wood-700 shrink-0"><Icon /></span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t-2 border-wood-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="pixel-font text-[7px] text-wood-700">
            © {new Date().getFullYear()} Yorg. All rights reserved.
          </p>
          <p
            className="text-wood-700 text-xs font-semibold"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Made with 🌱 and a lot of pixels.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
