const { pokemons } = require('../data');

const getTypeByName = (name) => (
  name
    ? pokemons
      .find(({ name: pokemonName }) => name.toLowerCase() === pokemonName.toLowerCase()).types
    : {});

module.exports = getTypeByName;
