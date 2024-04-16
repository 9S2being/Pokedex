import { Container, Grid } from "@mui/material";
import { Header } from "../../components/header/Header";
import { PokemonList1, PokemonList2, PokemonList3, PokemonList4, PokemonList5, PokemonList6, PokemonList7, PokemonList8, PokemonList9 } from "../../components/pokemon";

// Componente da página geral
export function PokedexPage() {
    return (
        
        <Grid style={{ backgroundColor: '#727272', border: "4px solid transparent", borderRadius: '4px',
         backgroundImage: "repeating-linear-gradient(-45deg, #6a6a6a 0, #6a6a6a 2px, #727272 2px, #727272 11px)",
          backgroundSize: '16px 16px', margin: '0px' }}>
            <Header />
            <Container style={{ backgroundColor: '#FFFFFFFF' }}>
                <Grid>
                <PokemonList1 />
                <PokemonList2 />
                <PokemonList3 />
                <PokemonList4 />
                <PokemonList5 />
                <PokemonList6 />
                <PokemonList7 />
                <PokemonList8 />
                <PokemonList9 />

                </Grid>
            </Container>
        </Grid >
    );
}
