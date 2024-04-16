import Pokedexlogo from "../../../assets/title/pokedex-3d-logo.png";
import Fletchinder from "../../../assets/pokemon/fletchinder.webp";
import Nidorina from "../../../assets/pokemon/nidorina.png";

import { Grid } from "@mui/material";

export function Logo() {
    return (
        <Grid container justifyContent="center" alignItems="center" style={{ backgroundColor: '#202020', margin: '0', padding: '5px' }}>
            {[
                { src: Fletchinder, alt: "Fletchinder-Img", height: '130px' },
                { src: Pokedexlogo, alt: "Pokedex-3D-Logo", height: '120px' },
                { src: Nidorina, alt: "Nidorina-Img", height: '130px' }
            ].map((item, index) => (
                <img
                    key={index}
                    src={item.src}
                    alt={item.alt}
                    style={{ height: item.height, margin: '0 10px' }}
                />
            ))}
        </Grid>
    );
}
