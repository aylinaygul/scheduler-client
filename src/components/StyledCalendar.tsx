import React from 'react';
import { Box } from '@mui/material';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

export interface StyledCalendarProps {
    value: Dayjs | null,
    setValue: (newValue: Dayjs | null) => void;
};

export default function StyledCalendar({ value, setValue }: StyledCalendarProps) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "#F1F1F1",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
                <DateCalendar
                    value={value}
                    onChange={(newDate) => setValue(newDate)}
                />
            </Box>
        </LocalizationProvider>
    )
}