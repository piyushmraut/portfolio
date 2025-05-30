'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const About = () => {
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
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] glow">
            About Me
          </h2>

          <motion.p 
            variants={fadeIn("up", "spring", 0.2, 0.75)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a passionate Full Stack Developer and Machine Learning enthusiast with a strong foundation in modern web technologies
            and artificial intelligence. Currently pursuing my Bachelor's in Computer Engineering, I combine technical expertise with
            creative problem-solving to build innovative solutions.
          </motion.p>

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
              className="mt-4 space-y-4"
            >
              {[
                "Participated in the India International Science Festival ST Hackathon 2024",
                "Represented Bajaj Institute Of Technology Wardha at the grand finale of the National Smart India Hackathon 2023"
              ].map((achievement, index) => (
                <motion.li
                  key={index}
                  variants={fadeIn("left", "spring", 0.9 + index * 0.1, 0.75)}
                  className="card-gradient p-4 rounded-lg text-secondary list-none"
                >
                  {achievement}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 