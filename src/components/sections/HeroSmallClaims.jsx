import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import './HeroLandlordTenant.css'

const HeroSmallClaims = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img
          src="/images/justice2.0.avif"
          alt="Small Claims Court Paralegal"
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
          <div className="hero-badge">Small Claims Court</div>

          <h1 className="hero-title">
            Small Claims Court Paralegal
            <span className="hero-title-accent" style={{ display: 'block' }}> On Your Side</span>
          </h1>

          <p className="hero-description">
            Whether you're in a position where you think someone owes you money or you've just been served with a claim, the stronger file is going to win. As your small claims court paralegal, we'll draft your pleadings, manage all the deadlines, and represent you in any dispute up to $50k from the first demand letter right through to final judgment.
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

export default HeroSmallClaims
