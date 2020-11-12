import React from 'react'
import './nav.css'
import Requests from './Requests'

function Nav({setselOp}) {
    return (
        <div className = 'nav'>
            <h2 onClick = {()=> {setselOp(Requests.fetchTrending)}} >Trending</h2>
            <h2 >TopRated</h2>
            <h2>Action</h2>
            <h2>Comedy</h2>
            <h2>Horror</h2>
            <h2>Romance</h2>
            <h2>Mystery</h2>
            <h2>Scifi</h2>
            <h2>Western</h2>
            <h2>Animation</h2>
            <h2>Movie</h2>
            
        </div>
    )
}

export default Nav
