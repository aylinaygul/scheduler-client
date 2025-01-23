import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { Box, Button } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import StyledCalendar from '../components/StyledCalendar.tsx';
import NavigationBar from '../components/NavigationBar.tsx';

import StethoscopeIcon from '@mui/icons-material/LocalHospital';
import VirusIcon from '@mui/icons-material/BugReport';
import SyringeIcon from '@mui/icons-material/Vaccines';
import AlarmIcon from '@mui/icons-material/AccessAlarm';
import ShiftInfoBox from '../components/ShiftInfoBox.tsx';

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

const navButtons = [
    { label: "Dashboard" },
    { label: "Schedule" },
    { label: "Staff" },
    { label: "Staffs" },
];

export default function Home() {
    const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17'));

    return (
        <Grid container direction={"row"} columns={30} rowSpacing={6} columnSpacing={3}  >
            <Grid size={{ xs: 6, lg: 4 }} pr={6} >
                <Box component={"img"} src={"/images/nurse-avatar.png"} width={"100%"} />
            </Grid>
            <Grid size={24} >
                <Grid container direction={"column"} justifyContent={"space-around"} height={'100%'} >
                    <Box component={"img"} src={"/images/nurse-scheduling-text.png"} width={"40%"} />
                    <Grid container direction={"row"} spacing={{ xs: 3, md: 3 }} >
                        {navButtons.map((navButton, index) => (
                            <Grid size={3}>
                                <Button variant={"outlined"} key={index}>
                                    {navButton.label}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={4}>
                <NavigationBar options={options} />
            </Grid>
            <Grid size={12} >
                <StyledCalendar value={value} setValue={setValue} />
            </Grid>
            <Grid size={12}>
                <ShiftInfoBox rows={rows} columns={columns} />
            </Grid>
        </Grid >
    );
}
