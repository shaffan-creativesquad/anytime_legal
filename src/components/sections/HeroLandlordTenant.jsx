import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  MessageSquare,
  CheckCircle,
  ChevronDown,
  Building2,
  FileCheck2,
  Scale,
  ShieldCheck
} from 'lucide-react'
import './HeroLandlordTenant.css'

const HeroLandlordTenant = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img
          src="/images/justice2.0.avif"
          alt="Landlord and Tenant Legal Services"
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
          <div className="hero-badge">Landlord &amp; Tenant Disputes</div>

          <h1 className="hero-title">
            Your Landlord and Tenant Paralegal
            <span className="hero-title-accent" style={{display:"block"}}> at the LTB</span>
          </h1>

          <p className="hero-description">
            Rent arrears, an eviction notice you didn't see coming, a unit that never gets repaired: tenancy disputes escalate fast. As your landlord and tenant paralegal, we prepare notices and applications correctly, build the evidence, and represent you before the Landlord and Tenant Board across Ontario.
          </p>

          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-gold"
            >
              Book a Free Consultation
              <ArrowRight size={18} />
            </button>
            {/* <button
              onClick={() => scrollToSection('ltb-info')}
              className="btn hero-btn-secondary"
            >
              Talk to an LTB Paralegal
              <MessageSquare size={18} />
            </button> */}
          </div>

          {/* <div className="hero-trust">
            <div className="hero-trust-item">
              <CheckCircle size={18} />
              <span>Licensed LTB Paralegal</span>
            </div>
            <div className="hero-trust-item">
              <CheckCircle size={18} />
              <span>Landlords & Tenants Represented</span>
            </div>
            <div className="hero-trust-item">
              <CheckCircle size={18} />
              <span>Flexible Appointments</span>
            </div>
          </div> */}
        </motion.div>

        {/* <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-card hero-card-floating hero-card-1">
            <Building2 size={22} />
            <span>LTB Hearings</span>
          </div>
          <div className="hero-card hero-card-floating hero-card-2">
            <FileCheck2 size={22} />
            <span>N4 / N12 / L1 Notices</span>
          </div>
          <div className="hero-card hero-card-floating hero-card-3">
            <Scale size={22} />
            <span>Eviction Defence</span>
          </div>
          <div className="hero-card hero-card-floating hero-card-4">
            <ShieldCheck size={22} />
            <span>Rent Recovery</span>
          </div>
        </motion.div> */}
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

export default HeroLandlordTenant