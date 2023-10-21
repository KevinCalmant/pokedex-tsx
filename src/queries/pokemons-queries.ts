export const getPokemons = (limit: number, offset: number) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`).then((response) => response.json())
}

export const getPokemon = (url: string) => {
    return fetch(url).then((response) => response.json())
}