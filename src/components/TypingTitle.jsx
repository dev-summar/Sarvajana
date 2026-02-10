import { useState, useEffect } from 'react'

const TYPING_SPEED_MS = 100
const FULL_PHRASE = 'Sarvajana AI'

export function TypingTitle({ className = '' }) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (reduceMotion) {
      setDisplayText(FULL_PHRASE)
      setIsComplete(true)
      return
    }
    if (displayText.length >= FULL_PHRASE.length) {
      setIsComplete(true)
      return
    }
    const timeout = setTimeout(() => {
      setDisplayText(FULL_PHRASE.slice(0, displayText.length + 1))
    }, TYPING_SPEED_MS)
    return () => clearTimeout(timeout)
  }, [displayText, reduceMotion])

  return (
    <h1 className={className} aria-label={FULL_PHRASE}>
      <span className="title-gradient">{displayText}</span>
      <span
        className={`typing-cursor ${isComplete ? 'typing-cursor-blink' : ''}`}
        aria-hidden="true"
      >
        |
      </span>
    </h1>
  )
}
