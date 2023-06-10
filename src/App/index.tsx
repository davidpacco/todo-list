import { AppUI } from './AppUI'

import './App.css'
import { TodoProvider } from '../TodoContext'

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App
