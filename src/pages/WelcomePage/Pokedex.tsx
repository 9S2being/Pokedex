import { Container, Grid } from "@mui/material";
import { Welcome } from "../../components/welcome";
import Fundo from "../../assets/pokemon/pokemon-aquatico.webp";

export function WelcomePage() {
    return (
        <Grid 
            container 
            justifyContent="center" 
            alignItems="center" 
            style={{ backgroundColor: '#727272', border: "4px solid transparent", borderRadius: '4px',
             backgroundImage: `url(${Fundo})`, 
             backgroundSize: 'cover', 
             margin: '0' }}
        >
            <Container>
                <Welcome />
            </Container>
        </Grid>
    );
}
