import React from 'react'
import CV from '../../assets/GMH.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary '>Open to Work</a>
    
        
    </div>
  )
}

export default CTA