import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>

      <ul>
        <li>
          <NavLink to="/heroes" activeClassName={styles.active}>
            Heroes
          </NavLink>
        </li>
        <li>
          <NavLink to="/teams" activeClassName={styles.active}>
            Teams
          </NavLink>
        </li>
        <li>
          <NavLink to="/matches" activeClassName={styles.active}>
            Matches
          </NavLink>
        </li>
      </ul>

      <input placeholder="Search"></input>
    </nav>
  );
};

export default Nav;
