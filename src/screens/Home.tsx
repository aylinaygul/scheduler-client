import React from 'react';
import Grid from '@mui/material/Grid2';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <Grid container direction="column" justifyContent="center">
            <Grid size={12}>
                <Grid container direction="column" gap={2} >
                    <Grid size={2}>
                        <Button
                            variant="contained"
                            sx={{ bgcolor: 'purple' }}
                            onClick={() => navigate('/select-dates')}
                        >
                            Select Dates
                        </Button>
                    </Grid>
                    <Grid size={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigate('/schedule')}
                        >
                            View Schedule
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};