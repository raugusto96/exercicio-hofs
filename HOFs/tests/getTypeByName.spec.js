/* eslint-disable no-undef */
const getTypeByName = require('../src/getTypeByName');

describe('3 - Crie uma função que busca os pokemons a partir do nome', () => {
  it('se a função está definida', () => {
    expect(getTypeByName).toBeDefined();
  });
  it('sem parâmetros, retorna um objeto vazio', () => {
    const actual = getTypeByName();
    const expected = {};
    expect(actual).toEqual(expected);
  });

  it('quando provido o nome do pokemon, retorna o array de tipos do pokemon', () => {
    const actual = getTypeByName('Bulbasaur');

    const expected = ['grass', 'poison'];

    expect(actual).toEqual(expected);
  });
});
