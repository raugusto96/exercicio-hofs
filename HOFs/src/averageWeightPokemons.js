/*
  Complete a função para receber um parametro que é a pokedex, conte os animais desse tipo.

  Parametro:
  pokedex => object

  Comportamento:
  averageWeightPokemons() // Retorna: undefined;
  averageWeightPokemons(pokedex) // Retorna: 268.85;
  averageWeightPokemons('xablau') // Retorna: undefined;
*/

const averageWeightPokemons = (pokedex) => (
  typeof pokedex === 'object'
    ? pokedex.pokemons
      .reduce((totalWeight, pokemon) => totalWeight + pokemon.weight, 0) / pokedex.pokemons.length
    : undefined);

module.exports = averageWeightPokemons;
