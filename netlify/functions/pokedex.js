const axios = require('axios')
exports.handler = async (event, context) => {
    region = JSON.parse(event.body)
    try {

        const url = `https://pokeapi.co/api/v2/pokedex/${region}`;
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

