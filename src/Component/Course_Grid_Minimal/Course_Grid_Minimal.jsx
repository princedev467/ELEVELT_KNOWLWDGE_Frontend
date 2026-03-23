import React from 'react';

function Course_Grid_Minimal(props) {
    return (
     <main>
  {/* =======================
Page Banner START */}
  <section className="py-4">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="bg-light p-4 text-center rounded-3">
            <h1 className="m-0">Course Grid Minimal</h1>
            {/* Breadcrumb */}
            <div className="d-flex justify-content-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dots mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Course minimal</li>
                </ol>
              </nav>
            </div>
          </div>
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
      {/* Filter bar START */}
      <form className="bg-light border p-4 rounded-3 my-4 z-index-9 position-relative">
        <div className="row g-3">
          {/* Input */}
          <div className="col-xl-3">
            <input className="form-control me-1" type="search" placeholder="Enter keyword" />
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
      <div className="row mt-3">
        {/* Main content START */}
        <div className="col-12">
          {/* Course Grid START */}
          <div className="row g-4">
            {/* Card item START */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/08.jpg" className="card-img-top" alt="course image" />
                {/* Card body */}
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <a href="#" className="badge bg-purple bg-opacity-10 text-purple">All level</a>
                    <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart" /></a>
                  </div>
                  {/* Title */}
                  <h5 className="card-title"><a href="#">Sketch from A to Z: for app designer</a></h5>
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
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/02.jpg" className="card-img-top" alt="course image" />
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                    <a href="#" className="text-danger"><i className="fas fa-heart" /></a>
                  </div>
                  {/* Title */}
                  <h5 className="card-title"><a href="#">Graphic Design Masterclass</a></h5>
                  {/* Rating star */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                    <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                  </ul>
                </div>
                {/* Card footer */}
                <div className="card-footer pt-0 pb-3">
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />9h 56m</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />65 lectures</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/03.jpg" className="card-img-top" alt="course image" />
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                    <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart" /></a>
                  </div>
                  {/* Title */}
                  <h5 className="card-title"><a href="#">Create a Design System in Figma</a></h5>
                  {/* Rating star */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                    <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                  </ul>
                </div>
                {/* Card footer */}
                <div className="card-footer pt-0 pb-3">
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />5h 56m</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />32 lectures</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/07.jpg" className="card-img-top" alt="course image" />
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                    <a href="#" className="text-danger"><i className="fas fa-heart" /></a>
                  </div>
                  {/* Title */}
                  <h5 className="card-title"><a href="#">Deep Learning with React-Native </a></h5>
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
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />18h 56m</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />99 lectures</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/11.jpg" className="card-img-top" alt="course image" />
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <a href="#" className="badge bg-purple bg-opacity-10 text-purple">All level</a>
                    <a href="#" className="text-danger"><i className="fas fa-heart" /></a>
                  </div>
                  {/* Title */}
                  <h5 className="card-title"><a href="#">Build Responsive Websites with HTML</a></h5>
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
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />15h 30m</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />68 lectures</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/12.jpg" className="card-img-top" alt="course image" />
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                    <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart" /></a>
                  </div>
                  {/* Title */}
                  <h5 className="card-title"><a href="#">Build Websites with CSS</a></h5>
                  {/* Rating star */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                    <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                  </ul>
                </div>
                {/* Card footer */}
                <div className="card-footer pt-0 pb-3">
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />36h 30m</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />72 lectures</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/05.jpg" className="card-img-top" alt="course image" />
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                    <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart" /></a>
                  </div>
                  {/* Title */}
                  <h5 className="card-title"><a href="#">The Complete Web Development in python</a></h5>
                  {/* Rating star */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                    <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                  </ul>
                </div>
                {/* Card footer */}
                <div className="card-footer pt-0 pb-3">
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />10h 00m</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />26 lectures</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/06.jpg" className="card-img-top" alt="course image" />
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <a href="#" className="badge bg-info bg-opacity-10 text-info">Intermediate</a>
                    <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart" /></a>
                  </div>
                  {/* Title */}
                  <h5 className="card-title"><a href="#">Angular – The Complete Guider</a></h5>
                  {/* Rating star */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                    <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                  </ul>
                </div>
                {/* Card footer */}
                <div className="card-footer pt-0 pb-3">
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />9h 32m</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />42 lectures</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/10.jpg" className="card-img-top" alt="course image" />
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <a href="#" className="badge bg-info bg-opacity-10 text-info">Intermediate</a>
                    <a href="#" className="text-danger"><i className="fas fa-heart" /></a>
                  </div>
                  {/* Title */}
                  <h5 className="card-title"><a href="#">Bootstrap 5 From Scratch</a></h5>
                  {/* Rating star */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                    <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                  </ul>
                </div>
                {/* Card footer */}
                <div className="card-footer pt-0 pb-3">
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />25h 56m</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />38 lectures</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/13.jpg" className="card-img-top" alt="course image" />
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                    <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart" /></a>
                  </div>
                  {/* Title */}
                  <h5 className="card-title"><a href="#">PHP with - CMS Project</a></h5>
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
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />21h 22m</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />30 lectures</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/01.jpg" className="card-img-top" alt="course image" />
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                    <a href="#" className="text-danger"><i className="fas fa-heart" /></a>
                  </div>
                  {/* Title */}
                  <h5 className="card-title"><a href="#">Digital Marketing Masterclass</a></h5>
                  {/* Rating star */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                    <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                  </ul>
                </div>
                {/* Card footer */}
                <div className="card-footer pt-0 pb-3">
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />6h 56m</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />82 lectures</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/04.jpg" className="card-img-top" alt="course image" />
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <a href="#" className="badge bg-purple bg-opacity-10 text-purple">All level</a>
                    <a href="#" className="text-danger"><i className="fas fa-heart" /></a>
                  </div>
                  {/* Title */}
                  <h5 className="card-title"><a href="#">Learn Invision</a></h5>
                  {/* Rating star */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                    <li className="list-inline-item ms-2 h6 fw-light mb-0">3.5/5.0</li>
                  </ul>
                </div>
                {/* Card footer */}
                <div className="card-footer pt-0 pb-3">
                  <hr />
                  <div className="d-flex justify-content-between mt-2">
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />6h 56m</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />82 lectures</span>
                  </div>
                </div>
              </div>
            </div>
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
  {/* =======================
Page content END */}
  {/* =======================
Newsletter START */}
  <section className="pt-0">
    <div className="container position-relative overflow-hidden">
      {/* SVG decoration */}
      <figure className="position-absolute top-50 start-50 translate-middle ms-3">
        <svg>
          <path className="fill-white opacity-2" d="m496 22.999c0 10.493-8.506 18.999-18.999 18.999s-19-8.506-19-18.999 8.507-18.999 19-18.999 18.999 8.506 18.999 18.999z" />
          <path className="fill-white opacity-2" d="m775 102.5c0 5.799-4.701 10.5-10.5 10.5-5.798 0-10.499-4.701-10.499-10.5 0-5.798 4.701-10.499 10.499-10.499 5.799 0 10.5 4.701 10.5 10.499z" />
          <path className="fill-white opacity-2" d="m192 102c0 6.626-5.373 11.999-12 11.999s-11.999-5.373-11.999-11.999c0-6.628 5.372-12 11.999-12s12 5.372 12 12z" />
          <path className="fill-white opacity-2" d="m20.499 10.25c0 5.66-4.589 10.249-10.25 10.249-5.66 0-10.249-4.589-10.249-10.249-0-5.661 4.589-10.25 10.249-10.25 5.661-0 10.25 4.589 10.25 10.25z" />
        </svg>
      </figure>
      {/* Svg decoration */}
      <figure className="position-absolute bottom-0 end-0 mb-5 d-none d-sm-block">
        <svg className="rotate-130" width="258.7px" height="86.9px" viewBox="0 0 258.7 86.9">
          <path stroke="white" fill="none" strokeWidth={2} d="M0,7.2c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5 c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5c16,0,16,25.5,31.9,25.5s16-25.5,31.9-25.5" />
          <path stroke="white" fill="none" strokeWidth={2} d="M0,57c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5 c16,0,16,25.5,31.9,25.5c16,0,16-25.5,31.9-25.5c16,0,16,25.5,31.9,25.5s16-25.5,31.9-25.5" />
        </svg>
      </figure>
      <div className="bg-grad-blue p-3 p-sm-5 rounded-3">
        <div className="row justify-content-center position-relative">
          {/* SVG decoration */}
          <figure className="position-absolute top-50 start-0 translate-middle-y">
            <svg width="141px" height="141px">
              <path className="fill-white opacity-1" d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z" />
            </svg>
          </figure>
          {/* Newsletter */}
          <div className="col-12 position-relative my-2 my-sm-3">
            <div className="row align-items-center">
              {/* Title */}
              <div className="col-lg-6">
                <h3 className="text-white mb-3 mb-lg-0">Are you ready for a more great Conversation?</h3>
              </div>
              {/* Input item */}
              <div className="col-lg-6 text-lg-end">
                <form className="bg-body rounded p-2">
                  <div className="input-group">
                    <input className="form-control border-0 me-1" type="email" placeholder="Type your email here" />
                    <button type="button" className="btn btn-dark mb-0 rounded">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> {/* Row END */}
      </div>
    </div>
  </section>
  {/* =======================
Newsletter END */}
</main>

    );
}

export default Course_Grid_Minimal;