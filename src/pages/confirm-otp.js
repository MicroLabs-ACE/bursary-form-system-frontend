import React,{useContext, useEffect, useState} from 'react'
import FormHeader from '../components/formHeader'
import  { EmailContext } from '../Context/EmailContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import { AuthContext } from '../Context/AuthContext';

function ConfirmOtp() {
  const Auth = useContext(AuthContext)
  const [showModal, setModal] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState('')
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false)
  const emailcontext = useContext(EmailContext)
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [completeOTP, setCompleteOTP] = useState('')
    const [email, setEmail] = useState('')
    useEffect(()=>{
      setEmail(emailcontext.email)
    },[emailcontext.email])
    const handleChange = (e, index) => {
      const value = e.target.value;
      if (/^[0-9]$/.test(value) || value === "") {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
  
        if (value && e.target.nextSibling) {
          e.target.nextSibling.focus();
        }
      }
    };
    const handleKeyDown = (e, index) => {
      if (e.key === "Backspace" && !otp[index] && e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    };
    const handleOTPsubmit = async()=>{
      setSubmitting(true)
      const fullotp= otp.join("")
      if (fullotp.length === 6) {
        setCompleteOTP(fullotp);  
        console.log( fullotp, email);
      } 
      try{
        const response = await axios.post('https://bursary-form-system-backend.onrender.com/auth/otp/request', {email, completeOTP},
          {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if(response.status === 201) {
            Auth.setAuth(true)
            localStorage.setItem('zcode',true)
            navigate(`${Auth.history}`);
            setSubmitting(false)
          } else if ((response.status === 400)) {
            setMessage('Wrong OTP!');
            setType('error')
            setModal(true)
            setSubmitting(false)
          }
      }catch(error){
        setMessage('Error verifying OTP. Please try again.');
        setType('error')
        setModal(true)
      }
    }
  return (
    <div className='form-wrapper'>
      <FormHeader/>
      {showModal&&<Modal type={type} msg={message}/>}
      <div className='otp'>
            <label htmlFor='otpcode'>
            <p>Enter otp code</p>
            </label>
            <div className='otp-code'>
              {otp.map((_, index) => (
                <input
                  key={index}
                  type="text"
                  value={otp[index]}
                  maxLength="1"
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="otp-input-box"
                />
              ))}
            </div>
              <button className='variant-a' onClick={handleOTPsubmit}>{submitting?('Confirming'):('Send OTP code')}</button>
              <p className='resend-code'>Didn't receive code? <span>Resend</span></p>
    </div>
    </div>
  )
}

export default ConfirmOtp
