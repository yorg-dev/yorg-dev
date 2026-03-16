import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const HOME_NAV_ITEMS: { icon: string; label: string; href: string }[] = [
  { icon: '🏠', label: 'HOME',     href: '/' },
  { icon: '⭐', label: 'BENEFITS', href: '/#benefits' },
  { icon: '🌿', label: 'AGENTS',   href: '/#agents' },
  { icon: '🗺️', label: 'HOW',      href: '/#how' },
  { icon: '❓', label: 'FAQ',       href: '/#faq' },
  { icon: '🔌', label: 'INTEGRATIONS', href: '/integrations' },
  { icon: '✉️', label: 'CONTACT',      href: '/contact' },
]

const Navigation = () => {
  const location = useLocation()
  const isIntegrations = location.pathname === '/integrations'
  const isContact = location.pathname === '/contact'
  const isSubPage = isIntegrations || isContact
  const [activeHome, setActiveHome] = useState(0)

  return (
    <nav className="relative z-10 flex items-center justify-between gap-4 px-5 pt-5">

      {/* Outer wooden rail */}
      <div
        className="
          flex-1 flex items-center
          rounded-[28px] p-2.5
          bg-[linear-gradient(to_bottom,var(--color-wood-500)_0%,var(--color-wood-600)_30%,var(--color-wood-700)_70%,var(--color-wood-900)_100%)]
          shadow-wood-rail
        "
      >
        {/* Inner dark track */}
        <div
          className="
            flex items-center gap-2 w-full
            rounded-[18px] py-1.5 px-2
            bg-plum-500
            shadow-wood-track
          "
        >
          {HOME_NAV_ITEMS.map((item, i) => {
            const isActive = isSubPage
              ? item.href === location.pathname
              : activeHome === i

            const slotShadow = isActive ? 'shadow-slot-active' : 'shadow-slot-default'

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => { if (!isSubPage) setActiveHome(i) }}
                className={`
                  flex-1 min-w-0 h-14 flex flex-col items-center justify-center gap-1
                  no-underline cursor-pointer transition-all duration-75
                  rounded-[12px]
                  ${isActive ? 'bg-wood-100' : 'bg-wood-200'}
                  ${slotShadow}
                `}
              >
                <span className="text-lg leading-none">{item.icon}</span>
                <span className="pixel-font text-[6px] tracking-[0.04em] leading-none text-wood-950">
                  {item.label}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
