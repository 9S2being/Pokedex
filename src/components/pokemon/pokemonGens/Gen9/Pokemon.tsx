/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { Typography, Grid, Container, Box } from "@mui/material";
import { fetchPokemons } from "../../../../store/slices/pokemonSlice/PokemonSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { PokeNav } from "../../../header/NavPokedex";
import { getTypeColor } from "../../molding/elements/Elements";
import { Link } from "react-router-dom";
import { Header } from "../../../header/Header";
import "../../../../style/animations/style.css";
import { groupPokemons } from "../../molding/group/Group";
import { formatId } from "../../molding/id/Id";

export const PokemonList9 = () => {
    const dispatch = useAppDispatch();
    const { pokemons, status, error } = useAppSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(fetchPokemons());
    }, [dispatch]);

    const generationPokemons = pokemons.filter(pokemon => pokemon.id >= 906 && pokemon.id <= 1025);

    const renderPokemons = () => {
        if (status === 'loading') {
            return <CatchingPokemonIcon className="pokeball-animation" style={{ fontSize: 100, marginBottom: '100px', marginTop: '100px' }} />;
        }
        if (status === 'failed') {
            return <Typography>Error: {error}</Typography>;
        }
        return (
            <>
                {groupPokemons(generationPokemons, 8).map((group, groupIndex) => (
                    <Grid key={groupIndex} container item justifyContent="center" spacing={2}>
                        {group.map((pokemon: any, index: any) => (
                            <Grid key={index} item xs={6} sm={3} md={1} style={{ margin: '0 8px' }}>
                                <Box p={2} mt={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ height: '100px' }} />
                                    <Typography style={{ whiteSpace: 'nowrap', fontSize: '12px', paddingBottom: '4px' }}>{formatId(pokemon.id)}</Typography>
                                    <Typography style={{ whiteSpace: 'nowrap', fontSize: '10px' }}>{pokemon.height * 10} cm</Typography>
                                    <Link to="#" style={{ textDecoration: 'none' }}>
                                        <Typography style={{ whiteSpace: 'nowrap', fontSize: '16px', paddingTop: '4px' }}>{pokemon.name}</Typography>
                                    </Link>

                                    <Box style={{ display: 'flex', whiteSpace: 'nowrap', paddingTop: '5px' }}>
                                        {pokemon.types.map((type: any, idx: any) => (
                                            <Typography key={idx} style={{ color: getTypeColor(type.type?.name), marginRight: '5px', fontSize: '15px' }}>{type.type?.name}</Typography>
                                        ))}
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
            backgroundColor: '#727272', border: "4px solid transparent", borderRadius: '4px',
            backgroundImage: "repeating-linear-gradient(-45deg, #6a6a6a 0, #6a6a6a 2px, #727272 2px, #727272 11px)",
            backgroundSize: '16px 16px',
            minHeight: '100vh'
        }}>
            <Header />
            <Container style={{ backgroundColor: '#FFFFFF', paddingTop: '20px', border: '1px', borderRadius: '20px' }}>
                <PokeNav />
                <Box mt={4} mb={4}>
                    <Typography style={{ fontSize: '30px', fontWeight: 'bold', borderBottom: '2px solid black' }}>
                        Generation 9 Pokémon
                    </Typography>
                </Box>

                <Grid container justifyContent="center">
                    {renderPokemons()}
                </Grid>
            </Container>
        </Box>
    );
};

