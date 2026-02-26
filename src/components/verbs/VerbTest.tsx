import { useRef, useEffect } from 'react'
import type { IrregularVerb } from '../../data/types'

function checkAnswer(input: string, correct: string) {
  const trimmed = input.trim().toLowerCase()
  if (!trimmed) return false
  const variants = correct.toLowerCase().split('/').map(v => v.trim())
  return variants.includes(trimmed)
}

function getInputClass(checked: boolean, isCorrect: boolean) {
  const base = 'w-full bg-slate-900 rounded-lg px-4 py-3 text-center text-slate-200 transition-all focus:outline-none'
  if (!checked) return `${base} border border-slate-700 focus:border-sky-400`
  if (isCorrect) return `${base} border-2 border-emerald-400 text-emerald-400`
  return `${base} border-2 border-red-400 text-red-400`
}

export function VerbTest({ verb, checked, v2Input, v3Input, onV2Change, onV3Change, onCheck }: {
  verb: IrregularVerb
  checked: boolean
  v2Input: string
  v3Input: string
  onV2Change: (v: string) => void
  onV3Change: (v: string) => void
  onCheck: () => void
}) {
  const v2Ref = useRef<HTMLInputElement>(null)
  const v3Ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!checked) v2Ref.current?.focus()
  }, [verb, checked])

  const v2Correct = checkAnswer(v2Input, verb.v2)
  const v3Correct = checkAnswer(v3Input, verb.v3)

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mx-auto" style={{ minWidth: 300 }}>
      <div className="text-center mb-6">
        <span className="text-sky-400 text-3xl font-bold">{verb.v1}</span>
        <span className="text-slate-500 text-sm block mt-1">{verb.ua}</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-slate-500 text-xs block mb-1 text-center">V2 (Past)</label>
          <input
            ref={v2Ref}
            type="text"
            value={v2Input}
            onChange={(e) => onV2Change(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Tab' && !e.shiftKey) {
                e.preventDefault()
                v3Ref.current?.focus()
              }
              if (e.key === 'Enter') {
                e.preventDefault()
                v3Ref.current?.focus()
              }
            }}
            disabled={checked}
            className={getInputClass(checked, v2Correct)}
            placeholder="..."
            autoComplete="off"
            spellCheck={false}
          />
          {checked && !v2Correct && (
            <span className="text-emerald-400 text-sm block text-center mt-1">{verb.v2}</span>
          )}
        </div>
        <div>
          <label className="text-slate-500 text-xs block mb-1 text-center">V3 (Past Participle)</label>
          <input
            ref={v3Ref}
            type="text"
            value={v3Input}
            onChange={(e) => onV3Change(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                onCheck()
              }
            }}
            disabled={checked}
            className={getInputClass(checked, v3Correct)}
            placeholder="..."
            autoComplete="off"
            spellCheck={false}
          />
          {checked && !v3Correct && (
            <span className="text-emerald-400 text-sm block text-center mt-1">{verb.v3}</span>
          )}
        </div>
      </div>

      {!checked && (
        <button
          onClick={onCheck}
          className="w-full px-6 py-3 rounded-lg bg-sky-500 text-white font-medium text-base transition-all cursor-pointer select-none hover:bg-sky-400"
        >
          Перевірити
        </button>
      )}

      {checked && (
        <div className={`text-center text-sm font-medium mt-2 ${v2Correct && v3Correct ? 'text-emerald-400' : 'text-red-400'}`}>
          {v2Correct && v3Correct ? 'Правильно!' : 'Неправильно'}
        </div>
      )}
    </div>
  )
}
