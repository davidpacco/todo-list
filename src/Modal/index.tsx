import { ReactNode, useContext } from "react"
import { createPortal } from 'react-dom'
import './Modal.css'
import { TodoContext } from "../TodoContext"

type Props = {
  children?: ReactNode
}

export function Modal({ children }: Props) {
  const { modalToggle } = useContext(TodoContext)

  function closeModal(event: React.MouseEvent<HTMLElement>) {
    const value = (event.target as HTMLInputElement).className
    if (value == 'modal') {
      modalToggle(false)
    }
  }

  return createPortal(
    <div onClick={closeModal} className="modal">
      { children }
    </div>,
    document.getElementById('modal') as Element
  )
}