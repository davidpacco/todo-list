import { ReactNode } from "react"
import './TodoList.css'

type Props = {
  children: ReactNode
  totalTodos: number
}

export function TodoList({ children, totalTodos }: Props) {
  if (totalTodos > 0) {
    return (
      <ul className="todos-container">
        { children }
      </ul>
    )
  }
  return null
}