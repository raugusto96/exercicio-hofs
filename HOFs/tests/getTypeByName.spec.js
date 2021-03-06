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
    {
      const actual = getTypeByName('bulbasaur');

      const expected = ['grass', 'poison'];

      expect(actual).toEqual(expected);
    }
    {
      const actual = getTypeByName('CHARMANDER');

      const expected = ['fire'];

      expect(actual).toEqual(expected);
    }
    {
      const actual = getTypeByName('cAtErPiE');

      const expected = ['bug'];

      expect(actual).toEqual(expected);
    }
  });
});
