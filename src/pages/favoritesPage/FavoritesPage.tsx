import { Container, Grid } from "@mui/material";
import { Header } from "../../components/header/Header";

export const FavoritePage = () => {
  return (
    <>
      <Header />
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
            {/*componente de lista de favoritos aqui */}
          </Grid>
        </Container>
      </Grid>
    </>
  );
};


