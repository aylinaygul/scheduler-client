import React from 'react'
import { Box, CssBaseline, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from './Header.tsx'

function MainLayout() {
    const [useContainer, setUseContainer] = React.useState(true);

    function getOutlet() {
        if (useContainer)
            return (
                <Container component="main" maxWidth={false} sx={{
                    height: "100%",
                    maxHeight: "100%",
                    overflowY: "scroll",
                    overflowX: "hidden",
                    paddingTop: 1,
                    paddingBottom: 5,
                    paddingLeft: 0,
                    paddingRight: 0,
                    "@media (min-width:600px)": {
                        paddingLeft: 0, // Override padding-left for larger screens
                        paddingRight: 0, // Override padding-right for larger screens
                    },
                }}>
                    <Outlet context={[useContainer, setUseContainer]} />
                </Container>
            );

        return <Outlet context={[useContainer, setUseContainer]} />;
    }
    return (
        <Box sx={{ display: 'flex', height: '100vh', maxHeight: '100vh', paddingTop: "64px" }}>
            <CssBaseline />
            <Header />
            {getOutlet()}
        </Box>
    );
}

export default MainLayout