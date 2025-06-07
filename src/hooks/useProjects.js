import { useState, useMemo } from 'react'
import projectsData from '../data/projects'

/**
 * Custom hook for managing project filtering and view modes
 * @returns {Object} Project state and controls
 */
const useProjects = () => {
  const [filter, setFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  // Memoized filtered projects for performance
  const filteredProjects = useMemo(() => {
    if (filter === 'all') {
      return projectsData
    }
    return projectsData.filter(project => project.category === filter)
  }, [filter])

  // Separate featured and regular projects
  const featuredProjects = useMemo(() => 
    filteredProjects.filter(project => project.featured),
    [filteredProjects]
  )

  const regularProjects = useMemo(() => 
    filteredProjects.filter(project => !project.featured),
    [filteredProjects]
  )

  // Get project by ID
  const getProjectById = (id) => {
    return projectsData.find(project => project.id === id)
  }

  // Get projects by category
  const getProjectsByCategory = (category) => {
    if (category === 'all') return projectsData
    return projectsData.filter(project => project.category === category)
  }

  // Get all unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(projectsData.map(project => project.category))]
    return ['all', ...uniqueCategories]
  }, [])

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = projectsData.flatMap(project => project.tags)
    return [...new Set(tags)]
  }, [])

  // Search projects by title or tags
  const searchProjects = (query) => {
    if (!query.trim()) return projectsData
    
    const searchTerm = query.toLowerCase().trim()
    return projectsData.filter(project => 
      project.title.toLowerCase().includes(searchTerm) ||
      project.summary.toLowerCase().includes(searchTerm) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      project.category.toLowerCase().includes(searchTerm)
    )
  }

  return {
    // State
    filter,
    viewMode,
    
    // Filtered data
    filteredProjects,
    featuredProjects,
    regularProjects,
    
    // Metadata
    categories,
    allTags,
    
    // Actions
    setFilter,
    setViewMode,
    
    // Utilities
    getProjectById,
    getProjectsByCategory,
    searchProjects,
    
    // Stats
    totalProjects: projectsData.length,
    filteredCount: filteredProjects.length,
    featuredCount: featuredProjects.length
  }
}

export default useProjects 