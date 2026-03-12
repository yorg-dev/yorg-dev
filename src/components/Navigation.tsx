import { useState } from 'react'

const NAV_ITEMS = [
  { icon: '🏠', label: 'HOME',     href: '#' },
  { icon: '⭐', label: 'BENEFITS', href: '#benefits' },
  { icon: '🌿', label: 'AGENTS',   href: '#agents' },
  { icon: '🗺️', label: 'HOW',      href: '#how' },
  { icon: '❓', label: 'FAQ',       href: '#faq' },
]

const Navigation = () => {
  const [active, setActive] = useState(0)

  return (
    <nav className="relative z-10 flex items-center justify-between gap-4 px-5 pt-5">

      {/* Outer wooden rail — 4-stop gradient via CSS vars, no hardcoded hex */}
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
          {NAV_ITEMS.map((item, i) => {
            const isActive = active === i
            const slotShadow = isActive
              ? 'shadow-slot-active'
              : item.cta
              ? 'shadow-slot-cta'
              : 'shadow-slot-default'

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActive(i)}
                className={`
                  flex-1 min-w-0 h-14 flex flex-col items-center justify-center gap-1
                  no-underline cursor-pointer transition-all duration-75
                  rounded-[12px]
                  ${isActive || item.cta ? 'bg-wood-100' : 'bg-wood-200'}
                  ${slotShadow}
                `}
              >
                <span className="text-lg leading-none">{item.icon}</span>
                <span
                  className={`
                    pixel-font text-[6px] tracking-[0.04em] leading-none
                    ${item.cta ? 'font-bold text-grass-800' : 'text-wood-950'}
                  `}
                >
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
