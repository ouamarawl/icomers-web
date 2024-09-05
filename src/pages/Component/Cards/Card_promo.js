import React from 'react'
import './Cards.css'
function Card_promo(props) {
  return (
    <div className='container_card'>
      <div className='promotion' style={ {borderRadius : '100%', height :'4rem', width: '4rem', backgroundColor : 'rgb(127, 96, 81)', margin:'0px ', paddingTop :'13px', marginLeft:'1rem',marginTop:'1rem'} }> <p style={{ fontSize: '22px' } }>{props.promotion}</p> </div>
      <img src={props.images}  alt='chaussur' style={{borderRadius: '15px', height : '20rem', width: '19rem'}} />
      <p style={{color: 'black'}}> {props.discription} </p>
        {props.icon}
      <p style={{color: 'gray'}}> {props.prix} </p>
    </div>
  )
}

export default Card_promo