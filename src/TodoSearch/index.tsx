import { useContext } from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext'

export function TodoSearch() {
  const {
    setSearchValue,
    totalTodos,
    error
  } = useContext(TodoContext)
  if (totalTodos > 0 && !error) {
    return (
      <input
        id="search-input"
        placeholder="Search..."
        type="text"
        onChange={event => {
          setSearchValue(event.target.value)
        }}
      />
    )
  } else {
    return null
  }
}