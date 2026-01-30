import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, Scale } from 'lucide-react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ['home', 'services', 'about', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-contact">
            <a href="tel:+1234567890">
              <Phone size={14} />
              <span>(123) 456-7890</span>
            </a>
            <a href="mailto:info@visholegal.com">
              <Mail size={14} />
              <span>info@visholegal.com</span>
            </a>
          </div>
          <p className="top-bar-tagline">Professional Legal Support You Can Trust</p>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-content">
          <button onClick={() => scrollToSection('home')} className="logo">
            <motion.div
              className="logo-icon"
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Scale size={28} />
            </motion.div>
            <div className="logo-text">
              <span className="logo-name">Visho Legal</span>
              <span className="logo-tagline">Paralegal Services</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    className="nav-underline"
                    layoutId="underline"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
            <button onClick={() => scrollToSection('contact')} className="btn btn-primary nav-cta">
              Free Consultation
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="nav-mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="nav-mobile-content">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`nav-mobile-link ${activeSection === link.id ? 'active' : ''}`}
                    >
                      {link.label}
                    </button>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <button onClick={() => scrollToSection('contact')} className="btn btn-primary nav-mobile-cta">
                    Free Consultation
                  </button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Header
