import React from 'react';
import Grid from '@mui/material/Grid2';
import { Box, Button, Typography, styled } from '@mui/material';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { DataGrid } from '@mui/x-data-grid';
import StethoscopeIcon from '@mui/icons-material/LocalHospital';
import VirusIcon from '@mui/icons-material/BugReport';
import SyringeIcon from '@mui/icons-material/Vaccines';
import AlarmIcon from '@mui/icons-material/AccessAlarm';

const columns = [
    { field: 'id', headerName: 'Header', flex: 1 },
    { field: 'cell', headerName: 'Cell', flex: 1 },
];

const rows = [
    { id: 1, cell: 'Cell' },
    { id: 2, cell: 'Cell' },
];
const options = [
    { label: 'Typography', icon: <StethoscopeIcon sx={{ color: 'white' }} />, value: 'Stethoscope' },
    { label: 'Typography', icon: <VirusIcon sx={{ color: 'white' }} />, value: 'Virus' },
    { label: 'Typography', icon: <SyringeIcon sx={{ color: 'white' }} />, value: 'Syringe' },
    { label: 'Typography', icon: <AlarmIcon sx={{ color: 'white' }} />, value: 'Alarm' },
];

const CalendarContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "100%",
    backgroundColor: "#F1F1F1",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

// const StyledDateCalendar = styled(DateCalendar)({
//     width: "100%",
//     height: "100%",
//     "& .MuiDateCalendar-root": {
//         width: "100%",
//         height: "100%",
//     },
// });
export default function Home() {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

    const [paginationModel, setPaginationModel] = React.useState({
        page: 0,
        pageSize: 10,
    });
    return (
        <Grid container direction={"row"} columns={30} rowSpacing={6} columnSpacing={3}  >
            <Grid size={{ xs: 6, lg: 4 }} pr={6} >
                <Box component={"img"} src={"/images/nurse-avatar.png"} width={"100%"} />

            </Grid>
            <Grid size={24} >
                <Grid container direction={"column"} justifyContent={"space-around"} height={'100%'} >
                    <Box component={"img"} src={"/images/nurse-scheduling-text.png"} width={"40%"} />
                    <Grid container direction={"row"} spacing={{ xs: 3, md: 3 }} >
                        <Grid size={3}>
                            <Button variant={"outlined"}>
                                Dashboard
                            </Button>
                        </Grid>
                        <Grid size={3}>
                            <Button variant={"outlined"} >
                                Schedule
                            </Button>
                        </Grid>
                        <Grid size={3}>
                            <Button variant={"outlined"}>
                                Staff
                            </Button>
                        </Grid>
                        <Grid size={3}>
                            <Button variant={"outlined"} >
                                Staffs
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={4}>
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
                            // onClick={() => handleOptionClick(option.value)}
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
            </Grid>
            <Grid size={12} >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <CalendarContainer>
                        <DateCalendar
                            value={value}
                            onChange={(newDate) => setValue(newDate)}
                        />
                    </CalendarContainer>
                </LocalizationProvider>
            </Grid>
            <Grid size={12}>
                <Grid container
                    direction={"row"}
                    columns={12}
                    alignItems={"center"}
                    sx={{
                        width: '100%',
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden',
                    }}
                >
                    <Grid size={3} p={3}>
                        <Box component={"img"} src={"/images/nurse-avatar.png"} width={"100%"} height={"auto"} />
                    </Grid>
                    <Grid size={9}>
                        <Typography variant={"h2"}>
                            Aylin Aygul
                        </Typography>
                    </Grid>
                    <Grid size={12} p={3}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            paginationModel={paginationModel}
                            onPaginationModelChange={setPaginationModel}
                            pagination
                        />
                    </Grid>
                </Grid>


            </Grid>
        </Grid >
    );
};
