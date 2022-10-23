import React from "react";

import "./index.scss";

export const Pokemon = (props) => {
    const { pokemon } = props;


    return (
        <>


            <div className="pokemon-container">
                <div className="pokemon-image">
                    <img src={pokemon.sprites.front_default} alt={`pokemon ${pokemon.pokemonName} `} />
                </div>
                <div className="pokemon-info">
                    <h2 className="pokemon-name">{pokemon.name}</h2>
                    <p className="pokemon-types">{pokemon.types.map(
                        (type, index) => {
                            return (
                                <span className="type" key={index}>
                                    {type.type.name} {index < pokemon.types.length - 1 ? " | " : ""}
                                </span>
                            )
                        }
                    )}</p>

                </div>
            </div>
        </>
    )

}

