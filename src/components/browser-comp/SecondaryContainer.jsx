import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  let nowPlayingMovies = useSelector(state=>state.movies.nowPlayingMovies)
  let popularMovies = useSelector(state=>state.movies.popularMovies)
  let topRatedMovies = useSelector(state=>state.movies.topRatedMovies)
  let upcomingMovies = useSelector(state=>state.movies.upcomingMovies)
  // let movies = useSelector(state=>state.movies)
  if(!nowPlayingMovies ) return
  else if(!popularMovies) return
  else if(!topRatedMovies) return
  else if(!upcomingMovies) return
 
 

  return (
    <div className='mt-10 md:-mt-32  relative z-10'>
      <MoviesList title={'Now Playing'} movieList={nowPlayingMovies}/>
      <MoviesList title={'Top Rated'} movieList={topRatedMovies}/>
      <MoviesList title={'Popular'} movieList={popularMovies}/>
      <MoviesList title={'Upcoming'} movieList={upcomingMovies}/>
      <MoviesList title={'Thriller movies'} movieList={nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainer
