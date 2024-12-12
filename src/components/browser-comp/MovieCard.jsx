import React from "react";
import { MOVIE_IMG } from "../../services/urlsservice";

const MovieCard = ({ movieList ,title}) => {
  return (
    <div className=" pb-10 ">
    <h1 className="text-2xl text-white ps-6 pb-5 font-serif  font-bold ">{title}</h1>
    <div className="flex justify-evenly overflow-x-scroll  ">
      {movieList.map((movie) => (
        <div key={movie.id} className="group relative min-w-40 h-28 md:h-60 md:w-64 mx-5 cursor-pointer overflow-hidden rounded-sm shadow-lg">
          <img
          src={MOVIE_IMG+movie.backdrop_path}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white space-y-2">
            <h3 className="text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">{movie.title}</h3>
            <p className="text-sm opacity-0 group-hover:opacity-70 transition-opacity duration-300 line-clamp-3">
              {movie.overview}
            </p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MovieCard;
