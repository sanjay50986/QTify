import React from 'react'
import Card from '../Card/Card'
import "./Album.css"

const TopAlbum = () => {
  return (
    <section className='album'>
      <div className='header-title'>
        <h3>Top Albums</h3>
        <h4>Show all</h4>
      </div>
        <Card/>
    </section>
  )
}

export default TopAlbum