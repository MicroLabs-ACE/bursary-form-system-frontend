import React from 'react'
import Logo from "../Assets/logo.png"

function FormHeader() {
  
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
    </div>

  )
}

export default FormHeader
