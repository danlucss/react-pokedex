import React, { useEffect, useState } from "react";

import "./index.scss";

export const SearchBar = () => {
    const [pokemon, setPokemon] = useState("");
    const [search, setSearch] = useState("");

    const getPokemon = async () => {
        try {
            const response = await fetch("/.netlify/functions/pokemon", {
                method: "POST",
                body: JSON.stringify(search),
            });
            const pokemon = await response.json();

            setPokemon(pokemon);
        } catch (err) {
            alert(`${search} is not a pokemon`);
        }
    };

    const onSearchHandler = e => {
        e.preventDefault();
        setSearch(e.target.value);
        getPokemon();
    };

    return (
        <>
            <div className="searchbar-container">
                <div className="search-bar">
                    <input
                        placeholder="Search Pokemon"
                        type="text"
                        value={search}
                        onChange={e => {
                            e.target.value === "" ? setSearch(" ") : setSearch(e.target.value);
                        }}
                    />
                    <button onClick={search.length > 0 ? onSearchHandler : pokemon === "" ? getPokemon : null}>
                        Search
                    </button>
                </div>
            </div>
            <div>
                {pokemon ? (
                    <div className="pokemon-container">
                        <div className="pokemon-image">
                            <img src={pokemon.sprites.front_default} alt={`pokemon ${pokemon.pokemonName} `} />
                        </div>
                        <div className="pokemon-info">
                            <h1>{pokemon.name}</h1>
                            <p>Height: {pokemon.height}</p>
                            <p>Weight: {pokemon.weight}</p>
                            <p>Types: </p>
                            <ul>
                                {pokemon.types.map((type, index) => {
                                    return <li key={index}>{type.type.name}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="pokemon-container">
                        <h1>Search for a Pokemon</h1>
                    </div>
                )}
            </div>
        </>
    );
};
