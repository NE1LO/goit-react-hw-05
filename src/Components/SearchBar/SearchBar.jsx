import React from "react";
import css from "./SearchBar.module.css";

const SearchBar = ({ searchMovies }) => {
  return (
    <div className={css.serchBarBlock}>
      <form className={css.form} onSubmit={searchMovies}>
        <input
          className={css.input}
          autoComplete="off"
          name="search"
          autoFocus
          type="text"
          placeholder="Search images..."
        />
        <button className={css.submitBtn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
