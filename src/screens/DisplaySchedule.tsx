import React, { useState } from 'react';
import {
    Box,
    Typography,
    Modal,
    List,
    ListItem,
    ListItemText,
    TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';

function DisplaySchedule() {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [openModal, setOpenModal] = useState(false);
    const [searchName, setSearchName] = useState('');

    const scheduleData = {
        '2025-01-17': [
            { time: '09:00 AM', task: 'Team Meeting', responsible: 'Alice' },
            { time: '01:00 PM', task: 'Project Presentation', responsible: 'Bob' },
        ],
        '2025-01-18': [
            { time: '10:00 AM', task: 'Code Review', responsible: 'Alice' },
            { time: '03:00 PM', task: 'Client Call', responsible: 'Charlie' },
        ],
    };

    const formattedDate = selectedDate.format('YYYY-MM-DD');
    const events = scheduleData[formattedDate]?.filter((event) =>
        event.responsible.toLowerCase().includes(searchName.toLowerCase())
    ) || [];

    const handleDayClick = (date) => {
        setSelectedDate(date);
        setOpenModal(true);
    };

    const handleCloseModal = () => setOpenModal(false);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container
                direction={'column'}
                sx={{
                    display: 'flex',
                    minHeight: '100vh',
                    p: 4,
                    bgcolor: '#f5f5f5',
                }}
            >
                <Grid size={12}>
                    <Typography variant="h4" gutterBottom>
                        Schedule Viewer
                    </Typography>
                </Grid>
                <Grid size={12}>
                    <TextField
                        label="Search by Name"
                        variant="outlined"
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                        sx={{ mb: 2, width: '100%', maxWidth: 400 }}
                    />
                </Grid>

                <Grid size={12}>

                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        value={selectedDate}
                        onChange={(newValue) => handleDayClick(newValue)}
                        slotProps={{
                            day: (props) => {
                                const day = props.day;
                                const dayEvents = scheduleData[day.format('YYYY-MM-DD')] || [];
                                const filteredEvents = dayEvents.filter((event) =>
                                    event.responsible.toLowerCase().includes(searchName.toLowerCase())
                                );
                                return {
                                    sx: {
                                        position: 'relative',
                                        '&:after': filteredEvents.length > 0 && {
                                            content: `"${filteredEvents.length}"`,
                                            fontSize: '0.50rem',
                                            color: 'white',
                                            backgroundColor: 'red',
                                            borderRadius: '50%',
                                            width: '10px',
                                            height: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            position: 'absolute',
                                            top: 2,
                                            right: 2,
                                        },
                                    },
                                };
                            },
                        }}
                        sx={{ width: '100%', maxWidth: 600, bgcolor: 'white', p: 2, borderRadius: 2 }}
                    />
                </Grid>

            </Grid>
            <Modal open={openModal} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        minWidth: 300,
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Events for {selectedDate.format('MMMM DD, YYYY')}
                    </Typography>

                    {events.length > 0 ? (
                        <List>
                            {events.map((event, index) => (
                                <ListItem key={index}>
                                    <ListItemText
                                        primary={event.task}
                                        secondary={`${event.time} - ${event.responsible}`}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <Typography variant="body1">No events found for this day.</Typography>
                    )}
                </Box>
            </Modal>
        </LocalizationProvider>
    );
}

export default DisplaySchedule;
