import React, { ReactNode, createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { TodoContextType } from "../interfaces/interfaces";

export const TodoContext = createContext<TodoContextType>({} as TodoContextType)

export function TodoProvider({ children }: {children: ReactNode}) {
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

  const deleteTodo = (id: string) => {
    const updatedTodos = [...todos]
    const index = updatedTodos.findIndex(todo => todo.id == id)
    updatedTodos.splice(index, 1)
    saveTodos(updatedTodos)
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
        deleteTodo
      }}
    >
      { children }
    </TodoContext.Provider>
  )
}