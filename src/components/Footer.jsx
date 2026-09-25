import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  ArrowRight
} from 'lucide-react'
import './Footer.css'

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
)

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    'Landlord & Tenant Disputes',
    'Small Claims Court',
    'Traffic Ticket Defence',
    'Public Notary Services',
  ]

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <footer className="footer">
      {/* CTA Section */}
      <div className="footer-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Ready to Protect Your Rights?</h3>
            <p>Schedule your free consultation today and let us help you navigate your legal journey with confidence.</p>
            <button onClick={() => scrollToSection('contact')} className="btn btn-gold">
              Book Free Consultation
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section footer-about">
              <button onClick={() => scrollToSection('home')} className="footer-logo">
                <img
                  src="/images/logo2.0.jpeg"
                  alt="Anytime Legal Services"
                  className="footer-logo-image"
                />
              </button>
              <p className="footer-description">
                Anytime Legal Services Professional Corporation. Your trusted partner in justice,
                providing accessible and reliable paralegal services across Ontario.
              </p>
              <div className="footer-social">
                <a
                  href="https://www.instagram.com/anytime.legal/"
                  className="social-link"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61573378811262"
                  className="social-link"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.tiktok.com/@anytime.legal"
                  className="social-link"
                  aria-label="TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button onClick={() => scrollToSection(link.id)} className="footer-link">
                      {link.label}
                      <ArrowRight size={14} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="footer-title">Our Services</h4>
              <ul className="footer-links">
                {services.map((service) => (
                  <li key={service}>
                    <button onClick={() => scrollToSection('services')} className="footer-link">
                      {service}
                      <ArrowRight size={14} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="footer-title">Contact Us</h4>
              <ul className="footer-contact">
                <li>
                  <MapPin size={18} />
                  <span>Serving Across Ontario</span>
                </li>
                <li>
                  <Phone size={18} />
                  <span>
                    <a href="tel:+19054510300">(905) 451-0300</a>
                    {' / '}
                    <a href="tel:+12268889800">(226) 888-9800</a>
                  </span>
                </li>
                <li>
                  <Mail size={18} />
                  <a href="mailto:visho@anytimelegalservices.ca">visho@anytimelegalservices.ca</a>
                </li>
                <li>
                  <Clock size={18} />
                  <span>Flexible Hours Available<br />By Appointment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
