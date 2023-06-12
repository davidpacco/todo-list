import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import AcceptIcon from '../assets/accept-icon.svg'
import CancelIcon from '../assets/cancel-icon.svg'
import './TodoAddWindow.css'

export function TodoAddWindow() {
  const { addTodo, modalToggle } = useContext(TodoContext)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    modalToggle(false)
  }

  const addNewTodo = () => {
    const input = document.getElementById('new-input') as HTMLInputElement
    addTodo(input.value)
  }

  return (
    <form
      className="new-todo-window"
      onSubmit={onSubmit}
    >
      <input
        className='new-todo--text'
        id='new-input'
        type="text"
        autoFocus={true}
        autoComplete='off'
      />

      <button
        type='submit'
        className='new-todo--add new-todo--button'
        onClick={addNewTodo}
      >
        <img
          className='accept-icon'
          src={AcceptIcon}
          alt="Accept icon"
        />
      </button>

      <button
        type='submit'
        className='new-todo--cancel new-todo--button'
      >
        <img
          className='cancel-icon'
          src={CancelIcon}
          alt="Cancel icon"
        />
      </button>
    </form>
  )
}