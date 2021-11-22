/* eslint-disable no-undef */
const pokedex = require('../data');
const averageWeightPokemons = require('../src/averageWeightPokemons');

describe('Teste o funcionamento correto da função `averageWeightPokemons`', () => {
  it('se a função `averageWeightPokemons` está definida', () => {
    expect(averageWeightPokemons).toBeDefined();
  });
  it('se a função `averageWeightPokemons` retorna undefined quando não receber parametro', () => {
    expect(averageWeightPokemons()).toBeUndefined();
  });
  it('se a função `averageWeightPokemons` retorna undefined quando receber outro tipo de parametro', () => {
    expect(averageWeightPokemons(123)).toBeUndefined();
    expect(averageWeightPokemons(true)).toBeUndefined();
    expect(averageWeightPokemons('xablau')).toBeUndefined();
  });
  it('se a função `averageWeightPokemons` retorna o valor esperado', () => {
    expect(averageWeightPokemons(pokedex)).toBe(268.85);
  });
});

