/* eslint-disable no-undef */

const getPokemonsById = require('../src/getPokemonsById');

describe('Teste se a função `getPokemonsById` funciona corretamente', () => {
  it('se a função `getPokemonsById` está definida', () => {
    expect(getPokemonsById).toBeDefined();
  });
  it('se a função `getPokemonsById` retorna um array vazio quando chamada sem parametros', () => {
    const expected = [];
    expect(getPokemonsById()).toEqual(expected);
  });
  it('se a função `getPokemonsById` retorna um array vazio quando chamada com um id que não existe', () => {
    const expected = [];
    expect(getPokemonsById(21)).toEqual(expected);
  });
  it('se a função `getPokemonsById` receber um único id, retorna o array com o pokemon esperado', () => {
    {
      const actual = getPokemonsById(1);
      const expected = [{
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
      expect(actual).toEqual(expected);
    }
    {
      const actual = getPokemonsById(15);
      const expected = [{
        id: 15,
        name: 'Beedrill',
        height: 10,
        weight: 295,
        moves: [
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
          {
            move: {
              name: 'fury-attack',
            },
          },
        ],
        types: ['bug', 'poison'],
      }];
      expect(actual).toEqual(expected);
    }
  });
  it('se a função `getPokemonsById` receber mais de um id, retorna o array com os pokemons esperados', () => {
    {
      const actual = getPokemonsById(1, 2, 5, 8, 3);
      const expected = [{
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
        id: 2,
        name: 'Ivysaur',
        height: 10,
        weight: 130,
        moves: [
          {
            move: {
              name: 'vine-whip',
            },
          },
          {
            move: {
              name: 'headbutt',
            },
          },
          {
            move: {
              name: 'tackle',
            },
          },
        ],
        types: ['grass', 'poison'],
      },
      {
        id: 3,
        name: 'Venusaur',
        height: 20,
        weight: 1000,
        moves: [
          {
            move: {
              name: 'hyper-beam',
            },
          },
          {
            move: {
              name: 'mega-drain',
            },
          },
          {
            move: {
              name: 'razor-leaf',
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
      {
        id: 8,
        name: 'Wartortle',
        height: 10,
        weight: 225,
        moves: [
          {
            move: {
              name: 'tackle',
            },
          },
          {
            move: {
              name: 'water-gun',
            },
          },
          {
            move: {
              name: 'bite',
            },
          },
        ],
        types: ['water'],
      }];
      expect(actual).toEqual(expected);
    }
    {
      const actual = getPokemonsById(10, 19, 2, 6);
      const expected = [{
        id: 2,
        name: 'Ivysaur',
        height: 10,
        weight: 130,
        moves: [
          {
            move: {
              name: 'vine-whip',
            },
          },
          {
            move: {
              name: 'headbutt',
            },
          },
          {
            move: {
              name: 'tackle',
            },
          },
        ],
        types: ['grass', 'poison'],
      },
      {
        id: 6,
        height: 17,
        name: 'Charizard',
        weight: 905,
        moves: [
          {
            move: {
              name: 'hyper-beam',
            },
          },
          {
            move: {
              name: 'seismic-toss',
            },
          },
          {
            move: {
              name: 'dragon-rage',
            },
          },
        ],
        types: ['fire', 'flying'],
      },
      {
        id: 10,
        name: 'Caterpie',
        height: 3,
        weight: 29,
        moves: [
          {
            move: {
              name: 'tackle',
            },
          },
          {
            move: {
              name: 'string-shot',
            },
          },
          {
            move: {
              name: 'bug-bite',
            },
          },
        ],
        types: ['bug'],
      },
      {
        id: 19,
        name: 'Rattata',
        height: 3,
        weight: 35,
        moves: [
          {
            move: {
              name: 'cut',
            },
          },
          {
            move: {
              name: 'headbutt',
            },
          },
          {
            move: {
              name: 'tackle',
            },
          },
        ],
        types: ['normal'],
      }];
      expect(actual).toEqual(expected);
    }
  });
});
