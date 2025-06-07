import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaMoon, FaSun, FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ErrorBoundary } from './components/ui'
import useTheme from './hooks/useTheme'
import { NAV_LINKS, APP_CONFIG } from './utils/constants'

function App() {
  const { isDark, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // Scroll progress handler
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const currentScroll = window.scrollY
      const progress = (currentScroll / totalScroll) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ErrorBoundary>
      <div className={isDark ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          {/* Scroll Progress Bar */}
          <div 
            className="fixed top-0 left-0 h-1 bg-primary-600 z-50"
            style={{ width: `${scrollProgress}%` }}
          />
          
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="font-bold text-xl text-primary-600 dark:text-primary-400">
                  Raviteja K.
                </div>
                
                <div className="hidden md:flex items-center space-x-8">
                  <a href="#hero" className="nav-link">Home</a>
                  <a href="#projects" className="nav-link">Projects</a>
                  <a href="#skills" className="nav-link">Skills</a>
                  <a href="#contact" className="nav-link">Contact</a>
                </div>
                
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle theme"
                >
                  {isDark ? '☀️' : '🌙'}
                </button>
              </div>
            </div>
          </nav>

          <main>
            <Hero />
            <Projects />
            <Skills />
            <Contact />
          </main>
          
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default App
