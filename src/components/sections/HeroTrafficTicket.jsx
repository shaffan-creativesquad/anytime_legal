import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import './HeroLandlordTenant.css'

const HeroTrafficTicket = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img
          src="/images/justice2.0.avif"
          alt="Traffic Ticket Defence Paralegal"
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
          <div className="hero-badge">Traffic Ticket Defence</div>

          <h1 className="hero-title">
            Traffic Ticket Paralegal
            <span className="hero-title-accent" style={{ display: 'block' }}>Protecting Your Record</span>
          </h1>

          <p className="hero-description">
            A ticket is going to cost you a lot more than the fine itself. A conviction can result in demerit points, a possible suspension, and years of higher insurance. As your traffic ticket paralegal, we'll be asking for disclosure, will be looking at the evidence the officer has, and will be challenging the charge under the Highway Traffic Act.
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

export default HeroTrafficTicket
