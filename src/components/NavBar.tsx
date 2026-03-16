import { type ReactNode } from 'react'

export default function NavBar({ children }: { children: ReactNode }) {
  return (
    <nav className="relative z-10 flex justify-center -mt-2">
      <div
        className="
          inline-flex items-center justify-center
          rounded-lg cursor-pointer select-none outline-none
          font-serif font-bold tracking-wide
          transition-all duration-75
          bg-parchment-500 text-parchment-900
          border-2 border-parchment-600
          shadow-navbar-outer
        "
        style={{ textShadow: '0 1px 0 rgba(255,255,255,0.4)' }}
      >
        <div className="rounded-lg p-6 mb-2 bg-parchment-200 border-3 border-parchment-100 shadow-navbar-inner">
          {children}
        </div>
      </div>
    </nav>
  )
}
