import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Routers from "./routers";
import ContactsList from "./components/contactsList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
      <ContactsList />
    </BrowserRouter>
  );
}

export default App;
