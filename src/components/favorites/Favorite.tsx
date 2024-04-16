/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/index';
import { PokemonResponse } from '../../types/pokemon';
import { addPokemon, removePokemon } from '../../store/index';

const FavoritesPage: React.FC = () => {
  const favoritePokemons = useSelector((state: RootState) => state.favorite.pokedex);
  const dispatch = useDispatch();

  const handleAddFavorite = (pokemon: PokemonResponse) => {
    dispatch(addPokemon(pokemon));
  };

  const handleRemoveFavorite = (pokemonId: number) => {
    dispatch(removePokemon(pokemonId));
  };

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favoritePokemons.map((pokemon) => (
          <li key={pokemon.id}>
            {pokemon.name}
            <button onClick={() => handleRemoveFavorite(pokemon.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;

// Suponha que você tenha uma lista de pokémons em algum lugar da sua aplicação
const  PokemonListFavorite: React.FC<{ pokemons: PokemonResponse[] }> = ({ pokemons }) => {
    const dispatch = useDispatch();
  
    const handleAddFavorite = (pokemon: PokemonResponse) => {
      dispatch(addPokemon(pokemon));
    };
  
    return (
      <div>
        <h2>Pokémon List</h2>
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.id}>
              {pokemon.name}
              <button onClick={() => handleAddFavorite(pokemon)}>Add to Favorites</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
