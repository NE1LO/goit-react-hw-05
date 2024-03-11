import React, { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import requests from "../../get-movie-api";
import { FaArrowLeft } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const createData = async () => {
      try {
        const response = await requests.getDetailsMovie(id);
        setMovie(response.data);
      } catch (error) {
        const notify = () => toast.error(error.message);
        notify();
      }
    };
    createData();
  }, [id]);

  const location = useLocation();
  const linkRef = useRef(location.state?.from ?? "/");
  return (
    <div className={css.movieDetailsBlock}>
      <NavLink className={css.linkBack} to={linkRef.current}>
        <FaArrowLeft /> Go back
      </NavLink>
      {movie.genres && (
        <div className={css.detailsBlock}>
          {
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
              alt=""
            />
          }

          <div className={css.detailsInfoBlock}>
            <h1>{movie.original_title}</h1>
            <p>User Score: {parseInt(movie.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>{movie.genres.map((i) => i.name + " ")}</p>
          </div>
        </div>
      )}
      <div className={css.additionalBlock}>
        <h2 className={css.additionalTitle}>Additional Information</h2>
      </div>
      <ul className={css.additionalList}>
        <li className={css.additionalListItem}>
          <NavLink to={"cast"}>Cast</NavLink>
        </li>
        <li className={css.additionalListItem}>
          <NavLink to={"reviews"}>Reviews</NavLink>
        </li>
      </ul>
      <Toaster />
      <Outlet />
    </div>
  );
};
export default MovieDetailsPage;
