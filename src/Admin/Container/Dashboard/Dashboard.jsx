import { Avatar, AvatarGroup, Box, Chip, Grid } from '@mui/material';
import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import BarChartData from './BarChartData';
import LineChartData from './LineChartData';
import PieChartData from './PieChartData';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import styled from '@emotion/styled';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { PieChart } from '@mui/x-charts';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { ThemeContext } from '../../../context/theme.context';
// import ProductData from './ProductData';

const product = [
    {
        _id: 3,
        products_img: "../../../../public/assets/images/avatar/02.jpg",
        name: "ABCD",
        price: "$150",
        total_orders: "280",
        rank: "Top1",
        rankColor: "primary",
    },
    {
        _id: 4,
        products_img: "../../../../public/assets/images/avatar/03.jpg",
        name: "abcd",
        price: "$350",
        total_orders: "50",
        rank: "Top2",
        rankColor: "secondary",
    },
    {
        _id: 5,
        products_img: "../../../../public/assets/images/avatar/04.jpg",
        name: "xyz",
        price: "$150",
        total_orders: "200",
        rank: "Top3",
        rankColor: "error",
    },
    {
        _id: 6,
        products_img: "../../../../public/assets/images/avatar/05.jpg",
        name: "pqr",
        price: "$50",
        total_orders: "300",
        rank: "Top4",
        rankColor: "info",
    },
    {
        _id: 7,
        products_img: "../../../../public/assets/images/avatar/06.jpg",
        name: "ABCD",
        price: "$30",
        total_orders: "250",
        rank: "Top5",
        rankColor: "success",
    },
];


const orderDistribution = [
    { label: "Delivered", value: 70, color: '#086b0f' },
    { label: "Padding", value: 20, color: '#22a624' },
    { label: "Cancelled", value: 10, color: '#7b3306' },
];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    width: '78%',
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: 'gray',

    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',

    },
}));

const converData = [
    { label: "Direct calls", value: 70, color: '#086b0f' },
    { label: "Quote requests", value: 20, color: '#22a624' },
    { label: "Ads", value: 10, color: '#7b3306' },
    { label: "Affiliate links", value: 20, color: '#22a624' },
    { label: "Other", value: 10, color: '#7b3306' },
];


const stats = [
    {
        title: "Total active users",
        value: "18,765",
        change: "+2.6%",
        status: true,
        color: '#22a624',
        data: [1, 4, 2, 5, 7, 2, 4, 6],
        dataColor: 'black',
    },
    {
        title: "Total Products",
        value: "4,876",
        change: "+0.2%",
        status: true,
        color: '#22a624',
        data: [8, 5, 2, 5, 9, 2, 8, 1],
        dataColor: 'black',
    },
    {
        title: "Total Orders",
        value: "678",
        change: "-0.1%",
        status: false,
        color: 'gray',
        data: [1, 4, 2, 5, 7, 2, 4, 6],
        dataColor: 'black',
    },
    {
        title: "Total Revenue Gauge",
        value: "1,234",
        change: "+1.0%",
        status: true,
        color: '#22a624',
        data: [8, 5, 2, 5, 9, 2, 8, 1],
        dataColor: 'black',
    },
];

const latestproducts = [
    {
        _id: 1,
        products_img: "../../../../public/assets/images/avatar/06.jpg",
        name: "product name ",
        price: "$50",
        variant: 3,
        colors: ["#00C49F", "#FFBB28", "#FF8042", "#FFBB28"],
    },
    {
        _id: 2,
        products_img: "../../../../public/assets/images/avatar/06.jpg",
        name: "product name ",
        price: "$50",
        variant: 3,
        colors: ["#8B4513", "#D2B48C"],
    },
    {
        _id: 3,
        products_img: "../../../../public/assets/images/avatar/06.jpg",
        name: "product name ",
        price: "$97.14",
        variant: 3,
        oldPrice: "$97.14",
        discountPrice: "$85.21",
        colors: ["#00C49F", "#00BFFF", "#DC143C", "#FFBB28", "#DC143C"],
    },
    {
        _id: 4,
        products_img: "../../../../public/assets/images/avatar/06.jpg",
        name: "product name ",
        price: "$97",
        variant: 3,
        oldPrice: "$97",
        discountPrice: "$68.71",
        colors: ["#800080", "#4B0082"],
    },
    {
        _id: 5,
        products_img: "../../../../public/assets/images/avatar/06.jpg",
        name: "product name ",
        price: "$50",
        variant: 3,
        colors: ["#00008B"],
    },
];

