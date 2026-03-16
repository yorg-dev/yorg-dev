const Button = ({ children, href }: { children: React.ReactNode; href?: string }) => {
  return (
    <a href={href} className="inline-flex no-underline">
      <div
        className="
          p-1.5 rounded-md
          bg-gradient-to-b from-wood-500 from-[0%] via-wood-600 via-[35%] to-wood-800
          shadow-[inset_0_2px_0_rgba(255,255,255,0.28),inset_0_-2px_0_rgba(0,0,0,0.35),0_4px_0_rgba(0,0,0,0.38)]
        "
      >
        <div
          className="
            flex items-center justify-center rounded p-1
            bg-wood-200
            shadow-[inset_1px_1px_0_rgba(255,255,255,0.6),inset_-1px_-1px_0_rgba(160,110,40,0.4)]
          "
        >
          {children}
        </div>
      </div>
    </a>
  )
}

export default Button
