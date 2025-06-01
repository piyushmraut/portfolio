'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)

  const navItems = useMemo(() => [
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Skills', href: '#skills' },
    { title: 'Experience', href: '#experience' },
    { title: 'Contact', href: '#contact' },
  ], [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.title.toLowerCase())
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })

      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-[rgba(17,17,23,0.85)] backdrop-blur-lg shadow-lg shadow-[#915EFF]/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center w-full space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.title}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 text-base font-medium transition-colors duration-300 rounded-lg
                    ${activeSection === item.title.toLowerCase()
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                    }`}
                  onClick={() => scrollToSection(item.title.toLowerCase())}
                >
                  {item.title}
                  {activeSection === item.title.toLowerCase() && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-full bg-[#915EFF]/10 rounded-lg"
                      layoutId="activeSection"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    />
                  )}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#915EFF] transform origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.div
              className="md:hidden w-full flex justify-end"
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative text-white p-2 rounded-lg hover:bg-[#915EFF20] transition-colors duration-300 z-50"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative w-6 h-6"
                      >
                        <motion.span
                          className="absolute w-6 h-0.5 bg-white rounded-full"
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 45, y: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                        <motion.span
                          className="absolute w-6 h-0.5 bg-white rounded-full"
                          initial={{ rotate: 0 }}
                          animate={{ rotate: -45, y: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col space-y-1.5"
                      >
                        <motion.span
                          className="w-6 h-0.5 bg-white rounded-full"
                          initial={{ width: "50%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.2 }}
                        />
                        <motion.span
                          className="w-6 h-0.5 bg-white rounded-full"
                          initial={{ width: "75%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                        />
                        <motion.span
                          className="w-6 h-0.5 bg-white rounded-full"
                          initial={{ width: "50%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.2, delay: 0.2 }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-64 bg-[rgba(17,17,23,0.95)] backdrop-blur-xl z-50 md:hidden shadow-xl shadow-black/50"
            >
              <div className="flex flex-col h-full">
                {/* Sidebar Header */}
                <div className="flex items-center justify-end p-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-[#915EFF20] transition-colors duration-300"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <motion.div
                  className="flex-1 px-2 py-4 space-y-2"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.1 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                  }}
                >
                  {navItems.map((item) => (
                    <motion.button
                      key={item.title}
                      variants={{
                        open: { 
                          x: 0, 
                          opacity: 1,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 24
                          }
                        },
                        closed: { x: 50, opacity: 0 }
                      }}
                      onClick={() => scrollToSection(item.title.toLowerCase())}
                      className={`w-full px-4 py-3 rounded-lg text-left text-base font-medium
                        ${activeSection === item.title.toLowerCase()
                          ? 'text-white bg-[#915EFF20] border border-[#915EFF40]'
                          : 'text-white/70 hover:text-white hover:bg-[#915EFF10]'
                        } transition-all duration-300`}
                    >
                      {item.title}
                    </motion.button>
                  ))}
                </motion.div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-4 text-center text-white/50 text-sm border-t border-white/10"
                >
                  <p>© 2024 Piyush Raut</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar 