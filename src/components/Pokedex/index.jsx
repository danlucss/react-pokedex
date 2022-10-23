import React from "react";
import { Pokemon } from "../Pokemon";
import { useState, useEffect } from "react";

import "./index.scss";

export const Pokedex = props => {
    const { pokemons, loading } = props;
    // const [region, setRegion] = useState(2);

    // const [pokedex, setPokedex] = useState([]);

    // const fetchRegionPokemons = async () => {
    //     try {
    //         const data = await fetch(`../.netlify/functions/pokedex`, {
    //             method: "POST",
    //             body: JSON.stringify(region),
    //         });

    //         const pokedexData = await data.json();
    //         console.log(pokedexData);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     fetchRegionPokemons();
    // }, [region]);

    return (
        <>
            <div className="pokedex-container">
                {/* <button onClick={() => setRegion(2)}>Kanto</button>
                <button onClick={() => setRegion(3)}>Johto</button> */}
                {loading ? (
                    <div className="loading">
                        <h1>Loading...</h1>
                    </div>
                ) : (
                    <div className="pokedex-grid">
                        {pokemons &&
                            pokemons.map((pokemons, index) => {
                                return (
                                    <>
                                        <Pokemon key={index} pokemon={pokemons} />
                                    </>
                                );
                            })}
                    </div>
                )}
            </div>
        </>
    );
};
