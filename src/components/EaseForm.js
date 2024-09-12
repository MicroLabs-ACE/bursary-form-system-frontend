import React, { useContext, useEffect, useState } from 'react'
import ErrorModal from './ErrorModal'
import { useNavigate } from 'react-router-dom';
function EaseForm() {
  const [showModal, setModal] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [type, setType] = useState('')
  const navigate = useNavigate();
  const sendOTP = async()=>{
    try {
      const response = await fetch('https://bursary-form-system-backend.onrender.com/auth/otp/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      console.log(response)
      if (response.ok) {
        setMessage('OTP verified successfully!');
        navigate('/dashboard');
      } else {
        setMessage('Invalid Mail. Please enter a valid Mail.');
        setType('error')
        setModal(true)
      }
    } catch (error) {
      setMessage('Error verifying OTP. Please try again.');
    }
  }
  return (
    <div className="ease-form ">
      {showModal&&<ErrorModal msg={message} type={type}/>}
                <label htmlFor='email'><p>Email</p></label>
                {message}
                <input name='email' placeholder='Enter your email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <button className='variant-a' onClick={sendOTP}>Send OTP code</button>
                <div className='sect-break'><p>OR</p></div>
                <button className='variant-b'>Continue with Google</button>
        </div>
  )
}

export default EaseForm
