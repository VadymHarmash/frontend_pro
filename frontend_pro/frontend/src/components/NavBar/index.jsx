import React from "react";
import { Button, Flex, Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import light from "../../assets/icons/light-theme.png";
import dark from "../../assets/icons/dark-theme.png";
import { toggleTheme } from "../../store/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./navbar.module.scss";

export const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isThemeLight } = useSelector((state) => state.themeReducer);

  const navLinks = [
    {
      key: "/",
      label: <NavLink to="/">Home</NavLink>,
    },
    {
      key: "/hotels",
      label: <NavLink to="/hotels">Hotels</NavLink>,
    },
    {
      key: "/about",
      label: <NavLink to="/about">About</NavLink>,
    },
  ];

  return (
    <Flex justify={"space-between"} align={"center"}>
      <Menu
        selectedKeys={[location.pathname]}
        mode="horizontal"
        items={navLinks}
        className={styles.navbar__menu}
      />
      <Button
        className={styles.navbar__button}
        onClick={() => dispatch(toggleTheme())}
      >
        <img src={isThemeLight ? dark : light} alt="Change theme" />
      </Button>
    </Flex>
  );
};
