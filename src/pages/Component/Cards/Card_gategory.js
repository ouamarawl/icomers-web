import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'
function Card_category(props) {
  return (
    
    <div className='container_card_category'>
      <Link>
      <img src={props.image}  alt='chaussure1' style={{borderRadius: '15px', height : '20rem', width: '19rem'}} />
      <h1 style={{fontSize: '25px'}}> {props.category} </h1>
      <p style={{color: 'gray'}}> {props.stock} </p>
      </Link>
    </div>
    
  )
}

export default Card_category