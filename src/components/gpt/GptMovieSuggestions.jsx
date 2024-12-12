import React from "react";
import { useSelector } from "react-redux";
import { BG_IMAGE } from "../../services/urlsservice";
import SearchCard from "./SearchCard";

const GptMovieSuggestions = () => {
  const selector = useSelector((state) => state.gpt.searchMovies);

  if (!selector)
    return (
      <div className="h-96 md:h-5/6">
        <img className="h-96 md:h-full" src={BG_IMAGE} />
      </div>
    )
    console.log(selector.results);
    
  return (
  <div className="bg-black p-10">
  <SearchCard movieList={selector.results}/>
  </div>
  )
}

export default GptMovieSuggestions;
