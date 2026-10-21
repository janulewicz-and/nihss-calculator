export type NIHSSScore = number | 'UN'
export type NIHSSAnswers = Record<string, NIHSSScore>

export interface Answer {
  score: NIHSSScore
  text: string
}

export interface Question {
  id: string
  title: string
  description: string
  instructions: string
  answers: Answer[]
}

export interface NIHSSSeverity {
  label: string
  range: string
  explanation: string
}

export interface ScoredQuestionResult {
  id: string
  title: string
  score: number
  answerText: string
}

export interface UntestableQuestionResult {
  id: string
  title: string
  reason: string
}

export interface NIHSSResult {
  numericTotal: number
  isComplete: boolean
  isStandardTotal: boolean
  severity: NIHSSSeverity | null
  positiveItems: ScoredQuestionResult[]
  untestableItems: UntestableQuestionResult[]
  zeroScoreCount: number
  formula: string
}
