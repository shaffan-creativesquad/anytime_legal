import { motion } from 'framer-motion'
import { ArrowRight, Scale, CheckCircle } from 'lucide-react'
import './About.css'

const ImgByText = ({sideImg="/images/logoOG.jpeg", subHeading="Lorem Ipsum", heading="Lorem Ipsum", 
    para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    bulletList=["Lorem Ipsum","Lorem Ipsum","Lorem Ipsum"],
    imgRight=true
}) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className={`${imgRight? "about-grid": "about-grid about-grid-reverse" }`}>
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {subHeading && <span className="section-subtitle">{subHeading}</span>}
            {heading && <h2>{heading}</h2>}
            { para &&
            <p>
             {para}
            </p>
            }
            {
                bulletList &&
                <ul className="about-list">
                {
                    bulletList.map((ele)=>{
                        return(
                            <li>
                                <CheckCircle size={20} />
                                <span>{ele}</span>
                            </li>
                        )
                    })

                }
                </ul>
            }
            <button onClick={scrollToContact} className="btn btn-primary">
              Contact Us Today
              <ArrowRight size={18} />
            </button>
          </motion.div>
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-bg"></div>
              <div className="about-image-card">
                <img src={sideImg} style={{width:"100%",borderRadius:"20px"}}/>
              </div>
              <div className="about-accent about-accent-1"></div>
              <div className="about-accent about-accent-2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ImgByText
