export type Todo = {
  id: string
  text: string | null
  completed: boolean
}

export type TodoContextType = {
  loading: boolean
  error: boolean
  completedTodos: number
  totalTodos: number
  setSearchValue: (value: string) => void
  matchedTodos: Todo[]
  completeTodo: (id: string) => void
  deleteTodo: (id: string) => void
}