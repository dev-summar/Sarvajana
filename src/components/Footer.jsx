import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-white/10 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-secondary font-medium"
        >
          MIET Jammu
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-primary font-bold text-lg mt-1"
        >
          Sarvajana AI 2026
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-4 flex items-center justify-center gap-2 text-text-secondary text-sm"
        >
          <Mail className="w-4 h-4" />
          <a
            href="mailto:contact@mietjammu.in"
            className="text-accent-glow hover:text-accent transition-colors"
          >
            contact@mietjammu.in
          </a>
        </motion.p>
        <p className="text-text-secondary/70 text-xs mt-8">
          © 2026 Model Institute of Engineering and Technology. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
