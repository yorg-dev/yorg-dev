import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

import Hero from './Hero'
import Benefits from './Benefits'
import Problem from './Problem'
import AgentRoster from './AgentRoster'
import HowItWorks from './HowItWorks'
import FAQ from './FAQ'
import Newsletter from './Newsletter'
import FinalCTA from './FinalCTA'
import Footer from './components/Footer'
import IntegrationsPreview from './IntegrationsPreview'
import Integrations from './pages/Integrations'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Problem />
      <Newsletter />
      <AgentRoster />
      <IntegrationsPreview />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </>
  )
}
