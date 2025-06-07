import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ProjectCard, ProjectModal, ProjectFilter } from './projects/index'
import useProjects from '../hooks/useProjects'
import useModal from '../hooks/useModal'
import { ANIMATION_VARIANTS } from '../utils/constants'

const Projects = () => {
  const { 
    filter, 
    setFilter, 
    featuredProjects, 
    regularProjects 
  } = useProjects()
  
  const modal = useModal()
  const [showMore, setShowMore] = useState(false)
  
  const handleProjectClick = (project) => {
    modal.open(project)
  }
  
  // Show only top 6 projects initially
  const displayedProjects = showMore ? regularProjects : regularProjects.slice(0, 6)
  
  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Production-ready AI systems with measurable business impact
          </p>
        </motion.div>
        
        {/* Quick Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-700 rounded-lg p-2 shadow-sm">
            <ProjectFilter
              activeFilter={filter}
              onFilterChange={setFilter}
              viewMode="grid"
              onViewModeChange={() => {}}
              compact={true}
            />
          </div>
        </div>
        
        {/* Featured Projects - Top 3 */}
        <div className="mb-16">
          <AnimatePresence mode="wait">
            <motion.div 
              key={filter}
              variants={ANIMATION_VARIANTS.CONTAINER}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {featuredProjects.slice(0, 3).map(project => (
                <motion.div
                  key={project.id}
                  variants={ANIMATION_VARIANTS.ITEM}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-600"
                >
                  <ProjectCard
                    project={project}
                    featured={true}
                    viewMode="grid"
                    onCardClick={handleProjectClick}
                    onDetailsClick={handleProjectClick}
                    compact={true}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* More Projects Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">More Projects</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMore(!showMore)}
              className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-lg font-medium hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
            >
              {showMore ? 'Show Less' : `View All ${regularProjects.length}`}
            </motion.button>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={`${filter}-${showMore}`}
              variants={ANIMATION_VARIANTS.CONTAINER}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {displayedProjects.map(project => (
                <motion.div
                  key={project.id}
                  variants={ANIMATION_VARIANTS.ITEM}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-600"
                >
                  <ProjectCard
                    project={project}
                    featured={false}
                    onCardClick={handleProjectClick}
                    onDetailsClick={handleProjectClick}
                    compact={true}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Tech Stack Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-8 text-center"
        >
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            Core Technologies Used
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Python", "LangChain", "CrewAI", "TensorFlow", "FastAPI", 
              "Streamlit", "Vector DBs", "OpenAI", "AWS", "Docker"
            ].map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-600"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        {/* Project Modal */}
        <ProjectModal
          project={modal.data}
          isOpen={modal.isOpen}
          onClose={modal.close}
        />
      </div>
    </section>
  )
}

export default Projects
