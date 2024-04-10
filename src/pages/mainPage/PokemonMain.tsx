import { Container, Grid } from "@mui/material";
import {
    PokemonList1,
    PokemonList2,
    PokemonList3,
    PokemonList4,
    PokemonList5,
    PokemonList6,
    PokemonList7,
    PokemonList8,
    PokemonList9
} from "../../components/pokemon/index";

// Componente da página geral
export function PokemonPage() {
    return (
            <Grid style={{ backgroundColor: '#727272', border: "4px solid black", borderRadius: '4px' }}>
                {/*Aqui vai a Header*/}
                <Container style={{backgroundColor: '#FFFFFFFF'}}>
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
                 {/*Aqui vai o Footer*/}
            </Grid >
    );
}
