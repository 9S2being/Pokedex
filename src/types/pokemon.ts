/* eslint-disable @typescript-eslint/no-explicit-any */
interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

interface Sprite {
    front_default: string;
}

interface Item {
    name: string;
    category: string;
    effect: string;

}

interface Moves {
    name: string;
    pp: number;
    power: number;
    accuracy: number;
}

//Pokemon
export interface PokemonResponse {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: PokemonType[];
    sprites: Sprite;
    description: string;
    stats: number;
}

//Pokemons
export interface PokedexDTO {
    pokemon: PokemonResponse[];
}

//group
export interface GroupLimit {
    limit: number;
}

//Moves
export interface MovesDTO {
    moves: Moves[];
}

//Items
export interface ItemDTO {
    item: Item[];
}

