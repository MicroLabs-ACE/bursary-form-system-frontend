import React from 'react'

function EaseForm() {
  return (
    <div className="ease-form">
            <form>
                <label htmlFor='email'><p>Email</p></label>
                <input name='email' placeholder='Enter your email' id='email'/>
                <button className='variant-a'>Send OTP code</button>
                <div className='sect-break'><p>OR</p></div>
                <button className='variant-b'>Continue with Google</button>
            </form>
        </div>
  )
}

export default EaseForm
