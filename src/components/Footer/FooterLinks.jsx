import React from 'react';
import { motion } from 'framer-motion';

const FooterLinks = ({ title, links }) => {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <motion.li 
            key={index}
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a 
              href={link.href} 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;