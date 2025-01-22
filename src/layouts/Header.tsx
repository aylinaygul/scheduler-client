import React from 'react';
import { CssBaseline, AppBar, Toolbar, IconButton, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Header() {
    return (
        <>
            <CssBaseline />
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar sx={{ gap: 1 }}>
                    <IconButton size="large"><HomeIcon /></IconButton>
                    <IconButton size="large"><ArrowBackIcon /></IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton size="large"><NotificationsIcon /></IconButton>
                    <IconButton size="large"><SearchIcon /></IconButton>
                    <IconButton size="large"><SettingsIcon /></IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
}
