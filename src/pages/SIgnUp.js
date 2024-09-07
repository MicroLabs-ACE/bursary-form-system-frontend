import React from 'react'
import EaseForm from '../components/EaseForm'
import Logo from "../Assets/logo.png"
import OTP from '../components/OTP'

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
       <OTP/>
    </div>

  )
}

export default SIgnUp
