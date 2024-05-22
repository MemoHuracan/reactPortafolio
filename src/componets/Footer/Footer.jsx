import React from 'react'
import './footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Memo</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/guillermo-montemayor-hern%C3%A1ndez-44567bb3/'><FaLinkedin /></a>
        <a href='https://github.com/MemoHuracan'><FaGithub /></a>
       
      </div>

      <div className="footer__copyright">
        <small>&copy;Guillermo Montemayor. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer