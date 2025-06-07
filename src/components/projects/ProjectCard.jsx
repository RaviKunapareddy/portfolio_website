import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Card from '../ui/Card'
import { CATEGORY_COLORS } from '../../utils/constants'

const ProjectCard = ({ 
  project, 
  featured = false, 
  viewMode = 'grid',
  onCardClick,
  onDetailsClick 
}) => {
  const handleCardClick = () => {
    onCardClick?.(project)
  }

  const handleDetailsClick = (e) => {
    e.stopPropagation()
    onDetailsClick?.(project)
  }

  const handleLinkClick = (e) => {
    e.stopPropagation()
  }

  if (featured) {
    return (
      <Card 
        variant="elevated" 
        clickable 
        onClick={handleCardClick}
        className={viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}
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
              className={`absolute bottom-0 left-0 w-full py-2 px-3 bg-gradient-to-r ${CATEGORY_COLORS[project.category] || 'from-gray-700 to-gray-900'} text-white text-xs font-medium`}
            >
              {project.category}
            </div>
          )}
        </div>
        
        {/* Project Content */}
        <div className={`p-6 ${viewMode === 'grid' ? '' : 'md:w-2/3'}`}>
          <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-primary-500 transition-colors">
            {project.title}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {project.summary}
          </p>
          
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
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
            onClick={handleDetailsClick}
          >
            Details
          </button>
        </div>
      </Card>
    )
  }

  // Regular project card
  return (
    <Card clickable onClick={handleCardClick} className="h-full flex flex-col">
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
      
      <Card.Content className="flex-1 flex flex-col">
        <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
          {project.title}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm line-clamp-2 flex-1">
          {project.summary}
        </p>
        
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
                onClick={handleLinkClick}
              >
                GitHub
              </a>
            )}
          </div>
          <button 
            className="text-primary-500 hover:text-primary-600 text-xs font-medium"
            onClick={handleDetailsClick}
          >
            Details
          </button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default ProjectCard 