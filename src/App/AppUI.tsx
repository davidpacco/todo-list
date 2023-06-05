import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { Todo } from '.'
import React from 'react'

type Props = {
  completedTodos: number
  totalTodos: number
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  matchedTodos: Todo[]
  completeTodo: (key: string) => void
  deleteTodo: (key: string) => void
}

export function AppUI({
  completedTodos,
  totalTodos,
  setSearchValue,
  matchedTodos,
  completeTodo,
  deleteTodo
}: Props) {
  return (
    <>
    <h1 id="title">To Do List</h1>
    <TodoCounter
      completed={completedTodos}
      total={totalTodos}
    />
    <TodoSearch
      setSearchValue={setSearchValue}
      total={totalTodos}
    />

    <TodoList totalTodos={totalTodos}>
      {matchedTodos.map((todo) =>
        <TodoItem
        text={todo.text}
        completed={todo.completed}
        key={todo.id}
        onComplete={() => completeTodo(todo.id)}
        onDelete={() => deleteTodo(todo.id)}
        />
      )}
    </TodoList>

    <CreateTodoButton/>
  </>
  )
}