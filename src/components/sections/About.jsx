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
            <span className="section-subtitle">About Visho Legal</span>
            <h2>Dedicated to Providing Accessible Legal Support</h2>
            <p>
              With over 15 years of experience in the legal industry, Visho Legal
              has been at the forefront of providing professional paralegal services
              to individuals and businesses alike.
            </p>
            <p>
              Our team of licensed paralegals is committed to delivering accurate,
              timely, and affordable legal document preparation and support services.
              We believe everyone deserves access to quality legal assistance.
            </p>
            <ul className="about-list">
              <li>
                <CheckCircle size={20} />
                <span>Licensed and Certified Paralegals</span>
              </li>
              <li>
                <CheckCircle size={20} />
                <span>Transparent and Affordable Pricing</span>
              </li>
              <li>
                <CheckCircle size={20} />
                <span>Personalized Client Service</span>
              </li>
              <li>
                <CheckCircle size={20} />
                <span>Quick Turnaround Times</span>
              </li>
            </ul>
            <button onClick={scrollToContact} className="btn btn-primary">
              Learn More About Us
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
                <h4>Expert Legal Support</h4>
                <p>Professional assistance for all your legal documentation needs</p>
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
