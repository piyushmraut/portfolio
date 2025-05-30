'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

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
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact
          </h2>

          <div className="mt-8 flex flex-col-reverse gap-10 overflow-hidden">
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
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
                  className="bg-[#1d2d4d] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                >
                  {loading ? 'Sending...' : 'Send'}
                </button>
              </form>
            </motion.div>

            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="flex-[0.25] bg-black-100 p-8 rounded-2xl"
            >
              <h3 className="text-white font-bold text-[24px]">Contact Info</h3>
              <div className="mt-4 text-secondary">
                <p>Wardha, Maharashtra, India</p>
                <p className="mt-2">+91 9637374630</p>
                <p className="mt-2">piyushraut9981@gmail.com</p>
                <div className="mt-4 flex gap-4">
                  <a
                    href="https://github.com/piyushmraut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#915EFF] hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/piyush-raut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#915EFF] hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
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