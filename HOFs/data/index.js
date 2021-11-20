const pokemons = [
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
  },
  {
    id: 4,
    name: 'Charmander',
    height: 6,
    weight: 85,
    moves: [
      {
        move: {
          name: 'mega-punch',
        },
      },
      {
        move: {
          name: 'fire-punch',
        },
      },
      {
        move: {
          name: 'scratch',
        },
      },
    ],
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
  },
  {
    id: 7,
    name: 'Squirtle',
    height: 5,
    weight: 90,
    moves: [
      {
        move: {
          name: 'mega-punch',
        },
      },
      {
        move: {
          name: 'mega-kick',
        },
      },
      {
        move: {
          name: 'ice-punch',
        },
      },
    ],
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
  },
  {
    id: 9,
    name: 'Blastoise',
    height: 16,
    weight: 855,
    moves: [
      {
        move: {
          name: 'hydro-pump',
        },
      },
      {
        move: {
          name: 'surf',
        },
      },
      {
        move: {
          name: 'ice-beam',
        },
      },
    ],
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
  },
  {
    id: 11,
    name: 'Metapod',
    height: 7,
    weight: 99,
    moves: [
      {
        move: {
          name: 'harden',
        },
      },
      {
        move: {
          name: 'string-shot',
        },
      },
      {
        move: {
          name: 'iron-defense',
        },
      },
    ],
  },
  {
    id: 12,
    name: 'Butterfree',
    height: 11,
    weight: 320,
    moves: [
      {
        move: {
          name: 'razor-wind',
        },
      },
      {
        move: {
          name: 'whirlwind',
        },
      },
      {
        move: {
          name: 'psybeam',
        },
      },
    ],
  },
  {
    id: 13,
    name: 'Weedle',
    height: 3,
    weight: 32,
    moves: [
      {
        move: {
          name: 'poison-string',
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
  },
  {
    id: 14,
    name: 'Kakuna',
    height: 6,
    weight: 100,
    moves: [
      {
        move: {
          name: 'string-shot',
        },
      },
      {
        move: {
          name: 'harden',
        },
      },
      {
        move: {
          name: 'iron-defense',
        },
      },
    ],
  },
  {
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
  },
  {
    id: 16,
    name: 'Pidgey',
    height: 3,
    weight: 18,
    moves: [
      {
        move: {
          name: 'razor-wind',
        },
      },
      {
        move: {
          name: 'gust',
        },
      },
      {
        move: {
          name: 'wing-attack',
        },
      },
    ],
  },
  {
    id: 17,
    name: 'Pidgeotto',
    height: 15,
    weight: 395,
    moves: [
      {
        move: {
          name: 'sand-attack',
        },
      },
      {
        move: {
          name: 'wing-attack',
        },
      },
      {
        move: {
          name: 'fly',
        },
      },
    ],
  },
  {
    id: 18,
    name: 'Pidgeot',
    height: 11,
    weight: 320,
    moves: [
      {
        move: {
          name: 'quick-attack',
        },
      },
      {
        move: {
          name: 'sky-attack',
        },
      },
      {
        move: {
          name: 'steel-wing',
        },
      },
    ],
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
  },
  {
    id: 20,
    name: 'Raticate',
    height: 7,
    weight: 185,
    moves: [
      {
        move: {
          name: 'tail-whip',
        },
      },
      {
        move: {
          name: 'bite',
        },
      },
      {
        move: {
          name: 'dig',
        },
      },
    ],
  },
];

module.exports = pokemons;
