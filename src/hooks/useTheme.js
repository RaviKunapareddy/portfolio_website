import { useState, useEffect } from 'react'

/**
 * Custom hook for managing dark/light theme
 * @returns {Object} Theme state and controls
 */
const useTheme = () => {
  const [darkMode, setDarkMode] = useState(true)

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const isDark = savedTheme === 'light' ? false : true // Default to dark unless explicitly set to light
    
    setDarkMode(isDark)
    updateDocumentClass(isDark)
    
    // Store the theme if not already stored
    if (!savedTheme) {
      localStorage.setItem('theme', 'dark')
    }
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