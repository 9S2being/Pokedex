/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Typography, Container, Box, Grid, List, ListItem, ListItemText, Divider} from "@mui/material";
import { getTypeColor } from "../pokemon/molding/elements/Elements";
import { PokemonResponse } from "../../types/pokemon";

export const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<PokemonResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

        const speciesData = speciesResponse.data;
        const description = speciesData.flavor_text_entries.find(
          (entry: any) => entry.language.name === "en"
        );

        const abilities = response.data.abilities.map((ability: any) => ability.ability.name);
        const stats = response.data.stats.map((stat: any) => ({
          name: stat.stat.name,
          base_stat: stat.base_stat,
        }));

        setPokemon({
          ...response.data,
          description: description?.flavor_text || "",
          abilities: abilities,
          stats: stats,
        });
      } catch (error) {
        setError("Erro ao tentar carregar a página");
      }
    };

    fetchPokemon();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Box p={4} bgcolor="#f9f9f9" borderRadius={8} boxShadow={1}>
        <Typography variant="h3" align="center" gutterBottom>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </Typography>
        <Divider />
        <Box bgcolor="#cccccc" borderRadius={8} p={2} mt={2}>
          <Grid container justifyContent="center" spacing={5}>
            <Grid item xs={12} sm={6} md={4}>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                style={{ width: "100%", maxWidth: "200px", borderRadius: "8px", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <List>
                <ListItem>
                  <ListItemText style={{ borderBottom: '1px solid black' }} primary={`Number: ${pokemon.id}`} />
                </ListItem>
                <ListItem>
                  <ListItemText style={{ borderBottom: '1px solid black' }} primary={`Description: ${pokemon.description}`} />
                </ListItem>
                <ListItem>
                  <ListItemText style={{ borderBottom: '1px solid black' }} primary={`Height: ${pokemon.height * 10} cm`} />
                </ListItem>
                <ListItem>
                  <ListItemText style={{ borderBottom: '1px solid black' }} primary={`Weight: ${pokemon.weight / 10} kg`} />
                </ListItem>
                <ListItem>
                  <Grid container justifyContent="space-around" mt={2} >
                    <Grid item>
                      <ListItemText primary="Types:" style={{ fontWeight: "bold" }} />
                      <List component="div" disablePadding>
                        {pokemon.types.map((type, index) => (
                          <ListItem key={index} disableGutters>
                            <ListItemText
                              primary={type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                              style={{
                                color: 'white', border: '2px solid transparent', borderRadius: '5px',
                                backgroundColor: getTypeColor(type.type.name)
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                    <Grid item>
                      <ListItemText primary="Stats:" style={{ fontWeight: "bold", marginRight: '200px' }} />
                      <List component="div" disablePadding>
                        {Array.isArray(pokemon.stats) && pokemon.stats.map((stat: any, index: number) => (
                          <ListItem key={index} disableGutters>
                            <ListItemText primary={`${stat.name}: ${stat.base_stat}`} />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
