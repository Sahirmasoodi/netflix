import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const selector = useSelector((state) => state.movies.nowPlayingMovies);
  if (!selector) return;
  
  const movieInfo = selector[0];
  const {title,overview,id} = movieInfo
  return (
    <div>
      <VideoTitle movieTitle={title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
