/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Typography } from "@mui/material";
import { getTypeColor } from "../pokemon/molding/elements/Elements";

export function MovesList() {
  const [pokemonMoves, setPokemonMoves] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemonMoves = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/1/");
      const moves = response.data.moves;
      const movesDetailsPromises = moves.map((move: any) => axios.get(move.move.url));
      const movesDetailsResponses = await Promise.all(movesDetailsPromises);
      const movesWithDetails = movesDetailsResponses.map((response: any) => response.data);
      setPokemonMoves(movesWithDetails);
    } catch (error) {
      setError("Error fetching Pokémon moves");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonMoves();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  return (
    <Box style={{ backgroundColor: '#f0f0f0', padding: '20px 0' }}>
      <Container maxWidth="lg" style={{ backgroundColor: '#FFFFFF', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
        <Typography variant="h4" style={{ fontWeight: 'bold', borderBottom: '2px solid #000', marginBottom: '20px', paddingBottom: '10px' }}>
          Pokémon Moves
        </Typography>

        {/* Lista de movimentos dos Pokémon */}
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {pokemonMoves.map((move: any, index: number) => (
            <Box key={index} m={1} p={3} style={{ backgroundColor: '#f9f9f9', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)', minWidth: '200px' }}>
              <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '5px' }}>{move.name}</Typography>
              <Typography style={{ fontSize: '14px', color: '#888', marginBottom: '5px' }}>Type: <span style={{ color: getTypeColor(move.type.name), fontWeight: 'bold' }}>{move.type.name}</span></Typography>
              <Typography style={{ fontSize: '14px', marginBottom: '5px' }}>Power: {move.power}</Typography>
              <Typography style={{ fontSize: '14px', marginBottom: '5px' }}>PP: {move.pp}</Typography>
              <Typography style={{ fontSize: '14px', marginBottom: '5px' }}>Accuracy: {move.accuracy}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
