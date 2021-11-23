const { pokemons } = require('../data');

const getTypeByName = (name) => (
  name
    ? pokemons.find(({ name: pokemonName }) => name === pokemonName).types
    : {});

console.log(getTypeByName('Bulbasaur'));

module.exports = getTypeByName;
