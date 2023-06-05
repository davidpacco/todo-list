import './TodoSearch.css'

type Props = {
  setSearchValue: (value: string) => void
  total: number
}

export function TodoSearch({ setSearchValue, total }: Props) {
  if (total > 0) {
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
    return <></>
  }
}