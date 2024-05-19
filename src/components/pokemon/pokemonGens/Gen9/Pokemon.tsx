/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Typography, Grid, Container, Box, Modal, List, ListItemText, ListItem, CardMedia, Paper, IconButton, Button } from "@mui/material";
import { fetchPokemons } from "../../../../store/slices/pokemonSlice/PokemonSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import { PokeNav } from "../../../header/NavPokedex";
import { getTypeColor } from "../../molding/elements/Elements";
import { Link } from "react-router-dom";
import { Header } from "../../../header/Header";
import { formatId } from '../../molding/id/Id';
import { groupPokemons } from '../../molding/group/Group';
import { PokemonResponse } from '../../../../types/pokemon';
import { addFavorite, initializeFavorites, removeFavorite } from '../../../../store/slices/favoriteSlice/FavoriteSlice';

export function PokemonList9() {
    const dispatch = useAppDispatch();
    const { pokemons, status, error } = useAppSelector((state) => state.pokemon);
    const favorites = useAppSelector((state) => state.favorite.favoritesId);
    const [openModal, setOpenModal] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonResponse | null>(null);
    const [selectedPokemonIndex, setSelectedPokemonIndex] = useState<number>(0);
    const [showFavorites, setShowFavorites] = useState(false);

    useEffect(() => {
        dispatch(fetchPokemons({ limit: 120, offset: 905 }));
        dispatch(initializeFavorites());
    }, [dispatch]);

    const isFavorite = (pokemonId: number) => {
        return Array.isArray(favorites) && favorites.includes(pokemonId);
    };

    const hasFavorites = () => {
        return favorites.length > 0;
    };

    const getFavoritePokemons = (pokemons: PokemonResponse[]) => {
        return pokemons.filter(pokemon => isFavorite(pokemon.id));
    };

    const handleOpenModal = (pokemon: PokemonResponse) => {
        const index = pokemons.findIndex(p => p.id === pokemon.id);
        setSelectedPokemonIndex(index);
        setSelectedPokemon(pokemon);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handlePreviousPokemon = () => {
        const newIndex = selectedPokemonIndex === 0 ? pokemons.length - 1 : selectedPokemonIndex - 1;
        setSelectedPokemonIndex(newIndex);
        setSelectedPokemon(pokemons[newIndex]);
    };

    const handleNextPokemon = () => {
        const newIndex = selectedPokemonIndex === pokemons.length - 1 ? 0 : selectedPokemonIndex + 1;
        setSelectedPokemonIndex(newIndex);
        setSelectedPokemon(pokemons[newIndex]);
    };

    const handleToggleFavorite = (pokemon: PokemonResponse) => {
        const isCurrentlyFavorite = isFavorite(pokemon.id);
        const updatedFavorites: number[] = isCurrentlyFavorite ?
            Array.isArray(favorites) ? favorites.filter(id => id !== pokemon.id) : [] :
            Array.isArray(favorites) ? [...favorites, pokemon.id] : [pokemon.id];

        updatedFavorites.sort((a, b) => a - b);

        if (isCurrentlyFavorite) {
            dispatch(removeFavorite(pokemon.id));
        } else {
            dispatch(addFavorite(pokemon.id));
        }

        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        dispatch(initializeFavorites(savedFavorites));
    },);

    const renderNoFavoritesMessage = () => {
        return (
            <Typography variant="h6" style={{ textAlign: 'center', height: '150px' }}>
               <strong> No favorite yet</strong>
            </Typography>
        );
    };

    const renderPokemons = () => {
        if (status === 'loading') {
            return <CatchingPokemonIcon className="pokeball-animation" style={{ fontSize: 100, marginBottom: '100px', marginTop: '100px' }} />;
        }
        if (status === 'failed') {
            return <Typography>Error: {error}</Typography>;
        }


        let pokemonsToRender = showFavorites ? getFavoritePokemons(pokemons) : pokemons;
        pokemonsToRender = pokemonsToRender.slice(0, 151);

        return (
            <>
                {groupPokemons(pokemonsToRender, 8).map((group, groupIndex) => (
                    <Grid key={groupIndex} container item justifyContent="center" spacing={3}>
                        {group.map((pokemon: PokemonResponse, index: number) => (
                            <Grid key={index} item xs={6} sm={3} md={1} style={{ margin: '0 8px', position: 'relative' }}>
                                <IconButton onClick={() => handleToggleFavorite(pokemon)} style={{ position: 'absolute', top: '20%', left: '101%', transform: 'translate(-50%, -50%)', color: 'yellow', zIndex: 1 }}>
                                    {isFavorite(pokemon.id) ? <StarIcon /> : <StarBorderIcon />}
                                </IconButton>
                                <Box p={2} mt={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ height: '100px' }} />
                                    <Typography style={{ whiteSpace: 'nowrap', fontSize: '12px', paddingBottom: '4px' }}>{formatId(pokemon.id)}</Typography>
                                    <Typography style={{ whiteSpace: 'nowrap', fontSize: '10px' }}>{pokemon.height * 10} cm</Typography>
                                    <Link to="#" style={{ textDecoration: 'none' }} onClick={() => handleOpenModal(pokemon)}>
                                        <Typography style={{ whiteSpace: 'nowrap', fontSize: '16px', paddingTop: '4px' }}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Typography>
                                    </Link>
                                    <Box style={{ display: 'flex', whiteSpace: 'nowrap', paddingTop: '5px' }}>
                                        {pokemon.types.map((type, idx) => (
                                            <Typography key={idx} style={{ color: getTypeColor(type.type.name), marginRight: '5px', fontSize: '15px' }}>
                                                {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                                            </Typography>))}
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                ))}
            </>
        );
    };

    return (
        <Box style={{
            backgroundColor: '#727272',
            border: "4px solid transparent",
            borderRadius: '4px',
            backgroundImage: "repeating-linear-gradient(-45deg, #6a6a6a 0, #6a6a6a 2px, #727272 2px, #727272 11px)",
            backgroundSize: '16px 16px',
            minHeight: '100vh',
            position: 'relative'
        }}>
            <Header />
            <Container style={{ backgroundColor: '#FFFFFF', paddingTop: '20px', border: '1px', borderRadius: '20px' }}>
                <PokeNav />
                <Box mt={4} mb={4} >
                    <Typography style={{ fontSize: '30px', fontWeight: 'bold', borderBottom: '2px solid black', marginBottom: '60px', display: 'flex', alignItems: 'center' }}>
                        Generation 9 Pokémon
                        <span style={{ marginLeft: '650px' }}>
                            <Button
                                variant="contained"
                                onClick={() => setShowFavorites(!showFavorites)}
                                style={{
                                    background: `linear-gradient(to right, ${showFavorites ? 'black' : '#FFBF00'}, ${showFavorites ? '#FFBF00' : 'black'})`,
                                    color: 'white',
                                    borderRadius: '20px',
                                    padding: '10px 20px',
                                    fontWeight: 'bold',
                                    marginBottom: '10px'
                                }}
                            >
                                {showFavorites ? 'Show All Pokémon' : 'Show Favorites'}                   
                            </Button>
                        </span>
                    </Typography>
                    {showFavorites && !hasFavorites() && renderNoFavoritesMessage()}                   

                </Box>

                <Grid container justifyContent="center">
                    {renderPokemons()}
                </Grid>
            </Container>


            {/* Modal */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"

            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 600,
                        maxWidth: '90%',
                        boxShadow: 24,
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundImage: 'linear-gradient(143deg, red 50%, white 50%)',
                        borderRadius: '24px',
                        border: '3px solid black',
                    }}
                >
                    {selectedPokemon && (
                        <>

                            <section style={{ whiteSpace: 'nowrap', paddingBottom: '4px', display: 'flex', alignItems: 'center', position: 'relative' }}>
                                <IconButton style={{ padding: '0', color: 'black' }} onClick={handlePreviousPokemon}>
                                    <ArrowBackIcon />
                                </IconButton>
                                <Typography style={{ whiteSpace: 'nowrap', fontSize: '20px', fontFamily: 'serif', fontWeight: 'bolder', padding: '4px 12px', top: '10px' }}>
                                    {selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)}
                                </Typography>
                                <IconButton style={{ padding: '0', color: 'black' }} onClick={handleNextPokemon}>
                                    <ArrowForwardIcon />
                                </IconButton>
                            </section>
                            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                                <IconButton
                                    style={{
                                        padding: '0',
                                        color: 'black',
                                    }}
                                    onClick={handleCloseModal}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </div>


                            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                                <Box style={{ flex: '1', marginRight: '20px' }}>
                                    <Paper style={{ padding: '16px', border: '2px solid black', borderRadius: '20px', marginBottom: '20px' }}>
                                        <CardMedia
                                            component="img"
                                            height="200px"
                                            image={selectedPokemon.sprites.front_default}
                                            alt={selectedPokemon.name}
                                        />
                                    </Paper>

                                    <Paper style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '20px' }}>
                                        <Typography>
                                            Height: {selectedPokemon.height * 10} cm
                                        </Typography>
                                        <Typography>
                                            Weight: {selectedPokemon.weight / 10} kg
                                        </Typography>
                                        <Typography>
                                            Abilities: {selectedPokemon.abilities.map((ability) => ability.ability.name).join(', ')}
                                        </Typography>
                                    </Paper>
                                </Box>

                                <Box style={{ flex: '1' }}>
                                    <Paper style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '20px', marginBottom: '20px' }}>
                                        <Typography variant="h6" style={{ marginBottom: '8px' }}>Stats:</Typography>
                                        <List>
                                            {Array.isArray(selectedPokemon.stats) && selectedPokemon.stats.map((stat: any, index: any) => (
                                                <ListItem key={index}>
                                                    <ListItemText primary={`${stat.stat.name}: ${stat.base_stat}`} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Paper>
                                </Box>
                            </Box>
                        </>
                    )}
                </Box>
            </Modal>
        </Box>
    );
}
