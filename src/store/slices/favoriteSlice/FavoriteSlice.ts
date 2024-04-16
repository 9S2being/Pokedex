import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonResponse } from "../../../types/pokemon";

interface FavoriteState {
  pokedex: PokemonResponse[];
}

const initialState: FavoriteState = {
  pokedex: [] 
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<PokemonResponse>) => {
      state.pokedex.push(action.payload); 
    },
    removePokemon: (state, action: PayloadAction<number>) => {
      const index = state.pokedex.findIndex(pokemon => pokemon.id === action.payload);
      if (index !== -1) {
        state.pokedex.splice(index, 1); 
      }
    }
  }
});

export const { addPokemon, removePokemon } = favoriteSlice.actions;
export default favoriteSlice.reducer;
