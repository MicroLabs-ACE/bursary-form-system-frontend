import React from 'react'

function Modal({msg, type}) {
  return (
    <div className={`modal ${type}`}>
      <span>!</span><p> {msg}</p>
    </div>
  )
}

export default Modal
