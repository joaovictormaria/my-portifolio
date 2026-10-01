import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Velnox from './components/Velnox'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { features } from './data/content'

export default function App() {
  return (
    <div className="site">
      <div className="container">
        <Header />
        <Hero />
        <hr className="rule" />
        <Services />
        <hr className="rule" />
        <Projects />
        {features.showTestimonial && (
          <>
            <hr className="rule" />
            <Testimonials />
            <hr className="rule" />
          </>
        )}
        <About />
        <Velnox />
        {features.showFaq && <Faq />}
        <Contact />
        <hr className="rule" />
        <Footer />
      </div>
    </div>
  )
}
