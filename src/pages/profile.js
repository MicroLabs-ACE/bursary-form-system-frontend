import React from 'react'
import profileImg from '../Assets/profile.png'
import Navbar from '../components/Navbar'

function Profile() {
  return (
    <div className='profile'>
      <Navbar/>
      <div className='wrapper'>
        <h4>Profile</h4>
        <img src={profileImg} alt='profile'/>
        <div className='info'>
          <p>First Name :<span>Jane</span></p>
          <p>Last Name :<span>Doe</span></p>
          <p>Other Name<span>Dvay</span></p>
          <p>Phone Number : <span>+234- 9078452134</span></p>
          <p>Salutation<span>Professor</span></p>
          <p>Institutional Email :<span>Janedoe@gmail.com</span></p>
          <p>Staff code :<span>*********</span></p>
          <p>Payroll ID :<span>12-0989875</span></p>
          <p>Staff Category :<span>Non-Academic</span></p>
          <p>Grade : <span>*********</span></p>
          <p>Employment Type : <span>Temporary</span></p>
          <p>Afffliation :<span>***********</span></p>
          <p>Account Details :<span>3125********6046, Jane doe,  Firstbank plc</span></p>
          <p>Secondary  Account Details :<span>0897********6046, Jane doe,  FCMB  plc</span></p>
        </div>
      </div>
    </div>
  )
}

export default Profile
