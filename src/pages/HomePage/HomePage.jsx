import React, { useEffect, useState } from "react";
import requests from "../../get-movie-api";
import css from "./HomePage.module.css";
import { Link, useLocation } from "react-router-dom";
import MoviesList from "../../components/MoviesList/MoviesList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await requests.getTrendMovies();
        setMovies(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, []);

  const getFirstMovie = movies.length > 0 ? movies[1] : null;
  const location = useLocation();

  return (
    <div className={css.homePage}>
      {getFirstMovie && (
        <Link to={"/movies/" + getFirstMovie.id} state={{ from: location }}>
          <img
            width={700}
            height={700}
            className={css.firstFilmPhoto}
            src={
              "https://image.tmdb.org/t/p/original" +
              getFirstMovie.backdrop_path
            }
            alt={getFirstMovie.title}
          />
          <h2>{getFirstMovie.title}</h2>
        </Link>
      )}
      <h1 className={css.homeTitle}>Trending Today</h1>
      {movies.length !== 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default HomePage;
