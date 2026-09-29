import React from 'react'
import "./BlogsHero.css"
import { motion } from 'framer-motion'

function BlogsHero() {
  return (
    <div className="BlogsHero-container">   
        <div className="container">
        {/* <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        > */}
               <h1 className="hero-title">
            Our
            <span className="hero-title-accent"> Blogs</span>
          </h1>

            <p className="hero-description">
           
          </p>
          
        {/* </motion.div> */}
        </div>
    </div>
  )
}

export default BlogsHero