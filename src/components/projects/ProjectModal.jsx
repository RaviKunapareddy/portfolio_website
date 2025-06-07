import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" 
      onClick={handleBackdropClick}
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-title"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: 'spring', damping: 20 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 z-10 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <FaTimes className="h-6 w-6" />
          </button>
          
          <div className="h-64 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x400?text=Project+Image'
              }}
            />
          </div>
          
          <div className="p-6">
            <h3 id="modal-title" className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              {project.title}
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {project.summary}
            </p>
            
            <div className="mb-6 space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  What it does:
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.whatItDoes}
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Why it matters:
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.whyItMatters}
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  How it works:
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.howItWorks}
                </p>
              </div>
            </div>
            
            {project.videoDemo && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Demo:
                </h4>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src={project.videoDemo} 
                    title={`${project.title} demo`}
                    className="w-full h-64 rounded"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
            
            <div className="flex flex-wrap gap-4 mt-6">
              {project.github && (
                <Button
                  variant="primary"
                  icon={FaGithub}
                  onClick={() => window.open(project.github, '_blank')}
                >
                  View on GitHub
                </Button>
              )}
              {project.demo && (
                <Button
                  variant="outline"
                  icon={FaExternalLinkAlt}
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectModal 