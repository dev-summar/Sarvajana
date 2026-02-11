import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'speakers', label: 'Speakers' },
  { id: 'themes', label: 'Themes' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'venue', label: 'Venue' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleScroll = (id) => {
    setMobileOpen(false)
    setTimeout(() => {
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 200)
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/95 backdrop-blur-xl border-b border-white/5 shadow-lg' : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          <a
            href="https://mietjmu.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center flex-shrink-0 text-text-primary hover:opacity-90 transition-opacity duration-200"
            aria-label="MIET Jammu"
          >
            <img
              src="https://mietjmu.in/wp-content/uploads/2020/11/miet-logo-white.png"
              alt="MIET Jammu Logo"
              className="h-8 sm:h-9 md:h-11 lg:h-12 w-auto object-contain"
            />
          </a>

          <div className="hidden md:flex flex-1 items-center justify-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center flex-shrink-0">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden min-h-[44px] min-w-[44px] p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors flex items-center justify-center touch-manipulation"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/5 bg-primary/98 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleScroll(link.id)}
                  className="block w-full text-left px-4 py-3 min-h-[44px] flex items-center rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors touch-manipulation text-base"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
