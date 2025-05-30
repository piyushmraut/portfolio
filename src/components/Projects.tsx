'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const projects = [
  {
    title: "Naukri Sahayak",
    date: "Sept 2024 - Nov 2024",
    tech: "ReactJs, NextJs, Machine Learning, Gemini AI",
    description: "AI-powered Mock Interview full-stack application",
    github: "https://github.com/piyushmraut",
    points: [
      "Built an Al-powered Mock Interview full-stack application with React and Next.js, enhancing interview preparation for job seekers with 40% increase in user participation and 50% better preparation outcomes.",
      "Enhanced users answer quality by 85% using a custom ML model with cosine similarity and Gemini AI for feedback, and added voice recording functionality with real-time ratings via React-Hook-Speech-to-Text.",
      "Reduced disengagement by 95% with a webcam-based confidence tracker to assess user's focus and attention and enhanced relevancy using Gemini API for domain-specific interview questions."
    ]
  },
  {
    title: "Cyberbullying Detection",
    date: "Feb 2024 - May 2024",
    tech: "Python, Scikit-learn, Google-Colab",
    description: "Machine learning model for detecting cyberbullying in tweets",
    github: "https://github.com/piyushmraut",
    points: [
      "Developed a machine learning model for Cyberbullying Detection on Tweets, achieving 82% accuracy using Support Vector Machines (SVM), and categorized cyberbullying into specific types such as religion, gender, age, and ethnicity.",
      "Utilized Natural Language Processing(NLP) techniques for text preprocessing, including cleaning, tokenization, and feature extraction, to enhance model performance.",
      "Improved classification efficiency by optimizing SVM parameters and fine-tuning the model for precise identification of offensive language."
    ]
  }
]

const Projects = () => {
  return (
    <section className="relative w-full min-h-screen pt-20 pb-10" id="projects">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-5 px-6">
        <motion.div
          variants={fadeIn("down", "spring", 0.1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full"
        >
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-10 glow">
            Projects
          </h2>

          <div className="mt-8 space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeIn(index % 2 === 0 ? "right" : "left", "spring", 0.2 * (index + 1), 0.75)}
                className="card-gradient p-8 rounded-2xl"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <h3 className="text-[#915EFF] font-bold text-[24px]">{project.title}</h3>
                  <p className="text-secondary text-sm">{project.date}</p>
                </div>
                <p className="text-white mt-4 font-medium">{project.tech}</p>
                <p className="mt-2 text-secondary text-[17px]">{project.description}</p>
                <ul className="mt-4 text-secondary text-[17px] space-y-4">
                  {project.points.map((point, i) => (
                    <motion.li
                      key={i}
                      variants={fadeIn("up", "spring", 0.3 + i * 0.1, 0.75)}
                      className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#915EFF]"
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-[#915EFF] hover:text-white transition-colors"
                  variants={fadeIn("up", "spring", 0.4, 0.75)}
                >
                  View on GitHub →
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 