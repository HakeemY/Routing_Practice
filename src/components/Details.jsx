import React from 'react'
import {NavLink} from 'react-router-dom'
import {useParams} from 'react-router'


const Details = (props) => {
    const {textColor, divColor} = useParams()
  return (
    <div style={{backgroundColor:(divColor)}}>
   <br /><br />
    <h1 style={{color: (textColor)}}>The word is: hello </h1>
   <br /><br />
    <NavLink to='/'><button>Exit</button></NavLink>
    </div>
  )
}

export default Details;