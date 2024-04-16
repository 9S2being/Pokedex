/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import favoriteReducer from './slices/favoriteSlice/FavoriteSlice';

export const setLoading = (loading: boolean) => ({
  type: 'set_loading',
  payload: loading,
});

const loadingReducer = (state = false, action: any) => {
  switch (action.type) {
    case 'set_loading':
      return action.payload;
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    loading: loadingReducer,

  }
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

