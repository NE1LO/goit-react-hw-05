import React from "react";
import css from "./MoviesList.module.css";
import Movies from "../Movies/Movies";

const MoviesList = ({ movies }) => {
  return (
    <ul className={css.movieList}>
      {movies.map((movie) => (
        <li className={css.movieListItem} key={movie.id}>
          <Movies movie={movie} />
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
