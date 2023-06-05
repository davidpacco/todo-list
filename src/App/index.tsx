import React from 'react'
import { AppUI } from './AppUI'

import uniqid from 'uniqid'

import './App.css'

export type Todo = {
  id: string
  text: string | null
  completed: boolean
}

function useLocalStorage(itemName: string, initialValue: Todo[]) {
  const localStorageItem = localStorage.getItem(itemName)

  let parsedItem: Todo[]

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parsedItem)

  const saveItem = (newItem:  Todo[]) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem] as const
}

function App() {
  const [todos, saveTodos] = useLocalStorage('ToDoList', [])

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
