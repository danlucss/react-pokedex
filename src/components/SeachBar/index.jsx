import React, { useEffect, useState } from "react";



import './index.scss';


export const SearchBar = (props) => {
    const { onSearch } = props;
    const [pokemon, setPokemon] = useState("");
    const [search, setSearch] = useState('charmander')




    const getPokemon = async () => {
        const response = await fetch('/.netlify/functions/pokemon', {
            method: 'POST',
            body: JSON.stringify(search)
        })
        const data = await response.json()
        setPokemon(data)

    }


    const onSearchHandler = (e) => {
        e.preventDefault();
        onSearch(search)
        getPokemon()
    }


    return (<>
        <div className="searchbar-container">
            <div className="search-bar">
                <input placeholder="Search Pokemon" type="text" value={search} onChange={
                    (e) => {
                        setSearch(e.target.value)
                    }
                } />
                <button onClick={onSearchHandler}>Search</button>


            </div>

        </div>
        <div>
            {pokemon ? (
                <div className="pokemon-container">
                    <div className="pokemon-image">
                        <img src={pokemon.sprites.front_default} alt="" />
                    </div>
                    <div className="pokemon-info">
                        <h1>{pokemon.name}</h1>
                        <p>Height: {pokemon.height}</p>
                        <p>Weight: {pokemon.weight}</p>
                        <p>Base Experience: {pokemon.base_experience}</p>
                    </div>
                </div>
            ) : null
            }

        </div>
    </>)
        ;
}