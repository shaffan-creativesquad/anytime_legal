import { motion } from 'framer-motion'
import { ArrowRight, Scale, CheckCircle } from 'lucide-react'
import './About.css'

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">Who We Are</span>
            <h2>Anytime Legal Services Professional Corporation</h2>
            <p>
              We are a dedicated legal firm proudly serving clients across Ontario. Our expertise
              spans various areas of law, specializing in Landlord & Tenant Disputes, Small Claims
              Court matters up to $50,000, Traffic Ticket Defence, and Public Notary services.
            </p>
            <p>
              Our firm embodies the community's spirit of resilience and integrity. We are passionate
              about delivering justice and safeguarding the rights and interests of our clients.
              Whether you need advice, representation, or clarity on legal matters, we're here to
              guide you every step of the way.
            </p>
            <ul className="about-list">
              <li>
                <CheckCircle size={20} />
                <span>Licensed Paralegal Professionals</span>
              </li>
              <li>
                <CheckCircle size={20} />
                <span>Serving Across Ontario</span>
              </li>
              <li>
                <CheckCircle size={20} />
                <span>Compassionate & Expert Guidance</span>
              </li>
              <li>
                <CheckCircle size={20} />
                <span>Client-Centered Approach</span>
              </li>
            </ul>
            <button onClick={scrollToContact} className="btn btn-primary">
              Contact Us Today
              <ArrowRight size={18} />
            </button>
          </motion.div>
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-bg"></div>
              <div className="about-image-card">
                <div className="about-image-icon">
                  <Scale size={48} />
                </div>
                <h4>Your Trusted Partner in Justice</h4>
                <p>Committed to protecting your rights with integrity, expertise, and compassion</p>
              </div>
              <div className="about-accent about-accent-1"></div>
              <div className="about-accent about-accent-2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
