const axios = require('axios');
const URLbase = 'https://pokeapi.co/api/v2/'
const { controllersAllpokemons } = require('./controllers')

const GETallPokemons = async (req, res) => {
    try {
        let URL = `${URLbase}/pokemon/`
        res.status(200).send( await controllersAllpokemons(URL))
    }
    catch (error) {

    }
}
module.exports = { GETallPokemons };