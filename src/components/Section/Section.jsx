import React, { useState } from 'react'
import "./Section.css";
import Card from "../Card/Card"
import Carousel from '../Carousel/Carousel';

const Section = ({title, data, id}) => {

  const [toggle, setToggle] = useState(true)

  function handleToggle() {
    setToggle(!toggle)
  }

  console.log(data)

  return (
    <div className='section-container'>
        <div className='section-header'>
            <h2>{title}</h2>
            <button onClick={handleToggle}>
                {toggle ? "Show all" : "Collapse"}
            </button>
        </div>
        {toggle ? (
          <Carousel data = {data} id = {id}/>
        ) : (
          <div className='card-layout'>
            {data.map((album) => (
            <Card
             key={album?.id}
             follows = {album?.follows}
             image = {album?.image}
             title = {album?.title}/>
        ))}
        </div>
        )}
    </div>
  )
}

export default Section