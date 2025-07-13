import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <FiMail className="text-2xl text-blue-400" />,
      title: "Email",
      value: "samjaiswal51@gmail.com",
      link: "mailto:samjaiswal51@gmail.com"
    },
    {
      icon: <FiPhone className="text-2xl text-blue-400" />,
      title: "Phone",
      value: "+91 8303046100",
      link: "tel:+91 8303046100"
    },
    {
      icon: <FiMapPin className="text-2xl text-blue-400" />,
      title: "Location",
      value: "Uttar Pradesh, India",
      link: "https://www.google.com/maps/place/Natwa+Police+Station/@25.1437931,82.538823,801m/data=!3m2!1e3!4b1!4m6!3m5!1s0x398fea6019527c79:0xecffd72dd207a666!8m2!3d25.1437931!4d82.5413979!16s%2Fg%2F11cmy9wmpj?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg"
    >
      <h3 className="text-2xl font-bold mb-6 text-white">
        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Contact Information
        </span>
      </h3>
      
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="flex items-start space-x-4 group"
          >
            <div className="p-3 bg-[#111]/70 backdrop-blur-sm rounded-lg border border-[#333] group-hover:border-blue-500 transition-all duration-300">
              {item.icon}
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-300">{item.title}</h4>
              <p className="text-gray-400">{item.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo;