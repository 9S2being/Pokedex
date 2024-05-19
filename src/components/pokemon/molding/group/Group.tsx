/* eslint-disable @typescript-eslint/no-explicit-any */
export const groupPokemons = (pokemonList: any, groupSize: any) => {
    const groupedPokemons = [];
    for (let i = 0; i < pokemonList.length; i += groupSize) {
        groupedPokemons.push(pokemonList.slice(i, i + groupSize));
    }
    return groupedPokemons;
};