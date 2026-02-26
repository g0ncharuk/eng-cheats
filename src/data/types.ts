export type TenseTime = 'present' | 'past' | 'future'
export type TenseAspect = 'simple' | 'continuous' | 'perfect' | 'perfect-continuous'
export type FilterType = 'all' | TenseTime | TenseAspect

export interface TenseExample {
  en: string // use **word** for emphasis
  ua: string
}

export interface TenseMistake {
  wrong?: string
  right?: string
  note?: string
}

export interface TenseData {
  time: TenseTime
  aspect: TenseAspect
  icon: string
  name: string
  nameUa: string
  formula: {
    positive: string
    negative: string
    question: string
  }
  explain: {
    analogy: string
    description: string
  }
  usage: string
  examples: TenseExample[]
  mistakes: TenseMistake[]
  markers: string[]
}

export interface Comparison {
  title: string
  description: string
  examples: Array<{ text: string; note: string }>
  tip: string
}

export type VerbDifficulty = 'basic' | 'intermediate' | 'advanced'

export interface IrregularVerb {
  v1: string
  v2: string
  v3: string
  ua: string
  difficulty: VerbDifficulty
}

export interface Tip {
  title: string
  body: string
}
