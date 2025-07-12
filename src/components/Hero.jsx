import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profileImg from '../assets/profile.jpg';
import '../styles/cursor.css';

const Hero = () => {
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
        `}
      </style>

      {/* Background elements */}
      <div className="wave-bg"></div>
      {[...Array(15)].map((_, i) => (
        <div 
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
        />
      ))}

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
        {/* Profile Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-[#1a1a2e]">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Hero Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-[0_0_10px_#c084fc]">
              Samarth Jaiswal
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-blue-300 mt-2 font-medium">
            <Typewriter
              words={[
                'Full Stack Developer',
                'React.js Enthusiast',
                'Node.js Backend Builder',
                'Tech Explorer 🚀',
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          <p className="mt-4 text-gray-300 text-sm md:text-base">
            I build full-stack applications with a strong focus on modern UI,
            performance, and clean code. Let's create something amazing together!
          </p>

          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="/resume.pdf"
              download
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white px-5 py-3 rounded-xl shadow-md transition-all duration-300"
            >
              📄 Download Resume
            </a>
            <a
              href="#projects"
              className="border border-blue-400 text-blue-300 hover:bg-blue-600 hover:text-white px-5 py-3 rounded-xl transition-all duration-300"
            >
              🚀 Show Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;