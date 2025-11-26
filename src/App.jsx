import './App.css'
import Hero from './components/Hero/Hero.jsx'
import CostSection from './components/CostSection/CostSection.jsx'
import SocialProof from './components/SocialProof/SocialProof.jsx'
import Stream from './components/Stream/Stream.jsx'
import ExpertSection from './components/ExpertSection/ExpertSection.jsx'
import ClientImpact from './components/ClientImpact/ClientImpact.jsx'
import InterfazFriccion from './components/InterfazFriccion/InterfazFriccion.jsx'
import SupportFuture from './components/SupportFuture/SupportFuture.jsx'
// import SupportDemo from './components/SupportDemo/SupportDemo.jsx'
import ScrollReveal from './components/ScrollReveal/ScrollReveal.jsx'

function App() {
  return (
    <>
        <Hero />
      <ScrollReveal>
        <CostSection />
      </ScrollReveal>
      <ScrollReveal>
        <SocialProof />
      </ScrollReveal>
      <ScrollReveal>
        <Stream />
      </ScrollReveal>
      <ScrollReveal>
        <ExpertSection />
      </ScrollReveal>
      <ScrollReveal>
        <ClientImpact />
      </ScrollReveal>
      <ScrollReveal>
        <InterfazFriccion />
      </ScrollReveal>
        <SupportFuture />
      {/* <ScrollReveal>
        <SupportDemo />
      </ScrollReveal> */}
    </>
  )
}

export default App
