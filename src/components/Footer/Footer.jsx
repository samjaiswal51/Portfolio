import React from 'react';
import { motion } from 'framer-motion';
import { FooterLinks, SocialIcons, Newsletter } from './';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              YourBrand
            </span>
          </h3>
          <p className="text-gray-400">
            Building digital experiences that matter. Let's create something amazing together.
          </p>
          <SocialIcons />
        </div>

        <FooterLinks 
          title="Quick Links"
          links={[
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Services', href: '/services' },
            { name: 'Portfolio', href: '/portfolio' },
            { name: 'Contact', href: '/contact' }
          ]}
        />

        <FooterLinks 
          title="Resources"
          links={[
            { name: 'Blog', href: '/blog' },
            { name: 'Documentation', href: '/docs' },
            { name: 'Help Center', href: '/support' },
            { name: 'Tutorials', href: '/tutorials' },
            { name: 'Community', href: '/community' }
          ]}
        />

        <div className="space-y-4">
          <Newsletter />
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} YourBrand. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/privacy" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
          <a href="/terms" className="text-gray-500 hover:text-white text-sm">Terms of Service</a>
          <a href="/cookies" className="text-gray-500 hover:text-white text-sm">Cookie Policy</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;