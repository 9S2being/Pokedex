import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { PokemonApiResponse, PokemonResponse } from "../../../types/pokemon";

export const fetchPokemons = createAsyncThunk<PokemonResponse[], { limit: number, offset: number }> (
    'pokemons/fetchPokemon',
    async (pokemonPerPage, thunkApi) => {
        try {
            const { limit, offset } = pokemonPerPage
            const response = await axios.get<PokemonApiResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            const data = response.data;
            const pokemonDetailsPromises = data.results.map(async (result) => {
                const pokemonDetailsResponse = await axios.get<PokemonResponse>(result.url);
                return pokemonDetailsResponse.data;
            });
            const pokemonsWithSprites = await Promise.all(pokemonDetailsPromises);
            return pokemonsWithSprites;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);


/*-------------------------------------------------------------------------------------------------------------------------*/ 

interface PokemonState {
    pokemons: PokemonResponse[]
    status: 'loading' | 'succeeded'| 'failed'
    error: string | null
}

const initialState: PokemonState = {
    pokemons: [],
    status: 'loading',
    error: null
}

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemons.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchPokemons.fulfilled, (state, action) => {
            state.status ='succeeded'
            state.pokemons = action.payload
        })
        builder.addCase(fetchPokemons.rejected, (state,action) => {
            state.status = 'failed'
            state.error = action.error.message ?? 'Ocorreu um erro ao tentar buscar os pokémons da api'
        })
    },
});


export default pokemonSlice.reducer;
