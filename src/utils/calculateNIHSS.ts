import type {
  NIHSSAnswers,
  NIHSSResult,
  NIHSSSeverity,
  Question,
} from '../types/nihss'

export function getMissingQuestions(
  questions: Question[],
  selectedAnswers: NIHSSAnswers,
): Question[] {
  return questions.filter(
    (question) => selectedAnswers[question.id] === undefined,
  )
}

function getSeverity(total: number): NIHSSSeverity {
  if (total === 0) {
    return {
      label: 'Brak deficytu w skali NIHSS',
      range: '0 punktów',
      explanation:
        'Wynik mieści się w zakresie 0 punktów, opisywanym jako brak deficytu w skali NIHSS.',
    }
  }

  if (total <= 4) {
    return {
      label: 'Łagodny deficyt',
      range: '1–4 punkty',
      explanation:
        'Wynik mieści się w zakresie 1–4 punktów, odpowiadającym łagodnemu deficytowi.',
    }
  }

  if (total <= 15) {
    return {
      label: 'Umiarkowany deficyt',
      range: '5–15 punktów',
      explanation:
        'Wynik mieści się w zakresie 5–15 punktów, odpowiadającym umiarkowanemu deficytowi.',
    }
  }

  if (total <= 20) {
    return {
      label: 'Umiarkowanie ciężki deficyt',
      range: '16–20 punktów',
      explanation:
        'Wynik mieści się w zakresie 16–20 punktów, odpowiadającym umiarkowanie ciężkiemu deficytowi.',
    }
  }

  return {
    label: 'Ciężki deficyt',
    range: '21–42 punkty',
    explanation:
      'Wynik mieści się w zakresie 21–42 punktów, odpowiadającym ciężkiemu deficytowi.',
  }
}

export function calculateNIHSS(
  questions: Question[],
  selectedAnswers: NIHSSAnswers,
): NIHSSResult {
  let numericTotal = 0
  let zeroScoreCount = 0
  const numericScores: number[] = []
  const positiveItems: NIHSSResult['positiveItems'] = []
  const untestableItems: NIHSSResult['untestableItems'] = []
  let answeredQuestionCount = 0

  for (const question of questions) {
    const selectedScore = selectedAnswers[question.id]

    if (selectedScore === undefined) {
      continue
    }

    const selectedAnswer = question.answers.find(
      (answer) => answer.score === selectedScore,
    )

    if (!selectedAnswer) {
      throw new Error(
        `Niedozwolony wynik dla pytania ${question.id}: ${selectedScore}`,
      )
    }

    answeredQuestionCount += 1

    if (selectedScore === 'UN') {
      untestableItems.push({
        id: question.id,
        title: question.title,
        reason: selectedAnswer.text,
      })
      continue
    }

    numericScores.push(selectedScore)
    numericTotal += selectedScore

    if (selectedScore === 0) {
      zeroScoreCount += 1
      continue
    }

    positiveItems.push({
      id: question.id,
      title: question.title,
      score: selectedScore,
      answerText: selectedAnswer.text,
    })
  }

  const isComplete = answeredQuestionCount === questions.length
  const isStandardTotal = isComplete && untestableItems.length === 0

  return {
    numericTotal,
    isComplete,
    isStandardTotal,
    severity: isStandardTotal ? getSeverity(numericTotal) : null,
    positiveItems,
    untestableItems,
    zeroScoreCount,
    formula: `${numericScores.join(' + ') || '0'} = ${numericTotal}`,
  }
}
