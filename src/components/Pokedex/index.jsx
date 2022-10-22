import React from "react";
import { Navbar } from "../Navbar";
import { useState, useEffect } from "react";

import "./index.scss";

export const Pokedex = () => {
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    const [region, setRegion] = useState(2);

    // const regions = {
    //     all: {
    //         id: 1,
    //         name: "All",
    //     },
    //     kanto: {
    //         id: 2,
    //         name: "Kanto",
    //     },
    //     johto: {
    //         id: 3,
    //         name: "Johto",
    //     },
    //     hoenn: {
    //         id: 4,
    //         name: "Hoenn",
    //     },
    //     sinnoh: {
    //         id: 5,
    //         name: "Sinnoh",
    //     },
    //     unova: {
    //         id: 6,
    //         name: "Unova",
    //     },
    //     kalos: {
    //         id: 7,
    //         name: "Kalos",
    //     },
    //     alola: {
    //         id: 8,
    //         name: "Alola",
    //     },
    //     galar: {
    //         id: 9,
    //         name: "Galar",
    //     },
    // };

    // const callJohto = () => {
    //     setRegion(3)
    // }

    const callJohto = () => {
        setRegion(3)
    }
    const callHoen = () => {
        setRegion(4)
    }

    const callKanto = () => {
        setRegion(2)
    }


    const fetchPokemons = async () => {
        try {
            const result = await fetch("../../../.netlify/functions/pokedex", {
                method: "POST",
                body: JSON.stringify(region),
            });
            const pokedexData = await result.json();
            let pokemonEntries = pokedexData.pokemon_entries;
            setPokemons(pokemonEntries);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(pokemons.map(pokemon => pokemon.pokemon_species.name));

    useEffect(() => {
        fetchPokemons();
    }, [region]);

    return (
        <>
            <div className="pokedex-container">
                <div className="pokedex">
                    <button onClick={callKanto}>Kanto</button>
                    <button onClick={callJohto}>Johto</button>
                    <button onClick={callHoen}>Hoenn</button>

                    <div className="pokemon-cards-container">
                        {loading ? (
                            <div className="loading">
                                <h1>Loading...</h1>
                            </div>
                        ) : (
                            pokemons.map((pokemon, index) => {
                                return (
                                    <div className="pokemon-card" key={index}>
                                        <div className="pokemon-info">
                                            <h1>{pokemon.pokemon_species.name}</h1>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
