import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../styles/cursor.css';

const Hero = () => {
  const socialLinks = [
    { 
      icon: <FaGithub />, 
      url: 'https://github.com/samjaiswal51', 
      color: 'from-gray-700 to-gray-900',
      hoverColor: 'hover:from-gray-600 hover:to-gray-800',
      glowColor: 'hover:shadow-gray-500/50'
    },
    { 
      icon: <FaLinkedin />, 
      url: 'https://www.linkedin.com/in/samarth-jaiswal-72b67b313/', 
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:from-blue-500 hover:to-blue-700',
      glowColor: 'hover:shadow-blue-500/50'
    },
    { 
      icon: <FaInstagram />, 
      url: 'https://www.instagram.com/__samarthhhh__', 
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-400 hover:to-purple-500',
      glowColor: 'hover:shadow-purple-500/50'
    },
  ];

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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <section
      id="hero"
      className="w-screen min-h-[85vh] text-white overflow-hidden relative flex items-center justify-center px-4"
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
          @keyframes waveAnimation {
            0% { background-position: 0 0; }
            100% { background-position: 100% 0; }
          }
          .social-icon {
            transition: all 0.3s ease;
            filter: drop-shadow(0 0 5px rgba(0,0,0,0.3));
          }
          .social-icon:hover {
            transform: translateY(-5px) scale(1.1);
            filter: drop-shadow(0 0 15px currentColor);
          }
        `}
      </style>

      {/* Background elements */}
      <div className="wave-bg"></div>
      {[...Array(15)].map((_, i) => (
        <motion.div 
          key={i}
          className="dot absolute w-2 h-2 bg-blue-400 rounded-full opacity-70"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `dotMove ${Math.random() * 3 + 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            width: `${Math.random() * 6 + 4}px`,
            height: `${Math.random() * 6 + 4}px`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: i * 0.1 }}
        />
      ))}

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
        {/* Profile Image */}
        <motion.div 
          className="flex justify-center w-full md:w-1/2"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-[#1a1a2e] relative">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent hover:border-blue-400 opacity-0 hover:opacity-100 transition-all duration-300"></div>
          </div>
        </motion.div>

        {/* Hero Text */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight" variants={itemVariants}>
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-[0_0_10px_#c084fc]">
              Samarth Jaiswal
            </span>
          </motion.h1>

          <motion.h2 className="text-xl md:text-2xl text-blue-300 mt-2 font-medium" variants={itemVariants}>
            <Typewriter
              words={[
                'Full Stack Developer',
                'React.js Enthusiast',
                'UI/UX Designer',
                'Learner 🚀',
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.h2>

          <motion.p className="mt-4 text-gray-300 text-sm md:text-base" variants={itemVariants}>
            I build full-stack applications with a strong focus on modern UI,
            performance, and clean code. Let's create something amazing together!
          </motion.p>

          <motion.div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4" variants={itemVariants}>
            <a
              href="/resume.pdf"
              download
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white px-5 py-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
            >
              📄 Download Resume
            </a>
            <a
              href="#projects"
              className="border border-blue-400 text-blue-300 hover:bg-blue-600 hover:text-white px-5 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              🚀 Show Projects
            </a>
          </motion.div>

          {/* Social Links with Glowing Gradient Hover */}
          <motion.div 
            className="mt-8 flex justify-center md:justify-start gap-4"
            variants={itemVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-icon w-10 h-10 rounded-full bg-gradient-to-r ${link.color} ${link.hoverColor} flex items-center justify-center text-white text-lg shadow-md hover:shadow-lg ${link.glowColor}`}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;