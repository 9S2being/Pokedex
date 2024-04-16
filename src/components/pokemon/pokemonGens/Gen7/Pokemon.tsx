/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import axios from "axios";
import { PokemonResponse } from "../../../../types/pokemon";
import { Typography, Container, Box, Grid } from "@mui/material";
import { getTypeColor } from "../../molding/elements/Elements";
import { groupLimit } from "../../molding/group/Group";
import { formatId } from "../../molding/id/Id";
import { Link } from "react-router-dom";

export function PokemonList7() {
    const [pokemon, setPokemon] = useState<PokemonResponse[]>([]);

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                const startingPokemonId = 722; 
                const offset = startingPokemonId - 1; 
                const limit = 88; 

                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
                const pokemonList = response.data.results;
                const pokemonUrl = pokemonList.map((pokemon: { url: string }) => pokemon.url);
                const pokemonDataResponses = await Promise.all(pokemonUrl.map((url: string) => axios.get(url)));
                const pokemonData = pokemonDataResponses.map(response => response.data);
                setPokemon(pokemonData);
            } catch (error) {
                console.log("Erro ao carregar a lista de pokemons: ", error);
            }
        }

        fetchPokemonList();
    }, []); 

    // Dividi os Pokémon em grupos de 8
    const pokemonGroups = groupLimit(pokemon, 7);

    //El Conteudo
    return (
        <Box style={{ backgroundColor: '#727272' }}>
        <Container style={{backgroundColor: '#FFFFFFFF'}}>
            <Box style={{ padding: '5px 10px ' }}>
               
                <Box mt={4} mb={4}>
                    <Typography style={{ fontSize: '30px', fontWeight: 'bold', borderBottom: '2px solid black' }}>
                        Generation 7 Pokémon
                    </Typography>
                </Box>

                {pokemonGroups.map((group, index) => (
                    <Box key={index} display="flex" justifyContent="center" flexWrap="wrap">
                        {group.map((pokemon: PokemonResponse, subIndex: number) => (
                            <Box key={subIndex} m={2} textAlign="center">
                                {pokemon.sprites && (
                                    <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ height: "105px" }} />
                                )}
                                <Typography style={{ fontSize: '11px' }}>{formatId(pokemon.id)}</Typography>
                                <Typography style={{ fontSize: '13px' }}>{pokemon.height * 10} cm</Typography>
                                <Grid>
                                   
                                    <Link to={`/pokemon/${pokemon.name}`} style={{ color: '#2769be', textDecoration: 'none' }}>
                                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                    </Link>
                                </Grid>
                                <Grid>
                                    <Typography>
                                        {pokemon.types.map((type, typeIndex) => (
                                            <span key={typeIndex}>
                                                <span style={{ fontSize: '15px', color: getTypeColor(type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)) }}>
                                                    {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                                                </span>
                                                {typeIndex < pokemon.types.length - 1 && " · "}
                                            </span>
                                        ))}
                                    </Typography>
                                </Grid>
                            </Box>
                        ))}
                    </Box>
                ))}
            </Box>
        </Container>
        </Box>
    );
}
