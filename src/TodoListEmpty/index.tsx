import './TodoListEmpty.css'

export function TodoListEmpty() {
  return (
    <div className='empty-list'>
      <p className="empty-list-msg">Add your first To Do</p>
      <p className="arrow-down">↓</p>
    </div>
  )
}