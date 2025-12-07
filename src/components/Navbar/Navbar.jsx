import React from 'react'
import "./Navbar.css"
import Logo from '../Logo/Logo'
import SearchBar from "../Search Bar/SearchBar"
import Button from "../Button/Button"

const Navbar = ({onFeedbackClick}) => {
  return (
    <header>
      <nav className='nav-bar'>
        <Logo/>
        <SearchBar/>
        <Button onFeedbackClick = {onFeedbackClick}/>

      </nav>
    </header>
  )
}

export default Navbar