import { motion } from 'framer-motion'
import {
  ArrowRight,
  Scale,
  FileText,
  Users,
  Home as HomeIcon,
  Briefcase,
  Shield
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
      icon: FileText,
      title: 'Immigration Services',
      description: 'Visa applications, work permits, citizenship, and immigration document preparation.',
    },
    {
      icon: Users,
      title: 'Family Law',
      description: 'Divorce paperwork, child custody documents, adoption filings, and family court preparation.',
    },
    {
      icon: HomeIcon,
      title: 'Real Estate',
      description: 'Property transfers, lease agreements, title searches, and closing documentation.',
    },
    {
      icon: Briefcase,
      title: 'Corporate Law',
      description: 'Business formation, contracts, corporate filings, and compliance documentation.',
    },
    {
      icon: Shield,
      title: 'Notary Services',
      description: 'Document notarization, affidavits, sworn statements, and legal certifications.',
    },
    {
      icon: Scale,
      title: 'Court Filing',
      description: 'Document filing, court form preparation, and procedural guidance assistance.',
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
          <span className="section-subtitle">What We Offer</span>
          <h2 className="section-title">Our Legal Services</h2>
          <p className="section-description">
            Comprehensive paralegal services tailored to meet your specific legal needs
            with professionalism and care.
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
                Learn More <ArrowRight size={16} />
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
            Get Started Today
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
