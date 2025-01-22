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

    const startOfMonth = selectedDate.startOf('month');
    const endOfMonth = selectedDate.endOf('month');
    const daysInMonth = endOfMonth.date();

    const eventsForDate = (date) => {
        const formattedDate = date.format('YYYY-MM-DD');
        return scheduleData[formattedDate]?.filter((event) =>
            event.responsible.toLowerCase().includes(searchName.toLowerCase())
        ) || [];
    };

    const handleDayClick = (date) => {
        setSelectedDate(date);
        setOpenModal(true);
    };

    const handleCloseModal = () => setOpenModal(false);

    return (
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
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(7, 1fr)',
                        gap: 2,
                        bgcolor: 'white',
                        p: 2,
                        borderRadius: 2,
                    }}
                >
                    {Array.from({ length: daysInMonth }, (_, i) => {
                        const date = startOfMonth.add(i, 'day');
                        const dayEvents = eventsForDate(date);

                        return (
                            <Box
                                key={i}
                                sx={{
                                    p: 1,
                                    border: '1px solid #ccc',
                                    borderRadius: 2,
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    bgcolor: dayEvents.length > 0 ? '#e8f5e9' : 'white',
                                    '&:hover': { bgcolor: '#f1f1f1' },
                                }}
                                onClick={() => handleDayClick(date)}
                            >
                                <Typography variant="body2">{date.format('D')}</Typography>
                                {dayEvents.length > 0 && (
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            position: 'absolute',
                                            bottom: 4,
                                            right: 4,
                                            color: 'green',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {dayEvents.length} Event{dayEvents.length > 1 ? 's' : ''}
                                    </Typography>
                                )}
                            </Box>
                        );
                    })}
                </Box>
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

                    {eventsForDate(selectedDate).length > 0 ? (
                        <List>
                            {eventsForDate(selectedDate).map((event, index) => (
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
        </Grid>
    );
}

export default DisplaySchedule;
