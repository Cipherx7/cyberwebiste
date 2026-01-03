'use client'

import { useState, useEffect } from 'react'
import { NavBar } from './NavBar'
import { ThemeSwitcher } from './ThemeSwitcher'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export const MobileMenu = () => {
  const [show, setShow] = useState(false)

  // Lock body scroll when menu is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [show])

  return (
    <div className="md:hidden">
      <button
        onClick={() => setShow(true)}
        className="p-2 text-white hover:text-target transition-colors"
      >
        <Menu size={28} />
      </button>

      <AnimatePresence>
        {show && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShow(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-3/4 max-w-sm bg-secondary border-l border-white/10 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-end p-6 border-b border-white/5">
                <button
                  onClick={() => setShow(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
                <NavBar mobile={true} />
                <div className="pt-6 border-t border-white/10">
                  <ThemeSwitcher />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
