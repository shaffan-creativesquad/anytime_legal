import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Scale,
  FileText,
  Users,
  Home as HomeIcon,
  Briefcase,
  Shield,
  CheckCircle,
  Star,
  Clock,
  Award,
  ThumbsUp,
  ChevronDown
} from 'lucide-react'
import './Home.css'

const Home = () => {
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

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '5000+', label: 'Cases Handled' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content: 'Visho Legal made my business incorporation process incredibly smooth. Their attention to detail and professional guidance saved me countless hours and stress.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Immigration Client',
      content: 'The team helped me with my work visa application. They were thorough, communicative, and made sure every document was perfect. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Real Estate Investor',
      content: 'Outstanding service for all my property transactions. They handle everything professionally and always keep me informed throughout the process.',
      rating: 5,
    },
  ]

  const features = [
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Quick processing times without compromising quality or accuracy.',
    },
    {
      icon: Award,
      title: 'Certified Professionals',
      description: 'Licensed paralegals with extensive legal training and experience.',
    },
    {
      icon: ThumbsUp,
      title: 'Affordable Rates',
      description: 'Competitive pricing that makes legal services accessible to everyone.',
    },
  ]

  const faqs = [
    {
      question: 'What is the difference between a paralegal and a lawyer?',
      answer: 'Paralegals provide legal support services under the supervision of attorneys or independently for specific tasks. We cannot provide legal advice but can prepare documents, conduct research, and assist with procedural matters.',
    },
    {
      question: 'How much do your services cost?',
      answer: 'Our fees vary depending on the service required. We offer transparent pricing and free initial consultations to discuss your needs and provide accurate quotes.',
    },
    {
      question: 'How long does document preparation take?',
      answer: 'Standard document preparation typically takes 3-5 business days. Rush services are available for urgent matters. We will provide estimated timelines during your consultation.',
    },
    {
      question: 'Do you offer virtual consultations?',
      answer: 'Yes! We offer both in-person and virtual consultations via video call. This allows us to serve clients regardless of their location.',
    },
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="container hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">Trusted Paralegal Services</span>
            <h1 className="hero-title">
              Professional Legal Support
              <span className="hero-title-accent"> You Can Rely On</span>
            </h1>
            <p className="hero-description">
              We provide expert paralegal services to help individuals and businesses
              navigate complex legal processes with confidence. From document preparation
              to court filings, we are here to support your legal journey.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-gold">
                Free Consultation
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-secondary hero-btn-secondary">
                Our Services
              </Link>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-item">
                <CheckCircle size={18} />
                <span>Licensed & Insured</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle size={18} />
                <span>15+ Years Experience</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle size={18} />
                <span>5000+ Cases Handled</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-card hero-card-main">
              <Scale size={48} />
              <h3>Justice & Integrity</h3>
              <p>Serving clients with dedication and professionalism since 2009</p>
            </div>
            <div className="hero-card hero-card-floating hero-card-1">
              <FileText size={24} />
              <span>Document Prep</span>
            </div>
            <div className="hero-card hero-card-floating hero-card-2">
              <Users size={24} />
              <span>Family Law</span>
            </div>
            <div className="hero-card hero-card-floating hero-card-3">
              <Shield size={24} />
              <span>Notary Services</span>
            </div>
          </motion.div>
        </div>
        <div className="hero-scroll">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <motion.div
            className="features-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={fadeInUp}
              >
                <div className="feature-icon">
                  <feature.icon size={28} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-preview section bg-alt">
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
                <Link to="/services" className="service-link">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="services-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/services" className="btn btn-primary">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <motion.div
            className="stats-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                variants={fadeInUp}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview section">
        <div className="container">
          <div className="about-preview-grid">
            <motion.div
              className="about-preview-content"
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
              <ul className="about-preview-list">
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
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              className="about-preview-visual"
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

      {/* Testimonials Section */}
      <section className="testimonials section bg-alt">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">Client Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-description">
              Hear from individuals and businesses who have trusted us with their legal needs.
            </p>
          </motion.div>
          <motion.div
            className="testimonials-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card card"
                variants={fadeInUp}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-content">{testimonial.content}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Find answers to common questions about our paralegal services.
            </p>
          </motion.div>
          <motion.div
            className="faq-list"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                className="faq-item"
                variants={fadeInUp}
              >
                <summary className="faq-question">
                  {faq.question}
                  <ChevronDown size={20} />
                </summary>
                <p className="faq-answer">{faq.answer}</p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
