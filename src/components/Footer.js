import React from 'react';
import { motion } from 'framer-motion';
import arthatLogo from '../assets/arthat_logo.png';

const Footer = () => {
  const socialIcons = [
    { name: 'facebook', icon: 'https://cdn-icons-png.flaticon.com/128/733/733547.png' },
    { name: 'linkedin', icon: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png' },
    { name: 'twitter', icon: 'https://cdn-icons-png.flaticon.com/128/733/733579.png' },
    { name: 'youtube', icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png' },
  ];

  const companyLinks = ['About', 'Services', 'Press', 'Resources', 'Blog'];

  const newsItems = [
    {
      image: 'https://source.unsplash.com/300x200/?technology',
      text: 'Arthat AI launches revolutionary chatbot service',
      date: '15 July 2024',
    },
    {
      image: 'https://source.unsplash.com/300x200/?artificial-intelligence',
      text: 'How AI is transforming customer support in 2024',
      date: '10 July 2024',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div variants={childVariants}>
            <img 
              src={arthatLogo} 
              alt="Arthat Logo" 
              className="h-10 w-auto mb-6" 
            />
            <p className="text-sm text-gray-600 mb-6">FindBestSEO has ranked Arthat among the top 10 SEO companies for 2024.</p>
            <div className="flex space-x-4">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className="text-gray-400 hover:text-gray-600 transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{social.name}</span>
                  <img src={social.icon} alt={`${social.name} icon`} className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div variants={childVariants}>
            <h3 className="text-lg font-semibold text-gray-700 mb-6">Company</h3>
            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <a href="#" className="text-base text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={childVariants}>
            <h3 className="text-lg font-semibold text-gray-700 mb-6">Contact Details</h3>
            <div className="space-y-6">
            <p className="text-sm text-gray-600 mb-1">Email :info@arthar.ai<br/>
Phone:8884447404<br/>
Address:240, 32nd cross road, Jayanagar 7th block, bangalore
560070 pincode</p>
              
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-400 text-center">
          © 2024 ARTHAT. All Rights Reserved. |{' '}
          <motion.a
            href="#"
            className="hover:text-white transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Privacy
          </motion.a>{' '}
          |{' '}
          <motion.a
            href="#"
            className="hover:text-white transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Terms of Service
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;