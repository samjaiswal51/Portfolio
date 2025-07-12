import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail } from 'react-icons/fi';

const ContactInfo = () => {
  return (
    <div className="contact-section">
      <h3 className="developer-name">John Doe</h3>
      <p className="developer-title">Full Stack Developer | Competitive Programmer</p>
      
      <div className="contact-items">
        <motion.a 
          href="tel:+1234567890"
          whileHover={{ x: 5 }}
          className="contact-item"
        >
          <FiPhone className="contact-icon" />
          <span>+1 (234) 567-890</span>
        </motion.a>
        
        <motion.a 
          href="mailto:john@example.com"
          whileHover={{ x: 5 }}
          className="contact-item"
        >
          <FiMail className="contact-icon" />
          <span>john@example.com</span>
        </motion.a>
      </div>
    </div>
  );
};

export default ContactInfo;