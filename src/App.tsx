import QuestionList from './components/QuestionList'

function App() {
  return (
    <main className="container">
      <header className="page-header">
        <h1>NIHSS Calculator</h1>
        <p>Ocena deficytu neurologicznego</p>
      </header>
      <QuestionList />
    </main>
  )
}

export default App
