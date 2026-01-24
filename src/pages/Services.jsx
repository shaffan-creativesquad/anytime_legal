import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  FileText,
  Users,
  Home as HomeIcon,
  Briefcase,
  Shield,
  Scale,
  Plane,
  Building2,
  FileCheck,
  Gavel,
  CheckCircle
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

  const services = [
    {
      icon: Plane,
      title: 'Immigration Services',
      description: 'Navigate the complex immigration process with expert assistance. We help with visa applications, work permits, permanent residency, and citizenship documentation.',
      features: [
        'Work Permit Applications',
        'Study Permit Processing',
        'Family Sponsorship Documents',
        'Citizenship Applications',
        'PR Card Renewals',
        'Visa Extensions'
      ],
      color: '#2563eb'
    },
    {
      icon: Users,
      title: 'Family Law',
      description: 'Compassionate support for family-related legal matters. We prepare documents for divorce, custody, adoption, and other family court proceedings.',
      features: [
        'Divorce Petition Preparation',
        'Child Custody Documents',
        'Adoption Paperwork',
        'Separation Agreements',
        'Support Modification Forms',
        'Name Change Applications'
      ],
      color: '#7c3aed'
    },
    {
      icon: HomeIcon,
      title: 'Real Estate',
      description: 'Streamline your property transactions with accurate documentation. From purchase agreements to title transfers, we handle all your real estate paperwork.',
      features: [
        'Purchase & Sale Agreements',
        'Lease Agreement Drafting',
        'Title Search Assistance',
        'Property Transfer Documents',
        'Mortgage Documentation',
        'Closing Document Preparation'
      ],
      color: '#059669'
    },
    {
      icon: Briefcase,
      title: 'Corporate Law',
      description: 'Support your business with professional corporate documentation. We assist with formation, contracts, and ongoing compliance requirements.',
      features: [
        'Business Incorporation',
        'Partnership Agreements',
        'Operating Agreements',
        'Contract Drafting',
        'Corporate Filings',
        'Annual Report Preparation'
      ],
      color: '#dc2626'
    },
    {
      icon: Shield,
      title: 'Notary Services',
      description: 'Certified notary services for all your documentation needs. Fast, reliable, and legally compliant notarization for various documents.',
      features: [
        'Document Notarization',
        'Affidavit Preparation',
        'Sworn Statements',
        'Power of Attorney',
        'Statutory Declarations',
        'Certified True Copies'
      ],
      color: '#0891b2'
    },
    {
      icon: Gavel,
      title: 'Court Filing Services',
      description: 'Navigate court procedures with confidence. We prepare and file court documents, ensuring compliance with all procedural requirements.',
      features: [
        'Court Form Preparation',
        'Document Filing',
        'Motion Preparation',
        'Response Documents',
        'Appeal Paperwork',
        'Service of Documents'
      ],
      color: '#ca8a04'
    },
    {
      icon: FileCheck,
      title: 'Document Preparation',
      description: 'Professional document drafting and preparation services. We create accurate, legally compliant documents tailored to your specific needs.',
      features: [
        'Legal Document Drafting',
        'Form Completion',
        'Document Review',
        'Template Customization',
        'Proofreading Services',
        'Format Compliance'
      ],
      color: '#9333ea'
    },
    {
      icon: Building2,
      title: 'Small Claims Assistance',
      description: 'Guidance and document preparation for small claims court matters. We help you present your case effectively.',
      features: [
        'Claim Filing Documents',
        'Defense Preparation',
        'Evidence Organization',
        'Settlement Agreements',
        'Judgment Enforcement',
        'Appeal Documentation'
      ],
      color: '#e11d48'
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Schedule a free consultation to discuss your legal needs and understand how we can help you.'
    },
    {
      step: '02',
      title: 'Document Review',
      description: 'We review your existing documents and gather necessary information to prepare your case.'
    },
    {
      step: '03',
      title: 'Preparation',
      description: 'Our team prepares accurate, professionally drafted documents tailored to your requirements.'
    },
    {
      step: '04',
      title: 'Review & Finalize',
      description: 'You review the documents, we make any necessary revisions, and finalize everything for submission.'
    },
  ]

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-bg"></div>
        <div className="container">
          <motion.div
            className="services-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">Our Services</span>
            <h1>Comprehensive Paralegal Services</h1>
            <p>
              From immigration to corporate law, we provide professional paralegal
              services to help you navigate complex legal processes with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-main section">
        <div className="container">
          <motion.div
            className="services-page-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-page-card"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div
                  className="service-page-icon"
                  style={{ background: `${service.color}15`, color: service.color }}
                >
                  <service.icon size={32} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="service-page-link">
                  Get Started <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process section bg-alt">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">Our Process</span>
            <h2 className="section-title">How We Work</h2>
            <p className="section-description">
              A simple, streamlined process to get you the legal support you need.
            </p>
          </motion.div>
          <motion.div
            className="process-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="process-card"
                variants={fadeInUp}
              >
                <span className="process-step">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="pricing-note section">
        <div className="container">
          <motion.div
            className="pricing-note-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="pricing-note-text">
              <h2>Transparent & Affordable Pricing</h2>
              <p>
                We believe in transparent pricing with no hidden fees. Our rates are
                competitive and designed to make quality legal support accessible to everyone.
                Contact us for a free consultation and personalized quote.
              </p>
              <ul className="pricing-benefits">
                <li>
                  <CheckCircle size={20} />
                  <span>Free Initial Consultation</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Upfront Pricing - No Hidden Fees</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Flexible Payment Options</span>
                </li>
              </ul>
            </div>
            <div className="pricing-note-cta">
              <Link to="/contact" className="btn btn-gold">
                Get a Free Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
