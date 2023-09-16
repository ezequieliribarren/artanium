import React from 'react'

const Hero = ({image, mobile}) => {
  return (
    <header>
        <img className='hero-desktop' src={image} alt="" />
        <img className='hero-mobile' src={mobile} alt="" />
    </header>
  )
}

export default Hero