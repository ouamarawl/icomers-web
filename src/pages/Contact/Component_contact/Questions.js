import React from 'react'

function Questions(props) {
  return (
    <div className='Qestion'>
      <h2 style={{fontSize:'25px'}}>{props.questions}</h2>
      <p style={{color:'gray'}}> {props.reponse} </p>
      <hr/>
    </div>
  )
}

export default Questions