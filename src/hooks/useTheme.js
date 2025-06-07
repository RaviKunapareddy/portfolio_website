import { useState, useEffect } from 'react'

/**
 * Custom hook for managing dark/light theme
 * @returns {Object} Theme state and controls
 */
const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false)

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const isDark = localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && 
       window.matchMedia('(prefers-color-scheme: dark)').matches)
    
    setDarkMode(isDark)
    updateDocumentClass(isDark)
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
    localStorage.theme = newDarkMode ? 'dark' : 'light'
    
    // Update document class
    updateDocumentClass(newDarkMode)
  }

  const setTheme = (isDark) => {
    setDarkMode(isDark)
    localStorage.theme = isDark ? 'dark' : 'light'
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