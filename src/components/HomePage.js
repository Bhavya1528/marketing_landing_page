import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Navbar';
import Footer from './Footer';
import robotHand from '../assets/robot-hand.png';
import forwardparcel from '../assets/forward_parcel.png';
import cinepolis from '../assets/cinepolis.png';
import firstmeridian from '../assets/first_meridian.png';
import tata from '../assets/tata.png';
import fnc from '../assets/fnc.png';
import ramoji from '../assets/ramoji.png';
import king from '../assets/king.png';
import mahindra from '../assets/mahindra.png';
import gujarat from '../assets/gujarat.png';
import care from '../assets/care.png';
import robotGlobe from '../assets/robot-globe.png';
import robotHandshake from '../assets/robot-handshake.png';
import robotTablet from '../assets/robot-tablet.png';
import aiBrain from '../assets/ai-brain.png';
import robotHandSphere from '../assets/robot-hand-sphere.png';
import { ArrowRight, Check, ArrowUp, Moon, Sun, Play } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const AnimatedSection = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} transition-colors duration-300`}>
      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white'} min-h-screen`}>
        <Navbar />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  THE ONE <span className="text-green-500">BOT</span><br />
                  YOU NEED<br />TO GROW YOUR<br />BUSINESS!
                </h1>
                <p className="text-gray-600 mb-6">
                  Conversational AI Solutions | Omnichannel Chatbots | Lead Generation & Conversion
                </p>
                <div className="flex space-x-4">
                  <motion.button 
                    className="bg-blue-700 text-white px-6 py-2 rounded-md flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get start
                  </motion.button>
                  <motion.button 
                    className="bg-green-500 text-white px-6 py-2 rounded-md flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="h-5 w-5 mr-2" /> Watch Video
                  </motion.button>
                </div>
              </div>
              <motion.div 
                className="md:w-1/2 mt-8 md:mt-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img src={robotHand} alt="AI Robot Hand" className="w-full" />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} py-12`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-center mb-8">OUR WORK has FEATURED ON</h2>
              <Slider {...sliderSettings} className="featured-logos">
                {[forwardparcel, cinepolis, firstmeridian, tata, fnc, ramoji, king, mahindra, gujarat, care].map((logo, index) => (
                  <motion.div 
                    key={index} 
                    className="px-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img src={logo} alt={`Featured Logo ${index + 1}`} className="h-16 w-auto mx-auto" />
                  </motion.div>
                ))}
              </Slider>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">The Future of the Digital Age is Here!</h2>
                <p className="text-xl mb-4">
                  Now you can build powerful AI chatbots with our intuitive, drag-and-drop interface.
                </p>
                <p className="text-xl mb-6">
                  Increase engagement, automate tasks, and grow your business - all with one platform.
                </p>
                <button className="bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors">
                  MEET THE CREW
                </button>
              </div>
              <div className="md:w-1/2">
                <img src={robotGlobe} alt="Robot hand holding globe" className="w-full" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-100">
            <div className="flex flex-col md:flex-row-reverse items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Struggling to Keep Up with Customer Inquiries?</h2>
                <p className="text-xl mb-4">
                  Yes, we understand! Customers expect 24/7 support.
                </p>
                <p className="text-xl mb-6">
                  Our AI chatbot builder allows you to provide instant, personalised service, freeing your team to focus on what matters most.
                </p>
                <button className="bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors">
                  MEET THE CREW
                </button>
              </div>
              <div className="md:w-1/2">
                <img src={robotHandshake} alt="Robot handshake" className="w-full" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Tired of Wasting Time on Repetitive Tasks?</h2>
                <p className="text-xl mb-4">
                  Our AI chatbot builder helps businesses automate customer service, generate leads, and boost sales.
                </p>
                <p className="text-xl mb-6">
                  Build smarter customer interactions in minutes - no coding required!
                </p>
                <button className="bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors">
                  MEET THE CREW
                </button>
              </div>
              <div className="md:w-1/2">
                <img src={robotTablet} alt="Robot with tablet" className="w-full" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
            <div className="text-center mb-8">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Testimonial</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">What Clients Say About Us</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Check some of the highlights from our client testimonials and feel their joy of being on our bot!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Money Srivastava", content: "Saved me tons of time & money!" },
                { name: "Divyashree", content: "Finally, happy customers 24/7!" },
                { name: "Adithya Sagar", content: "Sales are soaring thanks to AI!" },
                { name: "Rakshith", content: "My chatbot feels like a real person!" },
                { name: "Sanjeev", content: "Makes running my business a breeze!" }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-full shadow-lg p-6 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 mt-1">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-blue-600 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <h3 className="text-4xl font-bold mb-2">30%</h3>
                  <p>Avg. Annual Growth</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold mb-2">$4.5M</h3>
                  <p>Asset/Sales Growth</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold mb-2">2M+</h3>
                  <p>Digital Engagements</p>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">From Marketing to Sales:</h2>
              <p className="text-xl mb-8">The AI You Need To Power Your Rapid Growth</p>
              <p className="mb-8">
                Automate repetitive tasks, qualify leads, and nurture prospects, all while providing 24/7 customer support. Experience the growth you deserve!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { title: "Marketing Tools", content: "We help you qualify leads and segment customers to reach the right audience with relevant marketing campaigns." },
                  { title: "Sales Support", content: "We help you segment customers and engage them with special offers, increasing conversions." },
                  { title: "Customer Services", content: "We help you answer questions, resolve issues, and free up agents for complex inquiries hands-free." },
                  { title: "e Commerce Benefits", content: "We help you answer product questions, recommend products, and keep customers engaged." }
                ].map((item, index) => (
                  <div key={index} className={`p-4 rounded-lg ${index === 1 ? 'bg-green-500' : 'bg-white text-blue-600'}`}>
                    <div className={`w-8 h-8 rounded-full ${index === 1 ? 'bg-white' : 'bg-blue-600'} flex items-center justify-center mb-2`}>
                      <Check className={`h-5 w-5 ${index === 1 ? 'text-green-500' : 'text-white'}`} />
                    </div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className={`${darkMode ? 'bg-gray-900' : 'bg-blue-50'} py-12`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src={aiBrain} alt="AI Brain" className="w-full" />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6">The Growth Engine: The AI Chatbot Advantages</h2>
                <ul className="space-y-4">
                  {[
                    "24/7 Lead Nurturing & Support: Engage leads with personalized chats, answer questions anytime, and convert more prospects.",
                    "Effortless Task Automation: Free your team from repetitive tasks and focus on high-impact strategies.",
                    "Data-Driven Marketing & Sales: Gain valuable insights and target the right audience for maximized results.",
                    "Enhanced Customer Experience: Provide instant, helpful interactions that build loyalty and satisfaction."
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Check className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Reach More, Sell Smarter: The Power of Omnichannel Chatbots!</h2>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                This AI chatbot goes beyond limitations. It thrives across platforms, connecting with B2B and B2C customers wherever they are. Speaking many languages, it empowers you to engage a global market.
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                But this isn't just any bot - it personalizes conversations, nurturing leads and feeling more like a human teammate on your journey.
              </p>
              <motion.button 
                className="bg-primary text-white px-6 py-2 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
            <motion.div 
              className="md:w-1/2 md:pl-12"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={robotHandSphere} alt="Robot hand with glowing sphere" className="w-full" />
            </motion.div>
          </div>
        </AnimatedSection>

        <Footer />

        {showScrollUp && (
          <motion.button
            className="fixed bottom-8 right-8 bg-primary text-white p-2 rounded-full shadow-lg"
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}

        <motion.button
          className={`fixed top-8 right-8 ${darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-400'} p-2 rounded-full shadow-lg`}
          onClick={toggleDarkMode}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </motion.button>
      </div>
    </div>
  );
};

export default HomePage;