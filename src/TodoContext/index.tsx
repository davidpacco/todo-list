import React, { ReactNode, createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { TodoContextType, Todo } from "../interfaces/interfaces";

import { v4 as uuidv4 } from 'uuid'

export const TodoContext = createContext<TodoContextType>({} as TodoContextType)

export function TodoProvider({ children }: {children: ReactNode}) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('ToDoList', [])

  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false)

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  const matchedTodos = todos.filter(todo => todo.text?.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

  const completeTodo = (id: string) => {
    const updatedTodos = [...todos]
    const index = updatedTodos.findIndex(todo => todo.id == id)
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

  const addTodo = (text: string) => {
    const updatedTodos = [...todos]
    if (text != '') {
      const newTodo: Todo = {
        id: uuidv4(),
        // id: uniqid(),
        text: text,
        completed: false
      }
      updatedTodos.unshift(newTodo)
      saveTodos(updatedTodos)
    }
  }

  const deleteTodo = (id: string) => {
    const updatedTodos = [...todos]
    const index = updatedTodos.findIndex(todo => todo.id == id)
    updatedTodos.splice(index, 1)
    saveTodos(updatedTodos)
  }

  const modalToggle = (open: boolean) => {
    if (open) {
      document.body.style.overflowY = 'hidden'
      setOpenModal(true)
    } else {
      document.body.style.overflowY = 'auto'
      setOpenModal(false)
    }
  }

  return (
    <TodoContext.Provider value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        setSearchValue,
        matchedTodos,
        completeTodo,
        addTodo,
        deleteTodo,
        openModal,
        modalToggle
      }}
    >
      { children }
    </TodoContext.Provider>
  )
}