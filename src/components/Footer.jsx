import { motion } from 'framer-motion'
import {
  Scale,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight
} from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    'Immigration Services',
    'Family Law',
    'Real Estate',
    'Corporate Law',
    'Notary Services',
    'Document Preparation',
  ]

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'contact', label: 'Contact' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
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
            <h3>Ready to Get Started?</h3>
            <p>Schedule your free consultation today and let us help you navigate your legal journey.</p>
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
                <div className="footer-logo-icon">
                  <Scale size={24} />
                </div>
                <div className="footer-logo-text">
                  <span className="footer-logo-name">Visho Legal</span>
                  <span className="footer-logo-tagline">Paralegal Services</span>
                </div>
              </button>
              <p className="footer-description">
                Professional paralegal services dedicated to providing accessible,
                reliable, and affordable legal support for individuals and businesses.
              </p>
              <div className="footer-social">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="social-link"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button onClick={() => scrollToSection(link.id)} className="footer-link">
                      <ArrowRight size={14} />
                      {link.label}
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
                      <ArrowRight size={14} />
                      {service}
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
                  <span>123 Legal Avenue, Suite 200<br />City, State 12345</span>
                </li>
                <li>
                  <Phone size={18} />
                  <a href="tel:+1234567890">(123) 456-7890</a>
                </li>
                <li>
                  <Mail size={18} />
                  <a href="mailto:info@visholegal.com">info@visholegal.com</a>
                </li>
                <li>
                  <Clock size={18} />
                  <span>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 2:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; {currentYear} Visho Legal. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
