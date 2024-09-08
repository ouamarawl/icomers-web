import React from 'react'
import insta2 from '../../../../data/assets/image/insta2.webp'
import insta1 from '../../../../data/assets/image/insta1.webp'
import insta3 from '../../../../data/assets/image/insta3.webp'
import insta4 from '../../../../data/assets/image/insta4.webp'
import './Container.css'

function Container2(props) {
  return (
    <div className='container'  >
      <div className='title'>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      </div>
      <div className='cards' style={ {marginBottom: '3rem'} } >
        <img src={insta1} style={ {height:'20rem', width: '20rem', borderRadius : '10px', } } alt=''/>
        <img src={insta2} style={ {height:'20rem', width: '20rem', borderRadius : '10px' ,} } alt=''/>
        <img src={insta3} style={ {height:'20rem', width: '20rem', borderRadius : '10px', } } alt=''/>
        <img src={insta4} style={ {height:'20rem', width: '20rem', borderRadius : '10px', } } alt=''/>
      </div>
        <a href='/' >
       <button style= { {height :' 3rem', width :'15rem', backgroundColor :'white', border: ' 1px solid gray' } }>
       <p style={{fontSize: ' 22px', color:'black', marginTop :'5px'}}> Visiter Notre Instagram</p>
       </button>
        </a>
    </div>
  )
}

export default Container2