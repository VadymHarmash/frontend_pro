import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar";
import "./Layout.scss";

export const Layout = () => {
  return (
    <div>
      <header className="header-light">
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
