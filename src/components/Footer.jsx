import { Link } from 'react-router-dom'
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

  const services = [
    'Immigration Services',
    'Family Law',
    'Real Estate',
    'Corporate Law',
    'Notary Services',
    'Document Preparation',
  ]

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Our Services' },
    { path: '/contact', label: 'Contact' },
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
            <Link to="/contact" className="btn btn-gold">
              Book Free Consultation
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section footer-about">
              <Link to="/" className="footer-logo">
                <div className="footer-logo-icon">
                  <Scale size={24} />
                </div>
                <div className="footer-logo-text">
                  <span className="footer-logo-name">Visho Legal</span>
                  <span className="footer-logo-tagline">Paralegal Services</span>
                </div>
              </Link>
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
                  <li key={link.path}>
                    <Link to={link.path} className="footer-link">
                      <ArrowRight size={14} />
                      {link.label}
                    </Link>
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
                    <Link to="/services" className="footer-link">
                      <ArrowRight size={14} />
                      {service}
                    </Link>
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
