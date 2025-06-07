import { useState, useEffect, useCallback } from 'react'

/**
 * Custom hook for managing modal state and accessibility
 * @param {Object} options - Configuration options
 * @param {boolean} options.closeOnOutsideClick - Whether to close modal when clicking outside
 * @param {boolean} options.closeOnEscape - Whether to close modal when pressing Escape
 * @param {boolean} options.lockBodyScroll - Whether to lock body scroll when modal is open
 * @returns {Object} Modal state and controls
 */
const useModal = ({
  closeOnOutsideClick = true,
  closeOnEscape = true,
  lockBodyScroll = true
} = {}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState(null)

  const open = useCallback((modalData = null) => {
    setData(modalData)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    setData(null)
  }, [])

  const toggle = useCallback(() => {
    if (isOpen) {
      close()
    } else {
      open()
    }
  }, [isOpen, open, close])

  // Handle escape key
  useEffect(() => {
    if (!closeOnEscape || !isOpen) return

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        close()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, close, closeOnEscape])

  // Handle body scroll lock
  useEffect(() => {
    if (!lockBodyScroll) return

    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'
      
      return () => {
        document.body.style.overflow = originalStyle
      }
    }
  }, [isOpen, lockBodyScroll])

  // Create ref callback for outside click detection
  const modalRef = useCallback((node) => {
    if (!node || !closeOnOutsideClick) return

    const handleOutsideClick = (event) => {
      if (!node.contains(event.target)) {
        close()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [close, closeOnOutsideClick])

  return {
    isOpen,
    data,
    open,
    close,
    toggle,
    modalRef
  }
}

export default useModal 