import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; 
import {persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  
});

export default store;


export const  persist = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;