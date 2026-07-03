"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { navVariants } from '../utils/motion'
import styles from '../styles/index'


const Navbar = () => {
  return (
    <>
      <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
      >
        Navbar
      </motion.nav>
    </>
  )
}

export default Navbar
