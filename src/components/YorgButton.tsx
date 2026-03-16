import { type ReactNode } from 'react'

interface YorgButtonProps {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
}

export default function YorgButton({
  children,
  onClick,
  disabled = false,
  className = '',
}: YorgButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center
        rounded-lg cursor-pointer select-none outline-none
        font-serif font-bold tracking-wide
        transition-all duration-75
        bg-parchment-300 text-parchment-900
        border-2 border-parchment-600
        shadow-navbar-outer
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      style={{ textShadow: '0 1px 0 rgba(255,255,255,0.4)' }}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.backgroundColor = 'var(--color-parchment-400)'
      }}
      onMouseLeave={(e) => {
        if (!disabled) e.currentTarget.style.backgroundColor = 'var(--color-parchment-300)'
      }}
      onMouseDown={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'translateY(2px)'
          e.currentTarget.style.backgroundColor = 'var(--color-parchment-500)'
        }
      }}
      onMouseUp={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = ''
          e.currentTarget.style.backgroundColor = 'var(--color-parchment-400)'
        }
      }}
    >
      <div className="rounded-lg p-6 mb-1 bg-parchment-200 border-3 border-parchment-100 shadow-navbar-inner">
        {children}
      </div>
    </button>
  )
}
