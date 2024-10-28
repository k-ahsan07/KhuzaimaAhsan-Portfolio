import React from 'react';
import AboutImage from '../assets/about.png';
import EmergiChatbot from '../assets/emergi-chatbot.png';
import Ecommerce from '../assets/e-commerce.png';
import Skill from '../assets/skill.png';
import Booking from '../assets/booking.png';
import Biometeric from '../assets/biometric.png';
import Brain from '../assets/brain.png';
import Food from '../assets/food.png';
import Estate from '../assets/estate.png';
import { motion } from 'framer-motion';

const Project = () => {
  return (
    <div className='project-container border-b border-neutral-900 pb-8'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 0.5 }} 
        className='my-20 text-center text-4xl'
      >
        Projects
      </motion.h1>

      {/* Projects List */}
      {[{
        title: 'Emergency Chatbot',
        description: 'EmergiChatbot is an intelligent conversational agent designed for emergency IVR systems...',
        imgSrc: EmergiChatbot,
        technologies: ['Python', 'Gemini API']
      }, {
        title: 'E-Commerce Project',
        description: 'This e-commerce project offers a seamless online shopping experience...',
        imgSrc: Ecommerce,
        technologies: ['MongoDB', 'Express', 'React', 'Node']
      }, {
        title: 'Skill-Finder: Automated Job-Resume Matching System',
        description: 'Skill-Finder is an automated job-resume matching system that leverages advanced algorithms...',
        imgSrc: Skill,
        technologies: ['Machine Learning', 'NLP', 'Python', 'Streamlit']
      }, {
        title: 'Booking App',
        description: 'The Hotel Booking App simplifies finding and booking accommodations...',
        imgSrc: Booking,
        technologies: ['MongoDB', 'React', 'Node', 'Express']
      }, {
        title: 'Biometric Authentication System',
        description: 'This Biometric Authentication System offers secure access control through fingerprint recognition...',
        imgSrc: Biometeric,
        technologies: ['Python', 'OpenCV', 'Streamlit']
      }, {
        title: 'Brain Tumor Detection',
        description: 'This Brain Tumor Detection system utilizes deep learning techniques to analyze medical images...',
        imgSrc: Brain,
        technologies: ['Deep Learning', 'TensorFlow', 'Keras']
      }, {
        title: 'Food Delivery App',
        description: 'This Food Delivery App connects users with local restaurants...',
        imgSrc: Food,
        technologies: ['React', 'Node']
      }, {
        title: 'Estate Management System',
        description: 'This Estate Management System simplifies property management with features like tenant management...',
        imgSrc: Estate,
        technologies: ['Node.js', 'MongoDB', 'Express', 'React']
      }].map((project, index) => (
        <div key={index} className='mb-8 flex flex-col lg:flex-row lg:justify-center'>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }} 
            initial={{ opacity: 0, x: -100 }} 
            transition={{ duration: 1 }} 
            className='w-full lg:w-1/4'
          >
            <img
              width={200}
              height={200}
              src={project.imgSrc}
              alt={project.title}
              className='mb-6 rounded'
            />
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }} 
            initial={{ opacity: 0, x: 100 }} 
            transition={{ duration: 1 }} 
            className="w-full max-w-xl lg:w-3/4 lg:pl-6"
          >
            <h6 className='mb-2 font-semibold'>{project.title}</h6>
            <p className='mb-4 text-neutral-400'>
              {project.description}
            </p>
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className='mr-2 mt-4 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Project;
