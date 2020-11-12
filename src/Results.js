import React  , {useState , useEffect} from 'react'
import './Results.css'
import VideoCard from './VideoCard'
import axios from './axios'




function Results ({selOp}) {
    const[movies , setmovies ] = useState([])
    useEffect( () => {
    const fetchData = async () => {
    const response = await axios.get(selOp)
    console.log(response.data.results)
    setmovies(response.data.results)
    }
   fetchData()
    } , [selOp] ) 

    return (
        <div className = 'results'>
    
        { 
            movies.map( (movie) => {
                return <VideoCard movie = {movie} key= {movie.id} /> 
            })
        }
         
           
        </div>
    )
}

export default Results
