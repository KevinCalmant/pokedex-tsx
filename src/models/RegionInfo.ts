export interface RegionInfo {
  firstPokemonNum: number
  numberOfPokemon: number
}

export type Region = 'kanto' | 'johto' | 'hoenn' | 'sinnoh' | 'unova' | 'kalos' | 'alola' | 'galar'

export const regionData: Record<Region, RegionInfo> = {
  ['kanto']: {
    firstPokemonNum: 0,
    numberOfPokemon: 151
  },
  ['johto']: {
    firstPokemonNum: 151,
    numberOfPokemon: 100
  },
  ['hoenn']: {
    firstPokemonNum: 251,
    numberOfPokemon: 135
  },
  ['sinnoh']: {
    firstPokemonNum: 386,
    numberOfPokemon: 108
  },
  ['unova']: {
    firstPokemonNum: 494,
    numberOfPokemon: 155
  },
  ['kalos']: {
    firstPokemonNum: 649,
    numberOfPokemon: 72
  },
  ['alola']: {
    firstPokemonNum: 721,
    numberOfPokemon: 88
  },
  ['galar']: {
    firstPokemonNum: 809,
    numberOfPokemon: 81
  },
}
