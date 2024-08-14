import React from 'react'
import {NavLink} from 'react-router-dom'
import {useParams} from 'react-router'


const Number = (props) => {
    const {number} = useParams()
  return (
    <div>
    <h1>The number is: {number}</h1>
    <br /><br />
    <NavLink to='/'><button>Exit</button></NavLink>
    </div>
  )
}

export default Number;