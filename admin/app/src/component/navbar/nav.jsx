import React from 'react'
import './nav.css'
// import navlogo from "../assets/nav-logo.svg";
import logo from "../assets/logo.png"
import navprofileIcon from "../assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* <img src={navlogo} className='nav-logo' alt="" /> */}
      <div className='logoimg'>
        <img src={logo} alt="" />
      <h1>Fashion Zone</h1>
      </div>
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
