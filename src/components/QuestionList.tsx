import { useState } from 'react'
import { questions } from '../data/questions'
import type { NIHSSAnswers, NIHSSScore } from '../types/nihss'
import {
  calculateNIHSS,
  getMissingQuestions,
} from '../utils/calculateNIHSS'
import QuestionCard from './QuestionCard'
import ResultPage from './ResultPage'

function QuestionList() {
  const [selectedAnswers, setSelectedAnswers] = useState<NIHSSAnswers>({})
  const [showResult, setShowResult] = useState(false)
  const [hasAttemptedResult, setHasAttemptedResult] = useState(false)
  const result = calculateNIHSS(questions, selectedAnswers)
  const missingQuestions = getMissingQuestions(questions, selectedAnswers)

  const handleAnswerChange = (questionId: string, score: NIHSSScore) => {
    setSelectedAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionId]: score,
    }))
  }

  const handleShowResult = () => {
    if (missingQuestions.length > 0) {
      setHasAttemptedResult(true)
      return
    }

    setShowResult(true)
  }

  const scrollToQuestion = (questionId: string) => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    document.getElementById(`question-${questionId}`)?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'center',
    })
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
          isMissing={
            hasAttemptedResult && selectedAnswers[question.id] === undefined
          }
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

      {hasAttemptedResult && missingQuestions.length > 0 && (
        <aside className="missing-answers" role="alert">
          <h2>Nie wszystkie pytania zostały ocenione</h2>
          <p>
            Aby zobaczyć wynik NIHSS, uzupełnij brakujące odpowiedzi.
          </p>
          <ul>
            {missingQuestions.map((question) => (
              <li key={question.id}>
                <button
                  type="button"
                  onClick={() => scrollToQuestion(question.id)}
                >
                  {question.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <button
        type="button"
        className="primary-button"
        disabled={missingQuestions.length > 0}
        onClick={handleShowResult}
      >
        Zobacz wynik
      </button>
    </section>
  )
}

export default QuestionList
