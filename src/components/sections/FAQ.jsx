import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import './FAQ.css'

const FAQ = () => {
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
    <section id="faq" className="faq section">
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
  )
}

export default FAQ
