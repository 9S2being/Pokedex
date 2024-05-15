/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PokemonType {
    type: any;
    slot: number;
    types: {
        name: string;
        type?: {
            name: string;
            url: string;
        }
    }
}

interface Ability {
    ability: {
        name: string;
        
    }
}

export interface PokemonResponse {
    base_stat: any;
   
    id: number;
    name: string;
    height: number;
    weight: number;
    types: PokemonType[];
    description: string;
    stats: string;
    abilities: Ability[];
    url: string;
    currentPokemonId: number;
    isFavorite: boolean;
    sprites: {
        front_default?: string;
    };
}

export interface PokemonApiResponse {
    results: PokemonResponse[];
    next: string | null; 
    previous: string | null; 
}
