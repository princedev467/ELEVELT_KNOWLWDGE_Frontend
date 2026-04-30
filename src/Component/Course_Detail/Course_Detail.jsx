import React, { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavLink, useParams } from 'react-router-dom';
import { useGetCourseQuery } from '../../Redux/Api/Course.Api';
import Carousel from 'react-material-ui-carousel';
import { ThemeContext } from '../../context/theme.context';
import { useGetSectionQuery } from '../../Redux/Api/Section.Api';
import { useGetquizQuery } from '../../Redux/Api/Quiz.Api';
import { useGetcontentQuery } from '../../Redux/Api/Content.Api';

function Course_Detail(props) {
  const themeData = useContext(ThemeContext);
  console.log(themeData);


  const [quizid, setQuizid] = useState(null)

  console.log(quizid);

  let isDark = themeData.theme === 'light'
  const { id } = useParams();
  console.log("id", id);

  // course
  const { data: courseData, isLoading, isError } = useGetCourseQuery(); //get Data
  console.log("course", courseData);

  // Section
  const { data: sectionData } = useGetSectionQuery(); //get Data
  console.log("Section", sectionData);

  //quiz
  const { data: quizData } = useGetquizQuery(); //get Data
  console.log("quizData", quizData);

  const { data: content } = useGetcontentQuery()
  console.log(content?.data);

  //course
  let course = courseData?.data
  //section
  let section = sectionData?.data

  let quiz = quizData?.data
  console.log(quiz);


  let filterCourseData


  let filterSectionData
  if (id) {
    filterCourseData = course?.filter((v) => v._id === id);
    filterSectionData = section?.filter((v) => v.course === id)

  } else {
    filterCourseData = course
    filterSectionData = section
  }


  const handleNevigate = (section_id) => {
    console.log(section_id);


    let filterQuizData = quiz?.find((v) => v?.section === section_id)

    return filterQuizData?._id;


  }

  // console.log(filterQuizData);




  console.log("filterSectionData", filterSectionData);

  return (
    <main>
      {/* =======================
Page intro START */}
      <section className="bg-light py-0 py-sm-5">
        <div className="container" >
          <div className="row py-5 ">
            {filterCourseData?.map((v) => (
              <div key={v._id} style={{ display: 'flex', justifyContent: 'space-between' }} className='row g-4'>
                <div className="position-relative col-5  rounded-3 ">

                  {/* Image */}
                  <Carousel>
                    {
                      v.course_img.map(v => (
                        <img src={v.url} className="card-img-top" alt="course image"
                          style={{
                            width: "100%",
                            height: "50vh",
                            // objectFit: "contain",
                            borderRadius: "8px"
                          }} />

                      ))
                    }

                  </Carousel>

                </div>
                <div className="col-6">
                  {/* Badge */}
                  <h6 className="mb-3 font-base bg-primary text-white py-2 px-4 rounded-2 d-inline-block">{v.name}</h6>
                  {/* Title */}
                  <h1 className={`${isDark ? 'text-white' : ''}`}>{v.description}</h1>
                  <p>Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private
                    blushes removed an in equally totally if. Delivered dejection necessary objection do Mr
                    prevailed. Mr feeling does chiefly cordial in do.</p>
                  {/* Content */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-2" />4.5/5.0</li>
                    <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="fas fa-user-graduate text-orange me-2" />12k Enrolled</li>
                    <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="fas fa-signal text-success me-2" />All levels</li>
                    <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="bi bi-patch-exclamation-fill text-danger me-2" />Last updated 09/2021</li>
                    <li className="list-inline-item h6 mb-0"><i className="fas fa-globe text-info me-2" />English</li>
                  </ul>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </section>
      {/* =======================
Page intro END */}
      {/* =======================
Page content START */}
      <section className="pb-0 py-lg-5">
        <div className="container">
          <div className="row">
            {/* Main content START */}
            <div className="col-lg-8">
              <div className="bg-body shadow rounded-2 p-4">
                {/* Tabs START */}
                <ul className="nav nav-pills nav-tabs-line pt-0" id="course-pills-tab" role="tablist">
                  {/* Tab item */}
                  <li className="nav-item me-2 me-sm-4" role="presentation">
                    <button className="nav-link mb-2 mb-md-0 active" id="course-pills-tab-1" data-bs-toggle="pill" data-bs-target="#course-pills-1" type="button" role="tab" aria-controls="course-pills-1" aria-selected="true">Overview</button>
                  </li>
                  {/* Tab item */}
                  <li className="nav-item me-2 me-sm-4" role="presentation">
                    <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-2" data-bs-toggle="pill" data-bs-target="#course-pills-2" type="button" role="tab" aria-controls="course-pills-2" aria-selected="false">Section</button>
                  </li>
                  {/* Tab item */}
                  <li className="nav-item me-2 me-sm-4" role="presentation">
                    <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-3" data-bs-toggle="pill" data-bs-target="#course-pills-3" type="button" role="tab" aria-controls="course-pills-3" aria-selected="false">Instructor</button>
                  </li>
                  {/* Tab item */}
                  <li className="nav-item me-2 me-sm-4" role="presentation">
                    <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-4" data-bs-toggle="pill" data-bs-target="#course-pills-4" type="button" role="tab" aria-controls="course-pills-4" aria-selected="false">Reviews</button>
                  </li>
                  {/* Tab item */}
                  <li className="nav-item me-2 me-sm-4" role="presentation">
                    <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-5" data-bs-toggle="pill" data-bs-target="#course-pills-5" type="button" role="tab" aria-controls="course-pills-5" aria-selected="false">FAQs </button>
                  </li>
                </ul>
                <hr />
                {/* Tabs END */}
                {/* Tab contents START */}
                <div className="tab-content pt-2" id="course-pills-tabContent">
                  {/* Content START */}
                  <div className="tab-pane fade show active" id="course-pills-1" role="tabpanel" aria-labelledby="course-pills-tab-1">
                    {/* Course detail START */}
                    <h5 className="mb-3">Course Description</h5>
                    <p className="mb-3">Welcome to the <strong> Digital Marketing Ultimate Course Bundle -
                      12 Courses in 1 (Over 36 hours of content)</strong></p>
                    <p className="mb-3">In this practical hands-on training, you’re going to learn to become
                      a digital marketing expert with this <strong> ultimate course bundle that
                        includes 12 digital marketing courses in 1!</strong></p>
                    <p className="mb-3">If you wish to find out the skills that should be covered in a basic
                      digital marketing course syllabus in India or anywhere around the world, then
                      reading this blog will help. Before we delve into the advanced <strong><a href="#" className="text-reset text-decoration-underline">digital marketing
                        course</a></strong> syllabus, let’s look at the scope of digital
                      marketing and what the future holds.</p>
                    <p className="mb-0">We focus a great deal on the understanding of behavioral psychology
                      and influence triggers which are crucial for becoming a well rounded Digital
                      Marketer. We understand that theory is important to build a solid foundation, we
                      understand that theory alone isn’t going to get the job done so that’s why this
                      course is packed with practical hands-on examples that you can follow step by
                      step.</p>
                    {/* List content */}
                    <h5 className="mt-4">What you’ll learn</h5>
                    <ul className="list-group list-group-borderless mb-3">
                      <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Digital marketing
                        course introduction</li>
                      <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Customer Life cycle
                      </li>
                      <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />What is Search engine
                        optimization(SEO)</li>
                      <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Facebook ADS</li>
                      <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Facebook Messenger
                        Chatbot</li>
                      <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Search engine
                        optimization tools</li>
                      <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Why SEO</li>
                      <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />URL Structure</li>
                      <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Featured Snippet</li>
                      <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />SEO tips and tricks
                      </li>
                      <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Google tag manager
                      </li>
                    </ul>
                    <p className="mb-0">As it so contrasted oh estimating instrument. Size like body someone
                      had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may
                      admit daughters offending her ask own. Praise effect wishes change way and any
                      wanted. Lively use looked latter regard had. Do he it part more last in. </p>
                    {/* Course detail END */}
                  </div>
                  {/* Content END */}
                  {/* Content START */}
                  <div className="tab-pane fade" id="course-pills-2" role="tabpanel" aria-labelledby="course-pills-tab-2">
                    {/* Course accordion START */}
                    <div className="accordion accordion-icon accordion-bg-light" id="accordionExample2">
                      {/* Item */}
                      {

                        filterSectionData?.map((v, i) => {

                          let contentFilter = content?.data?.filter((c) => c.section === v._id);
                          console.log(contentFilter);

                          return (
                            <div className="accordion-item mb-3">
                              {/*  */}

                              <h6 className="accordion-header font-base" id={"heading-" + i}>

                                <button className="accordion-button fw-bold rounded d-sm-flex d-inline-block collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-` + i} aria-expanded="true" aria-controls={`collapse-` + i}>
                                  {v.name}
                                  <span className="small ms-0 ms-sm-2">(3 Lectures)</span>
                                </button>

                              </h6>

                              <div id={"collapse-" + i} className="accordion-collapse collapse show" aria-labelledby={"heading-" + i} data-bs-parent="#accordionExample2">
                                <div className="accordion-body mt-3">
                                  {/* Course lecture */}
                                  {contentFilter?.map((v2) => (
                                    <NavLink to={`/Course_Video_Player/${v2._id}`} key={v2._id}>
                                      <div className="d-flex justify-content-between align-items-center">
                                        <div className="position-relative d-flex align-items-center">
                                          <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                            <i className="fas fa-play me-0" />
                                          </a>

                                          <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light">
                                            {v2.name}
                                          </span>
                                        </div>
                                      </div>
                                      <hr />
                                    </NavLink>
                                  ))}
                                  {/* <hr /> */}
                                  {/* Divider */}
                                  {/* Course lecture */}
                                  {/* <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                  What is Digital Marketing What is Digital
                                  Marketing</span>
                              </div>
                              <p className="mb-0 text-truncate">15m 10s</p>
                            </div> */}
                                  {/* <hr /> Divider */}
                                  {/* Course lecture */
                                  }
                                  <NavLink to={`/quiz/${v._id}`}>
                                    <div className="d-flex justify-content-between align-items-center" onClick={() => handleNevigate(v._id)}>
                                      <div className="position-relative d-flex align-items-center">
                                        <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                          <i className="fas fa-play me-0" />
                                        </a>
                                        <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Quiz</span>
                                      </div>
                                      {/* <p className="mb-0">18m 10s</p> */}
                                    </div>
                                  </NavLink>
                                </div>
                              </div>
                            </div>
                          )

                        }

                        )
                      }
                      {/* Item */}
                      {/* <div className="accordion-item mb-3">
                        <h6 className="accordion-header font-base" id="heading-2">
                          <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                            Customer Life cycle
                            <span className="small ms-0 ms-sm-2">(4 Lectures)</span>
                          </button>
                        </h6>
                        <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordionExample2">
                          Accordion body START
                          <div className="accordion-body mt-3">
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">What
                                  is Digital Marketing</span>
                              </div>
                              <p className="mb-0">11m 20s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">15
                                  Tips for Writing Magnetic Headlines</span>
                              </div>
                              <p className="mb-0 text-truncate">25m 20s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">How
                                  to Write Like Your Customers Talk</span>
                              </div>
                              <p className="mb-0">11m 30s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <div>
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                </div>
                                <div className="row g-sm-0 align-items-center">
                                  <div className="col-sm-6">
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">How
                                      to Flip Features Into Benefits</span>
                                  </div>
                                  <div className="col-sm-6">
                                    <span className="badge bg-orange text-white ms-2 ms-md-0"><i className="fas fa-lock fa-fw me-1" />Premium</span>
                                  </div>
                                </div>
                              </div>
                              <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">
                                35m 30s</p>
                            </div>
                          </div>
                          Accordion body END
                        </div>
                      </div> */}
                      {/* Item */}
                      {/* <div className="accordion-item mb-3">
                        <h6 className="accordion-header font-base" id="heading-5">
                          <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
                            What is Search Engine Optimization(SEO)
                            <span className="small ms-0 ms-sm-2">(10 Lectures)</span>
                          </button>
                        </h6>
                        <div id="collapse-5" className="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#accordionExample2">
                          Accordion body START
                          <div className="accordion-body mt-3">
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Introduction</span>
                              </div>
                              <p className="mb-0">1m 10s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Overview
                                  of SEO</span>
                              </div>
                              <p className="mb-0 text-truncate">11m 03s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">How
                                  to SEO Optimise Your Homepage</span>
                              </div>
                              <p className="mb-0">15m 00s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">How
                                  to SEO Optimise Your Homepage</span>
                              </div>
                              <p className="mb-0">15m 00s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">How
                                  to Write Title Tags Search Engines Love</span>
                              </div>
                              <p className="mb-0">25m 30s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">SEO
                                  Keyword Planning</span>
                              </div>
                              <p className="mb-0">18m 10s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">eCommerce
                                  SEO</span>
                              </div>
                              <p className="mb-0">28m 10s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Internal
                                  and External Links</span>
                              </div>
                              <p className="mb-0">45m 10s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Mobile
                                  SEO</span>
                              </div>
                              <p className="mb-0">8m 10s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Off-page
                                  SEO</span>
                              </div>
                              <p className="mb-0">18m 10s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Measuring
                                  SEO Effectiveness</span>
                              </div>
                              <p className="mb-0">35m 10s</p>
                            </div>
                          </div>
                          Accordion body END
                        </div>
                      </div> */}
                      {/* Item */}
                      {/* <div className="accordion-item mb-3">
                        <h6 className="accordion-header font-base" id="heading-6">
                          <button className="accordion-button fw-bold collapsed rounded d-block d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
                            Facebook ADS
                            <span className="small ms-0 ms-sm-2">(3 Lectures)</span>
                          </button>
                        </h6>
                        <div id="collapse-6" className="accordion-collapse collapse" aria-labelledby="heading-6" data-bs-parent="#accordionExample2">
                          Accordion body START
                          <div className="accordion-body mt-3">
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Introduction</span>
                              </div>
                              <p className="mb-0">1m 20s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Creating
                                  Facebook Pages</span>
                              </div>
                              <p className="mb-0 text-truncate">25m 20s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Facebook
                                  Page Custom URL</span>
                              </div>
                              <p className="mb-0">11m 30s</p>
                            </div>
                          </div>
                          Accordion body END
                        </div>
                      </div> */}
                      {/* Item */}
                      {/* <div className="accordion-item mb-3">
                        <h6 className="accordion-header font-base" id="heading-7">
                          <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">
                            YouTube Marketing
                            <span className="small ms-0 ms-sm-2">(5 Lectures)</span>
                          </button>
                        </h6>
                        <div id="collapse-7" className="accordion-collapse collapse" aria-labelledby="heading-7" data-bs-parent="#accordionExample2">
                          Accordion body START
                          <div className="accordion-body mt-3">
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Video
                                  Flow</span>
                              </div>
                              <p className="mb-0">25m 20s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Webmaster
                                  Tool</span>
                              </div>
                              <p className="mb-0 text-truncate">15m 20s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Featured
                                  Contents on Channel</span>
                              </div>
                              <p className="mb-0">32m 20s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <div>
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                </div>
                                <div className="row g-sm-0 align-items-center">
                                  <div className="col-sm-6">
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">Managing
                                      Comments</span>
                                  </div>
                                  <div className="col-sm-6">
                                    <span className="badge bg-orange text-white ms-2 ms-md-0"><i className="fas fa-lock fa-fw me-1" />Premium</span>
                                  </div>
                                </div>
                              </div>
                              <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">
                                20m 20s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <div>
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                </div>
                                <div className="row g-sm-0 align-items-center">
                                  <div className="col-sm-6">
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">Channel
                                      Analytics</span>
                                  </div>
                                  <div className="col-sm-6">
                                    <span className="badge bg-orange text-white ms-2 ms-md-0"><i className="fas fa-lock fa-fw me-1" />Premium</span>
                                  </div>
                                </div>
                              </div>
                              <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">
                                18m 20s</p>
                            </div>
                          </div>
                          Accordion body END
                        </div>
                      </div> */}
                      {/* Item */}
                      {/* <div className="accordion-item mb-3">
                        <h6 className="accordion-header font-base" id="heading-8">
                          <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-8" aria-expanded="false" aria-controls="collapse-8">
                            Why SEO
                            <span className="small ms-0 ms-sm-2">(8 Lectures)</span>
                          </button>
                        </h6>
                        <div id="collapse-8" className="accordion-collapse collapse" aria-labelledby="heading-8" data-bs-parent="#accordionExample2">
                          Accordion body START
                          <div className="accordion-body mt-3">
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Understanding
                                  SEO</span>
                              </div>
                              <p className="mb-0">20m 20s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">On-Page
                                  SEO</span>
                              </div>
                              <p className="mb-0 text-truncate">15m 20s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Local
                                  SEO</span>
                              </div>
                              <p className="mb-0">16m 20s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Measuring
                                  SEO Effectiveness</span>
                              </div>
                              <p className="mb-0">12m 20s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <div>
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                </div>
                                <div className="row g-sm-0 align-items-center">
                                  <div className="col-sm-6">
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">Keywords
                                      in Blog and Articles</span>
                                  </div>
                                  <div className="col-sm-6">
                                    <span className="badge bg-orange text-white ms-2 ms-md-0"><i className="fas fa-lock fa-fw me-1" />Premium</span>
                                  </div>
                                </div>
                              </div>
                              <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">
                                15m 20s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <div>
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                </div>
                                <div className="row g-sm-0 align-items-center">
                                  <div className="col-sm-6">
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px">SEO
                                      Keyword Planning</span>
                                  </div>
                                  <div className="col-sm-6">
                                    <span className="badge bg-orange text-white ms-2 ms-md-0"><i className="fas fa-lock fa-fw me-1" />Premium</span>
                                  </div>
                                </div>
                              </div>
                              <p className="mb-0 d-inline-block text-truncate w-70px w-sm-60px">
                                36m 12s</p>
                            </div>
                          </div>
                          Accordion body END
                        </div>
                      </div> */}
                      {/* Item */}
                      {/* <div className="accordion-item mb-3">
                        <h6 className="accordion-header font-base" id="heading-9">
                          <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-9" aria-expanded="false" aria-controls="collapse-9">
                            Google tag manager
                            <span className="small ms-0 ms-sm-2">(4 Lectures)</span>
                          </button>
                        </h6>
                        <div id="collapse-9" className="accordion-collapse collapse" aria-labelledby="heading-9" data-bs-parent="#accordionExample2">
                          Accordion body START
                          <div className="accordion-body mt-3">
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">G+
                                  Pages Ranks Higher</span>
                              </div>
                              <p className="mb-0">13m 20s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Adding
                                  Contact Links</span>
                              </div>
                              <p className="mb-0 text-truncate">7m 20s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Google
                                  Hangouts</span>
                              </div>
                              <p className="mb-0">12m 20s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">
                                  Google Local Business</span>
                              </div>
                              <p className="mb-0 text-truncate">7m 20s</p>
                            </div>
                          </div>
                          Accordion body END
                        </div>
                      </div> */}
                      {/* Item */}
                      {/* <div className="accordion-item mb-0">
                        <h6 className="accordion-header font-base" id="heading-10">
                          <button className="accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-10" aria-expanded="false" aria-controls="collapse-10">
                            Integration with Website
                            <span className="small ms-0 ms-sm-2">(3 Lectures)</span>
                          </button>
                        </h6>
                        <div id="collapse-10" className="accordion-collapse collapse" aria-labelledby="heading-10" data-bs-parent="#accordionExample2">
                          Accordion body START
                          <div className="accordion-body mt-3">
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Creating
                                  LinkedIn Account</span>
                              </div>
                              <p className="mb-0 text-truncate">13m 20s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">Advance
                                  Searching</span>
                              </div>
                              <p className="mb-0">31m 20s</p>
                            </div>
                            <hr /> Divider
                            Course lecture
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="position-relative d-flex align-items-center">
                                <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                  <i className="fas fa-play me-0" />
                                </a>
                                <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px w-md-400px">LinkedIn
                                  Mobile App</span>
                              </div>
                              <p className="mb-0 text-truncate">25m 20s</p>
                            </div>
                          </div>
                          Accordion body END
                        </div>
                      </div> */}
                    </div>
                    {/* Course accordion END */}
                  </div>
                  {/* Content END */}
                  {/* Content START */}
                  <div className="tab-pane fade" id="course-pills-3" role="tabpanel" aria-labelledby="course-pills-tab-3">
                    {/* Card START */}
                    <div className="card mb-0 mb-md-4">
                      <div className="row g-0 align-items-center">
                        <div className="col-md-5">
                          {/* Image */}
                          <img src="assets/images/instructor/01.jpg" className="img-fluid rounded-3" alt="instructor-image" />
                        </div>
                        <div className="col-md-7">
                          {/* Card body */}
                          <div className="card-body">
                            {/* Title */}
                            <h3 className="card-title mb-0">Louis Ferguson</h3>
                            <p className="mb-2">Instructor of Marketing</p>
                            {/* Social button */}
                            <ul className="list-inline mb-3">
                              <li className="list-inline-item me-3">
                                <a href="#" className="fs-5 text-twitter"><i className="fab fa-twitter-square" /></a>
                              </li>
                              <li className="list-inline-item me-3">
                                <a href="#" className="fs-5 text-instagram"><i className="fab fa-instagram-square" /></a>
                              </li>
                              <li className="list-inline-item me-3">
                                <a href="#" className="fs-5 text-facebook"><i className="fab fa-facebook-square" /></a>
                              </li>
                              <li className="list-inline-item me-3">
                                <a href="#" className="fs-5 text-linkedin"><i className="fab fa-linkedin" /></a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#" className="fs-5 text-youtube"><i className="fab fa-youtube-square" /></a>
                              </li>
                            </ul>
                            {/* Info */}
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <div className="d-flex align-items-center me-3 mb-2">
                                  <span className="icon-md bg-orange bg-opacity-10 text-orange rounded-circle"><i className="fas fa-user-graduate" /></span>
                                  <span className="h6 fw-light mb-0 ms-2">9.1k</span>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div className="d-flex align-items-center me-3 mb-2">
                                  <span className="icon-md bg-warning bg-opacity-15 text-warning rounded-circle"><i className="fas fa-star" /></span>
                                  <span className="h6 fw-light mb-0 ms-2">4.5</span>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div className="d-flex align-items-center me-3 mb-2">
                                  <span className="icon-md bg-danger bg-opacity-10 text-danger rounded-circle"><i className="fas fa-play" /></span>
                                  <span className="h6 fw-light mb-0 ms-2">29 Courses</span>
                                </div>
                              </li>
                              <li className="list-inline-item">
                                <div className="d-flex align-items-center me-3 mb-2">
                                  <span className="icon-md bg-info bg-opacity-10 text-info rounded-circle"><i className="fas fa-comment-dots" /></span>
                                  <span className="h6 fw-light mb-0 ms-2">205</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card END */}
                    {/* Instructor info */}
                    <h5 className="mb-3">About Instructor</h5>
                    <p className="mb-3">Fulfilled direction use continual set him propriety continued. Saw
                      met applauded favorite deficient engrossed concealed and her. Concluded boy
                      perpetual old supposing. Farther related bed and passage comfort civilly.
                      Dashboards see frankness objection abilities. As hastened oh produced prospect
                      formerly up am. Placing forming nay looking old married few has. Margaret
                      disposed of add screened rendered six say his striking confined. </p>
                    <p className="mb-3">As it so contrasted oh estimating instrument. Size like body someone
                      had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may
                      admit daughters offending her ask own. Praise effect wishes change way and any
                      wanted.</p>
                    {/* Email address */}
                    <div className="col-12">
                      <ul className="list-group list-group-borderless mb-0">
                        <li className="list-group-item pb-0">Mail ID:<a href="#" className="ms-2">hello@email.com</a></li>
                        <li className="list-group-item pb-0">Web:<a href="#" className="ms-2">https://eduport.com</a></li>
                      </ul>
                    </div>
                  </div>
                  {/* Content END */}
                  {/* Content START */}
                  <div className="tab-pane fade" id="course-pills-4" role="tabpanel" aria-labelledby="course-pills-tab-4">
                    {/* Review START */}
                    <div className="row mb-4">
                      <h5 className="mb-4">Our Student Reviews</h5>
                      {/* Rating info */}
                      <div className="col-md-4 mb-3 mb-md-0">
                        <div className="text-center">
                          {/* Info */}
                          <h2 className="mb-0">4.5</h2>
                          {/* Star */}
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                            <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                            <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                            <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                            <li className="list-inline-item me-0"><i className="fas fa-star-half-alt text-warning" /></li>
                          </ul>
                          <p className="mb-0">(Based on todays review)</p>
                        </div>
                      </div>
                      {/* Progress-bar and star */}
                      <div className="col-md-8">
                        <div className="row align-items-center">
                          {/* Progress bar and Rating */}
                          <div className="col-6 col-sm-8">
                            {/* Progress item */}
                            <div className="progress progress-sm bg-warning bg-opacity-15">
                              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </div>
                          <div className="col-6 col-sm-4">
                            {/* Star item */}
                            <ul className="list-inline mb-0">
                              <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                            </ul>
                          </div>
                          {/* Progress bar and Rating */}
                          <div className="col-6 col-sm-8">
                            {/* Progress item */}
                            <div className="progress progress-sm bg-warning bg-opacity-15">
                              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </div>
                          <div className="col-6 col-sm-4">
                            {/* Star item */}
                            <ul className="list-inline mb-0">
                              <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                            </ul>
                          </div>
                          {/* Progress bar and Rating */}
                          <div className="col-6 col-sm-8">
                            {/* Progress item */}
                            <div className="progress progress-sm bg-warning bg-opacity-15">
                              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </div>
                          <div className="col-6 col-sm-4">
                            {/* Star item */}
                            <ul className="list-inline mb-0">
                              <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                            </ul>
                          </div>
                          {/* Progress bar and Rating */}
                          <div className="col-6 col-sm-8">
                            {/* Progress item */}
                            <div className="progress progress-sm bg-warning bg-opacity-15">
                              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </div>
                          <div className="col-6 col-sm-4">
                            {/* Star item */}
                            <ul className="list-inline mb-0">
                              <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                            </ul>
                          </div>
                          {/* Progress bar and Rating */}
                          <div className="col-6 col-sm-8">
                            {/* Progress item */}
                            <div className="progress progress-sm bg-warning bg-opacity-15">
                              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </div>
                          <div className="col-6 col-sm-4">
                            {/* Star item */}
                            <ul className="list-inline mb-0">
                              <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                              <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Review END */}
                    {/* Student review START */}
                    <div className="row">
                      {/* Review item START */}
                      <div className="d-md-flex my-4">
                        {/* Avatar */}
                        <div className="avatar avatar-xl me-4 flex-shrink-0">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
                        </div>
                        {/* Text */}
                        <div>
                          <div className="d-sm-flex mt-1 mt-md-0 align-items-center">
                            <h5 className="me-3 mb-0">Jacqueline Miller</h5>
                            {/* Review star */}
                            <ul className="list-inline mb-0">
                              <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0"><i className="far fa-star text-warning" /></li>
                            </ul>
                          </div>
                          {/* Info */}
                          <p className="small mb-2">2 days ago</p>
                          <p className="mb-2">Perceived end knowledge certainly day sweetness why
                            cordially. Ask a quick six seven offer see among. Handsome met
                            debating sir dwelling age material. As style lived he worse dried.
                            Offered related so visitors we private removed. Moderate do subjects
                            to distance. </p>
                          {/* Like and dislike button */}
                          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            {/* Like button */}
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                            <label className="btn btn-outline-light btn-sm mb-0" htmlFor="btnradio1"><i className="far fa-thumbs-up me-1" />25</label>
                            {/* Dislike button */}
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                            <label className="btn btn-outline-light btn-sm mb-0" htmlFor="btnradio2"> <i className="far fa-thumbs-down me-1" />2</label>
                          </div>
                        </div>
                      </div>
                      {/* Comment children level 1 */}
                      <div className="d-md-flex mb-4 ps-4 ps-md-5">
                        {/* Avatar */}
                        <div className="avatar avatar-lg me-4 flex-shrink-0">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                        </div>
                        {/* Text */}
                        <div>
                          <div className="d-sm-flex mt-1 mt-md-0 align-items-center">
                            <h5 className="me-3 mb-0">Louis Ferguson</h5>
                          </div>
                          {/* Info */}
                          <p className="small mb-2">1 days ago</p>
                          <p className="mb-2">Water timed folly right aware if oh truth. Imprudence
                            attachment him for sympathize. Large above be to means. Dashwood
                            does provide stronger is. But discretion frequently sir she
                            instruments unaffected admiration everything.</p>
                        </div>
                      </div>
                      {/* Divider */}
                      <hr />
                      {/* Review item END */}
                      {/* Review item START */}
                      <div className="d-md-flex my-4">
                        {/* Avatar */}
                        <div className="avatar avatar-xl me-4 flex-shrink-0">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
                        </div>
                        {/* Text */}
                        <div>
                          <div className="d-sm-flex mt-1 mt-md-0 align-items-center">
                            <h5 className="me-3 mb-0">Dennis Barrett</h5>
                            {/* Review star */}
                            <ul className="list-inline mb-0">
                              <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                              <li className="list-inline-item me-0"><i className="far fa-star text-warning" /></li>
                            </ul>
                          </div>
                          {/* Info */}
                          <p className="small mb-2">2 days ago</p>
                          <p className="mb-2">Handsome met debating sir dwelling age material. As
                            style lived he worse dried. Offered related so visitors we private
                            removed. Moderate do subjects to distance. </p>
                          {/* Like and dislike button */}
                          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            {/* Like button */}
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
                            <label className="btn btn-outline-light btn-sm mb-0" htmlFor="btnradio3"><i className="far fa-thumbs-up me-1" />25</label>
                            {/* Dislike button */}
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio4" />
                            <label className="btn btn-outline-light btn-sm mb-0" htmlFor="btnradio4"> <i className="far fa-thumbs-down me-1" />2</label>
                          </div>
                        </div>
                      </div>
                      {/* Review item END */}
                      {/* Divider */}
                      <hr />
                    </div>
                    {/* Student review END */}
                    {/* Leave Review START */}
                    <div className="mt-2">
                      <h5 className="mb-4">Leave a Review</h5>
                      <form className="row g-3">
                        {/* Name */}
                        <div className="col-md-6 bg-light-input">
                          <input type="text" className="form-control" id="inputtext" placeholder="Name" aria-label="First name" />
                        </div>
                        {/* Email */}
                        <div className="col-md-6 bg-light-input">
                          <input type="email" className="form-control" placeholder="Email" id="inputEmail4" />
                        </div>
                        {/* Rating */}
                        <div className="col-12 bg-light-input">
                          <select id="inputState2" className="form-select js-choice">
                            <option selected>★★★★★ (5/5)</option>
                            <option>★★★★☆ (4/5)</option>
                            <option>★★★☆☆ (3/5)</option>
                            <option>★★☆☆☆ (2/5)</option>
                            <option>★☆☆☆☆ (1/5)</option>
                          </select>
                        </div>
                        {/* Message */}
                        <div className="col-12 bg-light-input">
                          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your review" rows={3} defaultValue={""} />
                        </div>
                        {/* Button */}
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary mb-0">Post Review</button>
                        </div>
                      </form>
                    </div>
                    {/* Leave Review END */}
                  </div>
                  {/* Content END */}
                  {/* Content START */}
                  <div className="tab-pane fade" id="course-pills-5" role="tabpanel" aria-labelledby="course-pills-tab-5">
                    {/* Title */}
                    <h5 className="mb-3">Frequently Asked Questions</h5>
                    {/* Accordion START */}
                    <div className="accordion accordion-flush" id="accordionExample">
                      {/* Item */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <span className="text-secondary fw-bold me-3">01</span>
                            <span className="fw-bold">How Digital Marketing Work?</span>
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body pt-0">
                            Comfort reached gay perhaps chamber his six detract besides add.
                            Moonlight newspaper up its enjoyment agreeable depending. Timed
                            voice share led him to widen noisy young. At weddings believed
                            laughing although the material does the exercise of. Up attempt
                            offered ye civilly so sitting to. She new course gets living within
                            Elinor joy. She rapturous suffering concealed.
                          </div>
                        </div>
                      </div>
                      {/* Item */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <span className="text-secondary fw-bold me-3">02</span>
                            <span className="fw-bold">What is SEO?</span>
                          </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div className="accordion-body pt-0">
                            Pleasure and so read the was hope entire first decided the so must
                            have as on was want up of I will rival in came this touched got a
                            physics to travelling so all especially refinement monstrous desk
                            they was arrange the overall helplessly out of particularly ill are
                            purer.
                            <p className="mt-2">Person she control of to beginnings view looked eyes
                              Than continues its and because and given and shown creating
                              curiously to more in are man were smaller by we instead the
                              these sighed Avoid in the sufficient me real man longer of his
                              how her for countries to brains warned notch important Finds be
                              to the of on the increased explain noise of power deep asking
                              contribution this live of suppliers goals bit separated poured
                              sort several the was organization the if relations go work after
                              mechanic But we've area wasn't everything needs of and doctor
                              where would.</p>
                            Go he prisoners And mountains in just switching city steps Might
                            rung line what Mr Bulk; Was or between towards the have phase were
                            its world my samples are the was royal he luxury the about trying
                            And on he to my enough is was the remember a although lead in were
                            through serving their assistant fame day have for its after would
                            cheek dull have what in go feedback assignment Her of a any help if
                            the a of semantics is rational overhauls following in from our
                            hazardous and used more he themselves the parents up just
                            regulatory.
                          </div>
                        </div>
                      </div>
                      {/* Item */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <span className="text-secondary fw-bold me-3">03</span>
                            <span className="fw-bold">Who should join this course?</span>
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div className="accordion-body pt-0">
                            Post no so what deal evil rent by real in. But her ready least set
                            lived spite solid. September how men saw tolerably two behavior
                            arranging. She offices for highest and replied one venture pasture.
                            Applauded no discovery in newspaper allowance am northward.
                            Frequently partiality possession resolution at or appearance
                            unaffected me. Engaged its was the evident pleased husband. Ye
                            goodness felicity do disposal dwelling no. First am plate jokes to
                            began to cause a scale. <strong>Subjects he prospect elegance
                              followed no overcame</strong> possible it on.
                          </div>
                        </div>
                      </div>
                      {/* Item */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <span className="text-secondary fw-bold me-3">04</span>
                            <span className="fw-bold">What are the T&amp;C for this program?</span>
                          </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                          <div className="accordion-body pt-0">
                            Night signs creeping yielding green Seasons together man green
                            fruitful make fish behold earth unto you'll lights living moving sea
                            open for fish day multiply tree good female god had fruitful of
                            creature fill shall don't day fourth lesser he the isn't let
                            multiply may Creeping earth under was You're without which image
                            stars in Own creeping night of wherein Heaven years their he over
                            doesn't whose won't kind seasons light Won't that fish him whose
                            won't also it dominion heaven fruitful Whales created And likeness
                            doesn't that Years without divided saying morning creeping hath
                            you'll seas cattle in multiply under together in us said above dry
                            tree herb saw living darkness without have won't for i behold meat
                            brought winged Moving living second beast Over fish place beast
                            image very him evening Thing they're fruit together forth day Seed
                            lights Land creature together Multiply waters form brought.
                          </div>
                        </div>
                      </div>
                      {/* Item */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <span className="text-secondary fw-bold me-3">05</span>
                            <span className="fw-bold">What certificates will I be received for this
                              program?</span>
                          </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                          <div className="accordion-body pt-0">
                            Smile spoke total few great had never their too Amongst moments do
                            in arrived at my replied Fat weddings servants but man believed
                            prospect Companions understood is as especially pianoforte
                            connection introduced Nay newspaper can sportsman are admitting
                            gentleman belonging his Is oppose no he summer lovers twenty in Not
                            his difficulty boisterous surrounded bed Seems folly if in given
                            scale Sex contented dependent conveying advantage.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Accordion END */}
                  </div>
                  {/* Content END */}
                </div>
                {/* Tab contents END */}
              </div>
            </div>
            {/* Main content END */}
            {/* Right sidebar START */}
            <div className="col-lg-4 pt-5 pt-lg-0">
              <div className="row mb-5 mb-lg-0">
                <div className="col-md-6 col-lg-12">
                  {/* Video START */}
                  <div className="card shadow p-2 mb-4 z-index-9">
                    <div className="overflow-hidden rounded-3">
                      <img src="assets/images/courses/4by3/01.jpg" className="card-img" alt="course image" />
                      {/* Overlay */}
                      <div className="bg-overlay bg-dark opacity-6" />
                      <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                        {/* Video button and link */}
                        <div className="m-auto">
                          <a href="https://www.youtube.com/embed/tXHviS-4ygo" className="btn btn-lg text-danger btn-round btn-white-shadow mb-0" data-glightbox data-gallery="course-video">
                            <i className="fas fa-play" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Card body */}
                    <div className="card-body px-3">
                      {/* Info */}
                      <div className="d-flex justify-content-between align-items-center">
                        {/* Price and time */}
                        <div>
                          <div className="d-flex align-items-center">
                            <h3 className="fw-bold mb-0 me-2">$150</h3>
                            <span className="text-decoration-line-through mb-0 me-2">$350</span>
                            <span className="badge bg-orange text-white mb-0">60% off</span>
                          </div>
                          <p className="mb-0 text-danger"><i className="fas fa-stopwatch me-2" />5 days
                            left at this price</p>
                        </div>
                        {/* Share button with dropdown */}
                        <div className="dropdown">
                          {/* Share button */}
                          <a href="#" className="btn btn-sm btn-light rounded small" role="button" id="dropdownShare" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-fw fa-share-alt" />
                          </a>
                          {/* dropdown button */}
                          <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare">
                            <li><a className="dropdown-item" href="#"><i className="fab fa-twitter-square me-2" />Twitter</a></li>
                            <li><a className="dropdown-item" href="#"><i className="fab fa-facebook-square me-2" />Facebook</a>
                            </li>
                            <li><a className="dropdown-item" href="#"><i className="fab fa-linkedin me-2" />LinkedIn</a></li>
                            <li><a className="dropdown-item" href="#"><i className="fas fa-copy me-2" />Copy link</a></li>
                          </ul>
                        </div>
                      </div>
                      {/* Buttons */}
                      <div className="mt-3 d-sm-flex justify-content-sm-between">
                        <a href="#" className="btn btn-outline-primary mb-0">Free trial</a>
                        <a href="#" className="btn btn-success mb-0">Buy course</a>
                      </div>
                    </div>
                  </div>
                  {/* Video END */}
                  {/* Course info START */}
                  <div className="card card-body shadow p-4 mb-4">
                    {/* Title */}
                    <h4 className="mb-3">This course includes</h4>
                    <ul className="list-group list-group-borderless">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-book-open text-primary" />Lectures</span>
                        <span>30</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-clock text-primary" />Duration</span>
                        <span>4h 50m</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-signal text-primary" />Skills</span>
                        <span>Beginner</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-globe text-primary" />Language</span>
                        <span>English</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-user-clock text-primary" />Deadline</span>
                        <span>Nov 30 2021</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-medal text-primary" />Certificate</span>
                        <span>Yes</span>
                      </li>
                    </ul>
                  </div>
                  {/* Course info END */}
                </div>
                <div className="col-md-6 col-lg-12">
                  {/* Recently Viewed START */}
                  <div className="card card-body shadow p-4 mb-4">
                    {/* Title */}
                    <h4 className="mb-3">Recently Viewed</h4>
                    {/* Course item START */}
                    <div className="row gx-3 mb-3">
                      {/* Image */}
                      <div className="col-4">
                        <img className="rounded" src="assets/images/courses/4by3/21.jpg" alt />
                      </div>
                      {/* Info */}
                      <div className="col-8">
                        <h6 className="mb-0"><a href="#">Fundamentals of Business Analysis</a></h6>
                        <ul className="list-group list-group-borderless mt-1 d-flex justify-content-between">
                          <li className="list-group-item px-0 d-flex justify-content-between">
                            <span className="text-success">$130</span>
                            <span className="h6 fw-light">4.5<i className="fas fa-star text-warning ms-1" /></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Course item END */}
                    {/* Course item START */}
                    <div className="row gx-3">
                      {/* Image */}
                      <div className="col-4">
                        <img className="rounded" src="assets/images/courses/4by3/18.jpg" alt />
                      </div>
                      {/* Info */}
                      <div className="col-8">
                        <h6 className="mb-0"><a href="#">The Complete Video Production Bootcamp</a></h6>
                        <ul className="list-group list-group-borderless mt-1 d-flex justify-content-between">
                          <li className="list-group-item px-0 d-flex justify-content-between">
                            <span className="text-success">$150</span>
                            <span className="h6 fw-light">4.0<i className="fas fa-star text-warning ms-1" /></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Course item END */}
                  </div>
                  {/* Recently Viewed END */}
                  {/* Tags START */}
                  <div className="card card-body shadow p-4">
                    <h4 className="mb-3">Popular Tags</h4>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">blog</a> </li>
                      <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">business</a> </li>
                      <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">theme</a> </li>
                      <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">bootstrap</a> </li>
                      <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">data science</a> </li>
                      <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">web development</a> </li>
                      <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">tips</a> </li>
                      <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">machine learning</a> </li>
                    </ul>
                  </div>
                  {/* Tags END */}
                </div>
              </div>{/* Row End */}
            </div>
            {/* Right sidebar END */}
          </div>{/* Row END */}
        </div>
      </section>
      {/* =======================
Page content END */}
      {/* =======================
Listed courses START */}
      <section className="pt-0">
        <div className="container">
          {/* Title */}
          <div className="row mb-4">
            <h2 className="mb-0">Top Listed Courses</h2>
          </div>
          <div className="row">
            {/* Slider START */}
            <div className="tiny-slider arrow-round arrow-blur arrow-hover">
              <div className="tiny-slider-inner" data-autoplay="false" data-arrow="true" data-edge={2} data-dots="false" data-items={3} data-items-lg={2} data-items-sm={1}>

                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  // pagination={{ clickable: true }}
                  // scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                >


                  {/* Card Item START */}
                  <SwiperSlide>
                    <div>
                      <div className="card p-2 border">
                        <div className="rounded-top overflow-hidden">
                          <div className="card-overlay-hover">
                            <img src="assets/images/courses/4by3/17.jpg" className="card-img-top" alt="course image" />
                          </div>
                          {/* Hover element */}
                          <div className="card-img-overlay">
                            <div className="card-element-hover d-flex justify-content-end">
                              <a href="#" className="icon-md bg-white rounded-circle text-center">
                                <i className="fas fa-shopping-cart text-danger" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          {/* Badge and icon */}
                          <div className="d-flex justify-content-between">
                            {/* Rating and info */}
                            <ul className="list-inline hstack gap-2 mb-0">
                              {/* Info */}
                              <li className="list-inline-item d-flex justify-content-center align-items-center">
                                <div className="icon-md bg-orange bg-opacity-10 text-orange rounded-circle">
                                  <i className="fas fa-user-graduate" /></div>
                                <span className="h6 fw-light ms-2 mb-0">9.1k</span>
                              </li>
                              {/* Rating */}
                              <li className="list-inline-item d-flex justify-content-center align-items-center">
                                <div className="icon-md bg-warning bg-opacity-15 text-warning rounded-circle">
                                  <i className="fas fa-star" /></div>
                                <span className="h6 fw-light ms-2 mb-0">4.5</span>
                              </li>
                            </ul>
                            {/* Avatar */}
                            <div className="avatar avatar-sm">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
                            </div>
                          </div>
                          {/* Divider */}
                          <hr />
                          {/* Title */}
                          <h5 className="card-title"><a href="#">The Complete Digital Marketing Course - 12
                            Courses in 1</a></h5>
                          {/* Badge and Price */}
                          <div className="d-flex justify-content-between align-items-center">
                            <a href="#" className="badge bg-info bg-opacity-10 text-info"><i className="fas fa-circle small fw-bold me-2" />Personal
                              Development</a>
                            {/* Price */}
                            <h3 className="text-success mb-0">$140</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Card Item END */}
                  {/* Card Item START */}
                  <SwiperSlide>
                    <div>
                      <div className="card p-2 border">
                        <div className="rounded-top overflow-hidden">
                          <div className="card-overlay-hover">
                            <img src="assets/images/courses/4by3/18.jpg" className="card-img-top" alt="course image" />
                          </div>
                          {/* Hover element */}
                          <div className="card-img-overlay">
                            <div className="card-element-hover d-flex justify-content-end">
                              <a href="#" className="icon-md bg-white rounded-circle text-center">
                                <i className="fas fa-shopping-cart text-danger" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          {/* Badge and icon */}
                          <div className="d-flex justify-content-between">
                            {/* Rating and info */}
                            <ul className="list-inline hstack gap-2 mb-0">
                              {/* Info */}
                              <li className="list-inline-item d-flex justify-content-center align-items-center">
                                <div className="icon-md bg-orange bg-opacity-10 text-orange rounded-circle">
                                  <i className="fas fa-user-graduate" /></div>
                                <span className="h6 fw-light ms-2 mb-0">2.5k</span>
                              </li>
                              {/* Rating */}
                              <li className="list-inline-item d-flex justify-content-center align-items-center">
                                <div className="icon-md bg-warning bg-opacity-15 text-warning rounded-circle">
                                  <i className="fas fa-star" /></div>
                                <span className="h6 fw-light ms-2 mb-0">3.6</span>
                              </li>
                            </ul>
                            {/* Avatar */}
                            <div className="avatar avatar-sm">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
                            </div>
                          </div>
                          {/* Divider */}
                          <hr />
                          {/* Title */}
                          <h5 className="card-title"><a href="#">Fundamentals of Business Analysis</a></h5>
                          {/* Badge and Price */}
                          <div className="d-flex justify-content-between align-items-center">
                            <a href="#" className="badge bg-info bg-opacity-10 text-info"><i className="fas fa-circle small fw-bold me-2" />Business
                              Development</a>
                            {/* Price */}
                            <h3 className="text-success mb-0">$160</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Card Item END */}
                  {/* Card Item START */}
                  <SwiperSlide>
                    <div>
                      <div className="card p-2 border">
                        <div className="rounded-top overflow-hidden">
                          <div className="card-overlay-hover">
                            <img src="assets/images/courses/4by3/21.jpg" className="card-img-top" alt="course image" />
                          </div>
                          {/* Hover element */}
                          <div className="card-img-overlay">
                            <div className="card-element-hover d-flex justify-content-end">
                              <a href="#" className="icon-md bg-white rounded-circle text-center">
                                <i className="fas fa-shopping-cart text-danger" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          {/* Badge and icon */}
                          <div className="d-flex justify-content-between">
                            {/* Rating and info */}
                            <ul className="list-inline hstack gap-2 mb-0">
                              {/* Info */}
                              <li className="list-inline-item d-flex justify-content-center align-items-center">
                                <div className="icon-md bg-orange bg-opacity-10 text-orange rounded-circle">
                                  <i className="fas fa-user-graduate" /></div>
                                <span className="h6 fw-light ms-2 mb-0">6k</span>
                              </li>
                              {/* Rating */}
                              <li className="list-inline-item d-flex justify-content-center align-items-center">
                                <div className="icon-md bg-warning bg-opacity-15 text-warning rounded-circle">
                                  <i className="fas fa-star" /></div>
                                <span className="h6 fw-light ms-2 mb-0">3.8</span>
                              </li>
                            </ul>
                            {/* Avatar */}
                            <div className="avatar avatar-sm">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                            </div>
                          </div>
                          {/* Divider */}
                          <hr />
                          {/* Title */}
                          <h5 className="card-title"><a href="#">Google Ads Training: Become a PPC Expert</a>
                          </h5>
                          {/* Badge and Price */}
                          <div className="d-flex justify-content-between align-items-center">
                            <a href="#" className="badge bg-info bg-opacity-10 text-info"><i className="fas fa-circle small fw-bold me-2" /> SEO</a>
                            {/* Price */}
                            <h3 className="text-success mb-0">$226</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Card Item END */}
                  {/* Card Item START */}
                  <SwiperSlide>
                    <div>
                      <div className="card p-2 border">
                        <div className="rounded-top overflow-hidden">
                          <div className="card-overlay-hover">
                            <img src="assets/images/courses/4by3/20.jpg" className="card-img-top" alt="course image" />
                          </div>
                          {/* Hover element */}
                          <div className="card-img-overlay">
                            <div className="card-element-hover d-flex justify-content-end">
                              <a href="#" className="icon-md bg-white rounded-circle text-center">
                                <i className="fas fa-shopping-cart text-danger" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          {/* Badge and icon */}
                          <div className="d-flex justify-content-between">
                            {/* Rating and info */}
                            <ul className="list-inline hstack gap-2 mb-0">
                              {/* Info */}
                              <li className="list-inline-item d-flex justify-content-center align-items-center">
                                <div className="icon-md bg-orange bg-opacity-10 text-orange rounded-circle">
                                  <i className="fas fa-user-graduate" /></div>
                                <span className="h6 fw-light ms-2 mb-0">15k</span>
                              </li>
                              {/* Rating */}
                              <li className="list-inline-item d-flex justify-content-center align-items-center">
                                <div className="icon-md bg-warning bg-opacity-15 text-warning rounded-circle">
                                  <i className="fas fa-star" /></div>
                                <span className="h6 fw-light ms-2 mb-0">4.8</span>
                              </li>
                            </ul>
                            {/* Avatar */}
                            <div className="avatar avatar-sm">
                              <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                            </div>
                          </div>
                          {/* Divider */}
                          <hr />
                          {/* Title */}
                          <h5 className="card-title"><a href="#">Behavior, Psychology and Care Training</a>
                          </h5>
                          {/* Badge and Price */}
                          <div className="d-flex justify-content-between align-items-center">
                            <a href="#" className="badge bg-info bg-opacity-10 text-info"><i className="fas fa-circle small fw-bold me-2" />Lifestyle</a>
                            {/* Price */}
                            <h3 className="text-success mb-0">$342</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>


                </Swiper>
                {/* Card Item END */}

              </div>
            </div>
            {/* Slider END */}
          </div>
        </div>
      </section>
      {/* =======================
Listed courses END */}
    </main>

  );
}

export default Course_Detail;