import React from 'react'
import {NavLink} from 'react-router-dom'
import {useParams} from 'react-router'


const Word = (props) => {
    const {hello} = useParams()
    return (
    <div>
    <h1>The word is: hello</h1>
    <br /><br />
    <NavLink to='/'><button>Exit</button></NavLink>
    </div>
)
}

export default Word;