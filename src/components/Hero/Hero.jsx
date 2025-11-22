import React from 'react'
import "./Hero.css"
import headphone from "../../assets/vibrating-headphone.png"
const Hero = () => {
  return (
    <header className='hero-section'>
      <div>
        <h2>100 Thousand Songs, ad-free</h2>
        <h2>Over thousands podcast episodes</h2>
      </div>

    <img className='headphone-icon' src={headphone} alt="headphone" />
    </header>
  )
}

export default Hero