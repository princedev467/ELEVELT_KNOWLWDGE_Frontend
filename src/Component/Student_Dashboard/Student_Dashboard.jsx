import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useGetPaymentQuery } from '../../Redux/Api/Payment.Api';
import { useGetCourseQuery } from '../../Redux/Api/Course.Api';
import Carousel from 'react-material-ui-carousel';
import { useGetSectionQuery } from '../../Redux/Api/Section.Api';
import { useGetcontentQuery } from '../../Redux/Api/Content.Api';
import { useGetEnrollmentQuery } from '../../Redux/Api/enrollment.Api';
import { useGetProgressQuery } from '../../Redux/Api/progress.Api';
import CheckIcon from '@mui/icons-material/Check';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import { ThemeContext } from '../../context/theme.context';

function Student_Dashboard(props) {
  const auth = useSelector(state => state.auth);
  console.log(auth);

    const themeData = useContext(ThemeContext);
      console.log(themeData);
    
      let isDark = themeData.theme === 'light'
    
  
  const [totalCourse, setTotalCourse] = useState(0);
  const { data: courseData, isLoading, isError } = useGetCourseQuery(); //get Data
  console.log("course", courseData);

  const { data: payment } = useGetPaymentQuery();
  console.log(payment?.data);


  const { data: enroll } = useGetEnrollmentQuery();
  let PaymentData = payment?.data;

  const userPayment = PaymentData?.filter((v) => v.user_id === auth.auth?._id);
  console.log(userPayment);


  const { data: sectionData } = useGetSectionQuery();
  let section = sectionData?.data

  const enrollmentData = enroll?.data?.find((v) => v.user_id === auth?.auth?._id) || null;
  const { data: content } = useGetcontentQuery();


  const { data: Progress } = useGetProgressQuery();



  const getCourseProgress = (courseId) => {
    const filterSectionData = section?.filter((v) => v?.course === courseId && v.Instructor_id !== null) || [];

    let totalLectures = 0;
    let completedLectures = 0;

    filterSectionData.forEach((s) => {
      const sectionContent = content?.data?.filter((c) => c?.section === s?._id) || [];

      totalLectures += sectionContent.length;

      completedLectures += sectionContent.filter((v) =>
        Progress?.data?.some(
          (p) => p.content_Id === v._id && p.enroll_Id === enrollmentData?._id && p.is_complete === true
        )
      ).length;
    });

    return totalLectures > 0 ? Math.round((completedLectures / totalLectures) * 100) : 0;
  };


  // Add these calculations after your existing variables

  // 1. Total Purchased Courses
  const totalPurchasedCourses = userPayment?.reduce((acc, v) => {
    return acc + (v.purchased_courses?.length || 0);
  }, 0) || 0;

  // 2. Total Completed Lectures (across all courses)
  const totalCompletedLectures = userPayment?.reduce((acc, v4) => {
    return acc + v4.purchased_courses?.reduce((acc2, v) => {
      const paidCourse = courseData?.data?.find((c) => c._id === v.course);
      if (!paidCourse) return acc2;

      const courseSections = section?.filter(
        (s) => s?.course === paidCourse._id && s.Instructor_id !== null
      ) || [];

      const completed = courseSections.reduce((acc3, s) => {
        const sectionContent = content?.data?.filter((c) => c?.section === s?._id) || [];
        return acc3 + sectionContent.filter((c) =>
          Progress?.data?.some(
            (p) => p.content_Id === c._id && p.enroll_Id === enrollmentData?._id && p.is_complete === true
          )
        ).length;
      }, 0);

      return acc2 + completed;
    }, 0);
  }, 0) || 0;

  // 3. Achieved Certificates = Courses with 100% progress
  const achievedCertificates = userPayment?.reduce((acc, v4) => {
    return acc + v4.purchased_courses?.filter((v) => {
      const paidCourse = courseData?.data?.find((c) => c._id === v.course);
      if (!paidCourse) return false;
      return getCourseProgress(paidCourse._id) === 100;
    }).length;
  }, 0) || 0;
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
                      <img className="avatar-img rounded-circle border border-white border-3 shadow" src={auth?.auth?.PFP[0]?.url || "../assets/images/avatar/01.jpg"}
                        alt />
                      <span className="badge bg-success text-white rounded-pill position-absolute top-50 start-100 translate-middle mt-4 mt-md-5 ms-n3 px-md-3">Pro</span>
                    </div>
                  </div>
                  {/* Profile info */}
                  <div className="col d-sm-flex justify-content-between align-items-center">
                    <div>
                      <h1 className="my-1 fs-4">{auth?.auth?.name}</h1>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-3 mb-1 mb-sm-0">
                          <span className="h6 m-1">255</span>
                          <span className="text-body fw-light">points</span>
                        </li>
                        <li className="list-inline-item me-3 mb-1 mb-sm-0">
                          <span className="h6 m-1">{totalPurchasedCourses}</span>
                          <span className="text-body fw-light">Completed courses</span>
                        </li>
                        <li className="list-inline-item me-3 mb-1 mb-sm-0">
                          <span className="h6 m-1">{totalCompletedLectures}</span> 
                          <span className="text-body fw-light">Completed lessons</span>
                        </li>
                      </ul>
                    </div>
                    {/* Button */}
                    
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
                        <NavLink className="list-group-item active" to={'/Student_Dashboard'}><i className="bi bi-ui-checks-grid fa-fw me-2" />Dashboard</NavLink>
                        <NavLink className="list-group-item" to={'/Student_Course_list'} ><i className="bi bi-basket fa-fw me-2" />My Courses</NavLink>
                        <NavLink className="list-group-item " to={'/Student_Payment_Info'}><i className="bi bi-ui-checks-grid fa-fw me-2" />Payment Info</NavLink>

                        <NavLink className="list-group-item" to={'/Wishitlist'}><i className="bi bi-cart-check fa-fw me-2" />Wishlist</NavLink>
                        <NavLink className="list-group-item" to={'/Edit_Profile'}><i className="bi bi-pencil-square fa-fw me-2" />Edit Profile</NavLink>
                        <NavLink className="list-group-item text-danger bg-danger-soft-hover" to={'/'}><i className="fas fa-sign-out-alt fa-fw me-2" />Sign Out</NavLink>
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
              {/* Counter boxes START */}
              <div className="row mb-4">
                {/* Counter item */}
                <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                  <div className="d-flex justify-content-center align-items-center p-4 bg-orange bg-opacity-15 rounded-3">
                    <span className="display-6 lh-1 text-orange mb-0"><i className="fas fa-tv fa-fw" /></span>
                    <div className="ms-4">
                      <div className="d-flex">
                        <h5 className="purecounter mb-0 fw-bold" data-purecounter-start={0} data-purecounter-end={9} data-purecounter-delay={200}>{totalPurchasedCourses}</h5>
                      </div>
                      <p className="mb-0 h6 fw-light">Total Courses</p>
                    </div>
                  </div>
                </div>
                {/* Counter item */}
                <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                  <div className="d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-15 rounded-3">
                    <span className="display-6 lh-1 text-purple mb-0"><i className="fas fa-clipboard-check fa-fw" /></span>
                    <div className="ms-4">
                      <div className="d-flex">
                        <h5 className="purecounter mb-0 fw-bold" data-purecounter-start={0} data-purecounter-end={52} data-purecounter-delay={200}>{totalCompletedLectures}</h5>
                      </div>
                      <p className="mb-0 h6 fw-light">Complete lessons</p>
                    </div>
                  </div>
                </div>
                {/* Counter item */}
                <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                  <div className="d-flex justify-content-center align-items-center p-4 bg-success bg-opacity-10 rounded-3">
                    <span className="display-6 lh-1 text-success mb-0"><i className="fas fa-medal fa-fw" /></span>
                    <div className="ms-4">
                      <div className="d-flex">
                        <h5 className="purecounter mb-0 fw-bold" data-purecounter-start={0} data-purecounter-end={8} data-purecounter-delay={300}>{achievedCertificates}</h5>
                      </div>
                      <p className="mb-0 h6 fw-light">Achieved Certificates</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Counter boxes END */}
              <div className="card border rounded-3">
                {/* Card header START */}
                <div className="card-header border-bottom">
                  <h3 className="mb-0">My Courses List</h3>
                </div>
                {/* Card header END */}
                {/* Card body START */}
                <div className="card-body">

                  {/* Search and Sort */}
                  <div className="row g-3 align-items-center justify-content-between mb-4">
                    <div className="col-md-8">
                      <form className="rounded position-relative">
                        <input className="form-control pe-5 bg-transparent" type="search"
                          placeholder="Search" aria-label="Search" />
                        <button className="btn bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit">
                          <i className="fas fa-search fs-6" />
                        </button>
                      </form>
                    </div>
                    <div className="col-md-3">
                      <select className="form-select border-0 z-index-9 bg-transparent" aria-label="Sort by">
                        <option value="">Sort by</option>
                        <option>Most completed</option>
                        <option>Least completed</option>
                        <option>Newest</option>
                      </select>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="table-responsive border-0">
                    <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                      <thead>
                        <tr>
                          <th scope="col" className="border-0 rounded-start">Course Title</th>
                          <th scope="col" className="border-0">Total Lectures</th>
                          <th scope="col" className="border-0">Completed</th>
                          <th scope="col" className="border-0 rounded-end">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userPayment?.map((v4) =>
                          v4.purchased_courses?.map((v) => {
                            const paidCourse = courseData?.data?.filter((c) => c._id === v.course);

                            return paidCourse?.map((v2) => {
                              const progress = getCourseProgress(v2._id);
                              const isComplete = progress === 100;

                              // Count total and completed lectures for this course
                              const courseSections = section?.filter(
                                (s) => s?.course === v2._id && s.Instructor_id !== null
                              ) || [];
                              const totalLectures = courseSections.reduce((acc, s) => {
                                return acc + (content?.data?.filter((c) => c?.section === s?._id)?.length || 0);
                              }, 0);
                              const completedLectures = Math.round((progress / 100) * totalLectures);

                              return (
                                <tr key={v2._id}>
                                  {/* Course Title + Progress */}
                                  <td>
                                    <div className="d-flex align-items-center gap-3">
                                      {/* Thumbnail */}
                                      <div style={{ width: 72, height: 52, flexShrink: 0 }}>
                                        {v2.course_img?.[0]?.url ? (
                                          <img
                                            src={v2.course_img[0].url}
                                            className="rounded"
                                            alt="course"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                          />
                                        ) : (
                                          <div className="rounded bg-light d-flex align-items-center justify-content-center"
                                            style={{ width: 72, height: 52 }}>
                                            <i className="bi bi-book text-muted" />
                                          </div>
                                        )}
                                      </div>

                                      {/* Name + progress bar */}
                                      <div style={{ minWidth: 0 }}>
                                        <h6 className="mb-2 fw-semibold text-truncate" style={{ maxWidth: 220 }}>
                                          <a href="#" className="text-decoration-none">{v2.name}</a>
                                        </h6>
                                        <div className="d-flex align-items-center gap-2">
                                          <div className="progress flex-grow-1"
                                            style={{ height: 7, minWidth: 120, backgroundColor: '#e9ecef', borderRadius: 99 }}>
                                            <div
                                              className={`progress-bar ${isComplete ? 'bg-success' : 'bg-primary'}`}
                                              role="progressbar"
                                              style={{ width: `${progress}%`, borderRadius: 99 }}
                                              aria-valuenow={progress}
                                              aria-valuemin={0}
                                              aria-valuemax={100}
                                            />
                                          </div>
                                          <small className="fw-bold text-muted" style={{ minWidth: 32 }}>
                                            {progress}%
                                          </small>
                                        </div>
                                      </div>
                                    </div>
                                  </td>

                                  {/* Total Lectures */}
                                  <td><span className={`fw-500 ${isDark ? 'text-white' : ''}`}>{totalLectures}</span></td>

                                  {/* Completed Lectures */}
                                  <td><span className={`fw-500 ${isDark ? 'text-white' : ''}`}>{completedLectures}</span></td>

                                  {/* Actions */}
                                  <td>
                                    {isComplete ? (
                                      <div className="d-flex gap-2 flex-wrap">
                                        <button className="btn btn-sm btn-success disabled" style={{ pointerEvents: 'none' }}>
                                          <i className="bi bi-check me-1" />Complete
                                        </button>
                                        <a href="#" className="btn btn-sm btn-light">
                                          <i className="bi bi-arrow-repeat me-1" />Restart
                                        </a>
                                      </div>
                                    ) : (
                                      <NavLink href="#" className="btn btn-sm btn-primary-soft" to={`/Course_Detail/${v2._id}`}>
                                        <i className="bi bi-play-circle me-1" />Continue
                                      </NavLink>
                                    )}
                                  </td>
                                </tr>
                              );
                            });
                          })
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4">
                    <p className="mb-0 text-center text-sm-start">Showing entries</p>
                    <nav aria-label="navigation">
                      <ul className="pagination pagination-sm pagination-primary-soft mb-0 pb-0">
                        <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-left" /></a></li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-right" /></a></li>
                      </ul>
                    </nav>
                  </div>

                </div>
                {/* Card body START */}
              </div>
              {/* Main content END */}
            </div>{/* Row END */}
          </div>
        </div>
      </section>
      {/* =======================
Page content END */}
    </main>

  );
}

export default Student_Dashboard;