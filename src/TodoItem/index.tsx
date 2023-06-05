import './TodoItem.css'

type Props = {
  text: string | null
  completed: boolean
  onComplete: () => void
  onDelete: () => void
}

export function TodoItem({ text, completed, onComplete, onDelete }: Props) {
  return (
    <li className={`todo-item ${completed && "todo-item--completed"}`}>
      <div className={`item-checkbox`} onClick={onComplete}>
        <span className={`checkmark ${completed && "checkmark--completed"}`}>✓</span>
      </div>
      <p className={`item-text ${completed && "item-text--completed"}`}>{ text }</p>
      <span className='item-delete' onClick={onDelete}>❌</span>
    </li>
  )
}