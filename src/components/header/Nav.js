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
          <NavLink to="/heroes">Heroes</NavLink>
        </li>
        <li>Teams</li>
        <li>Matches</li>
      </ul>
    </nav>
  );
};

export default Nav;
