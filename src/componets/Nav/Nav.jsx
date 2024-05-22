import React from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from 'react'; 

export const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <FaHome /></a>
      <a href='#about' onClick={() => setActiveNav('about')} className={activeNav === '#about' ? 'active' : ''}><FaUser /></a>
      <a href='#experience'onClick={() => setActiveNav('experience')} className={activeNav === '#experience' ? 'active' : ''}><FaLaptopCode /></a>
      <a href='#contact' onClick={() => setActiveNav('contact')} className={activeNav === '#contact' ? 'active' : ''}><MdEmail /></a>
      
    </nav>
  )
}

export default Nav