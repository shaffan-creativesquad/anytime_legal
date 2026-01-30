import { motion } from 'framer-motion'
import {
  ArrowRight,
  Scale,
  FileText,
  Users,
  Shield,
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
          <span className="hero-badge">Trusted Paralegal Services</span>
          <h1 className="hero-title">
            Professional Legal Support
            <span className="hero-title-accent"> You Can Rely On</span>
          </h1>
          <p className="hero-description">
            We provide expert paralegal services to help individuals and businesses
            navigate complex legal processes with confidence. From document preparation
            to court filings, we are here to support your legal journey.
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
              <span>Licensed & Insured</span>
            </div>
            <div className="hero-trust-item">
              <CheckCircle size={18} />
              <span>15+ Years Experience</span>
            </div>
            <div className="hero-trust-item">
              <CheckCircle size={18} />
              <span>5000+ Cases Handled</span>
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
            <h3>Justice & Integrity</h3>
            <p>Serving clients with dedication and professionalism since 2009</p>
          </div>
          <div className="hero-card hero-card-floating hero-card-1">
            <FileText size={24} />
            <span>Document Prep</span>
          </div>
          <div className="hero-card hero-card-floating hero-card-2">
            <Users size={24} />
            <span>Family Law</span>
          </div>
          <div className="hero-card hero-card-floating hero-card-3">
            <Shield size={24} />
            <span>Notary Services</span>
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
