import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
 const navigate=useNavigate()
 useEffect(()=>{
    navigate('/dashboard')
})
  return (
    <div className='app'>
      
    </div>
  )
}

export default App
