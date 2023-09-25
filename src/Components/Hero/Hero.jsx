import React from 'react'

const Hero = ({image, tablet, mobile}) => {
  return (
    <header>
        <img className='hero-desktop' src={image} alt="" />
        <img className='hero-tablet' src={tablet} alt="" />
        <img className='hero-mobile' src={mobile} alt="" />
    </header>
  )
}

export default Hero