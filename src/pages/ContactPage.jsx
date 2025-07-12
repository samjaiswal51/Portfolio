import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm, ContactInfo } from '../components/Contact';

const ContactPage = () => {
  return (
    <section 
      id="contact" 
      className="relative w-full min-h-screen text-white px-6 py-16 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(45deg, #0b0b0b, #1a1a2e, #4a90e2, #0b0b0b)',
        backgroundSize: '400% 400%',
        animation: 'gradientAnimation 15s ease infinite',
      }}
    >
      {/* Background elements */}
      <div className="wave-bg"></div>
      {[...Array(25)].map((_, i) => (
        <div 
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
        />
      ))}

      <div className="max-w-6xl w-full z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <ContactInfo />
          <ContactForm />
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

export default ContactPage;