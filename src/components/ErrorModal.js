import React from 'react'

function ErrorModal({msg, type}) {
  return (
    <div className={`modal error ${type}`}>
      <span>!</span><p> {msg}</p>
    </div>
  )
}

export default ErrorModal
