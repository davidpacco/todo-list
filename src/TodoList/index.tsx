import { ReactNode } from "react"
import './TodoList.css'

type Props = {
  children: ReactNode
  totalTodos: number
  error: boolean
}

export function TodoList({ children, totalTodos, error }: Props) {
  if (totalTodos > 0 && !error) {
    return (
      <ul className="todos-container">
        { children }
      </ul>
    )
  }
  return null
}