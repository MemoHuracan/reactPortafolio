import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";

const contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <MdOutlineEmail  className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>memo.montemayor@outlook.com</h5>
          <a href='mailto:memo.montemayor@outlook.com' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
          <IoLogoWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5></h5>
          <a href='https://api.whatsapp.com/send?phone+14034853858' target='_blank'>Send a message</a>
          </article> 
        </div>

        
      </div>
    </section>
  )
}

export default contact