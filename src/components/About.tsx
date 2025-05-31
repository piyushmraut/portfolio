'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import Image from 'next/image'


const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  
  const iisfImages = [
    "https://media.licdn.com/dms/image/v2/D4D22AQHp8R74lT890w/feedshare-shrink_1280/B4DZPZW1whGgAo-/0/1734518476074?e=1751500800&v=beta&t=QKRm67f0rgV39Z8QM5dHqIvRjzv4kNZyJfffbriIDCs",
    "https://media.licdn.com/dms/image/v2/D4D22AQEtjQWDeqFKUg/feedshare-shrink_2048_1536/B4DZPZW1xOGoAo-/0/1734518474047?e=1751500800&v=beta&t=G0bdNzQauR94WY2eTGtasYQn8wbd2lbHQLqX7m0kUyc",
    "https://media.licdn.com/dms/image/v2/D4D22AQGGfI_kDbnK8g/feedshare-shrink_1280/B4DZPZW1wbHYAk-/0/1734518472499?e=1751500800&v=beta&t=3GxUPEYgP2vlAPqwGQxxuCFoPqspvsKcyPYtWhiCkFI"
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % iisfImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + iisfImages.length) % iisfImages.length)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (!isHovered) {
      interval = setInterval(() => {
        nextImage()
      }, 4000) // Changed to 4 seconds
    }
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isHovered, nextImage])

  return (
    <section className="relative w-full min-h-screen section-gradient pb-8" id="about">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-5 px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={fadeIn("down", "spring", 0.1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="flex-1">
              <motion.h2 
                className="relative font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] via-[#0072FF] to-[#00C6FF] animate-gradient-x font-black">
                    About Me
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00C6FF] via-[#0072FF] to-[#00C6FF] rounded-full"
                    initial={{ width: "0%", opacity: 0 }}
                    whileInView={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </span>
              </motion.h2>

              <motion.div 
                className="mt-4 text-secondary text-sm sm:text-base lg:text-[17px] max-w-3xl leading-[1.8] sm:leading-[30px] relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#915EFF20] to-transparent rounded-lg blur-sm" />
                <div className="relative bg-[rgba(17,17,23,0.7)] backdrop-blur-sm p-6 rounded-lg border border-[#915EFF30] hover:border-[#915EFF60] transition-colors duration-300">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    I&apos;m a <span className="text-[#915EFF] font-semibold">passionate Full Stack Developer</span> and 
                    <span className="text-[#915EFF] font-semibold"> Machine Learning enthusiast</span> with a strong foundation in modern web technologies and artificial intelligence.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-3"
                  >
                    Currently pursuing my <span className="text-[#915EFF] font-semibold">Bachelor&apos;s in Computer Engineering</span>, I combine technical expertise with creative problem-solving to build innovative solutions.
                  </motion.p>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#915EFF] to-transparent"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                </div>
              </motion.div>

              <div className="mt-6 sm:mt-8">
                <motion.h3 
                  variants={fadeIn("right", "spring", 0.3, 0.75)}
                  className="text-white font-bold text-xl sm:text-2xl lg:text-[24px] glow mt-6 sm:mt-8"
                >
                  Education
                </motion.h3>
                <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
                  {[
                    {
                      title: "Bachelor of Technology in Computer Engineering",
                      school: "Bajaj Institute Of Technology, Wardha",
                      grade: "CGPA: 8.02",
                      period: "Dec 2021 - Aug 2025",
                      icon: "🎓",
                      color: "#915EFF"
                    },
                    {
                      title: "Class XII (State Board)",
                      school: "Bajaj College Of Science, Wardha",
                      grade: "Percentage: 95%",
                      period: "2020 - 2021",
                      icon: "📚",
                      color: "#F06292"
                    },
                    {
                      title: "Class X (State Board)",
                      school: "Sushil Himmatsingka Vidyalay, Wardha",
                      grade: "Percentage: 88.8%",
                      period: "2018 - 2019",
                      icon: "🏫",
                      color: "#64B5F6"
                    }
                  ].map((edu, index) => (
                    <motion.div
                      key={edu.title}
                      variants={fadeIn("left", "spring", 0.4 + index * 0.1, 0.75)}
                      className="relative group"
                    >
                      <div 
                        className="absolute -inset-0.5 bg-gradient-to-r rounded-lg opacity-50 group-hover:opacity-70 blur-sm transition duration-500"
                        style={{
                          background: `linear-gradient(90deg, ${edu.color}, ${edu.color}80)`
                        }}
                      />
                      <div className="relative p-6 rounded-lg backdrop-blur-sm bg-[rgba(17,17,23,0.9)] border border-[#2a2a3a] group-hover:border-opacity-50 transition duration-300">
                        <div className="flex items-center gap-4">
                          <motion.div
                            className="text-4xl"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 20,
                              delay: 0.1 + index * 0.1
                            }}
                          >
                            {edu.icon}
                          </motion.div>
                          <div className="flex-1">
                            <motion.h4 
                              className="text-[#915EFF] font-semibold text-lg group-hover:text-white transition-colors duration-300"
                              style={{ color: edu.color }}
                            >
                              {edu.title}
                            </motion.h4>
                            <motion.p 
                              className="text-secondary group-hover:text-gray-300 transition-colors duration-300"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 + index * 0.1 }}
                            >
                              {edu.school}
                            </motion.p>
                          </div>
                          <motion.div
                            className="text-secondary text-sm text-right"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                          >
                            <p className="font-medium" style={{ color: `${edu.color}CC` }}>{edu.grade}</p>
                            <p className="text-gray-500">{edu.period}</p>
                          </motion.div>
                        </div>
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r"
                          style={{
                            background: `linear-gradient(90deg, ${edu.color}, transparent)`
                          }}
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <motion.h3 
                  variants={fadeIn("right", "spring", 0.7, 0.75)}
                  className="text-white font-bold text-xl sm:text-2xl lg:text-[24px] glow"
                >
                  Achievements
                </motion.h3>
                <motion.ul 
                  variants={fadeIn("up", "spring", 0.8, 0.75)}
                  className="mt-4 sm:mt-6 space-y-6 sm:space-y-8"
                >
                  <motion.li
                    variants={fadeIn("left", "spring", 0.9, 0.75)}
                    className="card-gradient p-6 rounded-lg text-secondary"
                  >
                    <p className="mb-4">Participated in the India International Science Festival ST Hackathon 2024</p>
                    <div 
                      className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden group"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          className="relative w-full h-full"
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ 
                            opacity: 1, 
                            scale: 1,
                            transition: { duration: 0.7, ease: "easeOut" }
                          }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          whileHover={{ 
                            scale: 1.08,
                            transition: { duration: 0.3, ease: "easeOut" }
                          }}
                        >
                          <Image
                            src={iisfImages[currentImageIndex]}
                            alt={`IISF Hackathon Image ${currentImageIndex + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                          />
                        </motion.div>
                      </AnimatePresence>
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none"
                      >
                        <motion.button
                          onClick={prevImage}
                          className="pointer-events-auto bg-[#915EFF] bg-opacity-40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                          whileHover={{ 
                            scale: 1.15,
                            backgroundColor: "#915EFF",
                            opacity: 1
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          ←
                        </motion.button>
                        <motion.button
                          onClick={nextImage}
                          className="pointer-events-auto bg-[#915EFF] bg-opacity-40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                          whileHover={{ 
                            scale: 1.15,
                            backgroundColor: "#915EFF",
                            opacity: 1
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          →
                        </motion.button>
                      </motion.div>
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                        {iisfImages.map((_, index) => (
                          <motion.button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-500 backdrop-blur-sm ${
                              index === currentImageIndex ? 'bg-[#915EFF]' : 'bg-white bg-opacity-40'
                            }`}
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }}
                            animate={{
                              scale: index === currentImageIndex ? 1.3 : 1,
                              transition: { duration: 0.3 }
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.li>

                  <motion.li
                    variants={fadeIn("left", "spring", 1.0, 0.75)}
                    className="card-gradient p-6 rounded-lg text-secondary"
                  >
                    <p className="mb-4">Represented Bajaj Institute Of Technology Wardha at the grand finale of the National Smart India Hackathon 2023</p>
                    <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image
                          src="https://media.licdn.com/dms/image/v2/D4D22AQE-Zx5M3MCTfg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1703411030536?e=1751500800&v=beta&t=Itpjiz6hoZVT6CxpVSS52zBBnjNPvVU84ygkmqP2tiE"
                          alt="Smart India Hackathon"
                          fill
                          style={{ objectFit: 'cover' }}
                          className="hover:scale-105 transition-transform duration-300"
                          priority
                        />
                      </div>
                    </div>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
            
            <motion.div
              variants={fadeIn("left", "spring", 0.2, 0.75)}
              animate={{
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 0 10px #915EFF",
                  "0 0 20px #915EFF",
                  "0 0 10px #915EFF"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-[#915EFF] glow relative hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-[#915EFF] opacity-10 animate-pulse"></div>
              <Image 
                src="https://avatars.githubusercontent.com/u/106990915?v=4"
                alt="Profile"
                className="relative z-10"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 