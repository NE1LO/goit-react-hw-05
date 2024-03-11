import React, { useEffect, useState } from "react";
import css from "./MovieCast.module.css";
import requests from "../../get-movie-api";
import image from "../../img/no-photo-min.jpg";
import Loader from "../Loader/Loader";
import { useParams } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const MovieCast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const addActors = async () => {
      try {
        const response = await requests.getCast(id);
        setCast(response.data.cast);
      } catch (error) {
        const notify = () => toast.error(error.message);
        notify();
      } finally {
        setLoader(false);
      }
    };
    addActors();
  }, [id]);
  return (
    <div className={css.movieCastBlock}>
      {isLoader && <Loader />}
      {cast.length !== 0 ? (
        <ul className={css.castList}>
          {cast.map((i) => (
            <li key={i.id} className={css.castListItem}>
              <img
                src={
                  i.profile_path
                    ? "https://image.tmdb.org/t/p/w500" + i.profile_path
                    : image
                }
                alt=""
                height={120}
                width={100}
              />
              <p>{i.name}</p>
              {i.character && <p>Character: {i.character}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any actors for this movie</p>
      )}
      <Toaster />
    </div>
  );
};
export default MovieCast;
