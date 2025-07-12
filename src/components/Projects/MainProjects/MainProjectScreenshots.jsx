import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MainProjectScreenshots = ({ projects, currentProjectIndex, currentScreenshotIndex, direction }) => {
  return (
    <div className="w-full lg:w-1/2 h-96 relative overflow-hidden rounded-xl">
      <AnimatePresence custom={direction} mode="wait">
        <motion.img
          key={`${currentProjectIndex}-${currentScreenshotIndex}`}
          src={projects[currentProjectIndex].screenshots[currentScreenshotIndex]}
          alt={`${projects[currentProjectIndex].title} screenshot ${currentScreenshotIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
          initial={{ opacity: 0, x: direction * 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 100 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default MainProjectScreenshots;