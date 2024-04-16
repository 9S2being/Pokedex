import { Container, Grid } from "@mui/material";
import { Welcome } from "../../components/welcome";
export function WelcomePage() {
    return (
        
        <Grid style={{ backgroundColor: '#727272', border: "4px solid transparent", borderRadius: '4px',
         backgroundImage: "repeating-linear-gradient(-45deg, #6a6a6a 0, #6a6a6a 2px, #727272 2px, #727272 11px)",
          backgroundSize: '16px 16px', margin: '0px' }}>
            <Container style={{ backgroundColor: '#FFFFFFFF' }}> 
                <Grid>
                <Welcome />
                </Grid>
            </Container>
        </Grid >
    );
}
