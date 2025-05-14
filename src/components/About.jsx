import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaLaptopCode, FaUserTie } from 'react-icons/fa'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary-100 dark:bg-primary-900 rounded-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-60 h-60 bg-primary-100 dark:bg-primary-900 rounded-full opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Get to know my journey, expertise, and passion for AI and machine learning
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/3"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="https://github.com/RaviKunapareddy/RaviKunapareddy/blob/main/855B567E-A0AB-42FE-BCE1-34CDC129D3AF_1_201_a.jpeg?raw=true" 
                alt="Raviteja Kunapareddy" 
                className="relative rounded-lg shadow-lg w-64 h-64 object-cover mx-auto border-2 border-white dark:border-gray-800"
                onError={(e) => {
                  // Custom styled fallback instead of placeholder.com
                  e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><rect width="300" height="300" fill="%234F46E5" /><text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">Raviteja Kunapareddy</text></svg>';
                }}
                loading="lazy" // Added for performance
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-2/3 text-left"
          >
            <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-700 dark:from-primary-400 dark:to-blue-500">From TCS to GenAI — building systems that explain, adapt, and reason</h3>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed">
                Hello! I'm <span className="font-semibold text-primary-600 dark:text-primary-400">Raviteja Kunapareddy</span>, a <span className="font-semibold text-primary-600 dark:text-primary-400">Machine Learning Engineer</span> based in Chicago, IL with a proven track record of delivering <span className="font-semibold text-primary-600 dark:text-primary-400">production-ready AI systems</span>. Leveraging my Master's in Management Information Systems from Northern Illinois University, I've architected and deployed over a dozen sophisticated AI projects spanning <span className="font-semibold text-primary-600 dark:text-primary-400">multi-agent systems</span>, <span className="font-semibold text-primary-600 dark:text-primary-400">retrieval-augmented generation</span>, and <span className="font-semibold text-primary-600 dark:text-primary-400">explainable ML frameworks</span>.
              </p>
              <p className="leading-relaxed mt-3">
                My expertise extends beyond theoretical implementations—I build AI solutions that solve real business problems with measurable impact. From orchestrating specialized agent frameworks with CrewAI to developing semantic search systems and predictive analytics platforms, I combine technical excellence with a focus on production-grade architecture, scalability, and business value.
              </p>
              
              {/* Timeline - enhanced for mobile */}
              <div className="relative border-l-2 border-primary-200 dark:border-primary-900 pl-4 md:pl-8 py-4 my-8 timeline-container">
                <div className="mb-6 relative">
                  <div className="absolute -left-3 mt-1.5" style={{ left: '-12px' }}>
                    <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center shadow-md">
                      <FaGraduationCap className="text-white text-xs" aria-hidden="true" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Northern Illinois University</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Master's in Management Information Systems | 2023-2025</p>
                  <p className="text-sm">Specialized in AI systems, data analytics, and business intelligence</p>
                </div>
                
                <div className="mb-6">
                  <div className="absolute -left-3 mt-1.5">
                    <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center shadow-md">
                      <FaBriefcase className="text-white text-xs" aria-hidden="true" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">TCS</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Software Engineer | 2020-2022</p>
                  <p className="text-sm">Developed enterprise solutions and gained foundational software engineering experience</p>
                </div>
                
                <div>
                  <div className="absolute -left-3 mt-1.5">
                    <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center shadow-md">
                      <FaLaptopCode className="text-white text-xs" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">AI Research & Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Present</p>
                  <p className="text-sm">Building next-generation AI systems with a focus on explainability, safety, and real-world impact</p>
                </div>
              </div>
              
              <p className="font-medium">
                My journey in AI has been driven by three core principles:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-t-4 border-primary-500 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4">
                    <FaUserTie className="text-primary-500 text-xl" />
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-lg mb-2">Transition</h4>
                  <p className="text-gray-600 dark:text-gray-300">From traditional software engineering to specialized AI systems development, I've embraced the evolving landscape of technology.</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-t-4 border-blue-500 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mb-4">
                    <FaLaptopCode className="text-blue-500 text-xl" />
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-lg mb-2">Tech Focus</h4>
                  <p className="text-gray-600 dark:text-gray-300">Specializing in LLMs, RAG systems, and multi-agent architectures with a strong emphasis on explainability and trustworthiness.</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-t-4 border-green-500 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-lg mb-2">Impact</h4>
                  <p className="text-gray-600 dark:text-gray-300">Creating AI systems that explain, adapt, and reason — not just generate. Building solutions that solve real-world problems with transparency, safety, and ethical considerations.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="mt-12 text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg shadow-md inline-flex items-center transition-colors"
          >
            <span>See My Work</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default About
