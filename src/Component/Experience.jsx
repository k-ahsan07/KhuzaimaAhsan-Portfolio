import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 0.5 }} 
        className='my-20 text-center text-4xl'
      >
        Experience
      </motion.h1>

      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div whileInView={{ opacity: 1, x: 0 }} 
        initial={{ opacity: 0, x: -100 }} 
        transition={{ duration: 1}}  className="w-full lg:w-1/4">
          <p className='mb-2 text-sm text-neutral-400'>Jun 2024 - Aug 2024</p>
        </motion.div>
        <motion.div whileInView={{ opacity: 1, x: 0 }} 
        initial={{ opacity: 0, x: 100 }} 
        transition={{ duration: 1}}  className="w-full max-w-xl lg:w-3/4">
          <h6 className='mb-2 font-semibold'>
            EntraCloud - <span className='text-small text-purple-100'>MERN Stack Intern</span>
          </h6>
          <p className='mb-4 text-neutral-400'>
            As a MERN Stack Intern, I contributed to developing an e-commerce website and a food delivery app. I created responsive UIs with React, built RESTful APIs using Express, and managed databases with MongoDB. This role enhanced my full-stack skills and provided valuable insights into the e-commerce and food delivery sectors.
          </p>
          <div className='flex flex-wrap mt-4'>
            <span className='mr-2 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>MongoDB</span>
            <span className='mr-2 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>React</span>
            <span className='mr-2 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Node</span>
            <span className='mr-2 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Express</span>
          </div>
        </motion.div>
      </div>

      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div whileInView={{ opacity: 1, x: 0 }} 
        initial={{ opacity: 0, x: -100 }} 
        transition={{ duration: 1}}  className="w-full lg:w-1/4">
          <p className='mb-2 text-sm text-neutral-400'>Oct 2024 - Nov 2024</p>
        </motion.div>
        <motion.div whileInView={{ opacity: 1, x: 0 }} 
        initial={{ opacity: 0, x: 100 }} 
        transition={{ duration: 1}} className="w-full max-w-xl lg:w-3/4">
          <h6 className='mb-2 font-semibold'>
            SOCByte - <span className='text-small text-purple-100'>SOC Intern</span>
          </h6>
          <p className='mb-4 text-neutral-400'>
            During my internship at a Security Operations Center (SOC), I gained hands-on experience with essential cybersecurity tools such as Wireshark for network analysis, Kali Linux for penetration testing, and Wazuh for security monitoring. I also participated in valuable sessions with industry experts, enhancing my understanding of security protocols and best practices in threat detection and response.
          </p>
          <div className='flex flex-wrap mt-4'>
            <span className='mr-2 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Wazuh</span>
            <span className='mr-2 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Kali Linux</span>
            <span className='mr-2 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Wireshark</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;
