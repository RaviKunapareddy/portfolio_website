import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFire, FaStar, FaChartLine, FaChevronDown } from 'react-icons/fa'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [isMobile, setIsMobile] = useState(false)
  
  // Check if the screen is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])
  
  const skillCategories = [
    {
      name: 'Machine Learning',
      skills: [
        { name: 'Regression & Classification', description: 'Building predictive models for various business applications' },
        { name: 'XGBoost & LightGBM', description: 'Gradient boosting frameworks for structured data problems' },
        { name: 'SHAP Explainability', description: 'Making model predictions transparent with Shapley values' }
      ]
    },
    {
      name: 'Deep Learning',
      skills: [
        { name: 'CNNs', description: 'Convolutional Neural Networks for image classification and processing' },
        { name: 'Fine-tuning LLMs (QLoRA)', description: 'Parameter-efficient fine-tuning of large language models' },
        { name: 'TensorFlow & Keras', description: 'Building and training neural networks for various applications' }
      ]
    },
    {
      name: 'NLP',
      skills: [
        { name: 'Tokenization & Embeddings', description: 'Processing text data for machine learning applications' },
        { name: 'spaCy & NLTK', description: 'Natural language processing libraries for text analysis' },
        { name: 'HuggingFace Transformers', description: 'State-of-the-art transformer models for NLP tasks' }
      ]
    },
    {
      name: 'Semantic Search',
      skills: [
        { name: 'Sentence Transformers', description: 'Creating semantic embeddings for text similarity search' },
        { name: 'FAISS', description: 'Efficient similarity search and clustering of dense vectors' },
        { name: 'CrossEncoder', description: 'Re-ranking search results for improved relevance' }
      ]
    },
    {
      name: 'RAG Systems',
      skills: [
        { name: 'Dense Retrieval', description: 'Vector-based document retrieval for context augmentation' },
        { name: 'Filtered Pipelines', description: 'Hybrid retrieval combining semantic and keyword search' },
        { name: 'Gemini & OpenAI', description: 'Large language models for response generation' }
      ]
    },
    {
      name: 'Multi-Agent Coordination',
      skills: [
        { name: 'CrewAI', description: 'Framework for orchestrating specialized AI agents' },
        { name: 'LangGraph', description: 'Building complex reasoning flows with LLMs' },
        { name: 'Agent Communication', description: 'Designing protocols for effective agent collaboration' }
      ]
    },
    {
      name: 'RL Agents',
      skills: [
        { name: 'Q-Learning', description: 'Training agents through reinforcement and reward systems' },
        { name: 'Policy Extraction', description: 'Deriving decision strategies from trained RL models' },
        { name: 'Visualization', description: 'Creating interactive visualizations of agent behavior' }
      ]
    },
    {
      name: 'Data & Visualization',
      skills: [
        { name: 'Pandas & NumPy', description: 'Data manipulation, analysis, and numerical computing' },
        { name: 'Matplotlib & Seaborn', description: 'Creating static, interactive, and informative visualizations' },
        { name: 'SHAP plots', description: 'Visualizing feature importance and model explanations' }
      ]
    },
    {
      name: 'Deployment',
      skills: [
        { name: 'FastAPI & Streamlit', description: 'Building high-performance APIs and interactive web apps' },
        { name: 'React + LLM APIs', description: 'Integrating LLMs with frontend applications' },
        { name: 'GitHub Actions & Docker', description: 'CI/CD pipelines and containerization for ML applications' }
      ]
    }
  ]
  
  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-800 overflow-hidden relative">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical toolkit spans across various domains of AI and machine learning, with a
            focus on explainable and trustworthy systems.
          </p>
          
          {/* Expertise Level Indicators */}
          <div className="flex justify-center mt-6 space-x-8">
            <div className="flex items-center">
              <FaFire className="text-red-500 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">Expert</span>
            </div>
            <div className="flex items-center">
              <FaStar className="text-yellow-500 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">Advanced</span>
            </div>
            <div className="flex items-center">
              <FaChartLine className="text-blue-500 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">Proficient</span>
            </div>
          </div>
        </motion.div>
        
        {/* Category selector - Mobile dropdown or Desktop tabs */}
        {isMobile ? (
          <div className="mb-8">
            <div className="relative">
              <select 
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none pr-10"
                aria-label="Select skill category"
              >
                <option value="all">All Skills</option>
                {skillCategories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FaChevronDown className="text-gray-500 dark:text-gray-400" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center mb-8 overflow-x-auto py-2 w-full">
            <div className="flex space-x-2 md:space-x-3 bg-gray-100 dark:bg-gray-700 p-1.5 rounded-xl w-auto min-w-full md:min-w-0 md:max-w-4xl">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-2 rounded-lg text-sm md:text-base transition-all whitespace-nowrap ${activeCategory === 'all' ? 'bg-white dark:bg-gray-600 text-primary-600 dark:text-primary-400 shadow-md' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                aria-pressed={activeCategory === 'all'}
              >
                All Skills
              </button>
              {skillCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-3 py-2 rounded-lg text-sm md:text-base transition-all whitespace-nowrap ${activeCategory === category.name ? 'bg-white dark:bg-gray-600 text-primary-600 dark:text-primary-400 shadow-md' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                  aria-pressed={activeCategory === category.name}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories
              .filter(category => activeCategory === 'all' || category.name === activeCategory)
              .map((category, categoryIndex) => {
                // Determine expertise level icon based on category
                let ExpertiseIcon = FaChartLine;
                let expertiseColor = 'text-blue-500';
                let expertiseBgColor = 'bg-blue-100 dark:bg-blue-900';
                let expertiseLabel = 'Proficient';
                
                if (category.name === 'Semantic Search' || category.name === 'RAG Systems' || category.name === 'NLP') {
                  ExpertiseIcon = FaFire;
                  expertiseColor = 'text-red-500';
                  expertiseBgColor = 'bg-red-100 dark:bg-red-900';
                  expertiseLabel = 'Expert';
                } else if (category.name === 'Machine Learning' || category.name === 'Deep Learning' || category.name === 'Multi-Agent Coordination') {
                  ExpertiseIcon = FaStar;
                  expertiseColor = 'text-yellow-500';
                  expertiseBgColor = 'bg-yellow-100 dark:bg-yellow-900';
                  expertiseLabel = 'Advanced';
                }
                
                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden border-t-4 h-full"
                    style={{ borderColor: expertiseColor === 'text-red-500' ? '#ef4444' : expertiseColor === 'text-yellow-500' ? '#eab308' : '#3b82f6' }}
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                          <span className="text-2xl mr-3 flex items-center justify-center w-8 h-8 bg-gray-100 dark:bg-gray-600 rounded-lg">
                            {category.name === 'Machine Learning' ? '📊' : 
                             category.name === 'Deep Learning' ? '🧠' : 
                             category.name === 'NLP' ? '📝' : 
                             category.name === 'Semantic Search' ? '🔎' : 
                             category.name === 'RAG Systems' ? '📚' : 
                             category.name === 'Multi-Agent Coordination' ? '👥' : 
                             category.name === 'RL Agents' ? '🤖' : 
                             category.name === 'Data & Visualization' ? '📈' : 
                             category.name === 'Deployment' ? '🚀' : '💻'}
                          </span>
                          {category.name}
                        </h3>
                        <div 
                          className={`flex items-center justify-center w-9 h-9 rounded-full ${expertiseBgColor} ${expertiseColor}`} 
                          title={expertiseLabel}
                        >
                          <ExpertiseIcon className="text-base" />
                        </div>
                      </div>
                      <ul className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.li 
                            key={skill.name} 
                            className="p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors border-l-2 border-gray-200 dark:border-gray-600"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * skillIndex + 0.2 }}
                          >
                            <div>
                              <h4 className="font-medium text-gray-800 dark:text-white mb-1">{skill.name}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
          </motion.div>
        </AnimatePresence>
        
        {/* Skills approach summary */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white inline-block relative">
                My Approach to AI Development
                <div className="absolute -bottom-3 left-0 right-0 mx-auto w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-600"></div>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                I believe in building AI systems that are not just powerful, but also explainable, ethical, and aligned with human values. My work focuses on creating solutions that:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-primary-500"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400 text-center">Explainable</h4>
                <p className="text-gray-600 dark:text-gray-400 text-center">Provide clear insights into how decisions are made, building trust through transparency.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-blue-500"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400 text-center">Scalable</h4>
                <p className="text-gray-600 dark:text-gray-400 text-center">Designed with production-grade architecture that can grow with your needs.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-teal-500"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-teal-600 dark:text-teal-400 text-center">Human-Centered</h4>
                <p className="text-gray-600 dark:text-gray-400 text-center">Focus on solving real problems for users, with interfaces that are intuitive and accessible.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
