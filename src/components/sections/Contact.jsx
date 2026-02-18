import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Calendar,
  ChevronDown
} from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  const services = [
    'Landlord & Tenant Disputes',
    'Small Claims Court',
    'Traffic Ticket Defence',
    'Public Notary Services',
    'Other',
  ]

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleServiceSelect = (service) => {
    setFormData(prev => ({ ...prev, service }))
    setIsDropdownOpen(false)
    if (errors.service) {
      setErrors(prev => ({ ...prev, service: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xlgdodgb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    }

    setIsSubmitting(false)
    setTimeout(() => setSubmitStatus(null), 5000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      render: (
        <p>
          <a href="tel:+19054510300">(905) 451-0300</a>
          {' / '}
          <a href="tel:+12268889800">(226) 888-9800</a>
        </p>
      ),
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'visho@anytimelegalservices.ca',
      link: 'mailto:visho@anytimelegalservices.ca',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Serving Across Ontario',
    },
    {
      icon: Clock,
      title: 'Availability',
      content: 'Flexible Hours Available\nBy Appointment',
    },
  ]

  return (
    <section id="contact" className="contact-section section bg-alt">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">Contact Us</span>
          <h2 className="section-title">Get in Touch</h2>
          <div className="contact-badge">Free 30-Minute Consultation</div>
          <p className="section-description">
            Ready to protect your rights? Contact Anytime Legal Services today for a free consultation.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-form-header">
              <MessageSquare size={28} />
              <div>
                <h3>Send Us a Message</h3>
                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
            </div>

            {submitStatus === 'success' && (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle size={24} />
                <div>
                  <strong>Message Sent Successfully!</strong>
                  <p>Thank you for contacting us. We'll be in touch soon.</p>
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className="form-error-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle size={24} />
                <div>
                  <strong>Something went wrong</strong>
                  <p>Please try again or contact us directly by phone.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <span className="form-error">
                      <AlertCircle size={14} />
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <span className="form-error">
                      <AlertCircle size={14} />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="(905) 451-0300"
                  />
                  {errors.phone && (
                    <span className="form-error">
                      <AlertCircle size={14} />
                      {errors.phone}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Service Needed <span className="required">*</span>
                  </label>
                  <div className="custom-dropdown" ref={dropdownRef}>
                    <button
                      type="button"
                      className={`dropdown-trigger ${errors.service ? 'error' : ''} ${formData.service ? 'has-value' : ''}`}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      aria-expanded={isDropdownOpen}
                    >
                      <span>{formData.service || 'Select a service'}</span>
                      <ChevronDown size={18} className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.ul
                          className="dropdown-menu"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {services.map((service, index) => (
                            <li key={index}>
                              <button
                                type="button"
                                className={`dropdown-item ${formData.service === service ? 'selected' : ''}`}
                                onClick={() => handleServiceSelect(service)}
                              >
                                {service}
                              </button>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                  {errors.service && (
                    <span className="form-error">
                      <AlertCircle size={14} />
                      {errors.service}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Please describe your legal needs and how we can help you..."
                  rows={5}
                />
                {errors.message && (
                  <span className="form-error">
                    <AlertCircle size={14} />
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-gold submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="contact-info-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-info-card">
              <h3>Contact Information</h3>
              <p>Reach out to us through any of the following channels.</p>

              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-info-icon">
                      <info.icon size={24} />
                    </div>
                    <div className="contact-info-content">
                      <h4>{info.title}</h4>
                      {info.render ? info.render : info.link ? (
                        <a href={info.link}>{info.content}</a>
                      ) : (
                        <p>{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="consultation-card">
              <Calendar size={32} />
              <h3>Book a Free Consultation</h3>
              <p>
                Schedule a no-obligation consultation to discuss your legal needs
                with our licensed paralegal team serving all of Ontario.
              </p>
              <a href="tel:+19054510300" className="btn btn-primary">
                <Phone size={18} />
                Call (905) 451-0300
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
