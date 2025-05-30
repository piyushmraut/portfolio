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
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/piyush-raut',
      color: '#0077B5'
    },
    {
      name: 'LeetCode',
      icon: SiLeetcode,
      url: 'https://leetcode.com/u/pmraut1515/',
      color: '#FFA116'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/pmr431/',
      color: '#E4405F'
    },
    {
      name: 'HackerRank',
      icon: FaHackerrank,
      url: 'https://www.hackerrank.com/profile/pmraut1515',
      color: '#2EC866'
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
    <section className="relative w-full min-h-screen mx-auto" id="contact">
      <div className="absolute inset-0 max-w-7xl mx-auto flex flex-col items-start gap-5 px-6">
        <motion.div
          variants={fadeIn("down", "spring", 0.1, 0.75)}
          className="w-full"
        >
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] glow">
            Contact
          </h2>

          <div className="mt-8 flex flex-col-reverse gap-10 overflow-hidden">
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="flex-[0.75] bg-[rgba(17,17,23,0.9)] backdrop-blur-xl p-8 rounded-2xl border border-[#2a2a3a] shadow-[0_0_20px_rgba(145,94,255,0.1)]"
            >
              <p className="text-white font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
                Get in touch
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-12 flex flex-col gap-8"
              >
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className="bg-[#1d2d4d] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Your Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    className="bg-[#1d2d4d] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Your Message</span>
                  <textarea
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What would you like to say?"
                    className="bg-[#1d2d4d] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
                  />
                </label>

                <button
                  type="submit"
                  className="bg-[#1d2d4d] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-[#2a3f66] transition-colors"
                >
                  {loading ? 'Sending...' : 'Send'}
                </button>
              </form>
            </motion.div>

            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="flex-[0.25] relative group"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#915EFF] via-[#F06292] to-[#915EFF] rounded-2xl opacity-50 group-hover:opacity-70 blur-md transition duration-500"></div>
              
              <div className="relative rounded-2xl p-8 backdrop-blur-xl bg-gradient-to-br from-[rgba(17,17,23,0.9)] via-[rgba(24,24,32,0.9)] to-[rgba(17,17,23,0.9)] border border-[#2a2a3a] shadow-[0_0_30px_rgba(145,94,255,0.1)]">
                <h3 className="text-white font-bold text-[24px] glow mb-8">Contact Info</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      className="flex items-center gap-4 group/item hover:bg-[rgba(145,94,255,0.05)] p-3 rounded-lg transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: index * 0.2 } 
                      }}
                    >
                      <motion.div
                        className="p-3 rounded-full bg-[rgba(17,17,23,0.8)] backdrop-blur-sm border border-[#2a2a3a]"
                        style={{
                          boxShadow: `0 0 20px ${info.color}20`
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <info.icon 
                          className="w-6 h-6"
                          style={{ color: info.color }}
                        />
                      </motion.div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium group-hover/item:text-[#915EFF] transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[#2a2a3a]">
                  <h4 className="text-white font-semibold mb-6">Connect with me</h4>
                  <div className="flex flex-wrap gap-4">
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
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#915EFF] to-[#F06292] rounded-lg opacity-0 group-hover/social:opacity-50 transition duration-300 blur-md"></div>
                        <div className="relative p-2 rounded-lg bg-[rgba(17,17,23,0.8)] backdrop-blur-sm border border-[#2a2a3a] transition-colors duration-300">
                          <social.icon 
                            className="w-6 h-6"
                            style={{ 
                              color: 'white',
                              filter: 'drop-shadow(0 0 8px rgba(145, 94, 255, 0.5))'
                            }}
                          />
                        </div>
                        <motion.span
                          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[rgba(17,17,23,0.9)] backdrop-blur-sm border border-[#2a2a3a] text-white px-2 py-1 rounded text-sm opacity-0 group-hover/social:opacity-100 transition-opacity whitespace-nowrap"
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
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