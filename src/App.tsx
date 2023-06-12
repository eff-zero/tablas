import './App.css'
import { Form } from './components/form'

function App() {
  return (
    <main className="main__container">
        {true && <Form />}
    </main>
  )
}

export default App