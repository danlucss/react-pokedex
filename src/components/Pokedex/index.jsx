import React from "react";
import { Navbar } from "../Navbar";
import { useState } from "react";

import "./index.scss";


export const Pokedex = () => {
    const btn = document.querySelector("#btn");

    const [pokedex, setPokedex] = useState()

    function handleClickPokedex() {
        setPokedex(!pokedex);
    }


    return (
        <>
            <button id="btn" onClick={handleClickPokedex}>Pokedex</button>

            <br />
            {
                pokedex && <Navbar />
            }
        </>
    );
}
