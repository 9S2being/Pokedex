/* eslint-disable @typescript-eslint/no-explicit-any */
// action.js

import axios from "axios";

export const getPokemonList = (page: number) => async (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING",
    });
    const perPage = 8;
    const offset = page * perPage - perPage;

    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`
    );

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
    });
  }
};
