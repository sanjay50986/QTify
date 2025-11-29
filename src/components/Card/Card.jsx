import React from 'react'
import cardIcon from "../../assets/card.png"
import "./Card.css"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


const Card = ({follows, image, title, likes}) => {
  return (
    <div class="card" >
      <img src={image} class="card-img-top" alt="card"/>
       <Stack className='card-body' direction="row" spacing={1}>
        <Chip label={follows ? ` ${follows} Follows` : `${likes} Likes`} />
      </Stack>
      <h5>{title}</h5>
    </div>
  )
}

export default Card