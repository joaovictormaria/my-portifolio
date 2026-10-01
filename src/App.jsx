import HeroDark from './components/HeroDark'
import Stack from './components/Stack'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Velnox from './components/Velnox'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'
import { features } from './data/content'

export default function App() {
  useScrollReveal()

  return (
    <div className="site">
      <div className="topfold">
        <HeroDark />
        <Stack />
      </div>

      {/* Faixas coloridas ficam fora do container para ocupar a tela toda. */}
      <Services />

      {features.showProjects && <Projects />}

      {features.showTestimonial && (
        <div className="container">
          <Testimonials />
        </div>
      )}

      <div className="container">
        <About />
      </div>

      <Velnox />
      {features.showFaq && <Faq />}
      <Contact />

      <div className="container">
        <Footer />
      </div>
    </div>
  )
}
