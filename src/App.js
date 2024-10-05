import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate= useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 0); 

    return () => clearTimeout(timer);
  }, [navigate]); 

  return (
    <div className='app'>
      
    </div>
  )
}

export default App
