import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava,
  FaNodeJs, FaBootstrap
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiCplusplus } from 'react-icons/si';

const skills = [
  { 
    name: 'HTML5', 
    icon: <FaHtml5 className="text-orange-500" />, 
    desc: 'Semantic markup, Accessibility, SEO optimization' 
  },
  { 
    name: 'CSS3', 
    icon: <FaCss3Alt className="text-blue-500" />, 
    desc: 'Animations, Flexbox, Grid, Responsive design' 
  },
  { 
    name: 'JavaScript', 
    icon: <FaJs className="text-yellow-400" />, 
    desc: 'ES6+, DOM manipulation, Async programming' 
  },
  { 
    name: 'React', 
    icon: <FaReact className="text-cyan-400" />, 
    desc: 'Hooks, Context API, Component architecture' 
  },
  { 
    name: 'Node.js', 
    icon: <FaNodeJs className="text-green-500" />, 
    desc: 'Server-side JavaScript, NPM ecosystem' 
  },
  { 
    name: 'Express', 
    icon: <SiExpress className="text-gray-300" />, 
    desc: 'REST APIs, Middleware, Routing' 
  },
  { 
    name: 'Tailwind', 
    icon: <SiTailwindcss className="text-cyan-300" />, 
    desc: 'Utility-first CSS, Responsive design' 
  },
  { 
    name: 'Bootstrap', 
    icon: <FaBootstrap className="text-purple-500" />, 
    desc: 'Responsive grids, Components, Theming' 
  },
  { 
    name: 'Java', 
    icon: <FaJava className="text-red-500" />, 
    desc: 'OOP concepts, Data structures' 
  },
  { 
    name: 'C++', 
    icon: <SiCplusplus className="text-blue-400" />, 
    desc: 'Algorithms, Memory management' 
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen text-white px-6 py-16 flex flex-col items-center justify-center overflow-hidden"
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
          .flip-card {
            perspective: 1000px;
          }
          .flip-card-inner {
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card-front, .flip-card-back {
            backface-visibility: hidden;
          }
          .flip-card-back {
            transform: rotateY(180deg);
          }
        `}
      </style>

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
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            My Tech Stack
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flip-card h-40">
              <div className="flip-card-inner w-full h-full">
                {/* Front of card */}
                <div className="flip-card-front absolute w-full h-full bg-[#111]/70 backdrop-blur-sm rounded-xl border border-[#333] flex flex-col items-center justify-center p-4">
                  <div className="text-5xl mb-2">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
                </div>
                
                {/* Back of card */}
                <div className="flip-card-back absolute w-full h-full bg-[#111]/90 backdrop-blur-sm rounded-xl border border-blue-500/50 flex items-center justify-center p-4">
                  <p className="text-sm text-gray-300 text-center">{skill.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;