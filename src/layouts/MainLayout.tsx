import React from "react";
import { Outlet } from "react-router-dom";
import { Box, ThemeProvider, createTheme, Container } from '@mui/material';
import Header from "./Header.tsx";

const defaultTheme = createTheme({
    typography: {
        fontSize: 12,
        fontFamily: ['Poppins', 'sans-serif'].join(','),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                outlined: {
                    color: '#284D3A',
                    borderColor: '#284D3A',
                    borderRadius: 30,
                    width: '100%',
                    '&:hover': {
                        borderColor: '#115293',
                        backgroundColor: 'rgba(25, 118, 210, 0.04)',
                    },
                    [`@media (max-width:600px)`]: {
                        display: 'none'
                    },
                    [`@media (min-width:600px)`]: {
                        fontSize: 8,
                        padding: "4px",
                    },
                    [`@media (min-width:800px)`]: {
                        fontSize: 12,
                        padding: "8px",
                    },
                    [`@media (min-width:1400px)`]: {
                        fontSize: 18,
                        padding: "8px",
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                sizeLarge: {
                    backgroundColor: '#004d40', // Dark green background color
                    color: '#ffffff', // White icon color
                    '&:hover': {
                        backgroundColor: '#00362e', // Slightly darker green on hover
                    },
                },
            },
        },
    },
});
export default function MainLayout() {
    const [useContainer, setUseContainer] = React.useState(true);

    function getOutlet() {
        if (useContainer)
            return (
                <Container component="main" maxWidth={false}
                    sx={{
                        height: "100%",
                        maxHeight: "100%",
                        overflowY: "scroll",
                        overflowX: "hidden",
                        pt: 4, pb: 5, pl: { xs: 5, sm: 7, lg: 15 }, pr: { xs: 5, lg: 15 }
                    }}>
                    <Outlet context={[useContainer, setUseContainer]} />
                </Container>
            );

        return <Outlet context={[useContainer, setUseContainer]} />;
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ height: '100%', maxHeight: '100vh', overflowY: "auto", width: "100vw" }} >
                <Box sx={{ pt: 4, pl: { xs: 2, sm: 4, lg: 12 }, pr: { xs: 2, lg: 12 } }}>
                    <Header />
                </Box>
                {getOutlet()}
            </Box>
        </ThemeProvider>
    );
}