import './TodoCounter.css'

type Props = {
  completed: number
  total: number
}

export function TodoCounter({ completed, total }: Props) {
  if (total === 0) {
    return (
      <>
        <p className="empty-list-msg">Add your first To Do</p>
        <p className="arrow-down">↓</p>
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