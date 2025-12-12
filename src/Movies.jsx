import React, { useState } from 'react'
import {movies} from './data.js'


const Movies = () => {

    const [movieList, setMovieList] = useState(movies)
    return (
        <div style={{display:'flex',
                    justifyContent:'center',
                    alignContent:'center',
                    flexWrap:'wrap',
                    gap:'2rem'
        }}>
            {movieList.map((data) => (
                <div key={data.id}>
                    <div>
                        <img src={data.poster_path} alt="" style={{width:'250px'}} />
                    </div>
                    <h3>{data.title}</h3>
                    <p>{data.release_date}</p>
                </div>))}

        </div>
    )
}

export default Movies
