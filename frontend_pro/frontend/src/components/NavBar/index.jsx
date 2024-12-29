import React, { useState } from "react";
import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
      <div>
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          theme="light"
        >
          <Menu.Item key="/">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="/about">
            <NavLink to="/about">About</NavLink>
          </Menu.Item>
          <Menu.Item key="/hotels">
            <NavLink to="/hotels">Hotels</NavLink>
          </Menu.Item>
        </Menu>
        <button>Change Theme</button>
      </div>
  );
};
