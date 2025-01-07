import { Outlet } from "react-router-dom";

import { NavBar } from "../NavBar";

import styles from "./layout.module.scss";

export const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
