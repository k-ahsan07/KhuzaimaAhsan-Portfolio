import React from 'react';
import Profile from '../assets/profile.jpeg';
import { motion } from 'framer-motion';

// Function to define animation variants
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1, // Corrected from 0 to 1 to ensure text is visible
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        {/* Left Section with Text */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={container(0)} // Using the container function for animation
              initial="hidden" // Set initial state
              animate="visible" // Set animated state
              className='pb-16 text-6xl font-thin tracking-tight lg:mb-16 lg:text-8xl'
            >
              Khuzaima Ahsan
            </motion.h1>
            <motion.span 
              variants={container(0.5)}
              initial="hidden"
              animate="visible" 
              className='mt-4 bg-gradient-to-r from-white via-[#C0C0C0] to-gray-300 bg-clip-text text-5xl tracking-tight text-transparent'
            >
              Aspiring Software Engineer & Undergraduate Student
            </motion.span>
            <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible" 
              className='my-2 max-w-xl py-6 font-light tracking-tighter text-xl'
            >
              I am a motivated undergraduate student eager to explore my passion for Cybersecurity, Artificial Intelligence, and Software Development. I seek a dynamic and challenging environment that offers hands-on experience, continuous learning, and growth opportunities. I am committed to applying my skills and knowledge to solve complex problems and contribute to technological advancements.
            </motion.p>
          </div>
        </div>

        {/* Right Section with Profile Image */}
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center ml-10'> {/* Adjust ml-10 to increase or decrease space */}
            <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1 , delay:1.2}} src={Profile} alt="Profile" className="rounded-full" /> {/* Optional: Add styling like rounded corners */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
