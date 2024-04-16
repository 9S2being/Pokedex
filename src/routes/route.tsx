import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PokedexPage } from '../pages/NationalDex/NationalPokedex';
import {
  PokemonList1, PokemonList2, PokemonList3, PokemonList4, PokemonList5,
  PokemonList6, PokemonList7, PokemonList8, PokemonList9
} from '../components/pokemon/index';
import { PokemonPage } from '../pages/pokemonPage/PokemonPage';
import { FavoritePage } from '../pages/favoritesPage/FavoritesPage';
import { ItemsPage } from '../pages/itemsPage/Items';
import { MovesPage } from '../pages/movesPage/MovesPage';
const routerConfig = [
  { path: '/', element: <PokedexPage /> },
  { path: '/PokedexGen1', element: <PokemonList1 /> },
  { path: '/PokedexGen2', element: <PokemonList2 /> },
  { path: '/PokedexGen3', element: <PokemonList3 /> },
  { path: '/PokedexGen4', element: <PokemonList4 /> },
  { path: '/PokedexGen5', element: <PokemonList5 /> },
  { path: '/PokedexGen6', element: <PokemonList6 /> },
  { path: '/PokedexGen7', element: <PokemonList7 /> },
  { path: '/PokedexGen8', element: <PokemonList8 /> },
  { path: '/PokedexGen9', element: <PokemonList9 /> },
  { path: '/pokemon/:id', element: <PokemonPage /> },
  { path: '/favorites', element: <FavoritePage /> },
  { path: '/items', element: <ItemsPage /> },
  { path: '/moves', element: <MovesPage /> }

];

const router = createBrowserRouter(routerConfig);

const RouterApp: React.FC = () => {
  return <RouterProvider router={router} />;
}

export default RouterApp;
