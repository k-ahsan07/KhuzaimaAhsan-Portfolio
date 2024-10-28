import React from 'react';
import { RiReactjsLine } from 'react-icons/ri'; 
import { DiMongodb, DiNodejs, DiJavascript1 } from 'react-icons/di';
import { SiExpress } from 'react-icons/si'; 
import { SiPython } from 'react-icons/si'; 
import { SiCplusplus } from 'react-icons/si'; 
import { SiMysql } from 'react-icons/si'; 
import { SiNextdotjs } from 'react-icons/si'; 
import {animate, motion} from 'framer-motion'

const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10], 
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});


const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 whileInView={{opacity:1 , y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h1>
      <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariant(2.5)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className='text-7xl text-blue-500' /> {/* React color */}
        </motion.div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiJavascript1 className='text-7xl text-yellow-500' /> 
        </div>
        <motion.div variants={iconVariant(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMongodb className='text-7xl text-green-600' />
        </motion.div>
        <motion.div variants={iconVariant(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiNodejs className='text-7xl text-green-600' /> 
        </motion.div>
        <motion.div variants={iconVariant(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className='text-7xl text-gray-600' /> 
        </motion.div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className='text-7xl text-blue-500' />
        </div>
        <motion.div variants={iconVariant(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCplusplus className='text-7xl text-white' /> 
        </motion.div>
        <motion.div variants={iconVariant(7)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className='text-7xl text-white' /> 
        </motion.div>
        <motion.div variants={iconVariant(9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNextdotjs className='text-7xl text-white' />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Tech;
