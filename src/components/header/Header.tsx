import { Box, Button, Grid, Paper} from '@mui/material';
import { Logo } from './logo/logo';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Logo />
            <Box width="80vw" mb={3} borderRadius={2}>
                <Paper sx={{ backgroundColor: '#303030', border: '1px solid transparent', borderRadius: '16px', padding: '17px' }}>
                    <Grid container spacing={4} alignItems="center" justifyContent="center">
                        {[
                            { label: 'National Dex', path: '/PokedexGen1' },
                            { label: 'Items', path: '/Items' },
                            { label: 'Favorites', path: '/favorites' },
                            { label: 'Moves', path: '/moves' },
                            { label: 'Berrys', path: '/berrys' },
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
