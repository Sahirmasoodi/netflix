import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/store/moviesSlice";
import { API_OPTIONS } from "../services/urlsservice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addTopRatedMovies(data?.results));
    })();
  }, []);
};

export default useTrendingMovies;


