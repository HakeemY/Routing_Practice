import React from 'react'
import {NavLink} from 'react-router-dom'


const Home = () => {
return (
    <div>
    <h1>Welcome</h1>
    <NavLink to='/'><button>Exit</button></NavLink>

    </div>
)
}

export default Home