import React from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./MoviesList.module.css";
import Movies from "../Movies/Movies";

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.movieListItem}>
          <Link to={"/movies/" + movie.id} state={{ from: location }}>
            <Movies movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
