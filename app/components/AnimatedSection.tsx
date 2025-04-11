'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'

const fadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

interface AnimatedSectionProps {
  children: React.ReactNode
  id?: string
  className?: string
}

export default function AnimatedSection({ children, id, className = '' }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="initial"
      animate="animate"
      variants={fadeIn}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  )
} 
