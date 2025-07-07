import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black min-h-screen" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight" 
            style={{ fontFamily: 'Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            GET IN <span className="text-orange-800">TOUCH</span>
          </h2>
          <motion.div 
            className="w-16 sm:w-20 md:w-24 h-1 bg-orange-800 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <motion.h3 
              className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8"
              style={{ fontFamily: 'Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              CONTACT INFO
            </motion.h3>

            {/* Email */}
            <motion.div 
              className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-orange-800 transition-colors flex-shrink-0">
                <FiMail className="w-4 h-4 sm:w-5 sm:h-5 text-orange-800" />
              </div>
              <a 
                href="mailto:oduneyebolu004@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors font-light text-sm sm:text-base break-all"
                style={{ fontFamily: 'Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                oduneyebolu004@gmail.com
              </a>
            </motion.div>

            {/* Phone Numbers */}
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
              <motion.div 
                className="flex items-center gap-3 sm:gap-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-orange-800 transition-colors flex-shrink-0">
                  <FiPhone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-800" />
                </div>
                <a 
                  href="tel:+2349057746296" 
                  className="text-gray-400 hover:text-white transition-colors font-light text-sm sm:text-base"
                  style={{ fontFamily: 'Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                >
                  +234 905 774 6296
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 sm:gap-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-orange-800 transition-colors flex-shrink-0">
                  <FiPhone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-800" />
                </div>
                <a 
                  href="tel:+2347039836610" 
                  className="text-gray-400 hover:text-white transition-colors font-light text-sm sm:text-base"
                  style={{ fontFamily: 'Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                >
                  +234 703 983 6610
                </a>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.h3 
              className="text-xl sm:text-2xl font-light text-white mb-4 sm:mb-6"
              style={{ fontFamily: 'Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              SOCIAL MEDIA
            </motion.h3>
            <div className="flex gap-3 sm:gap-4">
              <motion.a 
                href="https://github.com/lilchamp27" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-gray-800 hover:border-orange-800 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-gray-800 hover:border-orange-800 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.a>
              <motion.a 
                href="https://twitter.com/yourhandle" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-gray-800 hover:border-orange-800 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiTwitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <div className="bg-gray-900 border border-gray-800 p-6 sm:p-8">
              <div className="mb-4 sm:mb-6">
                <label 
                  className="block mb-2 text-white font-light text-sm sm:text-base"
                  style={{ fontFamily: 'Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                >
                  NAME
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  name="name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-gray-800 text-white focus:border-orange-800 focus:outline-none transition-colors font-light text-sm sm:text-base"
                  style={{ fontFamily: 'Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                />
              </div>

              <div className="mb-4 sm:mb-6">
                <label 
                  className="block mb-2 text-white font-light text-sm sm:text-base"
                  style={{ fontFamily: 'Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  name="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-gray-800 text-white focus:border-orange-800 focus:outline-none transition-colors font-light text-sm sm:text-base"
                  style={{ fontFamily: 'Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                />
              </div>

              <div className="mb-6 sm:mb-8">
                <label 
                  className="block mb-2 text-white font-light text-sm sm:text-base"
                  style={{ fontFamily: 'Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                >
                  MESSAGE
                </label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  name="message"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black border border-gray-800 text-white focus:border-orange-800 focus:outline-none transition-colors resize-none font-light text-sm sm:text-base"
                  style={{ fontFamily: 'Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                ></textarea>
              </div>

              <motion.button
                onClick={() => {
                  // You can add form submission logic here
                  console.log('Form data:', formData);
                }}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-orange-800 hover:bg-orange-700 text-white font-light transition-colors w-full text-sm sm:text-base"
                style={{ fontFamily: 'Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                SEND MESSAGE
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;