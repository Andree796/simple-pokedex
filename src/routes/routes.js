const express = require('express');
const router = express.Router();
const PokemonController = require('../controllers/pokemonController');



router.get('/', PokemonController.home);
router.get('/pokemons', PokemonController.home);
router.get('/pokemons/:id', PokemonController.show);
router.post('/pokemons', PokemonController.create);
router.put('/pokemons/:id', PokemonController.edit);
router.delete('/pokemons/:id', PokemonController.delete);





module.exports = router;
