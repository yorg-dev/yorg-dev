const Footer = () => {
  return (
    <footer className="bg-soil-950 border-t-4 border-wood-900 px-6 py-5">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">

        <p className="pixel-font text-[7px] text-wood-600 leading-relaxed">
          © {new Date().getFullYear()} Yorg. All rights reserved.
        </p>

        <nav className="flex items-center gap-6">
          <a href="/privacy" className="pixel-font text-[7px] text-wood-600 hover:text-wood-300 transition-colors no-underline">
            Privacy Policy
          </a>
          <a href="/terms" className="pixel-font text-[7px] text-wood-600 hover:text-wood-300 transition-colors no-underline">
            Terms of Service
          </a>
        </nav>

      </div>
    </footer>
  )
}

export default Footer
