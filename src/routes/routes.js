const express = require('express');
const router = express.Router();
const PokemonController = require('../controllers/pokemonController');

router.get('/', PokemonController.home);
router.get('/pokemons', PokemonController.home);
router.get('/pokemons/:id', PokemonController.show);


module.exports = router;
