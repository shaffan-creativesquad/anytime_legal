import { motion } from 'framer-motion'
import {
  ArrowRight,
  Home as HomeIcon,
  Gavel,
  Car,
  Stamp
} from 'lucide-react'
import './Services.css'

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      icon: HomeIcon,
      title: 'Landlord & Tenant Disputes',
      description: 'Expert representation for evictions, rent disputes, lease violations, maintenance issues, and Landlord and Tenant Board hearings across Ontario.',
    },
    {
      icon: Gavel,
      title: 'Small Claims Court',
      description: 'Professional representation for civil matters up to $50,000. We handle debt collection, contract disputes, property damage claims, and more.',
    },
    {
      icon: Car,
      title: 'Traffic Ticket Defence',
      description: 'Fight your traffic tickets with experienced defence. Speeding, careless driving, HTA violations—we work to protect your driving record and reduce penalties.',
    },
    {
      icon: Stamp,
      title: 'Public Notary Services',
      description: 'Certified notary services for document authentication, affidavits, statutory declarations, certified copies, and legal certifications.',
    },
  ]

  return (
    <section id="services" className="services-section section bg-alt">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">Our Practice Areas</span>
          <h2 className="section-title">Legal Services We Offer</h2>
          <p className="section-description">
            Our expertise spans various areas of law, providing comprehensive paralegal services
            to individuals and businesses across Ontario.
          </p>
        </motion.div>
        <motion.div
          className="services-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card card"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="service-icon">
                <service.icon size={32} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button onClick={scrollToContact} className="service-link">
                Get Help Now <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button onClick={scrollToContact} className="btn btn-primary">
            Schedule a Consultation
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
