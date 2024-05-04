import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/guillermo-montemayor-hern%C3%A1ndez-44567bb3/' target='_blank'><FaLinkedin/></a>
        <a href='https://github.com/MemoHuracan' target='__blank'><FaGithub /></a>

    </div>
  )
}

export default HeaderSocials