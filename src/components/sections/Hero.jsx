import { motion } from 'framer-motion'
import {
  ArrowRight,
  Gavel,
  Home,
  Car,
  CheckCircle,
  ChevronDown,
  FileText,
  Stamp
} from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img src="/images/justice2.0.avif" alt="" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Protecting Your Legal Rights
            <span className="hero-title-accent"> With Expertise & Compassion</span>
          </h1>
          <p className="hero-description">
            When legal issues arise, choosing a knowledgeable and reliable paralegal firm is essential.
            We provide trusted, client-focused paralegal services across Ontario designed to protect
            your legal rights with professionalism and care.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('contact')} className="btn btn-gold">
              Free Consultation
              <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollToSection('services')} className="btn hero-btn-secondary">
              Our Services
            </button>
          </div>
          <div className="hero-trust">
            <div className="hero-trust-item">
              <CheckCircle size={18} />
              <span>Licensed Paralegal</span>
            </div>
            <div className="hero-trust-item">
              <CheckCircle size={18} />
              <span>Serving Across Ontario</span>
            </div>
            <div className="hero-trust-item">
              <CheckCircle size={18} />
              <span>Flexible Appointments</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-card hero-card-floating hero-card-1">
            <Gavel size={22} />
            <span>Small Claims</span>
          </div>
          <div className="hero-card hero-card-floating hero-card-2">
            <Home size={22} />
            <span>Landlord & Tenant</span>
          </div>
          <div className="hero-card hero-card-floating hero-card-3">
            <Car size={22} />
            <span>Traffic Defence</span>
          </div>
          <div className="hero-card hero-card-floating hero-card-4">
            <Stamp size={22} />
            <span>Public Notary</span>
          </div>
        </motion.div>
      </div>
      <button className="hero-scroll" onClick={() => scrollToSection('features')} aria-label="Scroll down">
        <ChevronDown size={24} />
      </button>
    </section>
  )
}

export default Hero
