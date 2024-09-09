import React from 'react'
import Logo from "../Assets/logo.png"
import Notification from '../Assets/notification.svg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={Logo} alt='logo '/>
        <div className='navbar__links'>
            <Link className='active'><p>Dashboard</p></Link>
            <Link><p>Pending Form</p></Link>
            <Link><p>Form list</p></Link>
            <Link><p>Add Account</p></Link>
        </div>
        <div className='notification'>
            <img src={Notification} alt='notification'/>
        </div>
    </div>
  )
}

export default Navbar
