import { motion } from 'framer-motion';
import PDFDownload from '../components/PDFDownload';

import { useNavigate } from 'react-router-dom';


const Hero = () => {

  const navigate = useNavigate();

  return (

    <section className="mt-5 min-h-screen relative overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0">
        {/* Sophisticated geometric patterns */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-orange-100/30 to-orange-200/20 dark:from-orange-900/10 dark:to-orange-800/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-tr from-orange-50/40 to-orange-100/30 dark:from-orange-950/20 dark:to-orange-900/10 rounded-full blur-2xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,165,0,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/50 rounded-full"
              >
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-sm font-medium text-orange-800 dark:text-orange-200">
                  Open to opportunities
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-4"
              >
                <h1 className="font-futura text-5xl lg:text-7xl font-light tracking-tight text-black dark:text-white leading-tight">
                  ODUNEYE<br />
                  <span className="text-orange-600 dark:text-orange-400 font-normal">
                    BOLUWATIFEMITO
                  </span>
                </h1>
              </motion.div>

              {/* Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-xl lg:text-2xl font-normal text-gray-600 dark:text-gray-300">
                  Software Engineer & MERN Stack Developer
                </h2>
                
                <p className="font-futura text-base lg:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg font-light">
                  I create clean, efficient web applications with a focus on user experience and performance. Passionate about building digital solutions that make a difference.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <PDFDownload />
                <button onClick={() => navigate('/projects')} className="px-8 py-3 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
                  View Projects
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Minimalistic Design Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Main Geometric Design */}
                <div className="relative w-80 h-96 lg:w-96 lg:h-[480px]">
                  
                  {/* Large Circle - Main Element */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
                    className="absolute top-8 left-8 w-64 h-64 rounded-full border-2 border-orange-300 dark:border-orange-700"
                  >
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20"></div>
                  </motion.div>

                  {/* Medium Rectangle */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="absolute bottom-16 right-0 w-32 h-48 bg-gradient-to-t from-orange-100 to-orange-50 dark:from-orange-900/20 dark:to-orange-950/10 rounded-lg border border-orange-200 dark:border-orange-800"
                  ></motion.div>

                  {/* Small Accent Circles */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="absolute top-0 right-16 w-8 h-8 bg-orange-400 dark:bg-orange-500 rounded-full"
                  ></motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    className="absolute bottom-8 left-0 w-6 h-6 bg-orange-300 dark:bg-orange-600 rounded-full"
                  ></motion.div>

                  {/* Floating Lines */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3, duration: 0.8 }}
                    className="absolute top-1/2 -left-8 w-16 h-px bg-gradient-to-r from-transparent via-orange-400 dark:via-orange-500 to-transparent"
                  ></motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="absolute bottom-1/3 -right-8 w-20 h-px bg-gradient-to-l from-transparent via-orange-300 dark:via-orange-600 to-transparent"
                  ></motion.div>

                  {/* Stats Integration - Floating Cards */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.7, duration: 0.8 }}
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-black border border-orange-200 dark:border-orange-800 rounded-xl px-6 py-4 shadow-lg dark:shadow-orange-900/20"
                  >
                    <div className="flex items-center gap-6 text-center">
                      <div className="space-y-1">
                        <div className="text-xl font-light text-black dark:text-white">1+</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Years</div>
                      </div>
                      <div className="w-px h-8 bg-orange-200 dark:bg-orange-800"></div>
                      <div className="space-y-1">
                        <div className="text-xl font-light text-black dark:text-white">4+</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Projects</div>
                      </div>
                      <div className="w-px h-8 bg-orange-200 dark:bg-orange-800"></div>
                      <div className="space-y-1">
                        <div className="text-xl font-light text-black dark:text-white">∞</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Ideas</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Minimalist Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center text-gray-400 dark:text-gray-500">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-orange-300 dark:via-orange-700 to-transparent mb-2"></div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-1 bg-orange-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;