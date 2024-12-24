import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Routers from "./routers";
import ThemeProvider from "./context/ThemeContext";
import ContactsList from "./components/contactsList";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routers />
        <ContactsList />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
