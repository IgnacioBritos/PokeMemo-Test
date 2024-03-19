const { Router } = require('express');
const{
    GETallPokemons
}= require('../handles/handles')
const router = Router();
router.get('/allPokemons', GETallPokemons)

module.exports= router;