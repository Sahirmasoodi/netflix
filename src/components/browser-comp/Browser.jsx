import React, { useState } from "react";
import BrowserHeader from "./BrowserHeader";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTrendingMovies from "../../hooks/useTrendingMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import BrowserFooter from "./BrowserFooter";
import { useSelector } from "react-redux";
import GptPage from "../gpt/GptPage";
import Shimmer from "../Shimmer";

const Browser = () => {
  let [load, setload] = useState(true);
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  let showGpt = useSelector((state) => state.gpt.gptSearch);

  setTimeout(() => {
    setload(false);
  }, 3000);
  if (load) {
    return <Shimmer />;
  }

  return (
    <div className="bg-black">
      <BrowserHeader />
      {showGpt ? (
        <GptPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      <BrowserFooter />
    </div>
  );
};

export default Browser;
