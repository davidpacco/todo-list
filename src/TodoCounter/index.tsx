import { ReactNode, useContext } from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext'

type Props = {
  children?: ReactNode
}

export function TodoCounter({ children }: Props) {
const { totalTodos, completedTodos } = useContext(TodoContext)
  if (totalTodos === 0) {
    return (
      <>
        { children }
      </>
    )
  } else if (completedTodos === totalTodos) {
    return (
      <h3>You've completed all your To Dos</h3>
    )
  } else {
    return (
      <h3>You've completed { completedTodos } of { totalTodos } To Dos</h3>
    )
  }
}