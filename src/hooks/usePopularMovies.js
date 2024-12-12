import { useDispatch, useSelector } from "react-redux";
import { addpopularMovies } from "../utils/store/moviesSlice";
import { API_OPTIONS } from "../services/urlsservice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addpopularMovies(data?.results));
    })();
  }, []);
};

export default usePopularMovies;
