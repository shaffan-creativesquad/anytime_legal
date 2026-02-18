import { motion } from 'framer-motion'
import { Heart, FileSearch, DollarSign, Clock } from 'lucide-react'
import './Features.css'

const Features = () => {
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

  const features = [
    {
      icon: Heart,
      title: 'Personalized Attention',
      description: 'Every client receives individualized care tailored to their unique circumstances with dedicated support at every step.',
    },
    {
      icon: FileSearch,
      title: 'Comprehensive Support',
      description: 'Detailed case evaluations, strategic planning, and proactive communication to keep you informed and empowered.',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Competitive, transparent fees with no hidden costs—just fair pricing that delivers excellent value.',
    },
    {
      icon: Clock,
      title: 'Flexible Convenience',
      description: 'Flexible appointment options to accommodate your schedule when you need legal assistance most.',
    },
  ]

  return (
    <section id="features" className="features section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">Why Choose Us</span>
          <h2 className="section-title">What Sets Us Apart</h2>
          <p className="section-description">
            We combine professional expertise with personalized care—ensuring every client feels
            supported, informed, and confident throughout their legal journey.
          </p>
        </motion.div>
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
  )
}

export default Features
