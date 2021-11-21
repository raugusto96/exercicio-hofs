/* eslint-disable no-undef */
const data = require('../data');
const getPokemonsName = require('../src/getPokemonsName');

describe('Teste o funcionamento correto da função', () => {
  it('se a função `getPokemonsName` existe', () => {
    expect(getPokemonsName).toBeDefined();
  });
  it('se a função retorna `undefined` quando é chamada sem parametro', () => {
    expect(getPokemonsName()).toBeUndefined();
  });
  it('se a função retorna `undefined` quando é chamada com um parametro diferente do esperado', () => {
    expect(getPokemonsName('xablau')).toBeUndefined();
    expect(getPokemonsName(123)).toBeUndefined();
    expect(getPokemonsName(true)).toBeUndefined();
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
    expect(getPokemonsName(data)).toEqual(pokemonsArray);
  });
});
