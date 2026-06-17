import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Box } from '@mui/material';
import { useGetCourseQuery } from '../../Redux/Api/Course.Api';
import useSearch from '../../hook/useSearch';
import Carousel from 'react-material-ui-carousel';
import { NavLink, useParams } from 'react-router-dom';
import { useAddWhistlistMutation, useDeleteWhistlistMutation, useGetWhistlistQuery, useUpdateWhistlistMutation } from '../../Redux/Api/Whistlist.Api';
import { useSelector } from 'react-redux';

function CourseDisplay(props) {

  const { id } = useParams();
  console.log(id);


  const auth = useSelector(state => state.auth);
  console.log(auth);


  const { data, isLoading, isError } = useGetCourseQuery(); //get Data
  console.log("course", data);

  let course = data?.data

  let filterCourseData
  if (id) {
    filterCourseData = course?.filter((v) => v.category_id === id)

  } else {
    filterCourseData = course
  }

  const { search, setSearch, filterData } = useSearch(filterCourseData, ["name", "description"])


  let filterCourse = search ? filterData : filterCourseData


  const { data: whistlist } = useGetWhistlistQuery();
  console.log(whistlist?.data);

  const [addWhistlist] = useAddWhistlistMutation();
  const [updateWhitlist] = useUpdateWhistlistMutation();
  const [deleteWhistlist] = useDeleteWhistlistMutation();

  const handlewhistlist = async (course_id) => {
    let whistlistUser = whistlist?.data?.find((v) => v.user_id === auth.auth._id);

    let existData = whistlistUser?.items?.find((v) => v.course === course_id);
    console.log(existData);

    if (existData) {
      let deletdata = whistlistUser?.items.filter((v) => v._id !== existData._id);
      console.log(deletdata);

      await updateWhitlist({
        _id: whistlistUser._id,
        user_id: auth.auth._id,
        items: deletdata
      })

      return;

    }

    const ItemsData = [...(whistlistUser?.items || [])];


    ItemsData.push({
      course: course_id,
    });

    if (whistlistUser) {
      await updateWhitlist({
        _id: whistlistUser._id,
        user_id: auth.auth._id,
        items: ItemsData
      })
    } else {
      await addWhistlist({
        user_id: auth.auth._id,
        items: ItemsData
      });
    }

  }

  return (
    <main>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bg-light p-4 text-center rounded-3  shadow">
                <h1 className="m-0">Course</h1>
                <div className="d-flex justify-content-center">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <form className="bg-light border p-4 rounded-3 my-4 z-index-9 position-relative">
            <div className="row g-3">
              <div className="col-xl-4">
                <input className="form-control me-1" type="search" w onChange={(e) => { setSearch(e.target.value) }} placeholder="Search..."
                  value={search} />
              </div>
              <div className="col-xl-7">
                <div className="row g-3">
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
                  <div className="col-sm-6 col-md-3 pb-2 pb-md-0">
                    <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm example">
                      <option value>Price level</option>
                      <option>All</option>
                      <option>Free</option>
                      <option>Paid</option>
                    </select>
                  </div>

                </div>
              </div>
              {/* Button */}
              <div className="col-xl-1">
                <button type="button" className="btn btn-primary mb-0 rounded z-index-1 w-100"><i className="fas fa-search" /></button>
              </div>
            </div>
          </form>
          <div className="row mt-3">
            <div className="col-12">
              <div className="row g-4">
                {
                  filterCourse?.slice(0, 8).map((v) => {
                    let whistlistUser = whistlist?.data?.find((v) => v.user_id === auth.auth._id);

                    let existData = whistlistUser?.items?.some((v2) => v2.course === v._id);
                    console.log(existData);

                    return (
                      <div className="col-sm-6 col-lg-4 col-xl-3">
                        <div className="card shadow h-100">
                          <Carousel indicators={false}>
                            {
                              v.course_img.map(v => (
                                <img src={v.url} className="card-img-top" alt="course image"
                                  style={{
                                    width: "100%",
                                    height: "240px",
                                    objectFit: "cover",
                                    borderRadius: "8px"
                                  }} />

                              ))
                            }
                          </Carousel>
                          <div className="card-body pb-0">
                            <div className="d-flex justify-content-between mb-2">
                              <a href="#" className="badge bg-purple bg-opacity-10 text-purple">All level</a>
     <a href="#" className="h6 fw-light mb-0" onClick={() => handlewhistlist(v._id)}><i className={existData ? "fa-solid fa-heart" : "far fa-heart"} style={{ color: '#FF0542', fontSize: '20px' }} /></a>

                            </div>
                            <NavLink to={`/Course_Detail/${v._id}`}>
                              <h5 className="card-title"> {v.name.length > 10 ? v.name.slice(0, 11) + "..." : v.name}</h5>
                              <p className="mb-2 text-truncate-2">{v.description}</p>
                              <ul className="list-inline mb-0">
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                                <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                                <li className="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
                              </ul>
                            </NavLink>
                          </div>
                          <div className="card-footer pt-0 pb-3">
                            <hr />
                            <div className="d-flex justify-content-between">
                              <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />12h 56m</span>
                              <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />15 lectures</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
               </div>
              
              {/* <div className="col-12">
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
              </div> */}
            </div>
            </div>
        </div>
      </section>

     </main>
  );
}

export default CourseDisplay;