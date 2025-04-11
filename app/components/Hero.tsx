'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Ahyana Rizky</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              A passionate developer building modern web applications with cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="btn-primary">
                View Projects
              </button>
              <button className="btn-secondary">
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-64 h-64 mx-auto md:mx-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-xl" />
            <Image
              src="/images/profile-placeholder.jpg"
              alt="Profile"
              fill
              className="rounded-full object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 
