'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin, FaInstagram, FaHackerrank, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Wardha, Maharashtra, India',
      color: '#FF5252'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9637374630',
      color: '#4CAF50'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'piyushraut9981@gmail.com',
      color: '#2196F3'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/piyushmraut',
      color: '#ffffff',
      hoverColor: '#2EA043'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/piyush-raut',
      color: '#0A66C2',
      hoverColor: '#0077B5'
    },
    {
      name: 'LeetCode',
      icon: SiLeetcode,
      url: 'https://leetcode.com/u/pmraut1515/',
      color: '#FFA116',
      hoverColor: '#FF9900'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/pmr431/',
      color: '#E4405F',
      hoverColor: '#D92D7D'
    },
    {
      name: 'HackerRank',
      icon: FaHackerrank,
      url: 'https://www.hackerrank.com/profile/pmraut1515',
      color: '#00EA64',
      hoverColor: '#01B548'
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: form.name,
          to_name: 'Piyush',
          from_email: form.email,
          to_email: 'piyushraut9981@gmail.com',
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )
      setForm({
        name: '',
        email: '',
        message: '',
      })
      alert('Thank you for your message. I will get back to you soon!')
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative w-full min-h-screen pt-16 sm:pt-20 pb-8 sm:pb-10" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-5 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("down", "spring", 0.1, 0.75)}
          className="w-full"
        >
          <motion.h2 
            className="relative font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] via-[#FF8C00] to-[#FF0080] animate-gradient-x font-black">
                Contact
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF0080] via-[#FF8C00] to-[#FF0080] rounded-full"
                initial={{ width: "0%", opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </motion.h2>

          <div className="mt-8 flex flex-col lg:flex-row gap-6 lg:gap-10">
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="flex-1 bg-[rgba(17,17,23,0.9)] backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-2xl border border-[#2a2a3a] shadow-[0_0_20px_rgba(145,94,255,0.1)]"
            >
              <p className="text-white font-medium text-xl sm:text-2xl lg:text-[30px]">
                Get in touch
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8"
              >
                <motion.label 
                  className="flex flex-col relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white font-medium mb-4 flex items-center gap-2">
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                      👤
                    </motion.span>
                    Your Name
                  </span>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What's your name?"
                      className="w-full bg-[#1d2d4d] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium transition-all duration-300 border border-transparent focus:border-[#915EFF] focus:bg-[#243a61] group-hover:bg-[#243a61]"
                    />
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#915EFF] to-transparent rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ width: form.name ? '100%' : '0%' }} />
                  </div>
                </motion.label>

                <motion.label 
                  className="flex flex-col relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className="text-white font-medium mb-4 flex items-center gap-2">
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                    >
                      ✉️
                    </motion.span>
                    Your Email
                  </span>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your email address?"
                      className="w-full bg-[#1d2d4d] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium transition-all duration-300 border border-transparent focus:border-[#915EFF] focus:bg-[#243a61] group-hover:bg-[#243a61]"
                    />
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#915EFF] to-transparent rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ width: form.email ? '100%' : '0%' }} />
                  </div>
                </motion.label>

                <motion.label 
                  className="flex flex-col relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-white font-medium mb-4 flex items-center gap-2">
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                    >
                      💭
                    </motion.span>
                    Your Message
                  </span>
                  <div className="relative">
                    <textarea
                      rows={7}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What would you like to say?"
                      className="w-full bg-[#1d2d4d] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium resize-none transition-all duration-300 border border-transparent focus:border-[#915EFF] focus:bg-[#243a61] group-hover:bg-[#243a61]"
                    />
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#915EFF] to-transparent rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ width: form.message ? '100%' : '0%' }} />
                  </div>
                </motion.label>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative group bg-[#1d2d4d] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF] to-[#F06292] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <motion.div
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </span>
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="lg:flex-[0.25] w-full relative group"
            >
              <div className="relative rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl bg-[rgba(17,17,23,0.9)] border border-[#2a2a3a]">
                <h3 className="text-white font-bold text-xl sm:text-2xl lg:text-[24px] glow mb-6 sm:mb-8">Contact Info</h3>
                
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      className="flex items-center gap-3 sm:gap-4 group/item hover:bg-[rgba(145,94,255,0.05)] p-2 sm:p-3 rounded-lg transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: index * 0.2 } 
                      }}
                    >
                      <motion.div
                        className="p-2 sm:p-3 rounded-full bg-[rgba(17,17,23,0.8)] backdrop-blur-sm border border-[#2a2a3a]"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <info.icon 
                          className="w-4 h-4 sm:w-6 sm:h-6"
                          style={{ color: info.color }}
                        />
                      </motion.div>
                      <div>
                        <p className="text-gray-400 text-xs sm:text-sm">{info.label}</p>
                        <p className="text-white text-sm sm:text-base font-medium group-hover/item:text-[#915EFF] transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#2a2a3a]">
                  <h4 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Connect with me</h4>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group/social"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { delay: index * 0.1 } 
                        }}
                      >
                        <div 
                          className="absolute -inset-2 rounded-lg opacity-20 blur-md transition-all duration-300 group-hover/social:opacity-50"
                          style={{ backgroundColor: social.hoverColor || social.color }}
                        ></div>
                        <div 
                          className="relative p-2 rounded-lg bg-[rgba(17,17,23,0.8)] backdrop-blur-sm border border-[#2a2a3a] transition-all duration-300 group-hover/social:border-opacity-50"
                          style={{ 
                            borderColor: social.name === 'GitHub' ? '#2EA043' : social.color
                          }}
                        >
                          <social.icon 
                            className="w-6 h-6 transition-all duration-300"
                            style={{ 
                              color: social.color,
                              filter: `drop-shadow(0 0 8px ${social.name === 'GitHub' ? '#2EA043' : social.color}80)`,
                            }}
                          />
                        </div>
                        <motion.span 
                          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[rgba(17,17,23,0.9)] backdrop-blur-sm text-white px-2 py-1 rounded text-sm opacity-0 group-hover/social:opacity-100 transition-opacity whitespace-nowrap"
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          style={{
                            borderLeft: `2px solid ${social.name === 'GitHub' ? '#2EA043' : social.color}`,
                            borderRight: `2px solid ${social.name === 'GitHub' ? '#2EA043' : social.color}`,
                          }}
                        >
                          {social.name}
                        </motion.span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 