import { motion } from 'framer-motion'
import { Clock, Mic, Presentation, Users, UtensilsCrossed } from 'lucide-react'

const scheduleItems = [
  {
    icon: Mic,
    title: 'Keynote Addresses',
    description: 'Four invited speakers will each deliver a 15-minute talk sharing insights on AI, innovation, and education.',
  },
  {
    icon: Presentation,
    title: 'Poster Presentation',
    description: 'Participants will present research ideas, projects, and innovations through posters and demonstrations.',
  },
  {
    icon: Users,
    title: "Leaders Circle",
    description: 'A moderated panel discussion to enable a deeper exchange of perspectives among leaders, experts, and academicians.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Networking Lunch',
    description: 'An informal networking session for participants, speakers, and guests.',
  },
]

function TimelineCard({ item, index, side }) {
  const Icon = item.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`flex w-full md:w-[calc(50%-28px)] ${side === 'left' ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'}`}
    >
      <div className="group w-full p-6 rounded-2xl glass-card hover:border-accent/25 transition-all duration-300 shadow-card hover:shadow-glow">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" className="scroll-mt-24 py-20 md:py-28 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 text-accent-glow mb-4">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Event Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary font-display">
            Event Schedule
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-text-secondary text-lg">
            A day of insights, discussions, and networking.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line - hidden on mobile, centered on tablet+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent-glow/40 to-transparent -translate-x-px" />

          <div className="space-y-6 md:space-y-8">
            {scheduleItems.map((item, i) => (
              <div
                key={item.title}
                className="relative flex items-stretch md:items-center"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-accent-glow border-4 border-primary shadow-glow-cyan -translate-x-1/2 -translate-y-1/2 z-10" />

                <TimelineCard
                  item={item}
                  index={i}
                  side={i % 2 === 0 ? 'left' : 'right'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
