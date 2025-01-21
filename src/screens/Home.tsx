import React from 'react';
import Grid from '@mui/material/Grid2';
import { Box, Typography, Button } from '@mui/material';

export default function Home() {
    return (
        <Grid container direction="row" columns={30} px={1} spacing={2}>
            <Grid size={{ xs: 6, lg: 4 }} pr={1} >
                <Box component={'img'} src={'/images/nurse-avatar.png'} width={'100%'} />
            </Grid>
            <Grid size={24} >
                <Grid container direction="column" justifyContent="space-around" height={'100%'} >
                    <Typography color='white' sx={{ typography: { xs: 'h2', lg: 'h1' }, whiteSpace: 'nowrap' }}>
                        Nurse Scheduling
                    </Typography>
                    <Grid container direction="row" columns={24} alignItems="center" spacing={1} >
                        <Grid size={6}>
                            <Button variant="contained" sx={{ bgcolor: '#5AC4D7' }}>
                                Dashboard
                            </Button>
                        </Grid>
                        <Grid size={5}>
                            <Button variant="contained" sx={{ bgcolor: '#E2F2F4', color: 'black' }}>
                                Schedule
                            </Button>
                        </Grid>
                        <Grid size={4}>
                            <Button variant="contained" sx={{ bgcolor: '#FF8AB6' }}>
                                Staff
                            </Button>
                        </Grid>
                        <Grid size={5}>
                            <Button variant="contained" sx={{ bgcolor: '#64B9CF' }}>
                                Staffs
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
