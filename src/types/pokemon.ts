export interface PokemonResponse {
    id: number
    name: string
    sprites: string
    order: number
}

export interface PokedexDTO {
    pokemon: PokemonResponse[]
}

export interface PokemonSprites{
    front_default: string
}