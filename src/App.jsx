import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Certifications from './components/Certifications'
import Community from './components/Community'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Certifications />
        <Community />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
