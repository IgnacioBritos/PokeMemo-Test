const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon/'

const pokeoninfo = async (URLpokemon) => {
    const { data } = await axios(URLpokemon)
    const { id, name, sprites, stats } = data
    return {
        name,
        sprites: sprites?.front_default,
        flip:false,
    }

}
const controllersAllpokemons = async (URL) => {
    const arrayPokemons = []
    const { data } = await axios(URL)
    await Promise.all(data.results.map(async (pokemon) => {
        arrayPokemons.push(await pokeoninfo(pokemon.url))
    }))
    
    console.log(arrayPokemons.length);
    return arrayPokemons
}

module.exports = {
    controllersAllpokemons
}