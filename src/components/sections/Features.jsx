import { motion } from 'framer-motion'
import { Clock, Award, ThumbsUp } from 'lucide-react'
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
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Quick processing times without compromising quality or accuracy.',
    },
    {
      icon: Award,
      title: 'Certified Professionals',
      description: 'Licensed paralegals with extensive legal training and experience.',
    },
    {
      icon: ThumbsUp,
      title: 'Affordable Rates',
      description: 'Competitive pricing that makes legal services accessible to everyone.',
    },
  ]

  return (
    <section id="features" className="features section">
      <div className="container">
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
