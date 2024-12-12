import React, { useRef } from "react";
import { API_OPTIONS } from "../../services/urlsservice";
import { useDispatch } from "react-redux";
import { addSearchMovies } from "../../utils/store/gptSlice";

const GptSearchBar = () => {
  let reference = useRef(null)
  let dispatch = useDispatch()
 async function handleGptSearch(){
  const movieResponse = await fetch(
    `https://api.themoviedb.org/3/search/movie?&query=${reference.current.value}&include_adult=false&language=en-US&page=1`,
    API_OPTIONS
  );
  const movies = await movieResponse.json();
   dispatch(addSearchMovies(movies))
  
  }
 

  return (
    <div className="h-40 pt-20">
      <div className="flex items-center w-1/3  min-w-72 mx-auto bg-gray-100 rounded-full px-2 py-1 shadow-md">
        <input
        ref={reference}
          type="text"
          placeholder="Search for a movie"
          className="flex-grow bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500"
        />
        <button className="ml-2 bg-black text-white px-2 py-1 rounded-full hover:bg-black hover:bg-opacity-80 transition" onClick={handleGptSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
