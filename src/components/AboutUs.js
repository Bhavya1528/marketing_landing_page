import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-100">
        <motion.div 
          className="relative h-96 bg-cover bg-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")'}}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white text-center">About Us</h1>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 py-12">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" {...fadeIn}>
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="mr-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">S</span>
                Our Story
              </h2>
              <p className="text-gray-700">
                Founded in 2022, Arthat.ai is at the forefront of revolutionizing customer support through innovative AI solutions. Our mission is to solve customer support challenges for businesses worldwide, leveraging the power of custom-built chatbots and cutting-edge artificial intelligence.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="mr-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">E</span>
                Our Expertise
              </h2>
              <p className="text-gray-700">
                At Arthat.ai, we specialize in developing bespoke chatbots tailored to the unique needs of both businesses and consumers. By harnessing the most advanced available technologies, we create AI-powered solutions that transform customer interactions and streamline support processes.
              </p>
            </div>
          </motion.div>

          <motion.div className="mt-12 bg-white rounded-lg shadow-lg p-6" {...fadeIn}>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <span className="mr-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">G</span>
              Global Reach
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 pr-4">
                <p className="text-gray-700 mb-4">
                  With a rapidly expanding international presence, Arthat.ai proudly serves clients across North America, Europe, Asia, and Australia. Our solutions are making waves in:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>United States</li>
                  <li>Canada</li>
                  <li>United Kingdom</li>
                  <li>France</li>
                  <li>India</li>
                  <li>Japan</li>
                  <li>Australia</li>
                  <li>And throughout Europe</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" className="w-full h-auto">
                  <path d="M781.68,324.4l-2.31,8.68l-12.53,4.23l-3.75-4.4l-1.82,0.5l1.99,4.4l3.75,0.33l4.14,1.82l-6.46,2.48l-2.64,1.82l-5.47,1.32H754.6l-1.32,1.82v2.81l4.14,2.81l4.46,1.32l-0.66,2.48l-3.31-0.5l-4.14-2.48l-7.12,0.17l-2.48-3.47l1.32-1.32l-0.17-1.65l-3.14-0.17l-2.48,1.82l-2.48-1.32l-6.29,2.81l-1.65-4.3l1.32-2.48l-3.31-1.65l-0.33,1.65l-2.81,0.17l0.17,1.65l2.48,1.17l0.66,2.81h-2.64l-3.97-6.12l-2.15,0.5l-1-3.47l0.5-2.15l3.64-1.65l2.48-0.17l0.5-1.99l-5.79-0.17l-3.31,0.66l-0.17,1.32l1.32,1.32l-1.32,1.65l-3.14,1.32l0.17,2.81h3.97l-0.17,4.79l-1.65,2.15l-3.47-1.99v-1.32l-2.15-0.99l0.33-1.82l-2.48-1.82l-0.99,1.32l-0.99-0.99v-2.48l1.65-1.65l2.81-0.17l0.17-2.48l-1.32-2.48v-4.95l-1.82-1.65l-4.14-0.17l-0.17-1.32l1.32-1.32l0.17-1.65l-1.65-1.32l-2.48,1.32l-1.65,2.15l0.5,1.15l2.81,1.65l0.17,1.32l-2.48,0.17l0.5,1.15l-0.5,2.48l1.65,1.65l-0.17,2.15l1.32,2.48l0.17,1.65l4.3,2.81l4.63,2.81l-1.65,1.65V360l2.81,3.64h3.47v1.99l5.96,3.14l2.64-0.16l1.65-3.14l-1.32-1.65v-1.65l3.97-3.14l2.15,0.33l2.15,1.32h1.65l3.97,1.99l3.8-0.33l0.99-1.32l7.28-1.99l-0.33,3.47l1.99,1.82l5.79,0.33l4.3,2.48l-0.66,1.99l-3.14-0.33l-2.15,3.64l2.81,3.47l2.48,0.5l3.31-4.63l7.45-3.8l6.95,0.17l0.5,2.81h3.47v-1.65h3.97l3.14-2.81v-5.13l-2.15-1.65l1.32-3.14l-1.82-1.82l-2.64,1.65l-3.97-2.48l-1.65,1.65h-2.48l-0.99-1.32l0.99-1.49h2.64l1.99-1.82l-1.82-4.14l-1.32-1.32l-10.09-0.66L781.68,324.4z M722.48,332.92l-2.64,1.65l0.99,1.65l1.65,0.99l1.82-1.82L722.48,332.92z" fill="#ccc"/>
                  {/* Add more path elements for other continents/countries */}
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8" {...fadeIn}>
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="mr-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white">A</span>
                Our Approach
              </h2>
              <p className="text-gray-700">
                We believe in staying ahead of the curve. By continuously adapting to the latest advancements in AI and chatbot technology, we ensure our clients receive solutions that are not just current, but future-ready. Our commitment to excellence drives us to push the boundaries of what's possible in AI-driven customer support.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="mr-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">F</span>
                Looking Ahead
              </h2>
              <p className="text-gray-700">
                As we continue to grow and evolve, Arthat.ai remains dedicated to our founding vision: solving customer support problems for businesses around the world. We're excited about the future of AI and its potential to transform customer experiences, and we invite you to join us on this exciting journey.
              </p>
            </div>
          </motion.div>

          <motion.div className="mt-12 text-center" {...fadeIn}>
            <p className="text-xl font-semibold text-gray-800">
              Experience the Arthat.ai difference – where cutting-edge technology meets unparalleled customer support solutions.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;