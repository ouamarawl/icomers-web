import React from 'react'
import './Cards.css'
function Card(props) {
  return (
    <div className='container_card'>
      <img src={props.image}  alt='chaussure1' style={{borderRadius: '15px', height : '20rem', width: '19rem'}} />
      <h1 style={{fontSize: '25px'}}> {props.category} </h1>
      <p style={{color: 'gray'}}> {props.stock} </p>
    </div>
  )
}

export default Card