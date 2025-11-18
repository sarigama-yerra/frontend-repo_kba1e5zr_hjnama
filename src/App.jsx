import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Industries from './components/Industries'
import Network from './components/Network'
import WhyUs from './components/WhyUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.12),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.08),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(37,99,235,0.1),transparent_40%)]" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <Network />
        <WhyUs />
      </main>

      <Footer />
    </div>
  )
}

export default App
