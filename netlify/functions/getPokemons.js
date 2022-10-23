const axios = require('axios')

exports.handler = async (event, context) => {
    const { offset, limit } = JSON.parse(event.body)

    try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
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