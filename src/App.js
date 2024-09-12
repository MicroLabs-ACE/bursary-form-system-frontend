import React from 'react'
import EaseForm from './components/EaseForm'
import Logo from "../src/Assets/logo.png"

function SIgnUp() {
  
  return (
    <div className='form-wrapper'>
      <div className='form-header'>
        <img src={Logo} alt='logo'/>
        <div className='logo-break'></div>
        <div>
          <h4>EASE FORM</h4>
          <h6>powered by OAU BURSARY </h6>
        </div>
      </div>
      <EaseForm/>
    </div>

  )
}

export default SIgnUp
