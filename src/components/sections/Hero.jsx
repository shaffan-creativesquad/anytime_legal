import { motion } from 'framer-motion'
import {
  ArrowRight,
  Scale,
  Gavel,
  Home,
  Car,
  CheckCircle,
  ChevronDown
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
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
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
            <button onClick={() => scrollToSection('services')} className="btn btn-secondary hero-btn-secondary">
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-card hero-card-main">
            <Scale size={48} />
            <h3>Your Partner in Justice</h3>
            <p>Trusted legal support anytime, anywhere across Ontario</p>
          </div>
          <div className="hero-card hero-card-floating hero-card-1">
            <Gavel size={24} />
            <span>Small Claims</span>
          </div>
          <div className="hero-card hero-card-floating hero-card-2">
            <Home size={24} />
            <span>Landlord & Tenant</span>
          </div>
          <div className="hero-card hero-card-floating hero-card-3">
            <Car size={24} />
            <span>Traffic Defence</span>
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
