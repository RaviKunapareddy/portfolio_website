import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const cardVariants = {
  default: 'bg-white dark:bg-gray-800 shadow-md hover:shadow-lg',
  elevated: 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl',
  outlined: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600',
}

const Card = forwardRef(({ 
  children, 
  variant = 'default',
  className = '',
  clickable = false,
  onClick,
  animate = true,
  ...props 
}, ref) => {
  const baseClasses = 'rounded-lg overflow-hidden transition-all duration-300'
  const classes = `${baseClasses} ${cardVariants[variant]} ${clickable ? 'cursor-pointer' : ''} ${className}`

  const content = <div className={classes} onClick={onClick} {...props}>{children}</div>

  if (animate) {
    return (
      <motion.div
        ref={ref}
        whileHover={clickable ? { y: -4, transition: { duration: 0.2 } } : {}}
        whileTap={clickable ? { scale: 0.98 } : {}}
      >
        {content}
      </motion.div>
    )
  }

  return <div ref={ref}>{content}</div>
})

Card.displayName = 'Card'

// Sub-components for better composition
const CardHeader = ({ children, className = '' }) => (
  <div className={`p-4 border-b border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
)

const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
)

const CardFooter = ({ children, className = '' }) => (
  <div className={`p-4 border-t border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
)

Card.Header = CardHeader
Card.Content = CardContent
Card.Footer = CardFooter

export default Card 