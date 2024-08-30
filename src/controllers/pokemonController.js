const PokemonRepository = require('../repositories/pokedexRepository');

class PokemonController {
  async home(req, res){
    const pokemons = await PokemonRepository.index();
    res.json(pokemons)
  }

  async show(req, res){

    const { id } = req.params;
    const idConverter = parseInt(id, 10);

    const pokemonFinded = await PokemonRepository.getById(idConverter);

    if(!pokemonFinded){
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json(pokemonFinded);
  }
}


module.exports = new PokemonController;