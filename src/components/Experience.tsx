'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const Experience = () => {
  return (
    <section className="relative w-full min-h-screen pt-8 pb-10" id="experience">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-5 px-6">
        <motion.div
          variants={fadeIn("down", "spring", 0.1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full"
        >
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-10 glow">
            Experience
          </h2>

          <div className="mt-8 space-y-12">
            {/* Cisco Experience */}
            <motion.div
              variants={fadeIn("right", "spring", 0.2, 0.75)}
              className="card-gradient p-8 rounded-2xl"
            >
              <h3 className="text-[#915EFF] font-bold text-[24px]">Networking Virtual Internship</h3>
              <p className="text-white font-semibold mt-2">Cisco | Jun 2023 – Jul 2023</p>
              <ul className="mt-4 text-secondary text-[17px] list-disc list-inside space-y-2">
                <li>Participated in hands-on exercises and simulations, developing practical skills in configuring and troubleshooting Cisco networking devices and technologies.</li>
                <li>Earned certifications in Networking Essentials and Introduction to Packet Tracer, demonstrating foundational knowledge in network architecture, configuration, and diagnostics.</li>
                <li>Built, tested, and optimized network configurations using Cisco Packet Tracer, gaining proficiency in realistic network simulation and troubleshooting scenarios.</li>
              </ul>
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={fadeIn("left", "spring", 0.3, 0.75)}
              className="card-gradient p-8 rounded-2xl"
            >
              <h3 className="text-[#915EFF] font-bold text-[24px]">Certifications</h3>
              <ul className="mt-4 text-secondary text-[17px] space-y-4">
                {[
                  "AWS Academy Cloud Foundations – AWS Academy (Jun 2024)",
                  "Oracle Cloud Data Management 2023 Certified Foundations Associate – Oracle (Oct 2023)",
                  "Programming Essentials in Python – Cisco Networking Academy (Dec 2022)",
                  "Java Programming Fundamentals – Infosys Springboard (Oct 2022)"
                ].map((cert, index) => (
                  <motion.li
                    key={index}
                    variants={fadeIn("up", "spring", 0.4 + index * 0.1, 0.75)}
                    className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#915EFF]"
                  >
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 