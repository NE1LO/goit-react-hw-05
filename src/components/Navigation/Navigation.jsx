import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const Navigation = () => {
  return (
    <header>
      <ul className={css.NavigationList}>
        <li className={css.NavigationListItem}>
          <NavLink className={buildLinkClass} to="/">
            <h2 className={css.title}>Home</h2>
          </NavLink>
        </li>
        <li className={css.NavigationListItem}>
          <NavLink className={buildLinkClass} to="/movies">
            <h2 className={css.title}>Movies</h2>
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navigation;
