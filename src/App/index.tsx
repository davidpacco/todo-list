import React from 'react'
import { AppUI } from './AppUI'
import { useLocalStorage } from './useLocalStorage'

import uniqid from 'uniqid'

import './App.css'

export type Todo = {
  id: string
  text: string | null
  completed: boolean
}

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('ToDoList', [])

  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  const matchedTodos = todos.filter(todo => todo.text?.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

  const completeTodo = (key: string) => {
    const updatedTodos = [...todos]
    const index = updatedTodos.findIndex(todo => todo.id == key)
    const todo = updatedTodos[index]
    if (todo.completed) {
      todo.completed = false
      updatedTodos.splice(index, 1)
      updatedTodos.unshift(todo)
    } else {
      todo.completed = true
      updatedTodos.splice(index, 1)
      updatedTodos.push(todo)
    }
    saveTodos(updatedTodos)
  }

  const deleteTodo = (id: string) => {
    const updatedTodos = [...todos]
    const index = updatedTodos.findIndex(todo => todo.id == id)
    updatedTodos.splice(index, 1)
    saveTodos(updatedTodos)
  }

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      setSearchValue={setSearchValue}
      matchedTodos={matchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App
