import React, { useState } from 'react'
import Logo from "../Assets/logo.png"
import Notification from '../Assets/notification.svg'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  var [showlinks, setShowlinks] = useState(false)
  return (
    <div className='navbar'>
        <img src={Logo} alt='logo '/>
        <div className={`navbar__links ${!showlinks&&'noshow'}`}>
        <div className='cancel' onClick={()=>setShowlinks(false)}>
              <span></span>
              <span></span>
            </div>
           <div className='links'>
           <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? ("active"):(''))}
          ><p>Dashboard</p></NavLink>
            <NavLink
            to="/forms/Store-requisition-form"
            className={({ isActive }) => (isActive ? ("active"):(''))}
          ><p>Pending Form</p></NavLink>
            <Link><p>Form list</p></Link>
            <Link><p>Add Account</p></Link>
           </div>
         
        </div>
        <div className='notification'>
            <img src={Notification} alt='notification'/>
        </div>
        <div className='hamburger' onClick={()=>setShowlinks(true)}>
              <span></span>
              <span></span>
          </div>
    </div>
  )
}

export default Navbar
