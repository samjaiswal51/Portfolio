import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const ResumeDownload = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Developer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ 
        scale: 1.05,
        background: 'linear-gradient(45deg, #4a90e2, #9147cc)'
      }}
      whileTap={{ scale: 0.95 }}
      className="download-btn"
    >
      <FiDownload className="download-icon" />
      Download Resume
    </motion.button>
  );
};

export default ResumeDownload;