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

export interface PokemonResponse {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: PokemonType[];
    sprites: Sprite;
    description: string;
    abilities: string;
    stats: number;
}

export interface PokedexDTO {
    pokemon: PokemonResponse[];
}

export interface GroupLimit {
    limit: number;
}

interface Item {
    name: string;
}

interface Moves {
    name: string;
    description: string;
    power: number;
    accuracy: number;

}
export interface MovesDTO {
    moves: Moves[];
}


export interface ItemDTO {
    item: Item[];
}
  
  