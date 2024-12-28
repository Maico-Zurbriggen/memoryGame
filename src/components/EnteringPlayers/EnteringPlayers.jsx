import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { useModalContext } from "./context"

const EnteringPlayers = ({ children }) => {
  const modalRef = useRef(null)
  const { state, setState } = useModalContext();

  const closeModal = () => { setState(false) }

  const modalRoot = document.getElementById("enteringPlayers")

  if (!state || !modalRoot) {
    return null;
  }

  return createPortal(
    <div>
      <div onClick={handleContentClick} ref={modalRef}>
        {children}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>, modalRoot)
}

export default EnteringPlayers;