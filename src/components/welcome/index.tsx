import { Box, Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export function Welcome() {
    return (
        <Box display="flex" justifyContent="center" mt={4} mb={5}>
            <Box width="100vw" height="90vh">
                <Paper sx={{ backgroundColor: '#e3f5fd', border: '1px solid transparent', borderRadius: '25px', padding: '17px', textAlign: 'center', marginTop: '200px' }}>
                    <Typography variant="h4" gutterBottom>
                        Bem-vindo à Pokédex
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Explore todas as gerações de Pokémon e encontre informações detalhadas sobre cada um deles.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Clique em "Explorar" para começar a sua jornada:
                    </Typography>
                    <Box mt={3}>
                        <Button variant="contained" color="primary" component={Link} to="/PokedexGen1">
                            Explorar
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
}
