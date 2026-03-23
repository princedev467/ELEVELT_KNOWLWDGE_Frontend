import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Paper, Typography } from '@mui/material';

function PieChartData(props) {

    const orderDistribution = [
        { label: "Delivered", value: 70, color: '#086b0f' },
        { label: "Padding", value: 20, color: '#22a624' },
        { label: "Cancelled", value: 10, color: '#7b3306' },
    ];

    const settings = {
          width: 200,
        height: 200,
      
    };

    return (
        <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: 380 }}>
            <Typography variant='h6'>
                Orders Status Distribution
            </Typography>
            <Typography variant='Subtitle2' sx={{ color: 'grey' }}>
                (+47%)than Last year
            </Typography>

            <PieChart sx={{mt:4}}
                series={[{ innerRadius: 50, outerRadius: 100,data: orderDistribution, arcLabel: 'value' }]}
                {...settings}
            />
        </Paper>
    );
}

export default PieChartData;