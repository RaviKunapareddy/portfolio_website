import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPalette, FaTimes } from 'react-icons/fa'

const THEMES = [
  {
    id: 'slate',
    name: 'Professional Slate',
    description: 'Clean, professional look with subtle tech patterns',
    preview: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
    accent: '#3b82f6'
  },
  {
    id: 'neural',
    name: 'Neural Network',
    description: 'Deep blue with animated neural network patterns',
    preview: 'linear-gradient(135deg, #0a0f1c 0%, #1a202c 25%, #0f1419 50%, #1a202c 75%, #0a0f1c 100%)',
    accent: '#60a5fa'
  },
  {
    id: 'cyber',
    name: 'Cyberpunk AI',
    description: 'Futuristic purple and pink with cyber aesthetics',
    preview: 'linear-gradient(135deg, #0d001a 0%, #1a0033 25%, #000014 50%, #1a0033 75%, #0d001a 100%)',
    accent: '#a855f7'
  },
  {
    id: 'matrix',
    name: 'Matrix Code',
    description: 'Green terminal-style with falling code effects',
    preview: 'linear-gradient(135deg, #001100 0%, #003300 25%, #000a00 50%, #003300 75%, #001100 100%)',
    accent: '#22c55e'
  },
  {
    id: 'midnight',
    name: 'Midnight Developer',
    description: 'Ultra-dark with subtle blue accents, developer favorite',
    preview: 'linear-gradient(135deg, #030712 0%, #111827 25%, #030712 50%, #111827 75%, #030712 100%)',
    accent: '#0ea5e9'
  },
  {
    id: 'gradient',
    name: 'Gradient Tech',
    description: 'Dynamic gradients with rainbow tech patterns',
    preview: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 15%, #312e81 30%, #1e1b4b 45%, #0f172a 60%, #1e293b 75%, #0f172a 100%)',
    accent: '#3b82f6'
  }
]

const ThemeSelector = ({ currentTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleThemeSelect = (themeId) => {
    onThemeChange(themeId)
    setIsOpen(false)
  }

  return (
    <>
      {/* Theme Selector Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-600 rounded-full shadow-lg backdrop-blur-md transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open theme selector"
      >
        <FaPalette className="w-5 h-5 text-slate-300" />
      </motion.button>

      {/* Theme Selector Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-slate-800 border border-slate-600 rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-600">
                <div>
                  <h3 className="text-xl font-bold text-white">Choose Your Theme</h3>
                  <p className="text-slate-400 text-sm mt-1">Select a professional dark theme that suits your style</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>

              {/* Theme Grid */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto">
                {THEMES.map((theme) => (
                  <motion.div
                    key={theme.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleThemeSelect(theme.id)}
                    className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      currentTheme === theme.id
                        ? 'border-blue-500 bg-slate-700'
                        : 'border-slate-600 bg-slate-750 hover:border-slate-500 hover:bg-slate-700'
                    }`}
                  >
                    {/* Theme Preview */}
                    <div
                      className="w-full h-16 rounded-lg mb-3 relative overflow-hidden"
                      style={{ background: theme.preview }}
                    >
                      {/* Add some pattern indicators */}
                      <div className="absolute inset-0 opacity-30">
                        {theme.id === 'neural' && (
                          <div className="w-full h-full bg-[radial-gradient(circle_at_10px_10px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-[length:20px_20px]" />
                        )}
                        {theme.id === 'cyber' && (
                          <div className="w-full h-full bg-[linear-gradient(rgba(147,51,234,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.2)_1px,transparent_1px)] bg-[length:15px_15px]" />
                        )}
                        {theme.id === 'matrix' && (
                          <div className="w-full h-full bg-[linear-gradient(rgba(34,197,94,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.2)_1px,transparent_1px)] bg-[length:12px_12px]" />
                        )}
                        {theme.id === 'midnight' && (
                          <div className="w-full h-full bg-[radial-gradient(circle_at_20px_20px,rgba(14,165,233,0.1)_2px,transparent_2px)] bg-[length:40px_40px]" />
                        )}
                        {theme.id === 'gradient' && (
                          <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.1)_1px,transparent_0),radial-gradient(circle_at_1px_1px,rgba(147,51,234,0.1)_1px,transparent_0)] bg-[length:20px_20px,30px_30px]" />
                        )}
                      </div>
                      
                      {/* Accent dot */}
                      <div
                        className="absolute top-2 right-2 w-3 h-3 rounded-full"
                        style={{ backgroundColor: theme.accent }}
                      />
                    </div>

                    {/* Theme Info */}
                    <h4 className="font-semibold text-white mb-1">{theme.name}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{theme.description}</p>

                    {/* Current indicator */}
                    {currentTheme === theme.id && (
                      <div className="absolute top-2 left-2 px-2 py-1 bg-blue-500 text-white text-xs rounded font-medium">
                        Current
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-slate-600 bg-slate-750">
                <p className="text-slate-400 text-sm text-center">
                  Themes are optimized for AI/ML professionals with tech-inspired animations and patterns
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ThemeSelector 