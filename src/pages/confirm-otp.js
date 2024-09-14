import React,{useState} from 'react'
import FormHeader from '../components/formHeader'

function ConfirmOtp() {
    const [otp, setOtp] = useState(new Array(5).fill(""));
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
  return (
    <div className='form-wrapper'>
      <FormHeader/>
      <div className='otp'>
           <form>
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
              <button className='variant-a'>Send OTP code</button>
              <p className='resend-code'>Didn't receive code? <span>Resend</span></p>
            </form>
    </div>
    </div>
  )
}

export default ConfirmOtp
