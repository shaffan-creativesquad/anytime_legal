import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Services from './components/sections/Services'
import Stats from './components/sections/Stats'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import TermsAndConditions from './components/sections/TermsAndConditions'

const HomePage = () => (
  <main>
    <Hero />
    <Features />
    <Services />
    <Stats />
    <About />
    <Contact />
  </main>
)

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
