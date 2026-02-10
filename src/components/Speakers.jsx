import { motion } from 'framer-motion'
import { Mic } from 'lucide-react'

const speaker = {
  name: 'Mr. Sidharth',
  role: 'Distinguished Guest Speaker',
  bio: 'Thought leader contributing to AI, digital transformation, and emerging technology ecosystems.',
  image: '/assets/Sidharth.webp',
  fallbackImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
}

export function Speakers() {
  return (
    <section id="speakers" className="scroll-mt-24 py-20 md:py-28 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 text-accent-glow mb-4">
            <Mic className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Speakers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary font-display">
            Distinguished Guest Speaker
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-10 rounded-2xl glass-card border-accent/20 hover:border-accent/40 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-accent/40 shadow-glow ring-4 ring-white/5">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = speaker.fallbackImage
                    }}
                  />
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary">{speaker.name}</h3>
                <p className="text-accent font-semibold mt-1 mb-4">{speaker.role}</p>
                <p className="text-text-secondary leading-relaxed">{speaker.bio}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
