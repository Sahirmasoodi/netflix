import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const MoviesList = ({movieList,title}) => {
 

  return (
    <div>
      <MovieCard title={title} movieList={movieList}/>
    </div>
  )
}

export default MoviesList
