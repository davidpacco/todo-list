import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './CreateTodoButton.css'

export function CreateTodoButton() {
  const { modalToggle } = useContext(TodoContext)
  return (
    <button
      className='create-todo-button'
      onClick={() => {
        modalToggle(true)
        document.body.style.overflow = 'hidden'
      }}
    >
      Add new
    </button>
  )
}