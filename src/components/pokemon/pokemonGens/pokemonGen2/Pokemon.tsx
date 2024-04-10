/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import axios from "axios";
import { PokemonResponse, PokemonSprites } from "../../../../types/pokemon";
import { Typography, Container, Box, Link, Grid } from "@mui/material";

export function PokemonList2() {
    const [pokemon, setPokemon] = useState<PokemonResponse[]>([]);

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                const startingPokemonId = 152; 
                const offset = startingPokemonId - 1; 
                const limit = 100; 

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

    // Função para dividir o array em grupos
    const groupLimit = (arr: any[], size: number) => {
        const pokemonArr = [];
        for (let i = 0; i < arr.length; i += size) {
            pokemonArr.push(arr.slice(i, i + size));
        }
        return pokemonArr;
    };

    // Dividi os Pokémon em grupos de 8
    const pokemonGroups = groupLimit(pokemon, 8);

    //El Conteudo
    return (
        <Container>
            <Box mt={4} mb={4}>
                <Typography>Generação 2 Pokémon</Typography>
            </Box>

            {pokemonGroups.map((group, index) => (
                <Box key={index} display="flex" justifyContent="start" flexWrap="wrap">
                    {group.map((pokemon: PokemonResponse, subIndex: number) => (
                        <Box key={subIndex} m={2} textAlign="center">
                            {pokemon.sprites && (
                                <img
                                    src={(pokemon.sprites as unknown as PokemonSprites).front_default}
                                    alt={pokemon.name}
                                    style={{ height: "100px" }}
                                />
                            )}
                            <Typography>{pokemon.id}</Typography>
                            <Grid>
                            <Link style={{ textDecoration: 'none' }}>
                                    {
                                        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                                    }
                                </Link>
                            </Grid>
                        </Box>
                    ))}
                </Box>
            ))}
        </Container>
    );
}
