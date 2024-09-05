let pokemons = [
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'Grass',
    abilities: ['Overgrow', 'Chlorophyll']
  },
    {
      id: 2,
      name: 'Ivysaur',
      type: 'Grass',
      abilities: ['Overgrow', 'Chlorophyll']
    }
];


class pokemonRepository {
  index(){
    return new Promise((resolve) => {
      resolve(pokemons);
    });
  }
  getById(id){
    return new Promise((resolve) => resolve(
      pokemons.find(pokemon => pokemon.id === id)
    ));
  }

  delete(id){
    return new Promise((resolve) => {
      pokemons = pokemons.filter((pokemon) => pokemon.id !== id)
      resolve(pokemons);
    });
  }

  create({id, name, type, abilities}){
    return new Promise((resolve) => {
      const newPokemon = {
        id,
        name,
        type,
        abilities: abilities
      };
      pokemons.push(newPokemon);
      resolve(newPokemon);
    });
  }

  edit(id, name, type, abilities){
    return new Promise((resolve) => {
      const editPokemon = {
        id,
        name,
        type,
        abilities: abilities
      };

      pokemons = pokemons.map((pokemon) => {
        if(pokemon.id === id){
          return editPokemon;
        }
        return pokemon;
      });

      // console.log('Dentro do repository', editPokemon);
      resolve(editPokemon);
    })
  }

}

module.exports = new pokemonRepository;
