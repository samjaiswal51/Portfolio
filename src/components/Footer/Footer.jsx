import React from 'react';
import './footer.css';
import ContactInfo from './ContactInfo';
import SocialIcons from './SocialIcons';
import FeedbackForm from './FeedbackForm';
import ScrollToTop from './ScrollToTop';

const Footer = () => {
  return (
    <footer 
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
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -z-10">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-24 fill-[#0b0b0b]">
          <path d="M321.39,56.44c58.53,4.7,113.39,22.12,172.92,29.77,70.15,9,143.18,3.93,211.61-9.87,47.17-9.38,94.39-23.93,143.63-27.85,56.5-4.46,112.16,5.87,167.34,18.93V0H0V27.35A600.15,600.15,0,0,1,321.39,56.44Z" />
        </svg>
      </div>

      {/* Background elements */}
      <div className="wave-bg"></div>
      {[...Array(20)].map((_, i) => (
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

      <div className="footer-content max-w-6xl z-10 relative">
        {/* Left Section */}
        <ContactInfo />
        
        {/* Middle Section */}
        <div className="middle-section">
          <SocialIcons />
          <ScrollToTop />
        </div>
        
        {/* Right Section */}
        <FeedbackForm />
      </div>
      
      <div className="footer-bottom max-w-6xl z-10 relative">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none -z-10">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-24 fill-[#0b0b0b]">
          <path d="M321.39,56.44c58.53,4.7,113.39,22.12,172.92,29.77,70.15,9,143.18,3.93,211.61-9.87,47.17-9.38,94.39-23.93,143.63-27.85,56.5-4.46,112.16,5.87,167.34,18.93V100H0V72.65A600.15,600.15,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;