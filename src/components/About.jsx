import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const dotVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 0.7,
      transition: {
        delay: i * 0.1,
        duration: 1
      }
    })
  };

  return (
    <section
      id="about"
      className="relative w-screen min-h-[70vh] text-white px-6 md:px-20 pt-0 pb-16 flex flex-col items-center justify-center overflow-hidden"
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
          .wave-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, rgba(10, 10, 10, 0.8), rgba(26, 26, 46, 0.8));
            background-size: 200% 100%;
            animation: waveAnimation 8s linear infinite;
            z-index: 0;
          }
        `}
      </style>

      {/* Wave divider at top */}
      <motion.div 
        className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-24 fill-[#0b0b0b]">
          <path d="M321.39,56.44c58.53,4.7,113.39,22.12,172.92,29.77,70.15,9,143.18,3.93,211.61-9.87,47.17-9.38,94.39-23.93,143.63-27.85,56.5-4.46,112.16,5.87,167.34,18.93V0H0V27.35A600.15,600.15,0,0,1,321.39,56.44Z" />
        </svg>
      </motion.div>

      {/* Background elements */}
      <div className="wave-bg"></div>
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
          }}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
          custom={i}
        />
      ))}

      <motion.div 
        className="max-w-4xl text-center z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            About Me
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-300 text-base md:text-lg leading-relaxed mb-4"
          variants={itemVariants}
        >
          I'm an enthusiastic <span className="text-blue-400">Web Developer</span> passionate about
          designing responsive websites with HTML, CSS, and JavaScript, while mastering
          frameworks like React.
        </motion.p>
        
        <motion.p 
          className="text-gray-300 text-base md:text-lg leading-relaxed"
          variants={itemVariants}
        >
          My goal is to deliver fast, accessible web solutions, blending creativity with
          technical expertise to meet diverse client needs.
        </motion.p>
      </motion.div>

      {/* Wave divider at bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-24 fill-[#0b0b0b]">
          <path d="M321.39,56.44c58.53,4.7,113.39,22.12,172.92,29.77,70.15,9,143.18,3.93,211.61-9.87,47.17-9.38,94.39-23.93,143.63-27.85,56.5-4.46,112.16,5.87,167.34,18.93V100H0V72.65A600.15,600.15,0,0,0,321.39,56.44Z" />
        </svg>
      </motion.div>
    </section>
  );
};

export default About;