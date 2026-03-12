import logo from './assets/yorg-logo.png'
import landBg from './assets/land_background.png'
import Navigation from './components/Navigation'
import Button from './Button'

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Actual game world background */}
      <img
        src={landBg}
        aria-hidden="true"
        className="pixel-art absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />

      {/* Darken overall so UI stays legible */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(145,206,187,0.50)' }} />

      {/* Radial vignette — heavier at edges */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 20%, rgba(145,206,187,0.80) 100%)' }}
      />

      <Navigation />

      {/* Hero body */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-6 pb-24">
        <div className="relative container lg:max-w-5xl m-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col items-start sm:items-center sm:text-center">
            <img
              src={logo} alt="Yorg" className="pixel-art"
              style={{ width: 168, height: 168, objectFit: 'contain', display: 'block' }}
            />

            <h1 className="font-display font-extrabold text-soil-800 text-5xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl !tracking-[-.045em] relative mb-6 -mt-4 sm:-mt-5 lg:-mt-6 xl:mt-[-26px]">
              The Easiest Way to Start and Grow Your Business With <span className="bg-gradient-to-r from-grass-600 via-wood-600 to-soil-800 inline-block text-transparent bg-clip-text text-shadow-lg shadow-gray-700">AI Automation</span>
            </h1>

            <p className="sm:max-w-96 md:max-w-2xl lg:mx-auto text-base text-soil-800 lg:text-lg xl:text-lg mb-9">
              Using AI Agents has never been this Easy (or This Much Fun!)
            </p>
          </div>
        </div>
        <div>
          <Button href={import.meta.env.VITE_GAME_URL}>
            Play Now
          </Button>
          <p className="mb-4 text-soil-900">
            Grow&nbsp;·&nbsp;Build&nbsp;·&nbsp;Thrive
          </p>
        </div>
      </section>
    </div>
  );
}
