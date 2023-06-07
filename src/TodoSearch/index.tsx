import './TodoSearch.css'

type Props = {
  setSearchValue: (value: string) => void
  total: number
  error: boolean
}

export function TodoSearch({ setSearchValue, total, error }: Props) {
  if (total > 0 && !error) {
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