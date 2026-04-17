import React, { useContext } from 'react';
import Layout from '../Admin/Component/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Category from '../Admin/Container/Category/Category';
import Course from '../Admin/Container/Course/Course';
import Dashboard from '../Admin/Container/Dashboard/Dashboard';
import CategoryPage from '../Admin/Container/Category/CategoryPage';
// import { ThemeProvider } from '../context/theme.context';
import { ThemeProvider } from '@mui/material';
import { ThemeContext } from '../context/theme.context';
import { createTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import Section from '../Admin/Container/SubCategory/Section';
import Quiz from '../Admin/Container/Quiz/Quiz';
import QuizPage from '../Admin/Container/Quiz/QuizPage';

function AdminRouts(props) {


  const themeData = useContext(ThemeContext);
  console.log(themeData);

  const auth = useSelector(state => state.auth)
  console.log("auth", auth.auth);


  const theme = createTheme({
    palette: {
      mode: themeData.theme,
      primary: {
        main: '#2764DD',

      },
      secondary: {
        main: '#F7C32E',

      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path='/Dashboard' element={<Dashboard />}></Route>
          <Route path='/category' element={<Category />} ></Route>
          {/* <Route path='/category/:id' element={<CategoryPage />} ></Route> */}
          <Route path='/Section' element={<Section />} ></Route>
          <Route path='/course' element={<Course />} > </Route>
          <Route path='/quiz' element={<Quiz />} > </Route>
          <Route path='/quizPage/:id' element={<QuizPage />} > </Route>

        </Routes>

      </Layout>
    </ThemeProvider>

  );}

export default AdminRouts;