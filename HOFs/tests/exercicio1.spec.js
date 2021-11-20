/* eslint-disable no-undef */
const data = require('../data');
const averageWeight = require('../src/exercicio1');

describe('Teste o funcionamento correto da função', () => {
  it('se a função `averageWeight` existe', () => {
    expect(averageWeight).toBeDefined();
  });
  it('se a função retorna `undefined` quando é chamada sem parametro', () => {
    expect(averageWeight()).toBeUndefined();
  });
  it('se a função retorna `undefined` quando é chamada com um parametro diferente do esperado', () => {
    expect(averageWeight('[]')).toBeUndefined();
    expect(averageWeight({})).toBeUndefined();
    expect(averageWeight(123)).toBeUndefined();
    expect(averageWeight(true)).toBeUndefined();
  });
  it('se a função retorna o valor correto quando recebe parametro', () => {
    const pokemonsArray = [
      'Bulbasaur',
      'Ivysaur',
      'Venusaur',
      'Charmander',
      'Charmeleon',
      'Charizard',
      'Squirtle',
      'Wartortle',
      'Blastoise',
      'Caterpie',
      'Metapod',
      'Butterfree',
      'Weedle',
      'Kakuna',
      'Beedrill',
      'Pidgey',
      'Pidgeotto',
      'Pidgeot',
      'Rattata',
      'Raticate',
    ];
    expect(averageWeight(data)).toEqual(pokemonsArray);
  });
});
