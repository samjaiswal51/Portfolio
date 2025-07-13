import React from 'react';
import { motion } from 'framer-motion';
import './footer.css';
import ContactInfo from './ContactInfo';
import SocialIcons from './SocialIcons';
import FeedbackForm from './FeedbackForm';
import ScrollToTop from './ScrollToTop';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const waveVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  return (
    <motion.footer 
      initial="hidden"
      animate="visible"
      className="relative w-screen min-h-[50vh] text-white px-6 md:px-20 py-16 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(45deg, #0b0b0b, #1a1a2e, #4a90e2, #0b0b0b)',
        backgroundSize: '400% 400%',
        animation: 'gradientAnimation 15s ease infinite',
      }}
    >
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 100%; }
            100% { background-position: 0% 0%; }
          }
          @keyframes waveAnimation {
            0% { background-position: 0 0; }
            100% { background-position: 100% 0; }
          }
          @keyframes dotMove {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>

      {/* Wave divider at top */}
      <motion.div 
        variants={waveVariants}
        className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -z-10"
      >
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-24 fill-[#0b0b0b]">
          <path d="M321.39,56.44c58.53,4.7,113.39,22.12,172.92,29.77,70.15,9,143.18,3.93,211.61-9.87,47.17-9.38,94.39-23.93,143.63-27.85,56.5-4.46,112.16,5.87,167.34,18.93V0H0V27.35A600.15,600.15,0,0,1,321.39,56.44Z" />
        </svg>
      </motion.div>

      {/* Background elements */}
      <motion.div 
        variants={waveVariants}
        className="wave-bg"
      ></motion.div>
      
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="dot absolute bg-blue-400 rounded-full"
          style={{
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `dotMove ${Math.random() * 3 + 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: 0.7
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            delay: i * 0.05,
            type: "spring",
            stiffness: 50,
            damping: 10
          }}
        />
      ))}

      <motion.div 
        variants={containerVariants}
        className="footer-content max-w-6xl z-10 relative"
      >
        {/* Left Section */}
        <motion.div variants={itemVariants}>
          <ContactInfo />
        </motion.div>
        
        {/* Middle Section */}
        <motion.div variants={itemVariants} className="middle-section">
          <SocialIcons />
          <ScrollToTop />
        </motion.div>
        
        {/* Right Section */}
        <motion.div variants={itemVariants}>
          <FeedbackForm />
        </motion.div>
      </motion.div>
      
      <motion.div 
        variants={itemVariants}
        className="footer-bottom max-w-6xl z-10 relative"
      >
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </motion.div>

      {/* Wave divider at bottom */}
      <motion.div 
        variants={waveVariants}
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none -z-10"
      >
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-24 fill-[#0b0b0b]">
          <path d="M321.39,56.44c58.53,4.7,113.39,22.12,172.92,29.77,70.15,9,143.18,3.93,211.61-9.87,47.17-9.38,94.39-23.93,143.63-27.85,56.5-4.46,112.16,5.87,167.34,18.93V100H0V72.65A600.15,600.15,0,0,0,321.39,56.44Z" />
        </svg>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;