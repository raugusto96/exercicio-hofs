/* eslint-disable no-undef */
const data = require('../data');
const getNames = require('../src/exercicio1');

describe('Teste o funcionamento correto da função', () => {
  it('se a função `getNames` existe', () => {
    expect(getNames).toBeDefined();
  });
  it('se a função retorna `undefined` quando é chamada sem parametro', () => {
    expect(getNames()).toBeUndefined();
  });
  it('se a função retorna `undefined` quando é chamada com um parametro diferente do esperado', () => {
    expect(getNames([])).toBeUndefined();
    expect(getNames('xablau')).toBeUndefined();
    expect(getNames({})).toBeUndefined();
    expect(getNames(123)).toBeUndefined();
    expect(getNames(true)).toBeUndefined();
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
    expect(getNames(data)).toEqual(pokemonsArray);
  });
});
