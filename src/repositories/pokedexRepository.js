let pokemons = [
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'Grass',
    abilities: ['Overgrow', 'Chlorophyll']
  },
  {
    id: 4,
    name: 'Bulbasaur',
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

}

module.exports = new pokemonRepository;