import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-white">Newsletter</h4>
      <p className="text-gray-400 text-sm">
        Subscribe to get updates on new products and offers.
      </p>
      
      {subscribed ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-3 bg-green-500/20 text-green-400 rounded-lg text-sm"
        >
          Thanks for subscribing!
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium"
          >
            Subscribe
          </motion.button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
