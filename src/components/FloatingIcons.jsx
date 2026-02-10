import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Brain, Cpu, Cloud, GraduationCap } from 'lucide-react'

const icons = [
  { Icon: Brain, x: '10%', y: '18%', size: 36, sizeMd: 48, duration: 8, delay: 0, mobile: true },
  { Icon: Cpu, x: '88%', y: '22%', size: 32, sizeMd: 40, duration: 10, delay: 1, mobile: true },
  { Icon: Cloud, x: '12%', y: '72%', size: 34, sizeMd: 44, duration: 9, delay: 0.5, mobile: true },
  { Icon: GraduationCap, x: '82%', y: '68%', size: 32, sizeMd: 42, duration: 7, delay: 0.2, mobile: true },
  { Icon: Brain, x: '78%', y: '12%', size: 28, sizeMd: 32, duration: 11, delay: 2, mobile: false },
  { Icon: Cpu, x: '18%', y: '52%', size: 26, sizeMd: 36, duration: 8.5, delay: 0.8, mobile: false },
  { Icon: Cloud, x: '90%', y: '78%', size: 28, sizeMd: 38, duration: 9.5, delay: 0.3, mobile: false },
  { Icon: GraduationCap, x: '6%', y: '38%', size: 26, sizeMd: 34, duration: 7.5, delay: 1.2, mobile: false },
]

export function FloatingIcons() {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {icons.map((item, i) => (
        <motion.div
          key={`${item.Icon.name}-${i}`}
          className={`absolute text-accent-glow ${item.mobile ? '' : 'hidden sm:block'}`}
          style={{
            left: item.x,
            top: item.y,
            width: item.size,
            height: item.size,
            opacity: 0.12,
          }}
          initial={{ opacity: 0 }}
          animate={
            reduceMotion
              ? { opacity: 0.1 }
              : {
                  opacity: [0.08, 0.15, 0.08],
                  y: [-10, 10, -10],
                }
          }
          transition={
            reduceMotion
              ? { duration: 0.3 }
              : {
                  duration: item.duration,
                  delay: item.delay,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }
          }
        >
          <item.Icon className="w-full h-full" strokeWidth={1.2} />
        </motion.div>
      ))}
    </div>
  )
}
