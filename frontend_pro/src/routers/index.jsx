import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/main";
import AboutPage from "../pages/about";
import ContactsPage from "../pages/contants";
import PrivateRoute from "./PrivateRoute";
import {LoginPage} from "../pages/login";

export default function Routers() {
  return (
    <Routes>
      <Route path="" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="about"
        element={
          <PrivateRoute>
            <AboutPage />
          </PrivateRoute>
        }
      />
      <Route path="contacts" element={<ContactsPage />} />
    </Routes>
  );
}
