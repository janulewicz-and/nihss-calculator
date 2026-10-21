import type { NIHSSResult } from "../types/nihss";

interface ResultPageProps {
  result: NIHSSResult;
  onBack: () => void;
}

function ResultPage({ result, onBack }: ResultPageProps) {
  return (
    <section className="result-page" aria-labelledby="result-title">
      <header className="result-page__header">
        <p className="result-page__eyebrow">Podsumowanie badania</p>
        <h2 id="result-title">Wynik NIHSS</h2>
      </header>

      <div className="result-score">
        <span>
          {result.isStandardTotal
            ? "Łączny wynik NIHSS"
            : "Częściowa suma punktów liczbowych"}
        </span>
        <strong>
          {result.numericTotal}
          {result.isStandardTotal && <small> / 42</small>}
        </strong>
      </div>

      {result.severity ? (
        <section className="result-section">
          <h3>{result.severity.label}</h3>
          <p>{result.severity.explanation}</p>
          <p className="result-note">
            Zakres klasyfikacji: {result.severity.range}. Jest to klasyfikacja
            orientacyjna i nie zastępuje oceny klinicznej.
          </p>
        </section>
      ) : (
        <section className="result-section result-section--warning">
          <h3>Nie można określić pełnego wyniku ani stopnia ciężkości</h3>
          <p>
            Co najmniej jeden punkt oznaczono jako UN. Podana wartość jest
            wyłącznie sumą częściową zbadanych punktów i nie stanowi pełnego,
            standardowego wyniku NIHSS.
          </p>
        </section>
      )}

      {result.positiveItems.length > 0 ? (
        <section className="result-section">
          <h3>Punkty z wynikiem powyżej 0</h3>
          <ul className="result-items">
            {result.positiveItems.map((item) => (
              <li key={item.id}>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.answerText}</p>
                </div>
                <strong>
                  {item.score} {item.score === 1 ? "punkt" : "punkty"}
                </strong>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section className="result-section">
          <h3>Punkty z wynikiem powyżej 0</h3>
          <p>W żadnym liczbowo ocenionym punkcie nie przyznano punktów.</p>
        </section>
      )}

      {result.untestableItems.length > 0 && (
        <section className="result-section result-section--warning">
          <h3>Punkty niemożliwe do oceny (UN)</h3>
          <ul className="result-items">
            {result.untestableItems.map((item) => (
              <li key={item.id}>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.reason}</p>
                </div>
                <strong>UN</strong>
              </li>
            ))}
          </ul>
        </section>
      )}

      <aside className="medical-warning">
        Wynik kalkulatora nie stanowi samodzielnej diagnozy i zawsze wymaga
        interpretacji klinicznej przez wykwalifikowany personel medyczny.
      </aside>

      <button type="button" className="secondary-button" onClick={onBack}>
        Wróć do formularza
      </button>
    </section>
  );
}

export default ResultPage;
