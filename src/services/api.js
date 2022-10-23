

const getPokemonData = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (err) {
        return alert(err);
    }
}
//
// Compare this snippet from netlify\functions\getPokemons:

export default getPokemonData;