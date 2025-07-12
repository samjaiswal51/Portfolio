import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const SocialIcons = () => {
  const socials = [
    { icon: <FiGithub />, url: 'https://github.com' },
    { icon: <FiTwitter />, url: 'https://twitter.com' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com' },
    { icon: <FiInstagram />, url: 'https://instagram.com' }
  ];

  return (
    <div className="flex space-x-4">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;