/* Complete a função para receber dois parametros, o primeiro é a nossa "pokedex" e o outro
  é o tipo do pokemon e retorne um array com o nome de todos os pokemons nessa pokedex que
  contenham o tipo passado por parametro.
  Caso a pokedex não exista, retorne undefined.
  Caso o tipo não exista, retorne undefined.
  A função getNamesByType deve receber dois parametros, sendo a pokedex e o tipo.

  Parametro:
    pokedex => array;
    type => string;

  Comportamento:
    getNamesByType() // Retorno: undefined;
    getNamesByType(pokedex, 'grass') // Retorno: ['bulbasaur', 'ivysaur', 'venusaur'];
    getNamesByType('xablau') // Retorno: undefined;
    getNamesByType(pokedex) // Retorno: undefined;
*/

const getNamesByType = (pokedex, type) => (
  typeof pokedex === 'object' && typeof type === 'string'
    ? pokedex.pokemons.filter((pokemon) => pokemon.types.includes(type)).map((poke) => poke.name)
    : undefined
);

module.exports = getNamesByType;
