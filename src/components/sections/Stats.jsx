import { motion } from 'framer-motion'
import './Stats.css'

const Stats = () => {
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

  const stats = [
    { number: '1000+', label: 'Cases Handled' },
    { number: '98%', label: 'Success Rate' },
    { number: '4', label: 'Practice Areas' },
    { number: 'Ontario', label: 'Province-Wide' },
  ]

  return (
    <section className="stats">
      <div className="container">
        <motion.div
          className="stats-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              variants={fadeInUp}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
