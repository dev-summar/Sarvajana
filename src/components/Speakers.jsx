import { motion } from 'framer-motion'
import { Mic, Briefcase } from 'lucide-react'

const speakers = [
  {
    name: 'Sidharth Mahotra',
    role: 'Senior Principal AI Scientist',
    organization: null,
    image: '/assets/Sidharth.png',
    fallbackImage: 'https://ui-avatars.com/api/?name=Sidharth+Mahotra&size=400&background=1e293b&color=6366f1',
  },
  {
    name: 'Deepak Gupta',
    role: 'Director, Professional Services',
    organization: 'Coursera',
    image: '/assets/Deepak.png',
    fallbackImage: 'https://ui-avatars.com/api/?name=Deepak+Gupta&size=400&background=1e293b&color=6366f1',
  },
  {
    name: 'Prof. Adit Gupta',
    role: 'Director',
    organization: 'MIER College of Education',
    image: '/assets/ProfAdit.png',
    fallbackImage: 'https://ui-avatars.com/api/?name=Adit+Gupta&size=400&background=1e293b&color=6366f1',
  },
  {
    name: 'Rahul Hakeem',
    role: 'Partner (Advisory)',
    organization: 'KPMG',
    image: '/assets/rahul.png',
    fallbackImage: 'https://ui-avatars.com/api/?name=Rahul+Hakeem&size=400&background=1e293b&color=6366f1',
  },
]

function SpeakerCard({ speaker, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group"
    >
      <div className="h-full overflow-hidden rounded-2xl glass-card border border-white/5 hover:border-accent/30 transition-all duration-300 shadow-card hover:shadow-glow">
        <div className="aspect-square overflow-hidden bg-secondary/50">
          <img
            src={speaker.image}
            alt={speaker.name}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src = speaker.fallbackImage
            }}
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-text-primary">{speaker.name}</h3>
          <div className="mt-2 flex items-start gap-2">
            <Briefcase className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" aria-hidden />
            <p className="text-sm text-accent font-medium">{speaker.role}</p>
          </div>
          {speaker.organization && (
            <p className="mt-1.5 text-sm text-text-secondary">{speaker.organization}</p>
          )}
        </div>
      </div>
    </motion.article>
  )
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
            Speakers
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-text-secondary text-lg">
            Learn from industry leaders and experts in AI and Education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {speakers.map((speaker, i) => (
            <SpeakerCard key={speaker.name} speaker={speaker} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
