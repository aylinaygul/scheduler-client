import React, { useState } from 'react'
import Grid from '@mui/material/Grid2';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

export interface ShiftInfoBoxProps {
    columns: { field: string; headerName: string; flex: number }[];
    rows: { id: number; cell: string }[];
}

export default function ShiftInfoBox({ rows, columns }: ShiftInfoBoxProps) {
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 10,
    });

    return (
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
    )
}