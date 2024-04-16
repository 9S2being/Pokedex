import { Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

export function PokeNav() {
    return (
        <Box display="flex" justifyContent="center" mt={3}>
            <Box width="80vw">
                <Paper sx={{ backgroundColor: '#e3f5fd', border: '1px solid transparent', borderRadius: '16px', padding: '17px', textAlign: 'center' }}>
                    <Link to={'/PokedexGen1'} style={{ marginLeft: '10px', marginRight: '10px', color: '#2769be', textDecoration: 'none', borderRight: '1px solid black', padding: '7px', }}>
                        Gen 1
                    </Link>
                    <Link to={'/PokedexGen2'} style={{ marginRight: '10px', color: '#2769be', textDecoration: 'none', borderRight: '1px solid black', padding: '7px' }}>
                        Gen 2
                    </Link>
                    <Link to={'/PokedexGen3'} style={{ marginRight: '10px', color: '#2769be', textDecoration: 'none', borderRight: '1px solid black', padding: '7px' }}>
                        Gen 3
                    </Link>
                    <Link to={'/PokedexGen4'} style={{ marginRight: '10px', color: '#2769be', textDecoration: 'none', borderRight: '1px solid black', padding: '7px' }}>
                        Gen 4
                    </Link>
                    <Link to={'/PokedexGen5'} style={{ marginRight: '10px', color: '#2769be', textDecoration: 'none', borderRight: '1px solid black', padding: '7px' }}>
                        Gen 5
                    </Link>
                    <Link to={'/PokedexGen6'} style={{ marginRight: '10px', color: '#2769be', textDecoration: 'none', borderRight: '1px solid black', padding: '7px' }}>
                        Gen 6
                    </Link>
                    <Link to={'/PokedexGen7'} style={{ marginRight: '10px', color: '#2769be', textDecoration: 'none', borderRight: '1px solid black', padding: '7px' }}>
                        Gen 7
                    </Link>
                    <Link to={'/PokedexGen8'} style={{ marginRight: '10px', color: '#2769be', textDecoration: 'none', borderRight: '1px solid black', padding: '7px' }}>
                        Gen 8
                    </Link>
                    <Link to={'/PokedexGen9'} style={{ marginRight: '10px', color: '#2769be', textDecoration: 'none' }}>
                        Gen 9
                    </Link>
                </Paper>
            </Box>
        </Box>
    );
}
