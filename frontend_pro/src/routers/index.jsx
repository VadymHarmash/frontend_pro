import React from 'react';
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/main";
import AboutPage from "../pages/about";
import ContactsPage from "../pages/contants";

export default function Routers() {
  return (
    <Routes>
      <Route path="" element={<MainPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contacts" element={<ContactsPage />} />
    </Routes>
  );
}
