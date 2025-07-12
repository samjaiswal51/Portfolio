import React, { useState, useEffect, useRef } from 'react';
import { FiGithub } from 'react-icons/fi';

const MiniProjectsCarousel = ({ miniProjects }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide(prev => (prev + 1) % (miniProjects.length - 2));
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, miniProjects.length]);

  return (
    <div 
      className="relative overflow-hidden py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        ref={carouselRef}
        className="flex transition-transform duration-1000 ease-out"
        style={{ transform: `translateX(-${currentSlide * 25}%)` }}
      >
        {miniProjects.map((project, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-1/4 px-2"
          >
            <div className="bg-[#111]/70 backdrop-blur-sm rounded-xl overflow-hidden border border-[#333] hover:border-blue-500 transition-all duration-300 h-48">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="font-medium text-sm mb-1">{project.title}</h3>
                <a 
                  href={project.githubLink}
                  className="flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FiGithub className="mr-1" size={12} /> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniProjectsCarousel;