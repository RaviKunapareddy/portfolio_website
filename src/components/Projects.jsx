import { motion, AnimatePresence } from 'framer-motion'
import { ProjectCard, ProjectModal, ProjectFilter } from './projects/index'
import useProjects from '../hooks/useProjects'
import useModal from '../hooks/useModal'
import { ANIMATION_VARIANTS } from '../utils/constants'

const Projects = () => {
  const { 
    filter, 
    setFilter, 
    viewMode, 
    setViewMode, 
    featuredProjects, 
    regularProjects 
  } = useProjects()
  
  const modal = useModal()
  
  const handleProjectClick = (project) => {
    modal.open(project)
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
        
        <ProjectFilter
          activeFilter={filter}
          onFilterChange={setFilter}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        
        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Featured Projects</h3>
          <AnimatePresence mode="wait">
            <motion.div 
              key={`${filter}-${viewMode}`}
              variants={ANIMATION_VARIANTS.CONTAINER}
              initial="hidden"
              animate="show"
              exit="hidden"
              className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 gap-8' 
                : 'space-y-6'
              }
            >
              {featuredProjects.map(project => (
                <motion.div
                  key={project.id}
                  variants={ANIMATION_VARIANTS.ITEM}
                >
                  <ProjectCard
                    project={project}
                    featured={true}
                    viewMode={viewMode}
                    onCardClick={handleProjectClick}
                    onDetailsClick={handleProjectClick}
                  />
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
              key={filter}
              variants={ANIMATION_VARIANTS.CONTAINER}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {regularProjects.map(project => (
                <motion.div
                  key={project.id}
                  variants={ANIMATION_VARIANTS.ITEM}
                >
                  <ProjectCard
                    project={project}
                    featured={false}
                    onCardClick={handleProjectClick}
                    onDetailsClick={handleProjectClick}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
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
