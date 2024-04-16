import { Grid } from "@mui/material";
import { PokemonList1, PokemonList2, PokemonList3, PokemonList4, PokemonList5, 
        PokemonList6, PokemonList7, PokemonList8, PokemonList9 
        } from "../../index";

export function PokemonList() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <PokemonList1 />
            </Grid>
            <Grid item xs={12} md={4}>
                <PokemonList2 />
            </Grid>
            <Grid item xs={12} md={4}>
                <PokemonList3 />
            </Grid>
            <Grid item xs={12} md={4}>
                <PokemonList4 />
            </Grid>
            <Grid item xs={12} md={4}>
                <PokemonList5 />
            </Grid>
            <Grid item xs={12} md={4}>
                <PokemonList6 />
            </Grid>
            <Grid item xs={12} md={4}>
                <PokemonList7 />
            </Grid>
            <Grid item xs={12} md={4}>
                <PokemonList8 />
            </Grid>
            <Grid item xs={12} md={4}>
                <PokemonList9 />
            </Grid>
        </Grid>
    );
}
