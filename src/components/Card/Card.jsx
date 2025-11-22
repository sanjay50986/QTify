import React from 'react'
import cardIcon from "../../assets/card.png"
import "./Card.css"

const Card = () => {
  return (
    <div class="card" >
      <img src={cardIcon} class="card-img-top" alt="..."/>
      <div class="card-body">
          <span>100 Follows</span>
      </div>

      <h5>New Bollywood</h5>
    </div>
  )
}

export default Card