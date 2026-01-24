import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Scale,
  Target,
  Heart,
  Users,
  Award,
  Shield,
  Clock,
  CheckCircle,
  Quote
} from 'lucide-react'
import './About.css'

const About = () => {
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

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our interactions and document preparations.',
    },
    {
      icon: Target,
      title: 'Accuracy',
      description: 'Every document is meticulously reviewed to ensure precision and legal compliance.',
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We understand the stress of legal matters and provide supportive, empathetic service.',
    },
    {
      icon: Clock,
      title: 'Efficiency',
      description: 'We respect your time and deliver quality work within agreed timelines.',
    },
  ]

  const team = [
    {
      name: 'Victoria Shaw',
      role: 'Founder & Lead Paralegal',
      bio: 'With over 15 years of experience in the legal industry, Victoria founded Visho Legal to make quality legal support accessible to everyone.',
      specialties: ['Immigration', 'Family Law', 'Corporate'],
    },
    {
      name: 'Michael Roberts',
      role: 'Senior Paralegal',
      bio: 'Michael brings 10 years of expertise in real estate and corporate law, ensuring smooth transactions for our clients.',
      specialties: ['Real Estate', 'Corporate Law', 'Contracts'],
    },
    {
      name: 'Sarah Chen',
      role: 'Immigration Specialist',
      bio: 'Sarah specializes in immigration services, helping families and professionals navigate the complex immigration system.',
      specialties: ['Immigration', 'Work Permits', 'Citizenship'],
    },
    {
      name: 'David Martinez',
      role: 'Notary & Court Filing Specialist',
      bio: 'David handles notary services and court filings with meticulous attention to procedural requirements.',
      specialties: ['Notary Services', 'Court Filings', 'Documentation'],
    },
  ]

  const milestones = [
    { year: '2009', title: 'Founded', description: 'Visho Legal was established with a mission to provide accessible legal support.' },
    { year: '2012', title: 'Expansion', description: 'Expanded services to include immigration and corporate law.' },
    { year: '2016', title: 'Growth', description: 'Reached milestone of 2,500+ cases successfully handled.' },
    { year: '2020', title: 'Digital', description: 'Launched virtual consultation services for remote clients.' },
    { year: '2024', title: 'Today', description: 'Continuing to serve clients with dedication and excellence.' },
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">About Us</span>
            <h1>Your Trusted Partner in Legal Support</h1>
            <p>
              For over 15 years, Visho Legal has been providing professional paralegal
              services to individuals and businesses, making legal support accessible and affordable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story section">
        <div className="container">
          <div className="story-grid">
            <motion.div
              className="story-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-subtitle">Our Story</span>
              <h2>Building Trust Through Excellence</h2>
              <p>
                Visho Legal was founded in 2009 with a simple but powerful mission: to make
                quality legal support accessible to everyone. Our founder, Victoria Shaw,
                recognized that many individuals and small businesses struggled to navigate
                complex legal processes due to high costs and lack of guidance.
              </p>
              <p>
                What started as a small practice has grown into a full-service paralegal
                firm serving thousands of clients across various legal areas. Our commitment
                to accuracy, integrity, and client satisfaction has made us a trusted name
                in the community.
              </p>
              <p>
                Today, our team of experienced paralegals continues to uphold the same
                values that founded this company - providing professional, compassionate,
                and affordable legal support to those who need it most.
              </p>
            </motion.div>
            <motion.div
              className="story-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="story-card">
                <div className="story-icon">
                  <Scale size={48} />
                </div>
                <blockquote>
                  <Quote size={24} className="quote-icon" />
                  <p>
                    "We believe that everyone deserves access to quality legal support,
                    regardless of their background or budget. That belief drives everything we do."
                  </p>
                  <footer>
                    <strong>Victoria Shaw</strong>
                    <span>Founder, Visho Legal</span>
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values section bg-alt">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">Our Values</span>
            <h2 className="section-title">What Guides Us</h2>
            <p className="section-description">
              Our core values shape how we serve our clients and conduct our business.
            </p>
          </motion.div>
          <motion.div
            className="values-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                variants={fadeInUp}
              >
                <div className="value-icon">
                  <value.icon size={32} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">Our Journey</span>
            <h2 className="section-title">Milestones</h2>
          </motion.div>
          <motion.div
            className="timeline-wrapper"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                variants={fadeInUp}
              >
                <div className="timeline-marker">
                  <span className="timeline-year">{milestone.year}</span>
                </div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team section bg-alt">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">Our Team</span>
            <h2 className="section-title">Meet Our Experts</h2>
            <p className="section-description">
              Our team of licensed paralegals brings decades of combined experience to serve you.
            </p>
          </motion.div>
          <motion.div
            className="team-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="team-avatar">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p>{member.bio}</p>
                <div className="team-specialties">
                  {member.specialties.map((specialty, i) => (
                    <span key={i} className="specialty-tag">{specialty}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us section">
        <div className="container">
          <div className="why-us-grid">
            <motion.div
              className="why-us-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-subtitle">Why Choose Us</span>
              <h2>The Visho Legal Difference</h2>
              <p>
                We stand apart from other paralegal services through our unwavering commitment
                to quality, transparency, and client satisfaction.
              </p>
              <ul className="why-us-list">
                <li>
                  <CheckCircle size={20} />
                  <div>
                    <strong>Licensed & Insured</strong>
                    <span>All our paralegals are licensed, bonded, and insured for your protection.</span>
                  </div>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <div>
                    <strong>Transparent Pricing</strong>
                    <span>No hidden fees or surprises. You know exactly what you'll pay upfront.</span>
                  </div>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <div>
                    <strong>Quick Turnaround</strong>
                    <span>Most documents prepared within 3-5 business days with rush options available.</span>
                  </div>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <div>
                    <strong>Personalized Service</strong>
                    <span>Every client receives individual attention tailored to their specific needs.</span>
                  </div>
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary">
                Schedule a Consultation
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              className="why-us-stats"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="stat-card">
                <Award size={32} />
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-card">
                <Users size={32} />
                <span className="stat-number">5000+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-card">
                <Shield size={32} />
                <span className="stat-number">98%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat-card">
                <Scale size={32} />
                <span className="stat-number">10+</span>
                <span className="stat-label">Service Areas</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
