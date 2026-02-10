import { motion } from 'framer-motion'
import { GraduationCap, Target, Shield } from 'lucide-react'

const tracks = [
  {
    icon: GraduationCap,
    title: 'AI-first digital ecosystems',
    description: 'Transforming digital teaching–learning ecosystems through AI-first approaches.',
  },
  {
    icon: Target,
    title: 'Bridging the AI skills gap',
    description: 'Industry-aligned pathways to equip students and faculty with in-demand AI skills.',
  },
  {
    icon: Shield,
    title: 'Ethical adoption of LLMs',
    description: 'Responsible use of large language models and the future of generative intelligence.',
  },
]

export function Themes() {
  return (
    <section id="themes" className="scroll-mt-24 py-20 md:py-28 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Themes / Tracks</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary font-display">
            Key Discussion Themes
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-text-secondary">
            Explore the core topics driving inclusive and ethical AI in education.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-6 rounded-2xl glass-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                <track.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{track.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{track.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
