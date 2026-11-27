import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './ServiceCTA.css'

const ServiceCTA = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="service-cta section">
      <div className="container">
        <motion.div
          className="service-cta-inner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Protect Your Rights?</h2>
          <p>Schedule your free consultation today and let us help you navigate your legal journey with confidence.</p>
          <button onClick={scrollToContact} className="btn btn-gold">
            Book Free Consultation
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceCTA
