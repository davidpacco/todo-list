import { AppUI } from './AppUI'

// import uniqid from 'uniqid'

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
