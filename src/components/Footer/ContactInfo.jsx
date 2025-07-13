import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail } from 'react-icons/fi';

const ContactInfo = () => {
  return (
    <div className="contact-section">
      <h3 className="developer-name">Samarth Jaiswal</h3>
      <p className="developer-title">Web Developer</p>
      
      <div className="contact-items">
        <motion.a 
          href="tel:+8303046100"
          whileHover={{ x: 5 }}
          className="contact-item"
        >
          <FiPhone className="contact-icon" />
          <span>+91 8303046100</span>
        </motion.a>
        
        <motion.a 
          href="mailto: samjaiswal51@gmail.com"
          whileHover={{ x: 5 }}
          className="contact-item"
        >
          <FiMail className="contact-icon" />
          <span>samjaiswal51@gmail.com</span>
        </motion.a>
      </div>
    </div>
  );
};

export default ContactInfo;