const axios = require('axios')

exports.handler = async (event, context) => {

    try {

        const url = `https://pokeapi.co/api/v2/pokedex/1/`
        const response = await axios(url)
        const pokedexData = await response.data

        return {
            statusCode: 200,
            body: JSON.stringify(pokedexData)
        }

    }
    catch (err) {
        return { statusCode: 500, body: err.toString() }
    }
}

