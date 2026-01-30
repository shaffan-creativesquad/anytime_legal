import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import './Testimonials.css'

const Testimonials = () => {
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

  return (
    <section id="testimonials" className="testimonials section bg-alt">
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
  )
}

export default Testimonials
