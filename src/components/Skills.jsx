import { motion } from 'framer-motion'
import { 
  FaPython, FaReact, FaAws, FaDocker, FaGitAlt, FaDatabase,
  FaBrain, FaRobot, FaChartLine, FaCode
} from 'react-icons/fa'
import { 
  SiTensorflow, SiPytorch, SiMongodb, SiPostgresql, 
  SiRedis, SiKubernetes, SiJupyter, SiStreamlit
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: "AI/ML Frameworks",
      icon: FaBrain,
      color: "bg-purple-500",
      skills: [
        { name: "TensorFlow", icon: SiTensorflow, level: 90 },
        { name: "PyTorch", icon: SiPytorch, level: 85 },
        { name: "LangChain", icon: FaCode, level: 95 },
        { name: "CrewAI", icon: FaRobot, level: 90 }
      ]
    },
    {
      title: "Programming",
      icon: FaCode,
      color: "bg-blue-500",
      skills: [
        { name: "Python", icon: FaPython, level: 95 },
        { name: "JavaScript", icon: FaReact, level: 80 },
        { name: "SQL", icon: FaDatabase, level: 85 },
        { name: "Git", icon: FaGitAlt, level: 90 }
      ]
    },
    {
      title: "Data & Analytics",
      icon: FaChartLine,
      color: "bg-green-500",
      skills: [
        { name: "MongoDB", icon: SiMongodb, level: 85 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
        { name: "Redis", icon: SiRedis, level: 75 },
        { name: "Jupyter", icon: SiJupyter, level: 90 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: FaAws,
      color: "bg-orange-500",
      skills: [
        { name: "AWS", icon: FaAws, level: 80 },
        { name: "Docker", icon: FaDocker, level: 85 },
        { name: "Kubernetes", icon: SiKubernetes, level: 70 },
        { name: "Streamlit", icon: SiStreamlit, level: 90 }
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
            Core technologies and frameworks I use to build production-ready AI systems
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
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Core Specializations</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Multi-Agent Systems", "RAG Implementation", "Explainable AI", 
              "Vector Databases", "MLOps", "Semantic Search", "NLP", "Computer Vision"
            ].map((specialization, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold"
              >
                {specialization}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
