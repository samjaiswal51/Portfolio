import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { MainProjectContent, MainProjectScreenshots } from './MainProjects';
import MiniProjectsCarousel from './MiniProjectsCarousel';

const Projects = ({ projects, miniProjects }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate screenshots for current project
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshotIndex(prev => 
        (prev + 1) % projects[currentProjectIndex].screenshots.length
      );
    }, 1500);
    return () => clearInterval(interval);
  }, [currentProjectIndex, projects]);

  // Auto-rotate projects every 5 seconds (pauses on hover)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setDirection(1);
        setCurrentProjectIndex(prev => (prev + 1) % projects.length);
        setCurrentScreenshotIndex(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, projects.length]);

  const nextProject = () => {
    setDirection(1);
    setCurrentProjectIndex(prev => (prev + 1) % projects.length);
    setCurrentScreenshotIndex(0);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentProjectIndex(prev => (prev - 1 + projects.length) % projects.length);
    setCurrentScreenshotIndex(0);
  };

  return (
    <>
      {/* Featured Projects Section */}
      <div 
        className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation Arrow - Left */}
        <button 
          onClick={prevProject}
          className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-[#111]/70 backdrop-blur-sm border border-[#333] hover:border-blue-500 transition-all duration-300 text-2xl"
        >
          <FiChevronLeft />
        </button>

        <MainProjectScreenshots 
          projects={projects}
          currentProjectIndex={currentProjectIndex}
          currentScreenshotIndex={currentScreenshotIndex}
          direction={direction}
        />

        <MainProjectContent 
          projects={projects}
          currentProjectIndex={currentProjectIndex}
          direction={direction}
        />

        {/* Navigation Arrow - Right */}
        <button 
          onClick={nextProject}
          className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-[#111]/70 backdrop-blur-sm border border-[#333] hover:border-blue-500 transition-all duration-300 text-2xl"
        >
          <FiChevronRight />
        </button>
      </div>

      {/* Mobile Navigation for Featured Projects */}
      <div className="flex justify-center gap-8 mb-12 lg:hidden">
        <button 
          onClick={prevProject}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#111]/70 backdrop-blur-sm border border-[#333] hover:border-blue-500 transition-all duration-300 text-2xl"
        >
          <FiChevronLeft />
        </button>
        <button 
          onClick={nextProject}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#111]/70 backdrop-blur-sm border border-[#333] hover:border-blue-500 transition-all duration-300 text-2xl"
        >
          <FiChevronRight />
        </button>
      </div>

      {/* Mini Projects Carousel */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Mini Projects
        </span>
      </h2>
      
      <MiniProjectsCarousel miniProjects={miniProjects} />
    </>
  );
};

export default Projects;