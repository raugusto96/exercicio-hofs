/*
Complete a função para receber um ou mais parametros, esse parametro será responsável por buscar
  o pokemon referente ao id e retornar um array contendo os pokemons encontrados.
  Caso a pokedex não exista, retorne undefined.
  Parametro:
    id => number;

  Comportamento:
    getPokemonsById() // Retorno: undefined;
    getPokemonsById(1) // Retorno: [{
      id: 1,
      name: 'Bulbasaur',
      height: 7,
      weight: 69,
      moves: [
        {
          move: {
            name: 'razor-wind',
          },
        },
        {
          move: {
            name: 'swords-dance',
          },
        },
        {
          move: {
            name: 'cut',
          },
        },
      ],
      types: ['grass', 'poison'],
    }];
    getPokemonsById(1, 5) // Retorno: [
      {
      id: 1,
      name: 'Bulbasaur',
      height: 7,
      weight: 69,
      moves: [
        {
          move: {
            name: 'razor-wind',
          },
        },
        {
          move: {
            name: 'swords-dance',
          },
        },
        {
          move: {
            name: 'cut',
          },
        },
      ],
      types: ['grass', 'poison'],
    },
    {
      id: 5,
      name: 'Charmeleon',
      height: 11,
      weight: 190,
      moves: [
        {
          move: {
            name: 'headbutt',
          },
        },
        {
          move: {
            name: 'ember',
          },
        },
        {
          move: {
            name: 'flamethrower',
          },
        },
      ],
      types: ['fire'],
    },
    ];
*/

const { pokemons } = require('../data');
const pokedex = require('../data');

const getPokemonsById = (...ids) => pokedex.pokemons.filter((pokemon) => ids.includes(pokemon.id));

module.exports = getPokemonsById;
