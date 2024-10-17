import React from 'react'
import Logo from "../Assets/logo.png"
import notification from "../Assets/notification.svg"
import userAvatar from "../Assets/user.png"
import home from "../Assets/home.png"
import userAdd from "../Assets/user-add.png"
import note from "../Assets/note.png"
import logoutIcon from "../Assets/logout.png"
import { Link } from 'react-router-dom'


function Sidebar() {
  return (
    <div className='side-wrapper'>
      <div className='sidebar'>
        <div className='sidebar__header'>
         <Link to={'/dashboard'}> <img src={Logo} className='logo' alt='OAU logo'/></Link>
          <img src={notification} className='notification' alt='notification bell'/>
          <Link to={'/profile'}><img src={userAvatar} className='userAvatar' alt='userAvatar'/></Link>
        </div>
        <div className='sidebar__contents'>
          <div className='side-link'><img src={home} alt='home'/> Dashboard</div>
          <div className='side-link'><img src={note} alt='home'/> Form List</div>
          <div className='side-link'><img src={userAdd} alt='home'/> Add Account</div>
          <div className='side-link logout'><img src={logoutIcon} alt='home'/> Log out</div>
        </div>
      </div>
    </div>
    
  )
}

export default Sidebar
