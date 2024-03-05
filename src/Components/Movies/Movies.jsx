import css from "./Movies.module.css";

const Movies = ({ movie }) => {
  return (
    <div className={css.moviesBlock}>
      <img
        className={css.backDropMovie}
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt={movie.title}
      />
      <h2 className={css.title}>{movie.title}</h2>
    </div>
  );
};

export default Movies;
