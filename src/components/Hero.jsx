import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  const keywords = ["Semantic AI", "GenAI Systems", "Multi-Agent Architectures", "Explainable ML", "AI Safety"]
  const [currentKeyword, setCurrentKeyword] = useState(0)
  const canvasRef = useRef(null)
  
  // No canvas animation - we'll use a GIF instead
  
  // Keyword rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % keywords.length)
    }, 3000) // Increased from 2000ms to 3000ms for better readability
    
    return () => clearInterval(interval)
  }, [keywords.length])
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* AI Animation */}
      <div className="absolute inset-0 w-full h-full overflow-hidden" aria-hidden="true">
        <img 
          src="https://cdn.dribbble.com/users/1299339/screenshots/7133657/media/837237d447d36581ebd59ec36d30daea.gif" 
          alt="AI Animation" 
          className="absolute right-0 top-10 md:top-20 w-full md:w-1/2 lg:w-2/5 opacity-20 dark:opacity-30 object-contain"
        />
      </div>
      
      {/* Animated background elements - reduced for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-500 opacity-10 dark:opacity-20"
            style={{
              width: `${Math.random() * (window.innerWidth < 768 ? 150 : 300) + 50}px`,
              height: `${Math.random() * (window.innerWidth < 768 ? 150 : 300) + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * (window.innerWidth < 768 ? 50 : 100) - (window.innerWidth < 768 ? 25 : 50)],
              y: [0, Math.random() * (window.innerWidth < 768 ? 50 : 100) - (window.innerWidth < 768 ? 25 : 50)],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + (window.innerWidth < 768 ? 15 : 10),
            }}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
            I build AI systems that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-blue-600 dark:from-primary-400 dark:to-blue-500">explain, adapt, and reason</span>
          </h1>
          
          <div className="h-12 mb-6 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={keywords[currentKeyword]}
                className="text-xl md:text-2xl text-primary-500 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {keywords[currentKeyword]}
              </motion.p>
            </AnimatePresence>
          </div>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
            Specializing in <span className="font-semibold text-primary-600 dark:text-primary-400">Semantic AI</span>, <span className="font-semibold text-primary-600 dark:text-primary-400">GenAI Systems</span>, <span className="font-semibold text-primary-600 dark:text-primary-400">Multi-Agent Architectures</span>, and <span className="font-semibold text-primary-600 dark:text-primary-400">Explainable ML</span> — with real-world projects that go beyond demos into structured, production-grade designs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12 relative z-10">
            <a 
              href="#projects"
              className="btn-primary px-8 py-3.5 text-lg font-medium flex items-center justify-center group cursor-pointer no-underline inline-block"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>View Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <a 
              href="./assets/Raviteja_Kunapareddy_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              download
              aria-label="Download Resume"
              className="btn-outline px-8 py-3.5 text-lg font-medium flex items-center justify-center group cursor-pointer no-underline inline-block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 cursor-pointer transition-colors"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <FaArrowDown className="animate-bounce" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
