import { motion } from 'framer-motion'
import { MapPin, Calendar, Clock } from 'lucide-react'

const details = [
  {
    icon: MapPin,
    label: 'Venue',
    value: 'MIET Campus, Jammu',
  },
  {
    icon: Calendar,
    label: 'Date',
    value: '14th February, 2026',
  },
  {
    icon: Clock,
    label: 'Session',
    value: "15-minute keynote followed by Leaders' Circle panel discussion",
  },
]

export function Venue() {
  return (
    <section id="venue" className="scroll-mt-24 py-20 md:py-28 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Venue & Details</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary font-display">
            Event Details
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto p-8 rounded-2xl glass-card border-accent/20"
        >
          <div className="space-y-8">
            {details.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {item.label}
                  </span>
                  <p className="mt-1 text-text-primary">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
