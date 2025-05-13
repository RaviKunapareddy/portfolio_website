import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  useEffect(() => {
    // Initialize EmailJS
    const EMAILJS_PUBLIC_KEY = '2UdFG9BMlkFhiGhFD'
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)
    
    // EmailJS configuration
    const serviceId = 'service_kgr10da'
    const templateId = 'template_fujamjt'
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Raviteja Kunapareddy'
    }
    
    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams)
      .then(() => {
        console.log('Email sent successfully!')
        setIsSubmitting(false)
        setSubmitSuccess(true)
        setFormData({ name: '', email: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      })
      .catch(error => {
        console.error('Email sending failed:', error)
        setIsSubmitting(false)
        setSubmitError(true)
      })
  }
  return (
    <section id="contact" className="section relative bg-gray-50 dark:bg-gray-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 dark:bg-primary-900 rounded-full -mt-20 -mr-20 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-full -mb-20 -ml-20 opacity-20"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's talk about Semantic AI, GenAI Systems, Multi-Agent Architectures, or Explainable ML. I'm always open to discussing new projects, opportunities, or partnerships.
          </p>
          
          <div className="flex justify-center mt-4 space-x-4">
            <a href="https://github.com/RaviKunapareddy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" aria-label="GitHub Profile">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ravi-kunapareddy/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" aria-label="LinkedIn Profile">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
        
        <div className="max-w-6xl mx-auto mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-xl p-8 order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send Me a Message</h3>
              
              {submitSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded"
                  role="alert"
                  aria-live="polite"
                >
                  <p>Your message has been sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}
              {submitError && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded"
                  role="alert"
                  aria-live="assertive"
                >
                  <p>There was an error sending your message. Please try again later or contact me directly via email.</p>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Your Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Your Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Your Message <span className="text-red-500">*</span></label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="I'd like to discuss a project..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg flex items-center justify-center font-medium ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700'} text-white transition-colors`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="bg-white dark:bg-gray-700 rounded-xl shadow-xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                      <FaEnvelope className="text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        <a href="mailto:raviteja.kunapareddy09@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                          raviteja.kunapareddy09@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                      <FaLinkedin className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">LinkedIn</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        <a href="https://www.linkedin.com/in/ravi-kunapareddy/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          linkedin.com/in/ravi-kunapareddy
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center mr-3">
                      <FaGithub className="text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">GitHub</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        <a href="https://github.com/RaviKunapareddy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                          github.com/RaviKunapareddy
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                      <FaMapMarkerAlt className="text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Location</h3>
                      <p className="text-gray-600 dark:text-gray-400">Chicago, Illinois</p>
                      <p className="text-gray-500 dark:text-gray-500 text-sm">(Open to remote opportunities)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary-500 to-blue-600 rounded-xl shadow-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Let's Work Together</h3>
                <p className="mb-6">
                  I'm currently available for freelance work, consulting, and full-time opportunities. If you have a project that needs AI expertise, let's talk!  
                </p>
                <div className="flex space-x-4">
                  <motion.a 
                    href="https://calendly.com/raviteja-kunapareddy09" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-600 px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow"
                  >
                    Schedule a Call
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
