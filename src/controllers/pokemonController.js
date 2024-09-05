const pokedexRepository = require('../repositories/pokedexRepository');

class PokemonController {
  async home(req, res){
    const pokemons = await pokedexRepository.index();
    res.json(pokemons)
  }

  async show(req, res){
    const { id } = req.params;
    const idConverter = parseInt(id, 10);

    const pokemonFinded = await pokedexRepository.getById(idConverter);

    if(!pokemonFinded){
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(pokemonFinded);
  }

  async delete(req, res){
    const { id } = req.params;

    const idConverter = Number(id);

    const findId = await pokedexRepository.getById(idConverter);

    if(!findId){
      return res.status(404).json({ error: 'Pokemon not found' });
    }

    await pokedexRepository.delete(idConverter);
    res.status(201).json({message: 'Pokemon deleted successfully'});
  }

  async create(req, res){
    const { id, name, type, abilities } = req.body;

    const pokemonExists = await pokedexRepository.getById(id);

    if(pokemonExists){
      return res.status(400).json({message: 'Pokemon already exists'});
    }

    const createdPokemon = await pokedexRepository.create({
      id, name, type, abilities
    });
    res.status(201).json(createdPokemon);
  }

  async edit(req, res){
    //console.log(req.body)
    const { id, name, type, abilities } = req.body;

    // console.log({ id, name, type, abilities });

    const idConverter = Number(id);

    const findId = await pokedexRepository.getById(idConverter);

    if(!findId){
      return res.status(404).json({message: 'Pokemon not found'});
    }

    const editedPokemon = await pokedexRepository.edit(idConverter,name, type, abilities);

    // console.log(editedPokemon);
    res.json(editedPokemon);
    console.log('Editado com sucesso');
  }

}

module.exports = new PokemonController;
