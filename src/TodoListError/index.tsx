import './TodoListError.css'

export function TodoListError() {
  return (
    <div className="error-list">
      <p className='error-msg'>Failed to load your To Dos.</p>
      <button className='error-button' onClick={() => window.location.reload()}>Refresh</button>
    </div>
  )
}