import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

const scheduleItems = [
  {
    title: '15-minute keynote address',
    description: 'Opening address by our distinguished speaker',
  },
  {
    title: "Leaders' Circle",
    description: 'Moderated panel discussion to enable a deeper exchange of perspectives',
  },
]

export function Schedule() {
  return (
    <section id="schedule" className="scroll-mt-24 py-20 md:py-28 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 text-accent-glow mb-4">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Session Format</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary font-display">
            Schedule Timeline
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-accent-glow/40 to-transparent -translate-x-px md:-translate-x-1/2" />

            <div className="space-y-8">
              {scheduleItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="relative flex flex-col md:flex-row md:items-center gap-4 pl-14 md:pl-0"
                >
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <span className="text-accent font-semibold">{item.title}</span>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent-glow border-4 border-primary shadow-glow-cyan -translate-x-1/2" />
                  <div className="md:w-1/2 md:pl-12">
                    <p className="text-text-secondary text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
