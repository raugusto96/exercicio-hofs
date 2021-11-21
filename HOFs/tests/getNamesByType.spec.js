/* eslint-disable no-undef */
const pokedex = require('../data');
const getNamesByType = require('../src/getNamesByType');

describe('Teste o funcionamento correto da função `getNamesByType`', () => {
  it('se a função `getNamesByTypes` está definida', () => {
    expect(getNamesByType).toBeDefined();
  });
  it('se a função `getNamesByTypes` retorna undefined quando chamada sem parametros', () => {
    expect(getNamesByType()).toBeUndefined();
  });
  it('se a função `getNamesByTypes` retorna undefined quando chamada com parametros inválidos', () => {
    expect(getNamesByType('pokedex')).toBeUndefined();
    expect(getNamesByType(pokedex)).toBeUndefined();
    expect(getNamesByType('grass')).toBeUndefined();
    expect(getNamesByType('pokedex', 'grass')).toBeUndefined();
    expect(getNamesByType('pokedex', 123)).toBeUndefined();
    expect(getNamesByType(true, 123)).toBeUndefined();
  });
  it('se a função `getNamesByTypes` retorna o valor esperado', () => {
    expect(getNamesByType(pokedex, 'grass')).toEqual(['Bulbasaur', 'Ivysaur', 'Venusaur']);
    expect(getNamesByType(pokedex, 'fire')).toEqual(['Charmander', 'Charmeleon', 'Charizard']);
    expect(getNamesByType(pokedex, 'flying')).toEqual(['Charizard', 'Butterfree', 'Pidgey', 'Pidgeotto', 'Pidgeot']);
    expect(getNamesByType(pokedex, 'normal')).toEqual(['Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate']);
    expect(getNamesByType(pokedex, 'poison')).toEqual(['Bulbasaur', 'Ivysaur', 'Venusaur', 'Weedle', 'Kakuna', 'Beedrill']);
    expect(getNamesByType(pokedex, 'water')).toEqual(['Squirtle', 'Wartortle', 'Blastoise']);
    expect(getNamesByType(pokedex, 'bug')).toEqual(['Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill']);
  });
});
