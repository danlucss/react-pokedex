import fetch from 'node-fetch';

exports.handler = async (event, context) => {

    try {
        const url = `https://pokeapi.co/api/v2/pokedex/1/`
        const response = await fetch(url)
        const data = await response.json()

        const originalPokedex = data.pokemon_entries.slice(0, 151)
        const secondPokedex = data.pokemon_entries.slice(151, 251)
        return {
            statusCode: 200,
            body: JSON.stringify(secondPokedex)

        }
    }
    catch (err) {
        return { statusCode: 500, body: err.toString() }
    }
}
