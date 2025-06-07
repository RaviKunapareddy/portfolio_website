import { motion } from 'framer-motion'
import { 
  FaPython, FaReact, FaAws, FaDocker, FaGitAlt, FaDatabase,
  FaBrain, FaRobot, FaChartLine, FaCode, FaServer, FaCog
} from 'react-icons/fa'
import { 
  SiTensorflow, SiPytorch, SiMongodb, SiPostgresql, 
  SiRedis, SiKubernetes, SiJupyter, SiStreamlit, SiPandas,
  SiNumpy, SiScikitlearn, SiOpenai, SiFastapi
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: "AI/ML Frameworks",
      icon: FaBrain,
      color: "bg-purple-500",
      skills: [
        { name: "LangChain", icon: FaCode, level: 95 },
        { name: "CrewAI", icon: FaRobot, level: 90 },
        { name: "TensorFlow", icon: SiTensorflow, level: 85 },
        { name: "PyTorch", icon: SiPytorch, level: 80 },
        { name: "Scikit-learn", icon: SiScikitlearn, level: 90 },
        { name: "OpenAI API", icon: SiOpenai, level: 95 }
      ]
    },
    {
      title: "Programming & Tools",
      icon: FaCode,
      color: "bg-blue-500",
      skills: [
        { name: "Python", icon: FaPython, level: 95 },
        { name: "JavaScript", icon: FaReact, level: 80 },
        { name: "SQL", icon: FaDatabase, level: 85 },
        { name: "Git", icon: FaGitAlt, level: 90 },
        { name: "FastAPI", icon: SiFastapi, level: 90 },
        { name: "Jupyter", icon: SiJupyter, level: 95 }
      ]
    },
    {
      title: "Data Science & Analytics",
      icon: FaChartLine,
      color: "bg-green-500",
      skills: [
        { name: "Pandas", icon: SiPandas, level: 95 },
        { name: "NumPy", icon: SiNumpy, level: 90 },
        { name: "MongoDB", icon: SiMongodb, level: 85 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
        { name: "Vector DBs", icon: FaDatabase, level: 90 },
        { name: "Redis", icon: SiRedis, level: 75 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: FaAws,
      color: "bg-orange-500",
      skills: [
        { name: "AWS", icon: FaAws, level: 80 },
        { name: "Docker", icon: FaDocker, level: 85 },
        { name: "Streamlit", icon: SiStreamlit, level: 90 },
        { name: "Kubernetes", icon: SiKubernetes, level: 70 },
        { name: "MLOps", icon: FaCog, level: 80 },
        { name: "CI/CD", icon: FaServer, level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive toolkit for building production-ready AI systems and scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-100 dark:border-gray-700"
            >
              {/* Category Header */}
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center mr-3`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white text-sm">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <skill.icon className="w-4 h-4 text-gray-600 dark:text-gray-400 mr-2" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                    
                    {/* Skill Level Indicator */}
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < Math.floor(skill.level / 20)
                              ? 'bg-primary-500'
                              : 'bg-gray-200 dark:bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Specializations - Enhanced Visibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800 dark:text-white">Core Specializations</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Advanced expertise areas where I deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Multi-Agent Systems", 
                desc: "CrewAI, LangGraph",
                icon: "🤖",
                gradient: "from-purple-500 to-indigo-600",
                bgGradient: "from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30"
              },
              { 
                name: "RAG Implementation", 
                desc: "Vector DBs, Embeddings",
                icon: "🔍", 
                gradient: "from-blue-500 to-cyan-600",
                bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30"
              },
              { 
                name: "Explainable AI", 
                desc: "SHAP, LIME, Interpretability",
                icon: "💡",
                gradient: "from-green-500 to-emerald-600",
                bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30"
              },
              { 
                name: "Semantic Search", 
                desc: "Vector Search, Retrieval",
                icon: "🎯",
                gradient: "from-orange-500 to-red-600",
                bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30"
              },
              { 
                name: "MLOps & Deployment", 
                desc: "Model Serving, Monitoring",
                icon: "⚙️",
                gradient: "from-teal-500 to-green-600",
                bgGradient: "from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30"
              },
              { 
                name: "Natural Language Processing", 
                desc: "LLMs, Text Analysis",
                icon: "📝",
                gradient: "from-pink-500 to-rose-600",
                bgGradient: "from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30"
              },
              { 
                name: "Computer Vision", 
                desc: "CNNs, Image Processing",
                icon: "👁️",
                gradient: "from-violet-500 to-purple-600",
                bgGradient: "from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30"
              },
              { 
                name: "Data Engineering", 
                desc: "ETL, Pipelines, APIs",
                icon: "🔧",
                gradient: "from-amber-500 to-orange-600",
                bgGradient: "from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30"
              }
            ].map((specialization, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className={`bg-gradient-to-br ${specialization.bgGradient} p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden group cursor-pointer`}
              >
                {/* Decorative gradient overlay */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${specialization.gradient} opacity-10 rounded-bl-3xl`}></div>
                
                {/* Icon */}
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {specialization.icon}
                </div>
                
                {/* Content */}
                <h4 className="font-bold text-gray-800 dark:text-white text-lg mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {specialization.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {specialization.desc}
                </p>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${specialization.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
