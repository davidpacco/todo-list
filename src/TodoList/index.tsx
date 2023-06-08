import { ReactNode, useContext } from "react"
import './TodoList.css'
import { TodoContext } from "../TodoContext"

type Props = {
  children?: ReactNode
}

export function TodoList({ children }: Props) {
  const { totalTodos, error } = useContext(TodoContext)
  if (totalTodos > 0 && !error) {
    return (
      <ul className="todos-container">
        { children }
      </ul>
    )
  }
  return null
}