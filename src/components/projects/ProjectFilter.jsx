import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { FaThLarge, FaList } from 'react-icons/fa'
import { PROJECT_CATEGORIES } from '../../utils/constants'

const ProjectFilter = ({ 
  activeFilter, 
  onFilterChange, 
  viewMode, 
  onViewModeChange 
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
      {/* Filter Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-4 md:mb-0">
        {PROJECT_CATEGORIES.map(category => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onFilterChange(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
              activeFilter === category 
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
          onClick={() => onViewModeChange('grid')}
          className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white dark:bg-gray-600 text-primary-500 shadow-sm' : 'text-gray-600 dark:text-gray-300'}`}
          aria-label="Grid view"
          aria-pressed={viewMode === 'grid'}
        >
          <FaThLarge />
        </button>
        <button
          onClick={() => onViewModeChange('list')}
          className={`p-2 rounded ${viewMode === 'list' ? 'bg-white dark:bg-gray-600 text-primary-500 shadow-sm' : 'text-gray-600 dark:text-gray-300'}`}
          aria-label="List view"
          aria-pressed={viewMode === 'list'}
        >
          <FaList />
        </button>
      </div>
    </div>
  )
}

export default ProjectFilter 