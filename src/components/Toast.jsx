import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, AlertCircle, Info } from 'lucide-react'

export default function Toast({ message, type = 'success', isVisible, onClose }) {
  const iconMap = {
    success: <CheckCircle2 className="w-5 h-5 text-teal shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-orange shrink-0" />,
    info: <Info className="w-5 h-5 text-ink shrink-0" />
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-surface text-ink px-5 py-3.5 rounded-2xl shadow-2xl border border-line"
        >
          {iconMap[type]}
          <span className="text-sm font-medium">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

