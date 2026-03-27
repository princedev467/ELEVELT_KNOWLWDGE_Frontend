import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../Redux/slice/CategorySlice';
import { useParams } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Box } from '@mui/material';
import { IMAGE_URL } from '../../utility/url';

function CategoryData() {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const [search, setSearch]=useState('')

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const { category = [] } = useSelector((state) => state.category);
  console.log(search);
  
   let  categoryFilter
   
 if (search.trim() !== "") {
    categoryFilter= category.filter(v =>
        v.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  return (


    <Box sx={{ paddingTop: 5, paddingLeft: 22, paddingBottom: 5 }}>
      <div>
        <input type="text" onChange={(e)=>{setSearch(e.target.value)}}   placeholder="Search..."
        value={search}/>
      </div>
      {
         <Grid container spacing={4} >
        {categoryFilter?.map((v) => (

          <Card
            sx={{
              width: '280px',
              justifyContent: 'space-between',

            }}
          >
            <CardMedia
              component="img"
              width='280px'
              height="100"
              image={`${v.category_img.url}`}
              alt={v.name}
            />

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {v.name}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {v.description}
              </Typography>
            </CardContent>

            <CardActions sx={{ justifyContent: 'space-between', px: 2, paddingBottom: 2 }}>
              <Button size="small" variant="outlined">
                Learn More
              </Button>
              <Button size="small" variant="contained">
                Buy
              </Button>
            </CardActions>
          </Card>

        ))}
      </Grid>
      }
      {/* <Grid container spacing={4} >
        {category.map((v) => (

          <Card
            sx={{
              width: '280px',
              justifyContent: 'space-between',

            }}
          >
            <CardMedia
              component="img"
              width='280px'
              height="100"
              image={`${v.category_img.url}`}
              alt={v.name}
            />

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {v.name}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {v.description}
              </Typography>
            </CardContent>

            <CardActions sx={{ justifyContent: 'space-between', px: 2, paddingBottom: 2 }}>
              <Button size="small" variant="outlined">
                Learn More
              </Button>
              <Button size="small" variant="contained">
                Buy
              </Button>
            </CardActions>
          </Card>

        ))}
      </Grid> */}
    </Box>
  );
}

export default CategoryData;
