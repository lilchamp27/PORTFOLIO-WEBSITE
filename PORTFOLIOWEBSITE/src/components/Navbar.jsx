import { useState, useContext } from 'react';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-orange-100 dark:border-orange-900/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">

          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="text-xl font-light text-black dark:text-white">
              Oduneye
              <span className="text-orange-600 dark:text-orange-400 font-normal ml-1">B.</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className="relative text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-600 dark:bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}

            {/* Dark Mode Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="relative p-3 rounded-full bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              <motion.div
                animate={{ rotate: darkMode ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {darkMode ? (
                  <FiSun className="text-orange-500 w-4 h-4" />
                ) : (
                  <FiMoon className="text-orange-600 w-4 h-4" />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-full bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <FiX className="text-orange-600 dark:text-orange-400 h-5 w-5" />
                ) : (
                  <FiMenu className="text-orange-600 dark:text-orange-400 h-5 w-5" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-orange-100 dark:border-orange-900/30"
      >
        <div className="px-6 py-6 space-y-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                x: isMenuOpen ? 0 : -20,
              }}
              transition={{
                duration: 0.3,
                delay: isMenuOpen ? index * 0.1 : 0,
              }}
            >
              <Link
                to={link.path}
                className="block text-lg font-light text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          {/* Mobile Dark Mode Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isMenuOpen ? 1 : 0,
              y: isMenuOpen ? 0 : 20,
            }}
            transition={{
              duration: 0.3,
              delay: isMenuOpen ? navLinks.length * 0.1 : 0,
            }}
            className="pt-6 border-t border-orange-100 dark:border-orange-900/30"
          >
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                setIsMenuOpen(false);
              }}
              className="flex items-center space-x-3 text-lg font-light text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300"
            >
              <div className="p-2 rounded-full bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800">
                {darkMode ? (
                  <FiSun className="text-orange-500 w-4 h-4" />
                ) : (
                  <FiMoon className="text-orange-600 w-4 h-4" />
                )}
              </div>
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
