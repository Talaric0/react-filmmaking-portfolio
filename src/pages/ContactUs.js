import React from 'react'
//animations
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'

export default function ContactUs() {
  return (
    <motion.div
     variants={pageAnimation} 
     initial="hidden" 
     animate="show"
     exit="exit"
    >
      <h1>Contact Us</h1>
    </motion.div>
  )
}
