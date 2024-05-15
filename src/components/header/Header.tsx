import { Box, Button, Grid, Paper } from '@mui/material';
import { Logo } from './logo';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
            <Logo />
            <Box width="40vw" mb={3} borderRadius={2} >
                <Paper sx={{ backgroundColor: '#303030', border: '1px solid transparent', borderRadius: '50px', padding: '10px' }}>
                    <Grid container spacing={4} alignItems="center" justifyContent="center">
                        {[
                            { label: 'Pokedex', path: '/PokedexGen1' },

                        ].map(({ label, path }, index) => (
                            <Grid item key={index}>
                                <Button
                                    variant="text"
                                    color="inherit"
                                    component={Link}
                                    to={path}
                                    sx={{ color: 'white', borderRadius: '8px', padding: '10px', '&:hover': { backgroundColor: '#424242' } }}
                                >
                                    {label}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Box>
        </Box>
    );
}