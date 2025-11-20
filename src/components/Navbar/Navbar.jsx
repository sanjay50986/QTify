import React from 'react'
import "./Navbar.css"
import Logo from '../Logo/Logo'
import SearchBar from "../Search Bar/SearchBar"
import Button from "../Button/Button"

const Navbar = () => {
  return (
    <header>
      <nav className='nav-bar'>
        <Logo/>
        <SearchBar/>
        <Button/>

      </nav>
    </header>
  )
}

export default Navbar