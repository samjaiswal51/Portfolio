import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi';

const Certifications = ({ certifications }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hoveredCard, setHoveredCard] = useState(null);

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

          <div className="relative h-[500px] w-full overflow-hidden">
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
                    className="w-[350px] h-[450px] flex-shrink-0 relative"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl shadow-2xl overflow-hidden border border-[#2a2a4a] hover:border-blue-500 transition-all duration-300 relative">
                      {/* Certificate Image - Always visible */}
                      <div className={`absolute inset-0 transition-all duration-500 ${hoveredCard === index ? 'opacity-20 blur-sm' : 'opacity-100'}`}>
                        <img
                          className="w-full h-full object-cover"
                          src={cert.image}
                          alt={cert.title}
                        />
                      </div>
                      
                      {/* Certificate Content - Visible on hover */}
                      <div className={`absolute inset-0 p-6 flex flex-col justify-center transition-all duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="text-center">
                          <h3 className="text-2xl font-bold mb-2 text-white">{cert.title}</h3>
                          <p className="text-blue-300 mb-4">{cert.issuer}</p>
                          <p className="text-gray-300 mb-6">{cert.description}</p>
                          <button
                            onClick={(e) => handleViewCertificate(cert.image, e)}
                            className="mx-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300"
                          >
                            <FiExternalLink className="text-lg" /> View Certificate
                          </button>
                        </div>
                      </div>
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