import React, { useState } from 'react'
import Logo from "../Assets/logo.png"
import Notification from '../Assets/notification.svg'
import { Link } from 'react-router-dom'

function Navbar() {
  var [showlinks, setShowlinks] = useState(false)
  return (
    <div className='navbar'>
        <img src={Logo} alt='logo '/>
        <div className={`navbar__links ${showlinks&&'active'}`}>
          <div className='hamburger'>
              <span></span>
              <span></span>
            </div>
           <div className='links'>
           <Link className='active'><p>Dashboard</p></Link>
            <Link><p>Pending Form</p></Link>
            <Link><p>Form list</p></Link>
            <Link><p>Add Account</p></Link>
           </div>
        </div>
        <div className='notification'>
            <img src={Notification} alt='notification'/>
        </div>
    </div>
  )
}

export default Navbar
