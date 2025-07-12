import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Hero', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-lg bg-[#0d0d0d]/70 shadow-md' : 'bg-[#0d0d0d]'}`}
      style={{
        background: 'linear-gradient(135deg, #1a1a2e, #2e2e48, #4a90e2, #1a1a2e)',
        backgroundSize: '400% 400%',
        animation: 'navbarGradientAnimation 12s ease infinite',
      }}
    >
      <style>
        {`
          @keyframes navbarGradientAnimation {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 100%; }
            100% { background-position: 0% 0%; }
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-2xl md:text-3xl font-extrabold tracking-wide
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
          text-transparent bg-clip-text drop-shadow-[0_0_8px_#9333ea]"
        >
          sam.dev
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-blue-400 relative group transition"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111]/90 backdrop-blur-lg px-6 pb-4 space-y-2 rounded-b-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-blue-400 font-medium transition duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;