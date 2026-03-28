import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Box } from '@mui/material';
import { useGetCourseQuery } from '../../Redux/Api/Course.Api';

function CourseDisplay(props) {
  
    const [search, setSearch]=useState('')

    
        const { data } = useGetCourseQuery(); //get Data
        console.log("course",data);
        
  return (
    <div>
      <h2>hello sdfj</h2>
    </div>
  );
}

export default CourseDisplay;