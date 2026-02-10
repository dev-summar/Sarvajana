import { motion } from 'framer-motion'
import { Sparkles, GraduationCap, Target, Shield } from 'lucide-react'

const features = [
  {
    icon: GraduationCap,
    title: 'AI-first digital teaching–learning',
    description: 'Transforming digital teaching–learning ecosystems through AI-first approaches.',
  },
  {
    icon: Target,
    title: 'Bridging the AI skills gap',
    description: 'Industry-aligned pathways to equip the next generation with in-demand AI skills.',
  },
  {
    icon: Shield,
    title: 'Ethical adoption of LLMs',
    description: 'Responsible use of large language models and the future of generative intelligence.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">About the Event</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary font-display">
            Advancing the National Dialogue on AI
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-text-secondary text-lg leading-relaxed">
            This summit is organized as a precursor to the{' '}
            <span className="text-accent font-medium">India AI Impact Summit 2026</span>.
            <span className="text-text-primary font-medium"> MIET</span> is taking a lead in advancing the national dialogue on{' '}
            <span className="text-text-primary font-medium">inclusive, ethical, and impact-driven</span> artificial intelligence.
            As India moves toward becoming a global hub for AI, we believe collaboration between thought leaders and
            academia is essential to achieving scalable outcomes.
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-text-secondary text-lg leading-relaxed">
            MIET aims to provide our students and faculty with focused insights into critical areas, including:
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-2xl glass-card hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
