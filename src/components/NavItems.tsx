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

  return (
    <div className="flex items-center gap-2">
      {NAV_ITEMS.map((item, i) => {
        const isActive = isSubPage ? item.href === location.pathname : activeHome === i

        const sharedClass = `
          flex flex-col items-center justify-center gap-1 px-3 py-2
          no-underline cursor-pointer transition-all duration-75
          rounded font-display
          ${
            isActive
              ? 'bg-parchment-500 shadow-[inset_0_2px_0_rgba(0,0,0,0.15),inset_0_-1px_0_rgba(255,255,255,0.1)]'
              : 'hover:bg-parchment-400'
          }
        `

        const content = (
          <>
            <span className="leading-none text-parchment-900">{item.label}</span>
          </>
        )

        return item.route ? (
          <Link key={item.label} to={item.href} className={sharedClass}>
            {content}
          </Link>
        ) : (
          <a
            key={item.label}
            href={item.href}
            onClick={() => {
              if (!isSubPage) setActiveHome(i)
            }}
            className={sharedClass}
          >
            {content}
          </a>
        )
      })}
    </div>
  )
}
