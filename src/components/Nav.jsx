import React from 'react'
import logo from '../assets/logo.png'
import avatar from '../assets/avatar.jpg'
import  '../style/nav.scss'

const Nav = () => {
  return (
    <div className='Nav' >
      
      <div className="nav_content">
      <img src={logo} className="nav-logo"  alt="" />
      <img src={avatar} className="nav-avatar" alt="" />
      </div>
    
    
    </div>
  )
}

export default Nav