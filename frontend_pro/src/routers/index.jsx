import React from 'react';
import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/about";
import TodosPage from "../pages/todos";

export default function Routers() {
  return (
    <Routes>
      <Route path="" element={<AboutPage />} />
      <Route path="todos" element={<TodosPage />} />
    </Routes>
  );
}
