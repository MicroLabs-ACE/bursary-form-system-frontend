import React, { useContext } from 'react'
import FormHeader from '../components/formHeader'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from '../components/Modal';
import { EmailContext } from '../Context/EmailContext';
function Signin() {
  const emailcontext = useContext(EmailContext)
  const [showModal, setModal] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [type, setType] = useState('')
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false)
  const sendOTP = async()=>{
    setSubmitting(true)
    try {
      const response = await axios.post('https://bursary-form-system-backend.onrender.com/auth/otp/request', {email},
        {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if(response.status === 201) {
        setMessage('OTP sent to your Mail!');
        navigate('/confirm-otp');
        setSubmitting(false)
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
         setMessage('Mail entered is invalid, enter a valid mail.');
        setType('error')
        setModal(true)
      } else if (error.response) {
        setMessage('Error verifying Mail. Please try again.');
        setType('error')
        setModal(true)
      }
      setSubmitting(false)
    }
  }
  useEffect(()=>{
    emailcontext.setEmail(email)
    setModal(false)
  },[email, emailcontext])

  const initiateGoogle = async()=>{
    console.log('clicked')
    try {
      const response = await axios.get('https://bursary-form-system-backend.onrender.com/auth/google');
      console.log(response)
     
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <div className='form-wrapper'>
        <FormHeader/>
        <div className="sign-in ">
      {showModal&&<Modal type={type} msg={message}/>}
                <label htmlFor='email'><p>Email</p></label>
                <input name='email' placeholder='Enter your email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <button className='variant-a' onClick={sendOTP}>{submitting?('Please wait...'):('Send OTP code')}</button>
                <div className='sect-break'><p>OR</p></div>
                <button className='variant-b' onClick={initiateGoogle}>Continue with Google</button>
        </div>
    </div>
  )
}

export default Signin
