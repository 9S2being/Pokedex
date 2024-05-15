import { combineReducers } from '@reduxjs/toolkit';

import favoritePokemonreducer from './slices/favoriteSlice/FavoriteSlice';
import pokemonReducer from './slices/pokemonSlice/PokemonSlice';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  favorite: favoritePokemonreducer,

});


export default rootReducer;