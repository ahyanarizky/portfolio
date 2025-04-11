'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpIcon } from '@heroicons/react/24/outline'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navigation() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="fixed bottom-8 right-8 z-50">
      <div className="flex flex-col items-center gap-4">
        <motion.button
          onClick={scrollToTop}
          className="p-3 bg-surface rounded-full hover-glow text-primary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUpIcon className="w-6 h-6" />
        </motion.button>
        <div className="flex flex-col gap-2">
          {sections.map((section) => (
            <motion.a
              key={section.id}
              href={`#${section.id}`}
              className="p-3 bg-surface rounded-full hover-glow text-sm nav-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {section.label}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  )
} 
