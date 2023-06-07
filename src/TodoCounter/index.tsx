import { ReactNode } from 'react'
import './TodoCounter.css'

type Props = {
  completed: number
  total: number
  children: ReactNode
}

export function TodoCounter({ children, completed, total }: Props) {
  if (total === 0) {
    return (
      <>
        { children }
      </>
    )
  } else if (completed === total) {
    return (
      <h3>You've completed all your To Dos 😎</h3>
    )
  } else {
    return (
      <h3>You've completed { completed } of { total } To Dos</h3>
    )
  }
}