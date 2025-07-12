import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const MainProjectContent = ({ projects, currentProjectIndex, direction }) => {
  return (
    <div className="w-full lg:w-1/2 p-4">
      <motion.div
        key={currentProjectIndex}
        initial={{ opacity: 0, x: -direction * 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          {projects[currentProjectIndex].title}
        </h3>
        
        <p className="text-gray-300 mb-6">
          {projects[currentProjectIndex].description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {projects[currentProjectIndex].technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-[#222] rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a 
            href={projects[currentProjectIndex].githubLink}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
          >
            <FiGithub /> View Code
          </a>
          <a 
            href={projects[currentProjectIndex].liveDemo}
            className="flex items-center gap-2 border border-blue-400 text-blue-300 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg transition-all duration-300"
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default MainProjectContent;