const StateCard = ({ title, value, change, color, status, data, dataColor }) => {
    const [showHighlight, setShowHighlight] = React.useState(true);
    const [showTooltip, setShowTooltip] = React.useState(true);

    const handleHighlightChange = (event) => {
        setShowHighlight(event.target.checked);
    };

    const handleTooltipChange = (event) => {
        setShowTooltip(event.target.checked);
    };

    return (
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }} >
            <Typography variant="subtitle2" >
                {title}
            </Typography>
            <Grid container sx={{ alignItems: 'end' }} >
                <Grid size={8}   >
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        {value}
                    </Typography>
                </Grid>

                <Grid size={4}>
                    <SparkLineChart
                        color={color}
                        plotType="bar"
                        data={data}
                        height={50}
                        showHighlight={showHighlight}
                        showTooltip={showTooltip}
                    />
                </Grid>
            </Grid>

            <Box sx={{ display: 'flex', mt: 2, color: status ? '#22a624' : 'gray' }}>
                {
                    status ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />
                }
                <Typography sx={{ ml: 2 }}>
                    {change} last 7 days
                </Typography>
            </Box>
        </Paper>

    )
}

const ProductData = ({ data }) => (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontSize: '18px', mb: 2 }}>
            Best Product
        </Typography>

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow sx={{ backgroundColor: '#e9fffd' }}>
                    <TableCell sx={{ color: '#5f5f5f', fontSize: '14px' }}>Product Img</TableCell>
                    <TableCell sx={{ color: '#5f5f5f', fontSize: '14px' }} >Name</TableCell>
                    <TableCell sx={{ color: '#5f5f5f', fontSize: '14px' }}>Price</TableCell>
                    <TableCell sx={{ color: '#5f5f5f', fontSize: '14px' }}>Table Orders</TableCell>
                    <TableCell sx={{ color: '#5f5f5f', fontSize: '14px' }}>Rank</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((v) => (
                    <TableRow
                        key={v._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell>
                            <Avatar alt="Remy Sharp" src={v.products_img} />
                        </TableCell>
                        <TableCell >{v.name}</TableCell>
                        <TableCell >{v.price}</TableCell>
                        <TableCell >{v.total_orders}</TableCell>
                        <TableCell > <Chip label={v.rank} color={v.rankColor} /></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    </Paper>

)

const LatestProductData = ({ data }) => (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontSize: '18px', mb: 2 }}>
            Lastest Product
        </Typography>
        <TableBody>
            {data.map((v) => (
                <TableRow
                    key={v._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

                    <TableCell >
                        <Box sx={{ display: 'flex', columnGap: 2 }}>
                            <Avatar alt="Remy Sharp" src={v.products_img} variant="rounded" />
                            <Box >
                                <Typography>{v.name}</Typography>
                                <Typography variant='span' sx={{ color: v.discountPrice ? 'red' : 'gray', textDecoration: v.discountPrice ? 'line-through' : 'none' }}>{v.price}</Typography>
                                {
                                    v.discountPrice && (<Typography variant='span' sx={{ ml: 1, color: 'gray' }}>{v.discountPrice}</Typography>)
                                }
                            </Box>
                        </Box>
                    </TableCell>

                    <TableCell>
                        <AvatarGroup max={4} sx={{
                            "& .MuiAvatar-circular": {
                                width: '20px',
                                height: '20px',
                                fontSize: '8px'
                            }
                        }} >
                            {
                                v.colors.map((v1) => (
                                    <Avatar alt="" src="" sx={{ bgcolor: v1, width: '20px', height: '20px' }} />
                                ))
                            }
                        </AvatarGroup>
                    </TableCell>

                </TableRow>
            ))}
        </TableBody>
    </Paper>
)


const Conversion = ({ data }) => (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 3, height: 380 }}>

        <Box sx={{ display: 'flex' }}>
            <Box sx={{ alignItems: 'center', height: '30px', width: '30px', borderRadius: 5, backgroundColor: '#eadddd' }}><AccessTimeIcon sx={{ alignItems: 'center', mt: '3px', ml: '3px' }} /> </Box>
            <Typography variant='subtitle1' sx={{ ml: 1, fontSize: '21px', alignItems: 'center' }}>Conversions</Typography>
        </Box>


        <Box sx={{ display: 'flex', mt: 2 }}>
            <Grid size={5}>
                <Typography variant={'h3'} sx={{ color: '#15B79F' }}>+5%</Typography>

                <Typography sx={{ color: 'gray' }}>increase in conversions compared to last year</Typography>

                
                    
                    <Typography variant={'subtitle1'} sx={{ color: 'gray',mt:7 }}>This year is forecasted to increase in your conversion by 0.5% the end of the current year.</Typography>

             
            </Grid>
            <Grid size={7}>
                {/* <Box sx={{ width: '100%', ml: 6}}> */}
                    {data.map((v) =>
                    (
                        <Box>
                            <Typography variant='subtitle1' sx={{ml:1,fontWeight:500,fontSize:'18px'}}>{v.label}</Typography>

                             <Box sx={{display:'flex',textAlign:'center'}}>
                            <BorderLinearProgress variant="determinate" value={v.value} sx={{
                                m:1,
                                "&: MuiLinearProgress-root": {
                                    width: '20px'
                                }
                            }} />
                             <Typography variant='subtitle1' sx={{fontWeight:'bold'}}>{v.value}%</Typography>
                            </Box>
                        </Box>
                    ))
                    }

                {/* </Box> */}
            </Grid>



        </Box>

    </Paper>
)

