import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import { useSelector } from "react-redux";

function Movies() {
  const movies = useSelector((state) => state.reducer.movies);
  const listMovies = useSelector((state) => state.reducer.listMovies);
  return (
    <div className="flex justify-center ">
      <ul className=" grid grid-cols-3 gap-16">
        {movies.map((movie) => (
          <li className="movies__item" key={movie.imdbID}>
            <MovieItem
              {...movie}
              disabled={listMovies.find((item) => item.imdbID === movie.imdbID)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
