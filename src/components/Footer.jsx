import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-white/10 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-4"
        >
          <img src="./assets/LOGO.png" alt="Sarvajana AI" className="h-12 md:h-14 w-auto" />
        </motion.div>
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
        <p className="text-text-secondary/70 text-xs mt-8">
          © 2026 Model Institute of Engineering and Technology, Jammu. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
