interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'cta'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const base =
  'pixel-font inline-flex items-center justify-center gap-2 cursor-pointer select-none ' +
  'border-4 transition-[transform,box-shadow,background-color] duration-75 ' +
  'active:translate-x-0.5 active:translate-y-0.5'

const variants = {
  // Standard wooden button — warm amber panel
  primary:
    'bg-wood-400 border-wood-800 text-wood-950 ' +
    'hover:bg-wood-300 ' +
    'shadow-wood-btn hover:shadow-wood-btn-hover active:shadow-wood-btn-active',

  // Lighter inset button — for less prominent actions
  secondary:
    'bg-wood-200 border-wood-700 text-wood-950 ' +
    'hover:bg-wood-100 ' +
    'shadow-wood-btn hover:shadow-wood-btn-hover active:shadow-wood-btn-active',

  // Hero CTA — green, glowing, large
  cta:
    'bg-grass-600 border-grass-800 text-wood-50 ' +
    'hover:bg-grass-500 ' +
    'shadow-wood-btn-lg hover:shadow-wood-btn-lg-hover active:shadow-wood-btn-active',
}

const sizes = {
  sm: 'px-4  py-2   text-[8px]',
  md: 'px-6  py-3   text-[9px]',
  lg: 'px-10 py-4   text-[10px] tracking-wide',
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const classes = [base, variants[variant], sizes[size], className].join(' ')

  if (href) {
    return (
      <a href={href} className={classes} style={{ textDecoration: 'none' }}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
