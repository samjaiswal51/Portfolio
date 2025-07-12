import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

const FeedbackForm = () => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setMessage('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="feedback-section">
      <h3 className="section-title">Quick Feedback</h3>
      
      {submitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="success-message"
        >
          Thanks for your feedback!
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message..."
            className="feedback-input"
            required
          />
          <motion.button
            type="submit"
            whileHover={{ 
              scale: 1.05,
              background: 'linear-gradient(45deg, #4a90e2, #9147cc)'
            }}
            whileTap={{ scale: 0.95 }}
            className="submit-btn"
          >
            <FiSend className="send-icon" />
            Send
          </motion.button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;