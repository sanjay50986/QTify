import React from 'react'
import "./SearchBar.css"
import {ReactComponent as SearchIcon} from "../../assets/Icons/Search-icon.svg"


const SearchBar = () => {
  return (
    <div className='search-input'>
        <input type="text"
          placeholder='Search a album of your choice' />

        <SearchIcon className='search-icon'/>
    </div>
  )
}

export default SearchBar