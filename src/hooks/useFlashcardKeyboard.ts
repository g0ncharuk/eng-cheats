import { useEffect, useCallback } from 'react'

interface UseFlashcardKeyboardOptions {
  mode: 'learn' | 'test'
  onFlip?: () => void
  onKnow?: () => void
  onDontKnow?: () => void
  flipped?: boolean
  onCheck?: () => void
  onNext?: () => void
  checked?: boolean
  canCheck?: boolean
  isVisible: boolean
  enabled: boolean
}

export function useFlashcardKeyboard({
  mode,
  onFlip,
  onKnow,
  onDontKnow,
  flipped,
  onCheck,
  onNext,
  checked,
  canCheck,
  isVisible,
  enabled,
}: UseFlashcardKeyboardOptions) {
  const handler = useCallback(
    (e: KeyboardEvent) => {
      if (!enabled || !isVisible) return

      const tag = (e.target as HTMLElement).tagName
      const isInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT'

      if (mode === 'learn') {
        if (e.key === ' ') {
          e.preventDefault()

          onFlip?.()
          return
        }
        if ((e.key === 'ArrowRight' || e.key === 'Enter') && flipped) {
          e.preventDefault()

          onKnow?.()
          return
        }
        if (e.key === 'ArrowLeft' && flipped) {
          e.preventDefault()

          onDontKnow?.()
          return
        }
      }

      if (mode === 'test') {
        if (isInput) return
        if (e.key === 'Enter') {
          e.preventDefault()

          if (checked) {
            onNext?.()
          } else if (canCheck) {
            onCheck?.()
          }
        }
      }
    },
    [enabled, isVisible, mode, flipped, checked, canCheck, onFlip, onKnow, onDontKnow, onCheck, onNext],
  )

  useEffect(() => {
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [handler])

  return {}
}
