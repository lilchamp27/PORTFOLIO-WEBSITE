import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce platform with Stripe integration and inventory management",
      github: "https://github.com/yourusername/ecommerce-app",
      live: "https://ecommerce-app.vercel.app",
      tech: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      name: "Task Manager",
      description: "Real-time collaborative task management with team workspaces",
      github: "https://github.com/yourusername/task-manager",
      live: "https://task-manager.netlify.app",
      tech: ["Next.js", "TypeScript", "Socket.io"]
    },
    {
      name: "Portfolio Analytics",
      description: "Real-time portfolio tracking with advanced charting and risk analysis",
      github: "https://github.com/yourusername/portfolio-analytics",
      live: "https://portfolio-analytics.netlify.app",
      tech: ["Vue.js", "D3.js", "Express"]
    },
    {
      name: "AI Content Generator",
      description: "Intelligent content creation tool with automated copywriting",
      github: "https://github.com/yourusername/ai-content",
      live: "https://ai-content.vercel.app",
      tech: ["React", "Python", "OpenAI"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-4" style={{ fontFamily: 'Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            PROJECTS
          </h2>
          <motion.div 
            className="w-24 h-1 bg-orange-800 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="group border border-gray-800 bg-black hover:border-orange-800 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="p-8">
                <motion.h3 
                  className="text-2xl font-light text-white mb-3" 
                  style={{ fontFamily: 'Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {project.name}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-400 mb-6 leading-relaxed"
                  style={{ fontFamily: 'Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                >
                  {project.description}
                </motion.p>

                <motion.div 
                  className="flex flex-wrap gap-2 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.9 }}
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-900 text-gray-300 text-sm font-light border border-gray-800"
                      style={{ fontFamily: 'Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 1.1 }}
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors font-light"
                    style={{ fontFamily: 'Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub className="w-4 h-4" />
                    CODE
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-orange-800 text-white hover:bg-orange-700 transition-colors font-light"
                    style={{ fontFamily: 'Futura, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink className="w-4 h-4" />
                    LIVE DEMO
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;