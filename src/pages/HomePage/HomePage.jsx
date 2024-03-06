import React, { useEffect, useState } from "react";
import requests from "../../get-movie-api";
import css from "./HomePage.module.css";
import MoviesList from "../../Components/MoviesList/MoviesList";

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

  return (
    <div className={css.homePage}>
      <h1 className={css.homeTitle}>Trending Today 🏆</h1>
      {movies.length !== 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default HomePage;
