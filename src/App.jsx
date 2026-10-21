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
import PrivacyPolicy from './components/sections/PrivacyPolicy'
import Blogs from './components/pages/Blogs'
import FirstPost from './components/pages/posts/FirstPost'
import SecondPost from './components/pages/posts/SecondPost'
import ThirdPost from './components/pages/posts/ThirdPost'
import FourthPost from './components/pages/posts/FourthPost'
import FifthPost from './components/pages/posts/FifthPost'
import SixthPost from './components/pages/posts/SixthPost'

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
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="/blogs" element={<Blogs />} />
          <Route path="/when-should-you-hire-a-paralegal-for-a-landlord-and-tenant-dispute-in-ontario" element={<FirstPost />} />
          <Route path="/how-can-a-paralegal-help-with-landlord-and-tenant-issues-in-toronto" element={<SecondPost />} />
          <Route path="/what-does-a-licensed-paralegal-do-for-landlord-and-tenant-disputes" element={<ThirdPost />} />
          <Route path="/whats-the-process-for-disputing-a-traffic-ticket-in-ontario" element={<FourthPost />} />
          <Route path="/small-claims-court-paralegal-and-traffic-ticket-paralegal-when-do-you-need-representation" element={<FifthPost />} />
          <Route path="/need-public-notary-services-or-an-affordable-paralegal-in-toronto" element={<SixthPost />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
