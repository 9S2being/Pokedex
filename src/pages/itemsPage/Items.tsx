import { ItemList } from "../../components/items/Items";
import { Container, Grid } from "@mui/material";
import { Header } from "../../components/header/Header";

// Componente da página geral
export function ItemsPage() {
    return (
        
        <Grid style={{ backgroundColor: '#727272', border: "4px solid transparent", borderRadius: '4px',
         backgroundImage: "repeating-linear-gradient(-45deg, #6a6a6a 0, #6a6a6a 2px, #727272 2px, #727272 11px)",
          backgroundSize: '16px 16px', margin: '0px' }}>
            <Header />
            <Container style={{ backgroundColor: '#FFFFFFFF' }}>
                <Grid>
                <ItemList />
                </Grid>
            </Container>
        </Grid >
    );
}
