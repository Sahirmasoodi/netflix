import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/store/moviesSlice";
import { API_OPTIONS } from "../services/urlsservice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addUpcomingMovies(data?.results));
      
    })();
  }, []);
};

export default useUpcomingMovies;
