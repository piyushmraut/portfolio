'use client'

import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="relative z-0">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <div className="relative z-0">
        <Contact />
      </div>
    </main>
  )
}
