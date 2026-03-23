import { Paper, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import React from 'react';

function BarChartData(props) {
    const Fruits = [
        4000, 3000, 2000, 2780, 1890, 2390, 3490, 2400, 1398, 9800, 3908, 4800,
        3800,
    ];
    const Vegitables = [
        2400, 1398, 9800, 3908, 4800, 3800, 4300, 4000, 3000, 2000, 2780, 1890,
        2390,
    ];
    const DayFruits = [
        4000, 3000, 2000, 2780, 1890, 2390, 3490, 2400, 1398, 9800, 3908, 4800,
        3800,
    ];
    const OrganicItems = [
        2400, 1398, 9800, 3908, 4800, 3800, 4300, 4000, 3000, 2000, 2780, 1890,
        2390,
    ];
    const xLabels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];


    return (
        <Paper elevation={3} sx={{ p:3, borderRadius: 3,height:380 }}>
            <Typography variant='h6'>
                Sells of different Category
            </Typography>
            <Typography variant='Subtitle2' sx={{ color: 'grey' }}>
                (+43%)than Last year
            </Typography>

            <BarChart
            sx={{pb:4}}
                series={[
                    { data: Fruits, label: 'fruit', id: 'fruit', stack: 'total' },
                    { data: Vegitables, label: 'vegitable', id: 'vegitable', stack: 'total' },
                    { data: DayFruits, label: 'dryFruits', id: 'dryFruits', stack: 'total' },
                    { data: OrganicItems, label: 'organicItems', id: 'organicItems', stack: 'total' }
                ]}
                xAxis={[{ data: xLabels, height: 28 }]}
                yAxis={[{ width: 50 }]}
            />
        </Paper>


    );
}

export default BarChartData;