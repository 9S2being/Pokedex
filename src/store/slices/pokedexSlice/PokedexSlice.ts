/* eslint-disable @typescript-eslint/no-explicit-any */
// reducer.js

const initialState = {
  loading: false,
  data: [],
  errorMsg: ""
};

const pokemonListReducer = (state = initialState, action: { type: any; payload: { results: any; }; }) => {
  switch (action.type) {
    case "POKEMON_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: ""
      };
    case "POKEMON_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        errorMsg: ""
      };
    case "POKEMON_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Failed to fetch Pokémon list"
      };
    default:
      return state;
  }
};

export default pokemonListReducer;
