import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaMoon, FaSun, FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useTheme from './hooks/useTheme'
import { NAV_LINKS, APP_CONFIG } from './utils/constants'

function App() {
  const { darkMode, toggleTheme } = useTheme()
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
    <div className="min-h-screen relative">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-primary-600 z-50"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-heading font-bold text-primary-600"
          >
            {APP_CONFIG.AUTHOR}
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button 
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`md:hidden fixed inset-0 z-50 bg-gray-900 bg-opacity-50 ${mobileMenuOpen ? 'block' : 'hidden'}`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="bg-white dark:bg-gray-800 h-full w-64 shadow-lg p-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-primary-600 dark:text-primary-400">Raviteja</h2>
              <button 
                className="text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md p-1"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded-md"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="bg-gray-100 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 md:mb-0">
              Raviteja Kunapareddy
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="about" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 cursor-pointer"
              >
                About
              </Link>
              <Link 
                to="projects" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 cursor-pointer"
              >
                Projects
              </Link>
              <Link 
                to="skills" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 cursor-pointer"
              >
                Skills
              </Link>
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="flex justify-center space-x-4 mb-4">
              <a href="https://github.com/RaviKunapareddy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" aria-label="GitHub Profile">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ravi-kunapareddy/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" aria-label="LinkedIn Profile">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Raviteja Kunapareddy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
