import React from 'react';
import AboutImage from '../assets/about.png';
import {motion} from 'framer-motion'
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About Me
      </h1>
      <div className="flex flex-wrap">
        <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0, x:-100}} transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className='rounded-2xl' src={AboutImage} alt="About" />
          </div>

        </motion.div>
        <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0, x:100}} transition={{duration:0.5}} className='w-full lg:w-1/2'>
          <div className="flex justify-center lg:justify-start">
            <p className='my-2 max-w-xl py-6 text-2xl'>Hello! I'm Khuzaima Ahsan, a passionate Computer Science undergraduate student from FAST National University Karachi. With a strong interest in cybersecurity, artificial intelligence, and software development, I'm constantly seeking opportunities to deepen my expertise in these fields. I thrive on challenges, always pushing myself to go beyond expectations to solve complex problems with the best possible solutions. Connect with me to explore and collaborate on innovative tech solutions!</p>
          </div>
          </motion.div>
      </div>
    </div>
  );
};

export default About;
