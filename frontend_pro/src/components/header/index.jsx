import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";
import { ThemeContext } from "../../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}
          >
            About Me
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/contacts"
            className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
      <div>
        <button onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
}
