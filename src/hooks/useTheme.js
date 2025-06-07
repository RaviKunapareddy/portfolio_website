import { useState, useEffect } from 'react'

/**
 * Custom hook for managing multiple professional dark themes
 * @returns {Object} Theme state and controls
 */
const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState('slate')
  const [darkMode] = useState(true) // Always dark mode

  // Force dark mode initialization with default theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('currentTheme') || 'slate'
    
    setCurrentTheme(savedTheme)
    updateThemeClass(savedTheme)
    
    // Force dark in localStorage
    localStorage.setItem('theme', 'dark')
    localStorage.setItem('currentTheme', savedTheme)
    
    console.log(`Theme hook: Set to ${savedTheme} theme`)
  }, [])

  const updateThemeClass = (themeName) => {
    // Always ensure dark class is present
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
    
    // Remove all theme classes first
    const themeClasses = ['theme-slate', 'theme-neural', 'theme-cyber', 'theme-matrix', 'theme-midnight', 'theme-gradient']
    themeClasses.forEach(cls => document.documentElement.classList.remove(cls))
    
    // Add the selected theme class
    document.documentElement.classList.add(`theme-${themeName}`)
  }

  const changeTheme = (themeName) => {
    setCurrentTheme(themeName)
    localStorage.setItem('currentTheme', themeName)
    updateThemeClass(themeName)
    console.log(`Theme changed to: ${themeName}`)
  }

  const toggleTheme = () => {
    // Cycle through themes instead of light/dark
    const themes = ['slate', 'neural', 'cyber', 'matrix', 'midnight', 'gradient']
    const currentIndex = themes.indexOf(currentTheme)
    const nextIndex = (currentIndex + 1) % themes.length
    changeTheme(themes[nextIndex])
  }

  return {
    darkMode, // Always true
    currentTheme,
    changeTheme,
    toggleTheme,
    theme: 'dark' // Always dark
  }
}

export default useTheme 