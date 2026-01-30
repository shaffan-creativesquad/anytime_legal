import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Calendar
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

  const services = [
    'Immigration Services',
    'Family Law',
    'Real Estate',
    'Corporate Law',
    'Notary Services',
    'Court Filing',
    'Document Preparation',
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus('success')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    })

    setTimeout(() => setSubmitStatus(null), 5000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '(123) 456-7890',
      link: 'tel:+1234567890',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@visholegal.com',
      link: 'mailto:info@visholegal.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Legal Avenue, Suite 200\nCity, State 12345',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 2:00 PM',
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
          <p className="section-description">
            Ready to discuss your legal needs? Contact us today for a free consultation.
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
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && (
                    <span className="form-error">
                      <AlertCircle size={14} />
                      {errors.phone}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="service" className="form-label">
                    Service Needed <span className="required">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`form-select ${errors.service ? 'error' : ''}`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
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
                      {info.link ? (
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
                with one of our experienced paralegals.
              </p>
              <a href="tel:+1234567890" className="btn btn-primary">
                <Phone size={18} />
                Call (123) 456-7890
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
