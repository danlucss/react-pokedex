const axios = require("axios");

exports.handler = async (event, context) => {
    const selectedPokemon = JSON.parse(event.body);

    try {
        selectedPokemon === " " ? (selectedPokemon = "1") : selectedPokemon;
        const url = `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`;
        const response = await axios(url);
        const pokemonData = await response.data;

        return {
            statusCode: 200,
            body: JSON.stringify(pokemonData),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: alert(err),
        };
    }
};
