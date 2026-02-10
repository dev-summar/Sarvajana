import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Speakers } from './components/Speakers'
import { Themes } from './components/Themes'
import { Schedule } from './components/Schedule'
import { Venue } from './components/Venue'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Themes />
        <Schedule />
        <Venue />
      </main>
      <Footer />
    </div>
  )
}

export default App
