import { useState, useEffect } from 'react'

/**
 * Custom hook for managing dark/light theme
 * @returns {Object} Theme state and controls
 */
const useTheme = () => {
  const [darkMode, setDarkMode] = useState(true)

  // Force dark mode initialization
  useEffect(() => {
    // Always force dark mode
    const isDark = true
    
    setDarkMode(isDark)
    updateDocumentClass(isDark)
    
    // Force dark in localStorage
    localStorage.setItem('theme', 'dark')
    
    console.log('Theme hook: Dark mode forced to true')
  }, [])

  const updateDocumentClass = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    
    // Update localStorage
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
    
    // Update document class
    updateDocumentClass(newDarkMode)
  }

  const setTheme = (isDark) => {
    setDarkMode(isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    updateDocumentClass(isDark)
  }

  return {
    darkMode,
    toggleTheme,
    setTheme,
    theme: darkMode ? 'dark' : 'light'
  }
}

export default useTheme 