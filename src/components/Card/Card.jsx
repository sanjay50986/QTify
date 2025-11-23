import React from 'react'
import cardIcon from "../../assets/card.png"
import "./Card.css"

const Card = ({albumData}) => {
  return (
    <div class="card" >
      <img src={albumData.image} class="card-img-top" alt={albumData.title}/>
      <div class="card-body">
          <span>{albumData.follows} Follows</span>
      </div>

      <h5>{albumData.title}</h5>
    </div>
  )
}

export default Card