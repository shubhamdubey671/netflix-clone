import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import avatar from '../assets/avatar.jpg'
import  '../style/nav.scss'

const Nav = () => {

  const [show ,handleShow] =useState(false)
  const transitionNavBar =()=>{
    if(window.scrollY>100){
      handleShow(true);
    }
    else
    handleShow(false)
  }

  useEffect(()=>{

    window.addEventListener("scroll",transitionNavBar)
    return() => window.removeEventListener("scroll",transitionNavBar)


  },[])


  return (
    <div className={`nav ${show && "nav_black"} `} >
      
      <div className="nav_content">
      <img src={logo} className="nav-logo"  alt="" />
      <img src={avatar} className="nav-avatar" alt="" />
      </div>
    
    
    </div>
  )
}

export default Nav