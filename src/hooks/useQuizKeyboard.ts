import { useEffect, useCallback, useRef, useState } from 'react'

interface UseQuizKeyboardOptions {
  optionCount: number
  onSelect: (index: number) => void
  onNext: () => void
  isAnswered: boolean
  isVisible: boolean
  enabled: boolean
}

export function useQuizKeyboard({
  optionCount,
  onSelect,
  onNext,
  isAnswered,
  isVisible,
  enabled,
}: UseQuizKeyboardOptions) {
  const [pressedIndex, setPressedIndex] = useState<number | null>(null)
  const pressedTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  const handler = useCallback(
    (e: KeyboardEvent) => {
      if (!enabled) return

      const tag = (e.target as HTMLElement).tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

      const digit = Number(e.key)
      if (digit >= 1 && digit <= optionCount && !isAnswered) {
        e.preventDefault()


        setPressedIndex(digit - 1)
        clearTimeout(pressedTimer.current)
        pressedTimer.current = setTimeout(() => setPressedIndex(null), 150)

        onSelect(digit - 1)
        return
      }

      if ((e.key === 'Enter' || e.key === ' ') && isAnswered && isVisible) {
        e.preventDefault()

        onNext()
      }
    },
    [enabled, optionCount, isAnswered, isVisible, onSelect, onNext],
  )

  useEffect(() => {
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [handler])

  useEffect(() => {
    return () => clearTimeout(pressedTimer.current)
  }, [])

  return { pressedIndex }
}
