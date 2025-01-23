import React from 'react'
import Grid from '@mui/material/Grid2';
import { Button } from '@mui/material';

export interface NavigationBarProps {
    options: { label: string; icon: React.ReactNode; value: string }[]
}

export default function NavigationBar({ options }: NavigationBarProps) {
    return (
        <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            sx={{
                width: "100%",
                height: "100%",
                bgcolor: "#C5DADD",
                borderRadius: 3,
                padding: 2
            }}
        >
            {options.map((option, index) => (
                <Button
                    key={index}
                    startIcon={option.icon}
                    sx={{
                        justifyContent: 'flex-start',
                        color: 'white',
                        textTransform: 'none',
                        width: '100%',
                        borderBottom: 1,
                        borderColor: 'white',
                        paddingY: 1
                    }}
                >
                    {option.label}
                </Button>
            ))}
        </Grid>
    );
}