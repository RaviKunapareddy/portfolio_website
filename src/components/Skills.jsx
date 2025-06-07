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

        {/* Key Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white text-center">Core Specializations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Multi-Agent Systems", desc: "CrewAI, LangGraph" },
              { name: "RAG Implementation", desc: "Vector DBs, Embeddings" },
              { name: "Explainable AI", desc: "SHAP, LIME, Interpretability" },
              { name: "Semantic Search", desc: "Vector Search, Retrieval" },
              { name: "MLOps & Deployment", desc: "Model Serving, Monitoring" },
              { name: "Natural Language Processing", desc: "LLMs, Text Analysis" },
              { name: "Computer Vision", desc: "CNNs, Image Processing" },
              { name: "Data Engineering", desc: "ETL, Pipelines, APIs" }
            ].map((specialization, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-primary-200 dark:border-primary-800"
              >
                <h4 className="font-semibold text-primary-700 dark:text-primary-300 text-sm mb-1">
                  {specialization.name}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {specialization.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
