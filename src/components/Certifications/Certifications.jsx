import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi';

const Certifications = ({ certifications }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  // Show 3 certificates at a time
  const itemsPerPage = 3;
  const totalGroups = Math.ceil(certifications.length / itemsPerPage);

  const nextGroup = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
  };

  const prevGroup = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  // Get current group of certificates
  const currentCertificates = certifications.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  // Function to handle certificate view
  const handleViewCertificate = (certificateUrl, event) => {
    event.preventDefault();
    window.open(certificateUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="certifications" 
      className="relative w-full py-20 px-6 text-white"
      style={{
        background: 'linear-gradient(45deg, #0b0b0b, #1a1a2e, #4a90e2, #0b0b0b)',
        backgroundSize: '400% 400%',
        animation: 'gradientAnimation 15s ease infinite',
      }}
    >
      {/* Background elements */}
      <div className="wave-bg"></div>
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="dot absolute bg-blue-400 rounded-full"
          style={{
            width: `${Math.random() * 6 + 4}px`,
            height: `${Math.random() * 6 + 4}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `dotMove ${Math.random() * 3 + 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: 0.6
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevGroup}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 rounded-full bg-[#111]/70 backdrop-blur-sm border border-[#333] hover:border-blue-500 transition-all duration-300 text-2xl flex items-center justify-center z-20"
            disabled={currentIndex === 0}
          >
            <FiChevronLeft />
          </button>
          
          <button 
            onClick={nextGroup}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 rounded-full bg-[#111]/70 backdrop-blur-sm border border-[#333] hover:border-blue-500 transition-all duration-300 text-2xl flex items-center justify-center z-20"
            disabled={currentIndex === totalGroups - 1}
          >
            <FiChevronRight />
          </button>

          <div 
            className="relative h-[500px] w-full overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex justify-center space-x-8"
              >
                {currentCertificates.map((cert, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    className="w-[400px] h-[420px] flex-shrink-0 relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {/* Glassmorphism Card */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-2xl border-2 border-white/10 hover:border-blue-400/50 transition-all duration-300 h-full overflow-hidden shadow-2xl">
                      
                      {/* Background Image */}
                      <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${cert.image})` }}
                        initial={{ filter: 'blur(0px)', opacity: 1 }}
                        whileHover={{ 
                          filter: 'blur(8px) brightness(0.3)',
                          opacity: 0.7,
                          transition: { duration: 0.4 }
                        }}
                      />
                      
                      {/* Content Overlay */}
                      <motion.div
                        className="absolute inset-0 flex flex-col justify-between p-8"
                        initial={{ 
                          backdropFilter: 'blur(0px)',
                          backgroundColor: 'rgba(0,0,0,0)'
                        }}
                        whileHover={{ 
                          backdropFilter: 'blur(10px)',
                          backgroundColor: 'rgba(17, 17, 17, 0.7)',
                          transition: { duration: 0.4 }
                        }}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ 
                            opacity: 1, 
                            y: 0,
                            transition: { delay: 0.2, duration: 0.3 }
                          }}
                          className="flex flex-col h-full justify-center"
                        >
                          <h3 className="text-3xl font-bold mb-4 text-white">{cert.title}</h3>
                          <p className="text-xl text-blue-300 mb-3">{cert.issuer}</p>
                          <p className="text-lg text-gray-300 mb-6">{cert.date}</p>
                          {cert.description && (
                            <p className="text-gray-200 text-lg mb-8 leading-relaxed">{cert.description}</p>
                          )}
                          
                          <div className="mt-auto">
                            <button
                              onClick={(e) => handleViewCertificate(cert.image, e)}
                              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl transition-all duration-300 w-full text-xl font-medium shadow-lg hover:shadow-blue-500/30"
                            >
                              <FiExternalLink className="text-2xl" /> View Certificate
                            </button>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-4 h-4 rounded-full transition-all ${currentIndex === index ? 'bg-blue-500 w-6' : 'bg-gray-600'}`}
              aria-label={`Go to group ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
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
        @keyframes dotMove {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Certifications;