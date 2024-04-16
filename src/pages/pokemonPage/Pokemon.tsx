import { Container, Grid } from "@mui/material";
import { PokemonDetail } from "../../components/details/details";

export function PokemonPage() {
  return (
      <Grid
        style={{
          backgroundColor: "#727272",
          borderRadius: "4px",
          backgroundImage:
            "repeating-linear-gradient(-45deg, #6a6a6a 0, #6a6a6a 2px, #727272 2px, #727272 11px)",
          backgroundSize: "16px 16px",
          margin: "0px"
        }}
      >
        <Container style={{ backgroundColor: "#FFFFFFFF" }}>
          <Grid>
            <PokemonDetail />
          </Grid>
        </Container>
      </Grid>
  );
}