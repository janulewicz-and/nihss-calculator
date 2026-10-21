import { useState } from 'react'
import type { NIHSSScore, Question } from '../types/nihss'

interface QuestionCardProps {
  question: Question
  selectedScore: NIHSSScore | undefined
  onAnswerChange: (score: NIHSSScore) => void
}

function QuestionCard({
  question,
  selectedScore,
  onAnswerChange,
}: QuestionCardProps) {
  const [instructionsVisible, setInstructionsVisible] = useState(false)
  const instructionsId = `${question.id}-instructions`

  return (
    <article className="question-card">
      <header className="question-card__header">
        <div>
          <h2>{question.title}</h2>
          <p className="question-card__description">{question.description}</p>
        </div>
        <button
          type="button"
          className="instructions-button"
          aria-label={
            instructionsVisible ? 'Ukryj instrukcję' : 'Pokaż instrukcję'
          }
          aria-expanded={instructionsVisible}
          aria-controls={instructionsId}
          onClick={() => setInstructionsVisible((isVisible) => !isVisible)}
        >
          ?
        </button>
      </header>

      {instructionsVisible && (
        <p id={instructionsId} className="instructions">
          {question.instructions}
        </p>
      )}

      <fieldset className="answers">
        <legend className="visually-hidden">Wybierz wynik</legend>
        {question.answers.map((answer) => (
          <label className="answer" key={answer.score}>
            <input
              type="radio"
              name={question.id}
              value={answer.score}
              checked={selectedScore === answer.score}
              onChange={() => onAnswerChange(answer.score)}
            />
            <span className="answer__score">{answer.score}</span>
            <span>{answer.text}</span>
          </label>
        ))}
      </fieldset>
    </article>
  )
}

export default QuestionCard
