import React from "react";
import { ALT_IMAGE, MOVIE_IMG } from "../../services/urlsservice";

const SearchCard = ({movieList}) => {
  return (
    
    <div className="flex flex-wrap justify-evenly ">
      {movieList.map((movie) => (
        <div key={movie.id} className="group relative min-w-40 w-72 h-40 my-5 cursor-pointer overflow-hidden rounded-sm shadow-sm shadow-red-900">
          <img
          src={!movie.backdrop_path ?ALT_IMAGE  :MOVIE_IMG+movie.backdrop_path }
            alt='https://www.starazi.com/assets/movies/backdrop/movie_image_1841.jpg'
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
 
  );
};

export default SearchCard;
