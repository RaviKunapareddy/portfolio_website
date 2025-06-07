// Application Constants
export const APP_CONFIG = {
  TITLE: 'Raviteja Kunapareddy | AI & ML Engineer Portfolio',
  DESCRIPTION: 'Semantic AI, GenAI Systems, Multi-Agent Architectures, and Explainable ML Engineer based in Chicago, IL',
  AUTHOR: 'Raviteja Kunapareddy',
  URL: 'https://ravikuapareddy.github.io/portfolio-website/',
  EMAIL: 'raviteja.kunapareddy09@gmail.com',
  LOCATION: 'Chicago, Illinois',
  GITHUB: 'https://github.com/RaviKunapareddy',
  LINKEDIN: 'https://www.linkedin.com/in/ravi-kunapareddy/',
  CALENDLY: 'https://calendly.com/raviteja-kunapareddy09'
}

// Navigation Links
export const NAV_LINKS = [
  { name: 'Hero', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Contact', to: 'contact' }
]

// Project Categories
export const PROJECT_CATEGORIES = [
  'all',
  'AI Systems & LLMs',
  'Multi-Agent & Orchestration',
  'Predictive Analytics & Explainability',
  'Data Mining & Pattern Recognition'
]

// Category Colors for Visual Indicators
export const CATEGORY_COLORS = {
  'AI Systems & LLMs': 'from-blue-500 to-indigo-600',
  'Multi-Agent & Orchestration': 'from-green-500 to-teal-600',
  'Predictive Analytics & Explainability': 'from-purple-500 to-pink-600',
  'Data Mining & Pattern Recognition': 'from-orange-500 to-red-600'
}

// Skill Categories and Expertise Levels
export const SKILL_EXPERTISE = {
  EXPERT: {
    icon: 'FaFire',
    color: 'text-red-500',
    bgColor: 'bg-red-100 dark:bg-red-900',
    label: 'Expert',
    categories: ['Semantic Search', 'RAG Systems', 'NLP']
  },
  ADVANCED: {
    icon: 'FaStar',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900',
    label: 'Advanced',
    categories: ['Machine Learning', 'Deep Learning', 'Multi-Agent Coordination']
  },
  PROFICIENT: {
    icon: 'FaChartLine',
    color: 'text-blue-500',
    bgColor: 'bg-blue-100 dark:bg-blue-900',
    label: 'Proficient',
    categories: ['RL Agents', 'Data & Visualization', 'Deployment']
  }
}

// Animation Constants
export const ANIMATION_VARIANTS = {
  CONTAINER: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  },
  ITEM: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  },
  FADE_IN: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }
}

// EmailJS Configuration
export const EMAIL_CONFIG = {
  PUBLIC_KEY: '2UdFG9BMlkFhiGhFD',
  SERVICE_ID: 'service_kgr10da',
  TEMPLATE_ID: 'template_fujamjt'
}

// Hero Section Keywords
export const HERO_KEYWORDS = [
  "Semantic AI", 
  "GenAI Systems", 
  "Multi-Agent Architectures", 
  "Explainable ML", 
  "AI Safety"
]

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536
}

// Scroll Offset for Navigation
export const SCROLL_OFFSET = -70

// Modal Z-Index
export const Z_INDEX = {
  MODAL: 50,
  HEADER: 40,
  DROPDOWN: 30
} 