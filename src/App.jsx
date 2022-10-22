import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SeachBar";
import { Pokedex } from "./components/Pokedex";

const App = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Pokedex />
    </>
  );
};

export default App;
