import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCourseQuery } from '../../Redux/Api/Course.Api';
import Carousel from 'react-material-ui-carousel';

function Instructor_Create_Course(props) {

  const{id}=useParams();
  console.log(id);
  
  const { data } = useGetCourseQuery();
  console.log(data?.data);
  
  let courseData=data?.data

 let  InstructorCourse=courseData?.filter((v)=>v.Instructor_id===id);
 console.log(InstructorCourse);
 
    return (
        <main>
  {/* =======================
Main Banner START */}
  <section className="pt-0">
    {/* Main banner background image */}
    <div className="container-fluid px-0">
      <div className="bg-blue h-100px h-md-200px rounded-0" style={{background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover'}}>
      </div>
    </div>
    <div className="container mt-n4">
      <div className="row">
        {/* Profile banner START */}
        <div className="col-12">
          <div className="card bg-transparent card-body p-0">
            <div className="row d-flex justify-content-between">
              {/* Avatar */}
              <div className="col-auto mt-4 mt-md-0">
                <div className="avatar avatar-xxl mt-n3">
                  <img className="avatar-img rounded-circle border border-white border-3 shadow" src="assets/images/avatar/01.jpg" alt />
                </div>
              </div>
              {/* Profile info */}
              <div className="col d-md-flex justify-content-between align-items-center mt-4">
                <div>
                  <h1 className="my-1 fs-4">Lori Stevens <i className="bi bi-patch-check-fill text-info small" /></h1>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-2" />4.5/5.0</li>
                    <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0"><i className="fas fa-user-graduate text-orange me-2" />12k Enrolled Students</li>
                    <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0"><i className="fas fa-book text-purple me-2" />25 Courses</li>
                  </ul>
                </div>
                {/* Button */}
                <div className="d-flex align-items-center mt-2 mt-md-0">
                  <a href="instructor-create-course.html" className="btn btn-success mb-0">Create a course</a>
                </div>
              </div>
            </div>
          </div>
          {/* Profile banner END */}
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
Main Banner END */}
  {/* =======================
Inner part START */}
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
                    <a className="list-group-item" href="instructor-dashboard.html"><i className="bi bi-ui-checks-grid fa-fw me-2" />Dashboard</a>
                    <a className="list-group-item active" href="instructor-manage-course.html"><i className="bi bi-basket fa-fw me-2" />My Courses</a>
                    <a className="list-group-item" href="instructor-earning.html"><i className="bi bi-graph-up fa-fw me-2" />Earnings</a>
                    <a className="list-group-item" href="instructor-studentlist.html"><i className="bi bi-people fa-fw me-2" />Students</a>
                    <a className="list-group-item" href="instructor-order.html"><i className="bi bi-folder-check fa-fw me-2" />Orders</a>
                    <a className="list-group-item" href="instructor-review.html"><i className="bi bi-star fa-fw me-2" />Reviews</a>
                    <a className="list-group-item" href="instructor-edit-profile.html"><i className="bi bi-pencil-square fa-fw me-2" />Edit Profile</a>
                    <a className="list-group-item" href="instructor-payout.html"><i className="bi bi-wallet2 fa-fw me-2" />Payouts</a>
                    <a className="list-group-item" href="instructor-setting.html"><i className="bi bi-gear fa-fw me-2" />Settings</a>
                    <a className="list-group-item" href="instructor-delete-account.html"><i className="bi bi-trash fa-fw me-2" />Delete Profile</a>
                    <a className="list-group-item text-danger bg-danger-soft-hover" href="sign-in.html"><i className="fas fa-sign-out-alt fa-fw me-2" />Sign Out</a>
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
          {/* Card START */}
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
                {/* Search */}
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
              <div className="table-responsive-lg border-0">
                <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                  {/* Table head */}
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 rounded-start">Course Title</th>
                      <th scope="col" className="border-0">Enrolled</th>
                      <th scope="col" className="border-0">Status</th>
                      <th scope="col" className="border-0">Price</th>
                      <th scope="col" className="border-0 rounded-end">Action</th>
                    </tr>
                  </thead>
                  {/* Table body START */}
                  <tbody>
                    {/* Table item */}
                  { InstructorCourse?.map((v)=>(
                     <tr>
                      {/* Course item */}

                      
                      <td>
                        <div className="d-flex align-items-center">
                          {/* Image */}
                          <div className="w-100px">
                           <Carousel indicators={false}  navButtonsAlwaysInvisible={true}>
                            {
                               v.course_img.map(v1 => (  <img src={v1.url} style={{width:'70px',height:'70px',objectFit:'cover'}} alt />))
                            }
                          
                            </Carousel>
                          </div>
                          <div className="mb-0">
                            {/* Title */}
                            <h6><a href="#">{v.name}</a></h6>
                            {/* Info */}
                            <div className="d-sm-flex">
                              <p className="h6 fw-light mb-0 small me-3"><i className="fas fa-table text-orange me-2" />18 lectures</p>
                              <p className="h6 fw-light mb-0 small"><i className="fas fa-check-circle text-success me-2" />6 Completed</p>
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* Enrolled item */}
                      <td className="text-center text-sm-start">125</td>
                      {/* Status item */}
                      <td>
                        <div className="badge bg-success bg-opacity-10 text-success">Live</div>
                      </td>
                      {/* Price item */}
                      <td>{v.price}</td>
                      {/* Action item */}
                      <td>
                        <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i className="far fa-fw fa-edit" /></a>
                        <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times" /></button>
                      </td>
                    </tr>))}
                    
                    {/* Table item */}
                    <tr>
                      {/* Course item */}
                      <td>
                        <div className="d-flex align-items-center">
                          {/* Image */}
                          <div className="w-100px">
                            <img src="assets/images/courses/4by3/11.jpg" className="rounded" alt />
                          </div>
                          <div className="mb-0 ms-2">
                            {/* Title */}
                            <h6><a href="#">Build Responsive Websites with HTML</a></h6>
                            {/* Info */}
                            <div className="d-sm-flex">
                              <p className="h6 fw-light mb-0 small me-3"><i className="fas fa-table text-orange me-2" />42 lectures</p>
                              <p className="h6 fw-light mb-0 small"><i className="fas fa-check-circle text-success me-2" />25 Completed</p>
                            </div>		
                          </div>
                        </div>
                      </td>
                      {/* Enrolled item */}
                      <td className="text-center text-sm-start">345</td>
                      {/* Status item */}
                      <td>
                        <div className="badge bg-success bg-opacity-10 text-success">Live</div>
                      </td>
                      {/* Price item */}
                      <td>$222</td>
                      {/* Action item */}
                      <td>
                        <a href="#" className="btn btn-sm btn-success-soft btn-round me-1 mb-0"><i className="far fa-fw fa-edit" /></a>
                        <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times" /></button>
                      </td>
                    </tr>
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
          {/* Card END */}
        </div>
        {/* Main content END */}
      </div>{/* Row END */}
    </div>
  </section>
  {/* =======================
Inner part END */}
</main>

    );
}

export default Instructor_Create_Course;