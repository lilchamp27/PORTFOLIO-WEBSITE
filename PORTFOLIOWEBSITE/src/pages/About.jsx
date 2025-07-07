import { motion } from 'framer-motion';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ThemeContext } from '../context/ThemeContext';

const About = () => {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const skills = [
    "JavaScript", "React", "Node.js", "Express", "MongoDB",
    "Tailwind CSS", "Git", "REST APIs"
  ];

  return (
    <section className="min-h-screen py-20 px-6 lg:px-12 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-light text-black dark:text-white mb-4">
            About{' '}
            <span className="text-orange-600 dark:text-orange-400 font-normal">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 rounded-full"></div>
              
              <div className="space-y-6 pl-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light"
                >
                  MERN stack developer with a passion for building efficient, user-centric applications.
                  Specializing in modern JavaScript frameworks and scalable backend solutions.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light"
                >
                  When not coding, I contribute to open-source projects and experiment with
                  creative coding and 3D web experiences.
                </motion.p>
              </div>
            </div>

            {/* Stats or additional info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-orange-100 dark:border-orange-900/50"
            >
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-light text-orange-600 dark:text-orange-400">1+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-light text-orange-600 dark:text-orange-400">4+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-light text-orange-600 dark:text-orange-400">∞</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">IDEAS</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Cloud */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-light text-black dark:text-white mb-2">
                Skills & Technologies
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-light">
                Tools and technologies I work with
              </p>
            </div>

            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-orange-100/30 dark:from-orange-950/20 dark:to-orange-900/10 rounded-2xl"></div>
              
              <div className="relative p-8 space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.5 + (index * 0.1), 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="inline-block m-2"
                  >
                    <span className="px-4 py-2 bg-white dark:bg-black border-2 border-orange-200 dark:border-orange-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:border-orange-400 dark:hover:border-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950/30 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-300 dark:bg-orange-600 rounded-full"></div>
            </div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="pt-6"
            >
              <button onClick={() => navigate('/contact')} className="group px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <span className="flex items-center gap-2">
                  Let's Work Together
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-100/20 dark:bg-orange-900/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-orange-200/20 dark:bg-orange-800/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default About;