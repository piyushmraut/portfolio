'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { 
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs,
  FaBootstrap, FaNodeJs, FaReact, FaGitAlt, FaGithub, FaAws,
  FaFigma
} from 'react-icons/fa'
import { SiExpress, SiMongodb, SiMysql, SiCanva, SiTailwindcss, SiFirebase } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { GiPublicSpeaker, GiTeamIdea, GiPuzzle, GiThink } from 'react-icons/gi'

type IconColors = {
  [key: string]: string;
}

const iconColors: IconColors = {
  Java: "#007396",
  Python: "#3776AB",
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  MySQL: "#4479A1",
  MongoDB: "#47A248",
  Firebase: "#FFCA28",
  Bootstrap: "#7952B3",
  NodeJS: "#339933",
  ExpressJS: "#FFFFFF",
  ReactJS: "#61DAFB",
  "Tailwind CSS": "#06B6D4",
  Git: "#F05032",
  Github: "#FFFFFF",
  "VS Code": "#007ACC",
  Figma: "#F24E1E",
  Canva: "#00C4CC",
  "AWS Cloud Platform": "#FF9900",
  Leadership: "#FFD700",
  "Problem Solving": "#FF6B6B",
  "Decision Making": "#4CAF50",
  Collaboration: "#9C27B0"
}

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "NodeJS", icon: FaNodeJs },
      { name: "ExpressJS", icon: SiExpress },
      { name: "ReactJS", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "Github", icon: FaGithub },
      { name: "VS Code", icon: VscCode },
      { name: "Figma", icon: FaFigma },
      { name: "Canva", icon: SiCanva },
      { name: "AWS Cloud Platform", icon: FaAws },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Leadership", icon: GiTeamIdea },
      { name: "Problem Solving", icon: GiPuzzle },
      { name: "Decision Making", icon: GiThink },
      { name: "Collaboration", icon: GiPublicSpeaker },
    ],
  },
]

const floatingVariants: Variants = {
  animate: {
    y: [-5, 5],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
}

const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
}

const glowVariants: Variants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.2, 0.3, 0.2],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
}

const Skills = () => {
  return (
    <section className="relative w-full min-h-screen pt-20 pb-10" id="skills">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-5 px-6">
        <motion.div
          variants={fadeIn("down", "spring", 0.1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full"
        >
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-10 glow">
            Skills
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={fadeIn(
                  index % 2 === 0 ? "right" : "left",
                  "spring",
                  0.2 * (index + 1),
                  0.75
                )}
                className="card-gradient p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-[#915EFF] font-bold text-[24px] mb-6">
                  {category.title}
                </h3>
                <div className="grid grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={{
                        ...fadeIn("up", "spring", 0.3 + skillIndex * 0.1, 0.75),
                        ...floatingVariants
                      }}
                      initial="initial"
                      animate="animate"
                      className="flex flex-col items-center gap-2 group"
                    >
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className={`text-4xl transition-colors duration-300`}
                          style={{ color: iconColors[skill.name] }}
                          variants={pulseVariants}
                          initial="initial"
                          animate="animate"
                        >
                          {React.createElement(skill.icon)}
                        </motion.div>
                        <motion.div
                          className="absolute -inset-2 rounded-full opacity-20"
                          style={{ backgroundColor: iconColors[skill.name] }}
                          variants={glowVariants}
                          initial="initial"
                          animate="animate"
                        />
                      </motion.div>
                      <motion.span 
                        className="text-secondary text-sm text-center group-hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill.name}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 