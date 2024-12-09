import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Routers from "./routers";
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routers />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
