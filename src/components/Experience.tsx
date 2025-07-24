'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const Experience = () => {
  return (
    <section className="relative w-full min-h-screen pt-16 sm:pt-20 pb-8 sm:pb-10" id="experience">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-5 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("down", "spring", 0.1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full"
        >
          <motion.h2 
            className="relative font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] animate-gradient-x font-black">
                Experience
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] rounded-full"
                initial={{ width: "0%", opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </motion.h2>

          <div className="mt-6 sm:mt-8 space-y-8 sm:space-y-12">
            {/* Cisco Experience */}
            <motion.div
              variants={fadeIn("right", "spring", 0.2, 0.75)}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#915EFF] to-[#915EFF40] rounded-2xl opacity-50 group-hover:opacity-70 blur-sm transition duration-500" />
              <div className="relative card-gradient p-4 sm:p-6 lg:p-8 rounded-2xl backdrop-blur-sm border border-[#2a2a3a] group-hover:border-[#915EFF60] transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-[#915EFF30] border border-[#915EFF40] relative overflow-hidden"
                  >
                    <motion.svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 sm:w-12 sm:h-12"
                      initial="hidden"
                      animate="visible"
                    >
                      {/* Central Node */}
                      <motion.circle
                        cx="12"
                        cy="12"
                        r="3"
                        fill="#1BA0D7"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Orbiting Nodes */}
                      <motion.g
                        animate={{
                          rotate: 360
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        {[0, 72, 144, 216, 288].map((angle, index) => (
                          <motion.g
                            key={angle}
                            initial={{ rotate: angle, scale: 0 }}
                            animate={{ rotate: angle, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <motion.circle
                              cx="12"
                              cy="4"
                              r="2"
                              fill="#1BA0D7"
                              initial={{ opacity: 0.3 }}
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.4
                              }}
                            />
                            <motion.line
                              x1="12"
                              y1="7"
                              x2="12"
                              y2="9"
                              stroke="#1BA0D7"
                              strokeWidth="0.5"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: [0, 1, 0] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.4
                              }}
                            />
                          </motion.g>
                        ))}
                      </motion.g>

                      {/* Pulse Effect */}
                      <motion.circle
                        cx="12"
                        cy="12"
                        r="6"
                        stroke="#1BA0D7"
                        strokeWidth="0.5"
                        fill="none"
                        initial={{ scale: 0.5, opacity: 1 }}
                        animate={{
                          scale: 2,
                          opacity: 0
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      />
                    </motion.svg>
                  </motion.div>
                  <div>
                    <motion.h3 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-[#915EFF] font-bold text-lg sm:text-xl lg:text-[24px] group-hover:text-white transition-colors duration-300"
                    >
                      SOFTWARE DEVELOPER INTERN
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-white font-semibold mt-1 sm:mt-2 text-sm sm:text-base"
                    >
                      Qloron Private Limited | Feb 2025 – Jul 2025
                    </motion.p>
                  </div>
                </div>
                <motion.ul 
                  className="mt-4 sm:mt-6 text-secondary text-sm sm:text-base lg:text-[17px] list-none space-y-3 sm:space-y-4"
                >
                  {[
                    "Architected and deployed 15+ responsive web applications using React.js, Firebase, and Tailwind CSS, achieving 25% UI performance improvement and 40% faster data loading.",
                    "Led cross-functional collaboration with 5-member team, maintaining 90% on-time delivery rate through agile sprint planning and proactive issue resolutionEarned certifications in Networking Essentials and Introduction to Packet Tracer, demonstrating foundational knowledge in network architecture, configuration, and diagnostics.",
                    "Delivered production-ready code within first week, demonstrating rapid adaptability and contributing to 20% increase in team productivity, tested, and optimized network configurations using Cisco Packet Tracer, gaining proficiency in realistic network simulation and troubleshooting scenarios.",
                    "Implemented scalable database solutions reducing query response time by 35%."
                  ].map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <span className="text-[#915EFF] mt-1.5">▹</span>
                      <span className="group-hover/item:text-white transition-colors duration-300">{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={fadeIn("left", "spring", 0.3, 0.75)}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#915EFF40] to-[#915EFF] rounded-2xl opacity-50 group-hover:opacity-70 blur-sm transition duration-500" />
              <div className="relative card-gradient p-4 sm:p-6 lg:p-8 rounded-2xl backdrop-blur-sm border border-[#2a2a3a] group-hover:border-[#915EFF60] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-[#915EFF30] border border-[#915EFF40]"
                  >
                    <span className="text-2xl sm:text-4xl">🏆</span>
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[#915EFF] font-bold text-lg sm:text-xl lg:text-[24px] group-hover:text-white transition-colors duration-300"
                  >
                    Certifications
                  </motion.h3>
                </div>

                <motion.div 
                  className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                >
                  {[
                    {
                      title: "AWS Academy Cloud Foundations",
                      issuer: "AWS Academy",
                      date: "June 2024",
                      icon: "☁️",
                      color: "#FF9900"
                    },
                    {
                      title: "Oracle Cloud Data Management",
                      issuer: "Oracle",
                      date: "October 2023",
                      icon: "🔷",
                      color: "#F80000"
                    },
                    {
                      title: "Networking Essentials",
                      issuer: "Cisco",
                      date: "July 2023",
                      icon: "🌐",
                      color: "#1BA0D7"
                    },
                    {
                      title: "Introduction to Packet Tracer",
                      issuer: "Cisco",
                      date: "June 2023",
                      icon: "💻",
                      color: "#1BA0D7"
                    },
                    {
                      title: "Programming Essentials in Python",
                      issuer: "Cisco Networking Academy",
                      date: "December 2022",
                      icon: "🐍",
                      color: "#1BA0D7"
                    },
                    {
                      title: "Java Programming Fundamentals",
                      issuer: "Infosys Springboard",
                      date: "October 2022",
                      icon: "☕",
                      color: "#E32C2D"
                    }
                  ].map((cert, index) => (
                    <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="relative group/cert"
                    >
                      <div 
                        className="absolute -inset-0.5 bg-gradient-to-r rounded-lg opacity-50 group-hover/cert:opacity-70 blur-sm transition duration-300" 
                        style={{
                          background: `linear-gradient(90deg, ${cert.color}20, transparent)`
                        }}
                      />
                      <div className="relative p-4 rounded-lg backdrop-blur-sm bg-[rgba(17,17,23,0.7)] border border-[#915EFF20] group-hover/cert:border-[#915EFF40] transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 0.3 }}
                            className="w-10 h-10 rounded-full flex items-center justify-center"
                            style={{
                              background: `${cert.color}20`,
                              border: `1px solid ${cert.color}40`
                            }}
                          >
                            <span className="text-2xl">{cert.icon}</span>
                          </motion.div>
                          <div>
                            <h4 
                              className="text-white font-semibold group-hover/cert:text-[#915EFF] transition-colors duration-300"
                              style={{
                                textShadow: `0 0 10px ${cert.color}30`
                              }}
                            >
                              {cert.title}
                            </h4>
                            <p className="text-secondary text-sm">
                              {cert.issuer} • {cert.date}
                            </p>
                          </div>
                        </div>
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${cert.color}, transparent)`
                          }}
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 0.8, delay: 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 