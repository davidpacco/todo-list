import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoListLoading } from '../TodoListLoading'
import { TodoListError } from '../TodoListError'
import { TodoListEmpty } from '../TodoListEmpty'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { Todo } from '.'
import React from 'react'

type Props = {
  loading: boolean
  error: boolean
  completedTodos: number
  totalTodos: number
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  matchedTodos: Todo[]
  completeTodo: (key: string) => void
  deleteTodo: (key: string) => void
}

export function AppUI({
  loading,
  error,
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
      >
        {loading ? <TodoListLoading /> : null}
        {error ? <TodoListError /> : null}
        {(!loading && totalTodos === 0) ? <TodoListEmpty /> : null}
      </TodoCounter>

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

      {loading ? null : <CreateTodoButton/>}
    </>
  )
}