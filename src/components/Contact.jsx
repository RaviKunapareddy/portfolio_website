import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      await emailjs.send(
        'service_your_service_id',
        'template_your_template_id',
        formData,
        'your_public_key'
      )
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "ravikunapareddy@example.com",
      link: "mailto:ravikunapareddy@example.com"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ravikunapareddy",
      link: "https://linkedin.com/in/ravikunapareddy"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/RaviKunapareddy",
      link: "https://github.com/RaviKunapareddy"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Chicago, IL",
      link: null
    }
  ]

  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
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
            Ready to build the next generation of AI systems? Let's connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Let's Collaborate
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always interested in discussing AI projects, research opportunities, 
                or potential collaborations. Whether you're looking to implement cutting-edge 
                AI solutions or explore innovative approaches to machine learning, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                    <contact.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{contact.label}</p>
                    {contact.link ? (
                      <a 
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="font-medium text-gray-800 dark:text-white">{contact.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="pt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Quick Actions</p>
              <div className="flex gap-4">
                <a 
                  href="/portfolio_website/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                >
                  Download Resume
                </a>
                <a 
                  href="https://calendly.com/ravikunapareddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors text-sm font-medium"
                >
                  Schedule Call
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-vertical"
                  placeholder="Let's discuss your AI project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="text-green-600 dark:text-green-400 text-sm text-center font-medium">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-600 dark:text-red-400 text-sm text-center font-medium">
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
