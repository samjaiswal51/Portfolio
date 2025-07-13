import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const SocialIcons = () => {
  const platforms = [
    { icon: <FiGithub />, url: "https://github.com/samjaiswal51", name: "GitHub" },
    { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/samarth-jaiswal-72b67b313/", name: "LinkedIn" },
    { icon: <FaHackerrank />, url: "https://www.hackerrank.com/profile/samjaiswal51", name: "HackerRank" },
    { icon: <SiLeetcode />, url: "https://leetcode.com/u/samarth_jaiswal/", name: "LeetCode" },
    { icon: <FiInstagram />, url: "https://www.instagram.com/__samarthhhh__", name: "Instagram" }
  ];

  return (
    <div className="social-icons-container">
      {platforms.map((platform, index) => (
        <motion.a
          key={index}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ 
            y: -5,
            background: 'linear-gradient(45deg, #4a90e2, #9147cc)'
          }}
          whileTap={{ scale: 0.9 }}
          className="social-icon"
          aria-label={platform.name}
          title={platform.name}
        >
          {platform.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;