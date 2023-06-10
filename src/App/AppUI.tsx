import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoListLoading } from '../TodoListLoading'
import { TodoListError } from '../TodoListError'
import { TodoListEmpty } from '../TodoListEmpty'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import { Modal } from '../Modal'
import { TodoAddWindow } from '../TodoAddWindow'

export function AppUI() {
  const {
    error,
    loading,
    totalTodos,
    matchedTodos,
    completeTodo,
    deleteTodo,
    openModal
  } = useContext(TodoContext)

  return (
    <>
      <h1 id="title">To Do List</h1>

      {error
        ? <TodoListError />
        : <TodoCounter>
            {loading ? <TodoListLoading /> : null}
            {(!loading && totalTodos === 0) ? <TodoListEmpty /> : null}
          </TodoCounter>
      }

      <TodoSearch />

      <TodoList>
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

      {loading || error ? null : <CreateTodoButton/>}

      {openModal && (
        <Modal>
          <TodoAddWindow />
        </Modal>
      )}
    </>
  )
}