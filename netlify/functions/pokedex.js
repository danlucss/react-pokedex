import fetch from 'node-fetch';

exports.handler = async (event, context) => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const data = await response.json()
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    }
    catch (err) {
        return { statusCode: 500, body: err.toString() }
    }
}
