import React from 'react'
import "./Section.css";
import Card from "../Card/Card"

const Section = ({title, data}) => {
  return (
    <div className='section-container'>
        <div className='section-header'>
            <h2>{title}</h2>
            <button>
                Collapse
            </button>
        </div>
        <div className='card-layout'>
            {data.map((album) => (
            <Card
             key={album?.id}
             follows = {album?.follows}
             image = {album?.image}
             title = {album?.title}/>
        ))}
        </div>
    </div>
  )
}

export default Section