const Cost = ({ data }) =>
(<Paper elevation={3} sx={{ p: 2, borderRadius: 3, height: 380 }}>


    <Box sx={{ display: 'flex', alignContent: 'center', mb: 0 }}>
        <Box sx={{ alignItems: 'center', height: '30px', width: '30px', borderRadius: 5, backgroundColor: '#eadddd' }}><AccountBalanceWalletIcon sx={{ alignItems: 'center', mt: '3px', ml: '3px' }} /> </Box>
        <Typography variant='subtitle1' sx={{ ml: 1, fontSize: '20px' }}>Cost breakdown</Typography>
    </Box>
    <Typography variant='subtitle1' sx={{ ml: 5, fontSize: '16px', alignItems: 'center', color: 'gray', mt: 0 }}>Based on selected period</Typography>

    <PieChart
        height={250}
        width={250}
        series={[
            {
                data,
                innerRadius: '70%',

            },
        ]}

    />

</Paper>
)
function Dashboard(props) {

    
      const themeData = useContext(ThemeContext);
      console.log(themeData);
    
      let isDark = themeData.theme === 'dark'

    return (
        <Box sx={{ p: 2 }} >
            <Grid container spacing={2}>
                {
                    stats.map((v) => (
                        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                            <StateCard {...v} />
                        </Grid>
                    ))
                }



                <Grid size={12}>
                    <BarChartData />
                </Grid>



                <Grid size={8}>
                    <LineChartData />
                </Grid>

                <Grid size={4}>
                    <PieChartData />
                </Grid>


                <Grid size={4}>
                    <PieChartData />
                </Grid>

                <Grid size={8}>
                    <LineChartData />
                </Grid>

                <Grid size={8}>
                    <ProductData data={product} />
                </Grid>


                <Grid size={4}>
                    <LatestProductData data={latestproducts} />
                </Grid>

                <Grid size={8}>
                    <Conversion data={converData} />
                </Grid>

                <Grid size={4}>
                    <Cost data={orderDistribution} />
                </Grid>
            </Grid>
        </Box>


    );
}

export default Dashboard;