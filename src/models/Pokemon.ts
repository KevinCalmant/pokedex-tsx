import { PokemonSprites } from "./PokemonSprites";
import { PokemonType } from "./PokemonType";

export interface Pokemon {
  id: number
  name: string
  sprites: PokemonSprites
  types: PokemonType[]
}
