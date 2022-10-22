import fetch from 'node-fetch';

exports.handler = async event => {

    const selectedPokemon = JSON.parse(event.body)
    console.log("selectedPokemon: ", selectedPokemon)

    try {
        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        const pokemonData = await pokemonResponse.json()
        console.log("pokemonData: ", pokemonData)

        return {
            statusCode: 200,
            body: JSON.stringify(pokemonData)
        }

    }

    catch (err) {
        return { statusCode: 500, body: err.toString() }
    }
}