import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import './HeroLandlordTenant.css'

const HeroPublicNotary = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img
          src="/images/justice2.0.avif"
          alt="Public Notary Services"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">Public Notary Services</div>

          <h1 className="hero-title">
            Public Notary Services
            <span className="hero-title-accent" style={{ display: 'block' }}>Done Right the First Time</span>
          </h1>

          <p className="hero-description">
            Embassies, courts, banks, and immigration offices will reject your documents on the most trivial of grounds. Our public notary services cover affidavits, statutory declarations, certified true copies, and witnessing of signatures. All of this is carried out with the appropriate identity verification, correct wording, and the appropriate official seal so that your paperwork is accepted wherever it's going.
          </p>

          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-gold"
            >
              Book a Free Consultation
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      <button
        className="hero-scroll"
        onClick={() => scrollToSection('services')}
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  )
}

export default HeroPublicNotary
