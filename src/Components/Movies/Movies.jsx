import css from "./Movies.module.css";
import image from "../../img/no-photo-min.jpg";

const Movies = ({ movie }) => {
  return (
    <div className={css.moviesBlock}>
      <img
        className={css.backDropMovie}
        src={
          movie.backdrop_path
            ? "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
            : image
        }
        alt={movie.title}
      />
      <h2 className={css.title}>{movie.title}</h2>
    </div>
  );
};

export default Movies;
