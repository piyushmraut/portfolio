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
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-5 px-6 py-16">
        <motion.div
          variants={fadeIn("down", "spring", 0.1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] glow">
                About Me
              </h2>

              <div className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                I&apos;m a passionate Full Stack Developer and Machine Learning enthusiast with a strong foundation in modern web technologies and artificial intelligence. Currently pursuing my Bachelor&apos;s in Computer Engineering, I combine technical expertise with creative problem-solving to build innovative solutions.
              </div>

              <div className="mt-8">
                <motion.h3 
                  variants={fadeIn("right", "spring", 0.3, 0.75)}
                  className="text-white font-bold text-[24px] glow"
                >
                  Education
                </motion.h3>
                <div className="mt-4 space-y-4">
                  {[
                    {
                      title: "Bachelor of Technology in Computer Engineering",
                      school: "Bajaj Institute Of Technology, Wardha",
                      grade: "CGPA: 8.02",
                      period: "Dec 2021 - Aug 2025"
                    },
                    {
                      title: "Class XII (State Board)",
                      school: "Bajaj College Of Science, Wardha",
                      grade: "Percentage: 95%",
                      period: "2020 - 2021"
                    },
                    {
                      title: "Class X (State Board)",
                      school: "Sushil Himmatsingka Vidyalay, Wardha",
                      grade: "Percentage: 88.8%",
                      period: "2018 - 2019"
                    }
                  ].map((edu, index) => (
                    <motion.div
                      key={edu.title}
                      variants={fadeIn("left", "spring", 0.4 + index * 0.1, 0.75)}
                      className="card-gradient p-6 rounded-lg"
                    >
                      <h4 className="text-[#915EFF] font-semibold">{edu.title}</h4>
                      <p className="text-secondary">{edu.school}</p>
                      <p className="text-secondary">{`${edu.grade} (${edu.period})`}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <motion.h3 
                  variants={fadeIn("right", "spring", 0.7, 0.75)}
                  className="text-white font-bold text-[24px] glow"
                >
                  Achievements
                </motion.h3>
                <motion.ul 
                  variants={fadeIn("up", "spring", 0.8, 0.75)}
                  className="mt-4 space-y-8"
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
              className="w-full md:w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-[#915EFF] glow relative hover:scale-105 transition-transform duration-300"
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