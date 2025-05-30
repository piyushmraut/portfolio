'use client'

import { motion } from 'framer-motion'
import { ComputersCanvas } from './canvas/Computers'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] glow" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <motion.h1 
            className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I&apos;m <span className="text-[#915EFF] glow">Piyush</span>
          </motion.h1>
          <motion.div 
            className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer & ML Enthusiast",
                800,
                "Building innovative web applications",
                800,
                "Turning ideas into reality through code",
                800,
                "Passionate about problem-solving",
                800,
              ]}
              wrapper="span"
              speed={30}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
              cursor={true}
            />
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href="#about" className="floating">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 glow">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </motion.div>

      <div className="relative w-full h-full">
        <ComputersCanvas />
      </div>
    </section>
  )
}

export default Hero 