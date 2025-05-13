import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaThLarge, FaList, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import projectsData from '../data/projects'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const modalRef = useRef(null)
  
  // Handle click outside modal to close it
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSelectedProject(null)
    }
  }
  
  // Handle keyboard events for modal accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && selectedProject) {
      setSelectedProject(null)
    }
  }
  
  // Add event listeners for modal accessibility
  useEffect(() => {
    if (selectedProject) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
      
      // Lock scroll when modal is open
      document.body.style.overflow = 'hidden'
      
      // Focus trap - focus the modal when it opens
      if (modalRef.current) {
        modalRef.current.focus()
      }
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
      
      // Restore scroll when modal is closed
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [selectedProject])
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter)
  
  // Define main categories for filtering - moved before filteredProjects for logical order
  const categories = [
    'all',
    'AI Systems & LLMs',
    'Multi-Agent & Orchestration',
    'Predictive Analytics & Explainability',
    'Data Mining & Pattern Recognition'
  ]
  
  // Category colors for visual indicators
  const categoryColors = {
    'AI Systems & LLMs': 'from-blue-500 to-indigo-600',
    'Multi-Agent & Orchestration': 'from-green-500 to-teal-600',
    'Predictive Analytics & Explainability': 'from-purple-500 to-pink-600',
    'Data Mining & Pattern Recognition': 'from-orange-500 to-red-600'
  }
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }
  
  const filterAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
  }
  
  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my work in GenAI, LLMs, and machine learning with a focus on explainability and real-world applications.
          </p>
        </motion.div>
        
        {/* View Mode Toggle and Filter Categories */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-wrap justify-center gap-3 mb-4 md:mb-0">
            {categories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                  filter === category 
                    ? 'bg-primary-500 text-white shadow-md' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
                aria-label={`Filter projects by ${category}`}
              >
                {category === 'all' ? 'All Projects' : category}
              </motion.button>
            ))}
          </div>
          
          {/* View Mode Toggle */}
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-1 flex">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white dark:bg-gray-600 text-primary-500 shadow-sm' : 'text-gray-600 dark:text-gray-300'}`}
              aria-label="Grid view"
              aria-pressed={viewMode === 'grid'}
            >
              <FaThLarge />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-white dark:bg-gray-600 text-primary-500 shadow-sm' : 'text-gray-600 dark:text-gray-300'}`}
              aria-label="List view"
              aria-pressed={viewMode === 'list'}
            >
              <FaList />
            </button>
          </div>
        </div>
        
        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Featured Projects</h3>
          <AnimatePresence mode="wait">
            <motion.div 
              key={`${filter}-${viewMode}`} /* This forces re-render when filter or view mode changes */
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
              className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 gap-8' 
                : 'space-y-6'
              }
            >
              {filteredProjects.filter(project => project.featured).map(project => (
                <motion.div
                  key={project.id}
                  variants={item}
                  whileHover={viewMode === 'grid' ? { y: -8, transition: { duration: 0.2 } } : { y: -4, transition: { duration: 0.2 } }}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden ${viewMode === 'grid' ? '' : 'flex flex-col md:flex-row'}`}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image with Category Indicator */}
                  <div className={`relative overflow-hidden ${viewMode === 'grid' ? 'aspect-video' : 'md:w-1/3 aspect-video md:aspect-auto'}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110 hover:rotate-1"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs px-2 py-1 rounded-md shadow-sm">
                      Featured
                    </div>
                    {project.category && (
                      <div 
                        className={`absolute bottom-0 left-0 w-full py-2 px-3 bg-gradient-to-r ${categoryColors[project.category] || 'from-gray-700 to-gray-900'} text-white text-xs font-medium`}
                      >
                        {project.category}
                      </div>
                    )}
                  </div>
                  
                  {/* Project Content */}
                  <div className={`p-6 ${viewMode === 'grid' ? '' : 'md:w-2/3'}`}>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-primary-500 transition-colors">{project.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.summary}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map(tag => (
                        <span 
                          key={tag} 
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-md transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-gray-500 text-xs">+{project.tags.length - 3} more</span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-6">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:text-primary-500 flex items-center"
                          onClick={e => e.stopPropagation()}
                        >
                          <FaGithub className="mr-1" /> GitHub
                        </a>
                      )}
                      {project.demo ? (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:text-primary-500 flex items-center"
                          onClick={e => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt className="mr-1" /> Demo
                        </a>
                      ) : (
                        <span className="text-gray-500 dark:text-gray-500 flex items-center opacity-70">
                          <FaExternalLinkAlt className="mr-1" /> Demo Coming Soon
                        </span>
                      )}
                    </div>
                    <button 
                      className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                      onClick={() => setSelectedProject(project)}
                    >
                      Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Other Projects */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Other Projects</h3>
          <AnimatePresence mode="wait">
            <motion.div 
              key={filter} /* This forces re-render when filter changes */
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {filteredProjects.filter(project => !project.featured).map(project => (
                <motion.div
                  key={project.id}
                  variants={item}
                  className="card h-full flex flex-col"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                    {project.category && (
                      <div className="absolute bottom-2 left-2 bg-gray-900 bg-opacity-75 text-white text-xs px-2 py-1 rounded-md">
                        {project.category}
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm line-clamp-2 flex-1">{project.summary}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 2).map(tag => (
                        <span 
                          key={tag} 
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="text-gray-500 text-xs">+{project.tags.length - 2} more</span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center mt-auto">
                      <div className="flex space-x-2">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-500"
                            onClick={e => e.stopPropagation()}
                          >
                            GitHub
                          </a>
                        )}
                      </div>
                      <button 
                        className="text-primary-500 hover:text-primary-600 text-xs font-medium"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" 
              onClick={handleClickOutside} 
              role="dialog" 
              aria-modal="true" 
              aria-labelledby="modal-title"
            >
              <motion.div 
                ref={modalRef}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', damping: 20 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                tabIndex={-1} 
              >
                <div className="relative">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 z-10 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Close modal"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/800x400?text=Project+Image';
                      }}
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 id="modal-title" className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{selectedProject.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProject.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{selectedProject.summary}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">What it does:</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedProject.whatItDoes}</p>
                      
                      <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Why it matters:</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedProject.whyItMatters}</p>
                      
                      <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">How it works:</h4>
                      <p className="text-gray-600 dark:text-gray-400">{selectedProject.howItWorks}</p>
                    </div>
                    
                    {selectedProject.videoDemo && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Demo:</h4>
                        <div className="aspect-w-16 aspect-h-9">
                          <iframe 
                            src={selectedProject.videoDemo} 
                            title={`${selectedProject.title} demo`}
                            className="w-full h-64 rounded"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-4 mt-6">
                      {selectedProject.github && (
                        <a 
                          href={selectedProject.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-primary flex items-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          View on GitHub
                        </a>
                      )}
                      {selectedProject.demo && (
                        <a 
                          href={selectedProject.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-outline flex items-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
