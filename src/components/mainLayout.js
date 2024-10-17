import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import Sidebar from './Sidebar'

function MainLayout() {
    const {isAuthenticated} = useAuth()
    console.log(isAuthenticated)
      return isAuthenticated ? <div className='main-layout'><Sidebar/><Outlet /></div> : <Navigate to="/sign-in" />;
}

export default MainLayout
