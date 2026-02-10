import { motion } from 'framer-motion'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { TypingTitle } from './TypingTitle'
import { FloatingIcons } from './FloatingIcons'

const glassCards = [
  {
    icon: Calendar,
    label: 'Date',
    value: '14th February, 2026',
  },
  {
    icon: MapPin,
    label: 'Venue',
    value: 'MIET Jammu',
  },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden px-4 pt-20 pb-16 sm:px-6 sm:pt-24 md:pb-20 bg-primary"
    >
      {/* Layered background */}
      <div className="absolute inset-0 hero-mesh" />
      <div className="absolute inset-0 grid-overlay animate-grid-pulse" />
      <div className="absolute inset-0 hero-mesh-glow" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary" />

      {/* Floating AI icons - reduced on mobile via component */}
      <FloatingIcons />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-card text-text-secondary text-xs sm:text-sm mb-6 sm:mb-8 w-fit mx-auto"
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
          AI & Education Summit 2026
        </motion.div>

        {/* Animated gradient glow behind title */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100%,600px)] h-64 sm:h-80 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-accent-glow/20 to-transparent rounded-full blur-3xl" />
        </motion.div>

        <div className="relative z-10">
          <TypingTitle className="text-3xl min-[380px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight font-display min-h-[1.2em] flex items-center justify-center text-text-primary" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 sm:mt-6 text-base min-[400px]:text-lg sm:text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Sarvajana AI: Empowering the Next Billion through Education
        </motion.p>

        {/* Glass cards: Date & Venue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-stretch gap-4 max-w-xl mx-auto"
        >
          {glassCards.map((card) => (
            <div
              key={card.label}
              className="glass-card rounded-2xl p-4 sm:p-5 flex items-center gap-4 text-left min-h-[72px] sm:min-h-0 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                <card.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  {card.label}
                </p>
                <p className="text-text-primary font-semibold text-base sm:text-lg mt-0.5 truncate">
                  {card.value}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA: gradient, glow on hover, arrow animation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-8 sm:mt-12"
        >
          <a
            href="#about"
            className="group inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-accent to-violet-500 shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
          >
            View Details
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
