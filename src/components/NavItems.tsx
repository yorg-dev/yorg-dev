import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS: { icon: string; label: string; href: string; route?: boolean }[] = [
  { icon: '🏠', label: 'HOME', href: '/', route: true },
  { icon: '⭐', label: 'BENEFITS', href: '/#benefits' },
  { icon: '🌿', label: 'AGENTS', href: '/#agents' },
  { icon: '🗺️', label: 'HOW', href: '/#how' },
  { icon: '❓', label: 'FAQ', href: '/#faq' },
  { icon: '🔌', label: 'INTEGRATIONS', href: '/integrations', route: true },
  { icon: '✉️', label: 'CONTACT', href: '/contact', route: true },
]

const SUB_PAGES = ['integrations', 'contact', 'privacy', 'terms']

export default function NavItems() {
  const location = useLocation()
  const isSubPage = SUB_PAGES.includes(location.pathname.slice(1))
  const [activeHome, setActiveHome] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const itemClass = (isActive: boolean) => `
    flex flex-col items-center justify-center gap-1 px-3 py-2
    no-underline cursor-pointer transition-all duration-75
    rounded font-display
    ${
      isActive
        ? 'bg-parchment-500 shadow-[inset_0_2px_0_rgba(0,0,0,0.15),inset_0_-1px_0_rgba(255,255,255,0.1)]'
        : 'hover:bg-parchment-400'
    }
  `

  const items = NAV_ITEMS.map((item, i) => {
    const isActive = isSubPage ? item.href === location.pathname : activeHome === i
    const content = <span className="leading-none text-parchment-900">{item.label}</span>

    return item.route ? (
      <Link key={item.label} to={item.href} className={itemClass(isActive)} onClick={closeMenu}>
        {content}
      </Link>
    ) : (
      <a
        key={item.label}
        href={item.href}
        className={itemClass(isActive)}
        onClick={() => {
          if (!isSubPage) setActiveHome(i)
          closeMenu()
        }}
      >
        {content}
      </a>
    )
  })

  return (
    <>
      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-2">{items}</div>

      {/* Mobile nav */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="flex items-center justify-center px-3 py-2 rounded font-display text-parchment-900 hover:bg-parchment-400 transition-all duration-75"
          aria-label="Toggle menu"
        >
          <span className="text-lg">{menuOpen ? '✕' : '☰'}</span>
        </button>
        {menuOpen && (
          <div className="absolute left-0 right-0 top-full mt-1 mx-4 rounded-lg bg-parchment-200 border-2 border-parchment-300 shadow-lg flex flex-col z-50">
            {items}
          </div>
        )}
      </div>
    </>
  )
}
