import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../Redux/slice/CategorySlice';
import { NavLink, useParams } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Box } from '@mui/material';
import { IMAGE_URL } from '../../utility/url';
import WithReduxFetch from '../../Hoc/WithReduxFetch';
import useSearch from '../../hook/useSearch';

function CategoryData({ category }) {
  const { id } = useParams();
  console.log(id);

  // const [search, setSearch]=useState('')

  // console.log(search);

  console.log(category);

  //  let  categoryFilter

  //  const handleFilter= () =>{
  //   if (search.trim() !== "") {
  //   categoryFilter=category?.filter(v =>
  //       v.name?.toLowerCase()?.includes(search.toLowerCase()) ||
  //        v.description?.toLowerCase()?.includes(search.toLowerCase())
  //     );
  //   }
  //  }

  const { search, setSearch, filterData } = useSearch(category, ["name", "description"])


  let catfilter = search ? filterData : category


  let finalData;



  if (!id) {
    finalData = catfilter?.filter(v => v.parent_category_id === null);
  } else {
    finalData = catfilter?.filter(v => v.parent_category_id == id);
  }


  return (

    <main>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bg-light p-4 text-center rounded-3  shadow">
                <h1 className="m-0 text-white">ALL Category</h1>
                {/* Breadcrumb */}
                <div className="d-flex justify-content-center">
                  {/* <nav aria-label="breadcrumb">
                        <ol className="breadcrumb breadcrumb-dots mb-0">
                          <li className="breadcrumb-item"><a href="#">Home</a></li>
                          <li className="breadcrumb-item active" aria-current="page">Course minimal</li>
                        </ol>
                      </nav> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          {/* Filter bar START */}
          <form className="bg-light border p-4 rounded-3 my-4 z-index-9 position-relative">
            <div className="row g-3">
              {/* Input */}
              <div className="col-xl-3">
                <input className="form-control me-1" type="search" w onChange={(e) => { setSearch(e.target.value) }} placeholder="Search..."
                  value={search} />
              </div>
              {/* Select item */}
              <div className="col-xl-8">
                <div className="row g-3">
                  {/* Select items */}
                  <div className="col-sm-6 col-md-3 pb-2 pb-md-0">
                    <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm example">
                      <option value>Categories</option>
                      <option>All</option>
                      <option>Development</option>
                      <option>Design</option>
                      <option>Accounting</option>
                      <option>Translation</option>
                      <option>Finance</option>
                      <option>Legal</option>
                      <option>Photography</option>
                      <option>Writing</option>
                      <option>Marketing</option>
                    </select>
                  </div>
                  {/* Search item */}
                  <div className="col-sm-6 col-md-3 pb-2 pb-md-0">
                    <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm example">
                      <option value>Price level</option>
                      <option>All</option>
                      <option>Free</option>
                      <option>Paid</option>
                    </select>
                  </div>
                  {/* Search item */}
                  <div className="col-sm-6 col-md-3 pb-2 pb-md-0">
                    <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm example">
                      <option value>Skill level</option>
                      <option>All levels</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                  {/* Search item */}
                  <div className="col-sm-6 col-md-3 pb-2 pb-md-0">
                    <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm example">
                      <option value>Language</option>
                      <option>English</option>
                      <option>Francas</option>
                      <option>Russian</option>
                      <option>Hindi</option>
                      <option>Bengali</option>
                      <option>Spanish</option>
                    </select>
                  </div>
                </div> {/* Row END */}
              </div>
              {/* Button */}
              <div className="col-xl-1">
                <button type="button" className="btn btn-primary mb-0 rounded z-index-1 w-100"><i className="fas fa-search" /></button>
              </div>
            </div> {/* Row END */}
          </form>
          {/* Filter bar END */}
          <div className="row mt-3" >
            {/* Main content START */}
            <div className="col-12 " >
              {/* Course Grid START */}
              <div className="row g-4 " >
                {/* Card item START */}

                {
                  finalData?.map((v) => {
                    const subCat = category?.some(
                      (v1) => v1.parent_category_id == v._id
                    );

                    return (
                      <div key={v._id} className="col-sm-6 col-lg-4 col-xl-3 " >
                        <NavLink to={subCat ? `/category/${v._id}` : `/course/${v._id}`}  >
                          <div className="card shadow h-100">
                            {/* Image */}

                            {
                              v.category_img.map(v => (
                                <img src={v.url} className="card-img-top" alt="course image"
                                  style={{
                                    width: "100%",
                                    height: "240px",
                                    objectFit: "cover",
                                    borderRadius: "8px"
                                  }} />

                              ))
                            }


                            {/* Card body */}
                            <div className="card-body pb-0">
                              {/* Badge and favorite */}
                              <div className="d-flex justify-content-between mb-2">
                                <a href="#" className="badge bg-purple bg-opacity-10 text-purple">All level</a>
                                <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart" /></a>
                              </div>
                              {/* Title */}
                              <h5 className="card-title"><a href="#"> {v.name}</a></h5>
                              <p class="mb-2 text-truncate-2">{v.description}</p>
                              {/* Rating star */}
                              <ul className="list-inline mb-0">
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                                <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                                <li className="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
                              </ul>
                            </div>
                            {/* Card footer */}
                            <div className="card-footer pt-0 pb-3">
                              <hr />
                              <div className="d-flex justify-content-between">
                                <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />12h 56m</span>
                                <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />15 lectures</span>
                              </div>
                            </div>
                          </div>

                        </NavLink>
                      </div>
                    )
                  })
                }
                {/* Card item END */}
              </div>
              {/* Course Grid END */}
              {/* Pagination START */}
              <div className="col-12">
                <nav className="mt-4 d-flex justify-content-center" aria-label="navigation">
                  <ul className="pagination pagination-primary-soft rounded mb-0">
                    <li className="page-item mb-0"><a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-double-left" /></a></li>
                    <li className="page-item mb-0"><a className="page-link" href="#">1</a></li>
                    <li className="page-item mb-0 active"><a className="page-link" href="#">2</a></li>
                    <li className="page-item mb-0"><a className="page-link" href="#">..</a></li>
                    <li className="page-item mb-0"><a className="page-link" href="#">6</a></li>
                    <li className="page-item mb-0"><a className="page-link" href="#"><i className="fas fa-angle-double-right" /></a></li>
                  </ul>
                </nav>
              </div>
              {/* Pagination END */}
            </div>
            {/* Main content END */}
          </div>{/* Row END */}
        </div>
      </section>

      {/* <section className="pt-5">
    <div className="container">
      <div className="row">
    <Box sx={{ paddingTop: 5, paddingLeft: 22, paddingBottom: 5 }}>
      <div>
        <input type="text" onChange={(e)=>{setSearch(e.target.value)}}   placeholder="Search..."
        value={search} style={{backgroundColor:'#24292e' ,color:'#fff'}}/>
      </div>
      <br /><br />
      {
         <Grid container spacing={4} >
        {catfilter?.map((v) => (

          <Card
          className='col-4'
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
      {/* </Box> */}
      {/* </div> */}
      {/* </div> */}
      {/* </section> */}
    </main>
  );
}

export default WithReduxFetch(CategoryData, getCategory, (state) => state.category);
