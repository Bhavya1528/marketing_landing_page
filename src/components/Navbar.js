import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import arthatLogo from '../assets/arthat_logo.png';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center">
             
              <img className="h-8 w-auto mr-2" src={arthatLogo} alt="Arthat" />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {['Why Arthat AI', 'Blog', 'Product', 'Solutions', 'About Us'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-700 hover:text-[#2563EB] px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link
              to="/contact-us"
              className="px-6 py-2.5 text-sm font-medium rounded-full text-white bg-[#3b5ce4] hover:bg-[#2563EB] transition duration-300 ease-in-out"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;