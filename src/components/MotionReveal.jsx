import React from 'react'
import { motion } from 'framer-motion'

export default function MotionReveal({
  children,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade'
  delay = 0,
  duration = 0.6,
  once = false, // Bisa re-animate saat discroll ulang
  amount = 0.15,
  className = ""
}) {
  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 35 }
      case 'down':
        return { opacity: 0, y: -35 }
      case 'left':
        return { opacity: 0, x: -45 }
      case 'right':
        return { opacity: 0, x: 45 }
      case 'zoom':
        return { opacity: 0, scale: 0.9 }
      case 'fade':
      default:
        return { opacity: 0 }
    }
  }

  const getAnimate = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 }
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 }
      case 'zoom':
        return { opacity: 1, scale: 1 }
      case 'fade':
      default:
        return { opacity: 1 }
    }
  }

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1] // cubic-bezier halus
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

