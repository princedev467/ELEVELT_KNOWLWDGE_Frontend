import React from 'react';
import { useGetPaymentQuery } from '../../Redux/Api/Payment.Api';
import { useSelector } from 'react-redux';
import { useGetCourseQuery } from '../../Redux/Api/Course.Api';
import Carousel from 'react-material-ui-carousel';

function Student_Course_list(props) {

  const auth = useSelector(state => state.auth);
  console.log(auth);

  const { data: courseData, isLoading, isError } = useGetCourseQuery(); //get Data
  console.log("course", courseData);

  const { data: payment } = useGetPaymentQuery();
  console.log(payment?.data);

  let PaymentData = payment?.data;

  const userPayment = PaymentData?.find((v) => v.user_id === auth.auth?._id);
  console.log(userPayment);

  return (
    <main>
      {/* =======================
Page Banner START */}
      <section className="pt-0">
        <div className="container-fluid px-0">
          <div className="card bg-blue h-100px h-md-200px rounded-0" style={{ background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover' }}>
          </div>
        </div>
        <div className="container mt-n4">
          <div className="row">
            <div className="col-12">
              <div className="card bg-transparent card-body pb-0 ps-0 mt-2 mt-sm-0">
                <div className="row d-sm-flex justify-sm-content-between mt-2 mt-md-0">
                  {/* Avatar */}
                  <div className="col-auto">
                    <div className="avatar avatar-xxl position-relative mt-n3">
                      <img className="avatar-img rounded-circle border border-white border-3 shadow" src="assets/images/avatar/09.jpg" alt />
                      <span className="badge bg-success text-white rounded-pill position-absolute top-50 start-100 translate-middle mt-4 mt-md-5 ms-n3 px-md-3">Pro</span>
                    </div>
                  </div>
                  {/* Profile info */}
                  <div className="col d-sm-flex justify-content-between align-items-center">
                    <div>
                      <h1 className="my-1 fs-4">Lori Stevens</h1>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-3 mb-1 mb-sm-0">
                          <span className="h6">255</span>
                          <span className="text-body fw-light">points</span>
                        </li>
                        <li className="list-inline-item me-3 mb-1 mb-sm-0">
                          <span className="h6">7</span>
                          <span className="text-body fw-light">Completed courses</span>
                        </li>
                        <li className="list-inline-item me-3 mb-1 mb-sm-0">
                          <span className="h6">52</span>
                          <span className="text-body fw-light">Completed lessons</span>
                        </li>
                      </ul>
                    </div>
                    {/* Button */}
                    <div className="mt-2 mt-sm-0">
                      <a href="student-course-list.html" className="btn btn-outline-primary mb-0">View my courses</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Advanced filter responsive toggler START */}
              {/* Divider */}
              <hr className="d-xl-none" />
              <div className="col-12 col-xl-3 d-flex justify-content-between align-items-center">
                <a className="h6 mb-0 fw-bold d-xl-none" href="#">Menu</a>
                <button className="btn btn-primary d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                  <i className="fas fa-sliders-h" />
                </button>
              </div>
              {/* Advanced filter responsive toggler END */}
            </div>
          </div>
        </div>
      </section>
      {/* =======================
Page Banner END */}
      {/* =======================
Page content START */}
      <section className="pt-0">
        <div className="container">
          <div className="row">
            {/* Right sidebar START */}
            <div className="col-xl-3">
              {/* Responsive offcanvas body START */}
              <nav className="navbar navbar-light navbar-expand-xl mx-0">
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  {/* Offcanvas header */}
                  <div className="offcanvas-header bg-light">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">My profile</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                  </div>
                  {/* Offcanvas body */}
                  <div className="offcanvas-body p-3 p-xl-0">
                    <div className="bg-dark border rounded-3 pb-0 p-3 w-100">
                      {/* Dashboard menu */}
                      <div className="list-group list-group-dark list-group-borderless">
                        <a className="list-group-item" href="student-dashboard.html"><i className="bi bi-ui-checks-grid fa-fw me-2" />Dashboard</a>
                        <a className="list-group-item" href="student-subscription.html"><i className="bi bi-card-checklist fa-fw me-2" />My Subscriptions</a>
                        <a className="list-group-item active" href="student-course-list.html"><i className="bi bi-basket fa-fw me-2" />My Courses</a>
                        <a className="list-group-item" href="student-payment-info.html"><i className="bi bi-credit-card-2-front fa-fw me-2" />Payment info</a>
                        <a className="list-group-item" href="student-bookmark.html"><i className="bi bi-cart-check fa-fw me-2" />Wishlist</a>
                        <a className="list-group-item" href="instructor-edit-profile.html"><i className="bi bi-pencil-square fa-fw me-2" />Edit Profile</a>
                        <a className="list-group-item" href="instructor-setting.html"><i className="bi bi-gear fa-fw me-2" />Settings</a>
                        <a className="list-group-item" href="instructor-delete-account.html"><i className="bi bi-trash fa-fw me-2" />Delete Profile</a>
                        <a className="list-group-item text-danger bg-danger-soft-hover" href="#"><i className="fas fa-sign-out-alt fa-fw me-2" />Sign Out</a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              {/* Responsive offcanvas body END */}
            </div>
            {/* Right sidebar END */}
            {/* Main content START */}
            <div className="col-xl-9">
              <div className="card border rounded-3">
                {/* Card header START */}
                <div className="card-header border-bottom">
                  <h3 className="mb-0">My Courses List</h3>
                </div>
                {/* Card header END */}
                {/* Card body START */}
                <div className="card-body">
                  {/* Search and select START */}
                  <div className="row g-3 align-items-center justify-content-between mb-4">
                    {/* Content */}
                    <div className="col-md-8">
                      <form className="rounded position-relative">
                        <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit"><i className="fas fa-search fs-6 " /></button>
                      </form>
                    </div>
                    {/* Select option */}
                    <div className="col-md-3">
                      {/* Short by filter */}
                      <form>
                        <select className="form-select js-choice border-0 z-index-9 bg-transparent" aria-label=".form-select-sm">
                          <option value>Sort by</option>
                          <option>Free</option>
                          <option>Newest</option>
                          <option>Most popular</option>
                          <option>Most Viewed</option>
                        </select>
                      </form>
                    </div>
                  </div>
                  {/* Search and select END */}
                  {/* Course list table START */}
                  <div className="table-responsive border-0">
                    <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                      {/* Table head */}
                      <thead>
                        <tr>
                          <th scope="col" className="border-0 rounded-start">Course Title</th>
                          <th scope="col" className="border-0">Total Lectures</th>
                          <th scope="col" className="border-0">Completed Lecture</th>
                          <th scope="col" className="border-0 rounded-end">Action</th>
                        </tr>
                      </thead>
                      {/* Table body START */}
                      <tbody>
                        {/* Table item */}

                        {/* Table item */}

                        {/* Table item */}
                        {
                          userPayment?.purchased_courses?.map((v) => {

                            console.log(v);

                            let paidCourse = courseData?.data?.filter((c) => c._id === v.course);
                            console.log(paidCourse);

                          return (
                                                    <tr>
                        
                                                      <td>
                                                        {
                                                          paidCourse?.map((v2) => {
                        
                                                            return (
                                                              <div className="d-lg-flex align-items-center">
                                                                <div className="w-100px w-md-80px mb-2 mb-md-0">
                        
                                                                  {
                                                                    <Carousel indicators={false}>
                                                                      {
                                                                        v2.course_img.map(v3 => (
                                                                          <img src={v3.url} className="rounded" alt="course image" />
                        
                                                                        ))
                                                                      }
                        
                                                                    </Carousel>
                                                                  }
                                                                </div>
                        
                                                                {/* Title */}
                                                                <h6 className="mb-0 ms-lg-3 mt-2 mt-lg-0 ">
                                                                  <a href="#">{v2.name}</a>
                                                                </h6>
                                                              </div>
                                                            )
                                                          })
                                                        }
                                                      </td>
                                                      {/* Amount item */}
                                                      <td>
                                                        <h5 className="text-success mb-0"></h5>
                                                      </td>

                                                       <td>
                                                        <h5 className="text-success mb-0"></h5>
                                                      </td>
                                                      {/* Action item */}
                                                      <td>
                                                        <a href="#" className="btn btn-sm btn-success-soft px-2 me-1 mb-1 mb-md-0"><i className="far fa-fw fa-edit" /></a>
                                                        <button className="btn btn-sm btn-danger-soft px-2 mb-0" onClick={() => handledelete(v._id)}><i className="fas fa-fw fa-times" /></button>
                                                      </td>
                                                    </tr>
                                                  )
                          })
                        }
                      {/* Table item */}

                    </tbody>
                    {/* Table body END */}
                  </table>
                </div>
                {/* Course list table END */}
                {/* Pagination START */}
                <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
                  {/* Content */}
                  <p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
                  {/* Pagination */}
                  <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                    <ul className="pagination pagination-sm pagination-primary-soft mb-0 pb-0">
                      <li className="page-item mb-0"><a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-left" /></a></li>
                      <li className="page-item mb-0"><a className="page-link" href="#">1</a></li>
                      <li className="page-item mb-0 active"><a className="page-link" href="#">2</a></li>
                      <li className="page-item mb-0"><a className="page-link" href="#">3</a></li>
                      <li className="page-item mb-0"><a className="page-link" href="#"><i className="fas fa-angle-right" /></a></li>
                    </ul>
                  </nav>
                </div>
                {/* Pagination END */}
              </div>
              {/* Card body START */}
            </div>
          </div>
          {/* Main content END */}
        </div> {/* Row END */}
      </div>
    </section>
      {/* =======================
Page content END */}
    </main >

  );
}

export default Student_Course_list;