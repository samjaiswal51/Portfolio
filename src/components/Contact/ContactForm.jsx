import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_g4eoslv', // Replace with your EmailJS service ID
        'template_i0paikh', // Replace with your EmailJS template ID
        formData,
        'l1cGSBoyVlNg0ASw6' // Replace with your EmailJS public key
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-lg"
    >
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300"
        >
          Message sent successfully!
        </motion.div>
      )}
      
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300"
        >
          Failed to send message. Please try again.
        </motion.div>
      )}

      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
          Your Name
        </label>
        <motion.input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
          className="w-full px-4 py-3 bg-[#111]/70 backdrop-blur-sm border border-[#333] rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
          Email Address
        </label>
        <motion.input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
          className="w-full px-4 py-3 bg-[#111]/70 backdrop-blur-sm border border-[#333] rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
          Your Message
        </label>
        <motion.textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
          className="w-full px-4 py-3 bg-[#111]/70 backdrop-blur-sm border border-[#333] rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
          required
        ></motion.textarea>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;