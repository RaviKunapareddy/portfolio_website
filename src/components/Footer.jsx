import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCalendarAlt } from 'react-icons/fa'
import { useEffect } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  // Initialize Calendly widget
  useEffect(() => {
    // Load Calendly script
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
    script.setAttribute('type', 'text/javascript')
    head.appendChild(script)
    
    return () => {
      // Clean up script when component unmounts
      head.removeChild(script)
    }
  }, [])
  
  // Function to open Calendly popup
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/raviteja-kunapareddy09'
      })
    }
  }
  
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-primary-500"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-900 rounded-full -mb-16 -mr-16 opacity-20"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-900 rounded-full -mt-16 -ml-16 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 mb-8 border-b border-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-blue-400">Raviteja Kunapareddy</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Building explainable AI systems that are safe, trustworthy, and impactful. Specializing in LLMs, RAG, and multi-agent architectures.
            </p>
            <div className="flex space-x-4 mt-4">
              <motion.a 
                href="https://github.com/RaviKunapareddy" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/ravi-kunapareddy/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={20} />
              </motion.a>

              <motion.a 
                href="mailto:ravitejakunapareddy09@gmail.com" 
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Email Contact"
              >
                <FaEnvelope size={20} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Specializations</h4>
            <ul className="flex flex-col space-y-2">
              <li className="text-gray-400">Large Language Models</li>
              <li className="text-gray-400">Multi-Agent Systems</li>
              <li className="text-gray-400">Retrieval Augmented Generation</li>
              <li className="text-gray-400">Predictive Analytics</li>
              <li className="text-gray-400">Explainable AI</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="block font-medium text-gray-300">Email:</span>
                ravitejakunapareddy09@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="block font-medium text-gray-300">Location:</span>
                San Francisco Bay Area, California
              </p>
              <a 
                href="/portfolio_website/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-lg hover:from-primary-700 hover:to-blue-700 transition-colors"
                download
              >
                Download Resume
              </a>
              
              <button 
                onClick={openCalendly}
                className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-blue-600 to-primary-600 text-white rounded-lg hover:from-blue-700 hover:to-primary-700 transition-colors flex items-center"
              >
                <FaCalendarAlt className="mr-2" />
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Raviteja Kunapareddy. All rights reserved.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 md:mt-0 flex items-center"
          >
            <p className="text-gray-500 text-sm flex items-center">
              Made with <FaHeart className="mx-1 text-red-500" /> using React, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
