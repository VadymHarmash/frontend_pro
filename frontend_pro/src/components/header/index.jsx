import React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">My Website</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
            gap: 2,
          }}
        >
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <MenuItem sx={{ color: "#FFFFFF" }}>About Me</MenuItem>
          </NavLink>
          <NavLink to="/todos" style={{ textDecoration: "none" }}>
            <MenuItem sx={{ color: "#FFFFFF" }}>Todos</MenuItem>
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
