import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaCode, FaTrophy } from 'react-icons/fa'

const About = () => {
  const achievements = [
    { icon: FaCode, title: "16+ AI Projects", desc: "Production-ready systems" },
    { icon: FaTrophy, title: "Multi-Agent Expert", desc: "CrewAI & LangChain" },
    { icon: FaGraduationCap, title: "MS at NIU", desc: "Management Info Systems" },
    { icon: FaBriefcase, title: "Ex-TCS Engineer", desc: "Enterprise experience" }
  ]

  const skills = [
    "Python", "TensorFlow", "PyTorch", "LangChain", "CrewAI", 
    "RAG Systems", "Vector DBs", "MLOps", "AWS", "Docker"
  ]

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-blue-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile & Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6">
              <img 
                src="https://github.com/RaviKunapareddy/RaviKunapareddy/blob/main/855B567E-A0AB-42FE-BCE1-34CDC129D3AF_1_201_a.jpeg?raw=true" 
                alt="Raviteja Kunapareddy" 
                className="w-32 h-32 rounded-full object-cover mx-auto lg:mx-0 mb-4 border-4 border-primary-200"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><rect width="128" height="128" fill="%234F46E5" rx="64"/><text x="50%" y="50%" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle">RK</text></svg>';
                }}
              />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              AI/ML Engineer
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Transforming complex AI research into production-ready systems. 
              Specialized in building explainable, scalable AI solutions that 
              solve real business problems.
            </p>

            {/* Key Skills */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-800 dark:text-white">Core Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 text-center"
              >
                <achievement.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 dark:text-white mb-1">
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {achievement.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Timeline - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-center mb-8 text-gray-800 dark:text-white">Professional Journey</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
            {/* TCS */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm flex-1 text-center">
              <FaBriefcase className="w-6 h-6 text-primary-500 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 dark:text-white">TCS</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineer</p>
              <p className="text-xs text-gray-500">2020-2022</p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:block">
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            
            {/* NIU */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm flex-1 text-center">
              <FaGraduationCap className="w-6 h-6 text-primary-500 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-800 dark:text-white">NIU</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">MS - MIS</p>
              <p className="text-xs text-gray-500">2023-2025</p>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:block">
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            
            {/* Current */}
            <div className="bg-primary-50 dark:bg-primary-900 p-4 rounded-lg shadow-sm flex-1 text-center border-2 border-primary-200 dark:border-primary-700">
              <FaCode className="w-6 h-6 text-primary-500 mx-auto mb-2" />
              <h4 className="font-semibold text-primary-700 dark:text-primary-300">AI Engineer</h4>
              <p className="text-sm text-primary-600 dark:text-primary-400">Building the Future</p>
              <p className="text-xs text-primary-500">2024-Present</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
