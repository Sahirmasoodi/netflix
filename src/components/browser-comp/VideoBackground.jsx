import React, { useEffect } from "react";
import { API_OPTIONS } from "../../services/urlsservice";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../../utils/store/moviesSlice";


const VideoBackground = ({ movieId }) => {
    const dispatch = useDispatch()
    const movieTrailer = useSelector(state=>state.movies.trailerVideo)
  let getTrailer = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/912649/videos?language=en-US",
      API_OPTIONS
    );
    let data = await response.json();
    let filteredData = data.results.filter((d) => d.type === "Trailer");
    const trailer = filteredData.length ? filteredData[0] : data.results[0]
    dispatch(addTrailerVideo(trailer))

  };

  useEffect(()=>{
      getTrailer();
  },[])

  return (
    <div>
      <iframe
        className="w-screen aspect-video "
        src={"https://www.youtube.com/embed/FKBN1qAzW3s?si="+movieTrailer?.key+'&autoplay=1&mute=1'}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
