'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiGooglecloud, SiFirebase } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

const majorProjects = [
  {
    title: "Naukri Sahayak",
    date: "Sept 2024 - Nov 2024",
    tech: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "NextJs", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Machine Learning", icon: TbApi, color: "#4285F4" },
      { name: "Gemini AI", icon: SiGooglecloud, color: "#4285F4" }
    ],
    description: "AI-powered Mock Interview full-stack application",
    github: "https://github.com/piyushmraut",
    liveLink: "https://naukri-sahayak.vercel.app/",
    points: [
      "Built an Al-powered Mock Interview full-stack application with React and Next.js, enhancing interview preparation for job seekers with 40% increase in user participation and 50% better preparation outcomes.",
      "Enhanced users answer quality by 85% using a custom ML model with cosine similarity and Gemini AI for feedback, and added voice recording functionality with real-time ratings via React-Hook-Speech-to-Text.",
      "Reduced disengagement by 95% with a webcam-based confidence tracker to assess user's focus and attention and enhanced relevancy using Gemini API for domain-specific interview questions."
    ]
  },
  {
    title: "Cyberbullying Detection",
    date: "Feb 2024 - May 2024",
    tech: [
      { name: "Python", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Scikit-learn", icon: TbApi, color: "#4285F4" },
      { name: "Google-Colab", icon: SiGooglecloud, color: "#4285F4" }
    ],
    description: "Machine learning model for detecting cyberbullying in tweets",
    github: "https://github.com/piyushmraut",
    liveLink: "https://cyberbullying-detection.vercel.app/",
    points: [
      "Developed a machine learning model for Cyberbullying Detection on Tweets, achieving 82% accuracy using Support Vector Machines (SVM), and categorized cyberbullying into specific types such as religion, gender, age, and ethnicity.",
      "Utilized Natural Language Processing(NLP) techniques for text preprocessing, including cleaning, tokenization, and feature extraction, to enhance model performance.",
      "Improved classification efficiency by optimizing SVM parameters and fine-tuning the model for precise identification of offensive language."
    ]
  }
]

const miniProjects = [
  {
    title: "Quiz Application",
    description: "An interactive quiz platform powered by Google's Gemini API for dynamic question generation. Features a competitive leaderboard system and comprehensive analytics dashboard. Users can track their progress and compare scores with others.",
    image: "/projects/quiz-app.jpeg",
    liveLink: "https://quiz-application-nu-ten.vercel.app/",
    githubLink: "https://github.com/piyushmraut/quiz-application",
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Gemini API", icon: SiGooglecloud, color: "#4285F4" }
    ]
  },
  {
    title: "Bookstore Application",
    description: "A modern bookstore interface integrated with Google Books API. Browse through an extensive collection of books with detailed information. Features an intuitive search system and responsive design for optimal user experience.",
    image: "/projects/bookstore.jpeg",
    liveLink: "https://piyush-bookstore-theta.vercel.app/",
    githubLink: "https://github.com/piyushmraut/bookstore",
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Google Books API", icon: TbApi, color: "#4285F4" }
    ]
  },
  {
    title: "AI Chatbot",
    description: "An advanced chatbot powered by Google's Gemini API with image generation capabilities using ImagePig. Offers natural language understanding and real-time responses. Features both text-based conversations and AI image generation.",
    image: "/projects/chatbot.jpeg",
    liveLink: "https://ai-chatbot-piyush-new.vercel.app/",
    githubLink: "https://github.com/piyushmraut/ai_chatbot_piyush_new",
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Gemini API", icon: SiGooglecloud, color: "#4285F4" }
    ]
  },
  {
    title: "Employee Management",
    description: "A comprehensive employee management system with CRUD operations. Admins can create and manage employee profiles with detailed information. Features secure authentication, role-based access control, and a user-friendly dashboard for employees.",
    image: "/projects/employee.jpeg",
    liveLink: "https://employee-mangement-six.vercel.app/",
    githubLink: "https://github.com/piyushmraut/Employee-Mangement",
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }
    ]
  },
  {
    title: "Clock In/Out System",
    description: "An attendance management application with clock in/out functionality. Features a comprehensive dashboard with attendance analytics and upcoming holidays. Includes real-time tracking, attendance history, and detailed reporting.",
    image: "/projects/clock.jpeg",
    liveLink: "https://clock-in-out-keqw.vercel.app/",
    githubLink: "https://github.com/piyushmraut/clock-in-out",
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }
    ]
  },
  {
    title: "Recipe Finder",
    description: "A culinary companion app powered by the Spoonacular API. Features detailed recipes with step-by-step instructions and comprehensive ingredient information. Includes nutritional facts, cooking times, and serving suggestions.",
    image: "/projects/recipe.jpeg",
    liveLink: "https://recipe-finder-ten-psi.vercel.app/",
    githubLink: "https://github.com/piyushmraut/Recipe-Finder",
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Spoonacular API", icon: TbApi, color: "#00843D" }
    ]
  }
]

const MiniProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [imageError, setImageError] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    console.log('Project image path:', project.image)
    // Verify image exists by trying to load it
    const img = document.createElement('img')
    img.src = project.image
    img.onload = () => {
      console.log('Image loaded successfully:', project.image)
      setIsLoading(false)
    }
    img.onerror = () => {
      console.error('Image failed to load:', project.image)
      setImageError(true)
      setIsLoading(false)
    }
  }, [project.image])

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="relative group h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#915EFF] to-[#F06292] rounded-2xl opacity-50 group-hover:opacity-70 blur-sm transition duration-500"></div>
      <div className="relative rounded-2xl overflow-hidden h-full flex flex-col">
        <div className="relative h-48 w-full overflow-hidden bg-[#1d1836]">
          {!imageError ? (
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={400}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              priority={index < 3}
              onError={() => {
                console.error('Image failed to load:', project.image)
                setImageError(true)
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-secondary">
              <span>Image not available</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition duration-500"></div>
        </div>
        
        <div className="relative bg-[rgba(17,17,23,0.9)] backdrop-blur-xl p-6 flex-1 flex flex-col">
          <motion.h3 
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] via-[#F06292] to-[#915EFF] font-bold text-xl mb-3 relative group-hover:bg-[length:400%_400%] transition-all duration-500"
            style={{
              backgroundSize: '200% 200%',
              backgroundPosition: '0% 0%'
            }}
            whileHover={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            <span className="relative">
              {project.title}
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#915EFF] via-[#F06292] to-[#915EFF]"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </motion.h3>
          
          <p className="text-secondary text-sm mb-4 flex-1">
            {project.description}
          </p>

          <div className="flex items-center justify-between pb-8 relative">
            {/* Technology Icons */}
            <div className="flex gap-3">
              {project.technologies.map((tech: any) => (
                <motion.div
                  key={tech.name}
                  className="relative group/tech"
                  whileHover={{ scale: 1.1 }}
                >
                  <tech.icon 
                    className="w-5 h-5"
                    style={{ color: tech.color }}
                  />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[rgba(17,17,23,0.9)] text-white px-2 py-1 rounded text-xs opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap z-10">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Project Links */}
            <div className="flex gap-4">
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#915EFF] transition duration-300 relative group/link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt className="w-5 h-5" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[rgba(17,17,23,0.9)] text-white px-2 py-1 rounded text-xs opacity-0 group-hover/link:opacity-100 transition-opacity whitespace-nowrap z-10">
                  Live Demo
                </span>
              </motion.a>
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#915EFF] transition duration-300 relative group/link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-5 h-5" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[rgba(17,17,23,0.9)] text-white px-2 py-1 rounded text-xs opacity-0 group-hover/link:opacity-100 transition-opacity whitespace-nowrap z-10">
                  Source Code
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section className="relative w-full min-h-screen section-gradient" id="projects">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 px-6 py-16">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] via-[#F06292] to-[#915EFF] animate-gradient-x font-black">
                Projects
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#915EFF] via-[#F06292] to-[#915EFF] rounded-full"
                initial={{ width: "0%", opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </motion.h2>
          <p className="text-secondary text-[17px] max-w-3xl mt-4">
            Here are some of my projects that showcase my skills and experience.
            Each project reflects my ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </motion.div>

        <div className="mt-12">
          <motion.h3
            variants={fadeIn("right", "spring", 0.2, 0.75)}
            className="text-white font-bold text-[30px] mb-8 glow"
          >
            Major Projects
          </motion.h3>
          <div className="space-y-12">
            {majorProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeIn(index % 2 === 0 ? "right" : "left", "spring", 0.2 * (index + 1), 0.75)}
                className="card-gradient p-8 rounded-2xl"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                  <h3 className="text-[#915EFF] font-bold text-[24px]">{project.title}</h3>
                  <p className="text-secondary text-sm">{project.date}</p>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-4">
                  {/* Technology Icons */}
                  <div className="flex gap-3 flex-1">
                    {project.tech.map((tech) => (
                      <motion.div
                        key={tech.name}
                        className="relative group/tech"
                        whileHover={{ scale: 1.1 }}
                      >
                        <tech.icon 
                          className="w-6 h-6"
                          style={{ color: tech.color }}
                        />
                        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[rgba(17,17,23,0.9)] text-white px-2 py-1 rounded text-xs opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#915EFF] transition duration-300 relative group/link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[rgba(17,17,23,0.9)] text-white px-2 py-1 rounded text-xs opacity-0 group-hover/link:opacity-100 transition-opacity whitespace-nowrap">
                        Live Demo
                      </span>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#915EFF] transition duration-300 relative group/link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="w-5 h-5" />
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[rgba(17,17,23,0.9)] text-white px-2 py-1 rounded text-xs opacity-0 group-hover/link:opacity-100 transition-opacity whitespace-nowrap">
                        Source Code
                      </span>
                    </motion.a>
                  </div>
                </div>

                <p className="mt-4 text-secondary text-[17px]">{project.description}</p>
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
              </motion.div>
            ))}
          </div>

          <motion.h3
            variants={fadeIn("right", "spring", 0.2, 0.75)}
            className="text-white font-bold text-[30px] my-16 glow"
          >
            Mini Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {miniProjects.map((project, index) => (
              <MiniProjectCard 
                key={project.title} 
                project={project} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 