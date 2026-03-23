import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminRouts from './Routes/AdminRouts';
import UserRouts from './Routes/UserRouts';
import PrivateRouts from './Routes/PrivateRouts';
import { Provider } from 'react-redux';
import { confistore } from './Redux/store';
import { SnackbarProvider } from 'notistack';
import Alert from './Component/alert/Alert';
import { ThemeProvider } from './context/theme.context';
import { createTheme } from '@mui/material';


function App(props) {
 

  const store = confistore()
  return (
    <SnackbarProvider>
      <ThemeProvider>
      <Provider store={store}>
        <Alert />
        <Routes>
          <Route path='/*' element={<UserRouts />}></Route>

          <Route element={<PrivateRouts />}>
            <Route path='admin/*' element={<AdminRouts />}></Route>
          </Route>


        </Routes>

      </Provider>
      </ThemeProvider>
    </SnackbarProvider>
  );
}

export default App;