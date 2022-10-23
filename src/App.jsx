import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SeachBar";
import { Pokedex } from "./components/Pokedex";

import getPokemonData from "./services/api";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  let [offset, limit] = [0, 200];

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await fetch(`../.netlify/functions/getPokemons`, {
        method: "POST",
        body: JSON.stringify({
          offset: offset,
          limit: limit,
        }),
      });

      const pokemonData = await data.json();

      const promises = pokemonData.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);

      setPokemons(results);

      setLoading(false);

    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    console.log("carregou")
    fetchPokemons();
  }, []);

  const onSearchHandler = async pokemon => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <SearchBar onSearch={onSearchHandler} />
      <Pokedex pokemons={pokemons} loagind={loading} />
    </>
  );
};

export default App;
