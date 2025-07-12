import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      whileHover={{ 
        scale: 1.1,
        background: 'linear-gradient(45deg, #4a90e2, #9147cc)'
      }}
      whileTap={{ scale: 0.9 }}
      className="scroll-top-btn"
      aria-label="Scroll to top"
    >
      <FiChevronUp />
      Back to Top
    </motion.button>
  );
};

export default ScrollToTop;