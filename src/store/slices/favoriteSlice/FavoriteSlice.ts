import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonResponse } from '../../../types/pokemon';

interface FavoriteState {
  favorites: PokemonResponse[];
  favoritesId: number[]
}

const initialState: FavoriteState = {
  favorites: [],
  favoritesId: []
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const pokemonId = action.payload
      const isFavorite = state.favoritesId.includes(pokemonId)

      if(isFavorite) {
        state.favoritesId = state.favoritesId.filter(id => id !== pokemonId)
      } else {
        state.favoritesId = [...state.favoritesId, pokemonId]
      }
/*
      state.favorites.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
      console.log(state.favorites)
  */
      return state
      
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(pokemon => pokemon.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    initializeFavorites: (state) => {
      const favoritesFromStorage = localStorage.getItem('favorites');
      if (favoritesFromStorage) {
        state.favorites = JSON.parse(favoritesFromStorage);
      }
    },
  },
});

export const { addFavorite, removeFavorite, initializeFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;