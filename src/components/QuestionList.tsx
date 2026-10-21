import { useState } from 'react'
import { questions } from '../data/questions'
import type { NIHSSAnswers, NIHSSScore } from '../types/nihss'
import { calculateNIHSS } from '../utils/calculateNIHSS'
import QuestionCard from './QuestionCard'
import ResultPage from './ResultPage'

function QuestionList() {
  const [selectedAnswers, setSelectedAnswers] = useState<NIHSSAnswers>({})
  const [showResult, setShowResult] = useState(false)
  const result = calculateNIHSS(questions, selectedAnswers)

  const handleAnswerChange = (questionId: string, score: NIHSSScore) => {
    setSelectedAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: score,
    }))
  }

  if (showResult && result.isComplete) {
    return <ResultPage result={result} onBack={() => setShowResult(false)} />
  }

  return (
    <section className="question-list" aria-label="Pytania skali NIHSS">
      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question}
          selectedScore={selectedAnswers[question.id]}
          onAnswerChange={(score) => handleAnswerChange(question.id, score)}
        />
      ))}

      <div className="score-summary" aria-live="polite">
        <span>
          {result.untestableItems.length > 0
            ? 'Suma częściowa — wybrano UN'
            : 'Suma punktów'}
        </span>
        <strong>{result.numericTotal}</strong>
      </div>

      <button
        type="button"
        className="primary-button"
        disabled={!result.isComplete}
        onClick={() => setShowResult(true)}
      >
        Zobacz wynik
      </button>
    </section>
  )
}

export default QuestionList
