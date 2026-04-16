import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CategoryIcon from '@mui/icons-material/Category';
import AppsIcon from '@mui/icons-material/Apps';
import FoundationIcon from '@mui/icons-material/Foundation';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { ThemeContext } from '../../../context/theme.context';
import { useContext } from 'react';
import { Switch } from '@mui/material';
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import QuizIcon from '@mui/icons-material/Quiz';

export default function Layout({ children }) {
  const [checked, setChecked] = React.useState(true);


  // const handleChange = (event) => {
  //   setChecked(event.target.checked);

  //   themeData.ToggleTheme(themeData.theme)
  // };


  const themeData = useContext(ThemeContext);
  console.log(themeData);

  // let isDark = themeData.theme === 'dark'
  // const thememally = useTheme();
  const [open, setOpen] = React.useState(false);

  const drawerWidth = 240;



  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
      {
        props: ({ open }) => open,
        style: {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      },
    ],
  }));

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      '& .MuiDrawer-paper': {
        width: drawerWidth,
  
       

      },
      variants: [
        {
          props: ({ open }) => open,
          style: {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
          },
        },
        {
          props: ({ open }) => !open,
          style: {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
          },
        },
      ],
    }),
  );



  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const listBox = [
    { label: 'Dashboard', icon: <DashboardIcon  />, to: '/admin/Dashboard' },
    { label: 'Category', icon: <CategoryIcon  />, to: '/admin/category' },
    { label: 'Section', icon: <AppsIcon  />, to: '/admin/Section' },
    { label: 'Course', icon: <FoundationIcon  />, to: '/admin/course' }, 
    { label: 'Quiz', icon: <QuizIcon  />, to: '/admin/quiz' }
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} >
        <Toolbar >
          <IconButton
            color='inherit'
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", width: "100%" }}>
            <Typography variant="h6" sx={{ flexGrow: 1, gap: 1 }}>
              Admin Panel
            </Typography>
            <IconButton size="large" onClick={()=>themeData.ToggleTheme(themeData.theme)}>
              {
                themeData.theme==='light'? <BedtimeIcon />:<SunnyIcon />
              }
              

            </IconButton>
            {/* <Box className="modeswitch-wrap" id="darkModeSwitch" sx={{display:'flex',justifyContent:'end'}}>
              <Switch
                checked={checked}
                onChange={handleChange}
                slotProps={{ input: { 'aria-label': 'controlled' } }}
                color= "default"
              />
              <Typography sx={{mt:1,fontWeight:'500',color:'#efe8e2'}}>{isDark?'Dark Mode':'Light Mode'}</Typography>
            </Box > */}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose} >
            {/* {theme.direction === 'rtl' ? <ChevronRightIcon sx={{ color: '#efe8e2' }} /> : <ChevronLeftIcon sx={{ color: '#efe8e2' }} />} */}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List >
          {listBox.map((v, index) => (
            <ListItem key={index} disablePadding
              component={NavLink}
              to={v.to}
            >
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                      justifyContent: 'initial',
                    }
                    : {
                      justifyContent: 'center',
                    },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                        mr: 3,
                      }
                      : {
                        mr: 'auto',
                      },
                  ]}
                >
                  {v.icon}
                </ListItemIcon>
                <ListItemText
                  primary={v.label}
                  sx={[

                    open
                      ? {
                        opacity: 1,
                      }
                      : {
                        opacity: 0,
                      },
                  ]}

                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
