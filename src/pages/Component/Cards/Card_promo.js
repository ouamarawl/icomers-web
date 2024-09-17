import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'
function Card_promo(props) {
  return (
    <div className='container_card_promo'>
      <Link to='/vitrines'>
      <div className='promotion' style={ props.style }> <p style={{ fontSize: '22px' } }>{props.promotion}</p> </div>
      <img  src={props.images}  alt='chaussur' style={{borderRadius: '15px', height : '20rem', width: '19rem' , background: 'transparent' }} />
      <p style={{color: 'black'}}> {props.discription} </p>
        {props.icon}
      <p style={{color: 'gray'}}> {props.prix} </p>
      </Link>
    </div>
  )
}

export default Card_promo



