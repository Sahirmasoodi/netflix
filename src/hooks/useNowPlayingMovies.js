import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/store/moviesSlice";
import { API_OPTIONS } from "../services/urlsservice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addNowPlayingMovies(data?.results));
  })()
  }, []);
};

export default useNowPlayingMovies;
