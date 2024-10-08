import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={css.nav}>
        <li className={css.navItem}>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink className={css.navLink} to="/catalog">
            Catalogue
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink className={css.navLink} to="/favorites">
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
