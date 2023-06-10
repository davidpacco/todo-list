import React from "react"
import { Todo } from "../interfaces/interfaces"

export function useLocalStorage(itemName: string, initialValue: Todo[]) {
  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)

        let parsedItem: Todo[]

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }

        setLoading(false)
      } catch {
        setLoading(false)
        setError(true)
      }
    }, Math.random() * 3000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const saveItem = (newItem:  Todo[]) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return { item, saveItem, loading, error } as const
}