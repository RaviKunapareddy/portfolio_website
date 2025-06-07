import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa'
import { HERO_KEYWORDS, SCROLL_OFFSET } from '../utils/constants'

const Hero = () => {
  const [currentKeyword, setCurrentKeyword] = useState(0)
  
  // No canvas animation - we'll use a GIF instead
  
  // Keyword rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % HERO_KEYWORDS.length)
    }, 3000) // Increased from 2000ms to 3000ms for better readability
    
    return () => clearInterval(interval)
  }, [])
  
  // Backup scroll function if Link doesn't work
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Clean background with subtle pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Compact header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              <span className="block">Raviteja Kunapareddy</span>
              <span className="text-primary-600 dark:text-primary-400 text-2xl md:text-3xl font-medium">
                AI/ML Engineer
              </span>
            </h1>
            
            {/* Key value proposition */}
            <div className="h-8 mb-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={HERO_KEYWORDS[currentKeyword]}
                  className="text-lg md:text-xl text-primary-500 font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {HERO_KEYWORDS[currentKeyword]}
                </motion.p>
              </AnimatePresence>
            </div>
            
            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary-600">16+</div>
                <div className="text-gray-600 dark:text-gray-400">AI Projects</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary-600">3</div>
                <div className="text-gray-600 dark:text-gray-400">Years Exp</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary-600">MS</div>
                <div className="text-gray-600 dark:text-gray-400">NIU 2025</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary-600">TCS</div>
                <div className="text-gray-600 dark:text-gray-400">Ex-SDE</div>
              </div>
            </div>
            
            {/* Core expertise */}
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Specializing in <strong>Multi-Agent Systems</strong>, <strong>RAG</strong>, and <strong>Explainable AI</strong> with production-grade implementations
            </p>
          </motion.div>
          
          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
          >
            <button
              onClick={scrollToProjects}
              className="btn-primary px-6 py-3 font-medium flex items-center justify-center gap-2 cursor-pointer border-none"
            >
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-6 py-3 font-medium flex items-center justify-center gap-2"
            >
              <FaDownload className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
          
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            <a href="https://linkedin.com/in/ravikunapareddy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-600 transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/RaviKunapareddy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-600 transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="mailto:ravikunapareddy@example.com" className="text-gray-500 hover:text-primary-600 transition-colors">
              <FaEnvelope className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <button
            onClick={scrollToProjects}
            className="text-gray-400 hover:text-primary-500 cursor-pointer transition-colors border-none bg-transparent"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
