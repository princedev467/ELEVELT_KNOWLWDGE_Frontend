import React from 'react';

function Request_Access(props) {
    return (
    <main>
  {/* =======================
Main part START */}
  <section className="bg-primary bg-opacity-10">
    <div className="container">
      <div className="row g-4 g-sm-5 align-items-center py-4">
        <div className="col-lg-6 col-xl-5">
          <h1>Access to Free Online Courses</h1>
          {/* Request search bar */}
          <form className="row align-items-center justify-content-center my-4">
            <div className="col-12">
              <p className="mb-2 h6 fw-light">Enter your email address to get access</p>
              <div className="bg-body shadow rounded-3 p-2">
                <div className="input-group">
                  <input className="form-control border-0 me-1" type="email" placeholder="Enter your email" />
                  <button type="button" className="btn btn-blue mb-0 rounded-3">Request access!</button>
                </div>
              </div>
            </div>
          </form>
          {/* Avatar group and rating */}
          <div className="d-sm-flex justify-content-sm-between align-items-center">
            <div>
              {/* Avatar group */}
              <ul className="avatar-group mb-3 mb-sm-0">
                <li className="avatar avatar-sm">
                  <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                </li>
                <li className="avatar avatar-sm">
                  <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                </li>
                <li className="avatar avatar-sm">
                  <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
                </li>
                <li className="avatar avatar-sm">
                  <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                </li>
                <li className="avatar avatar-sm">
                  <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                </li>
                <li className="avatar avatar-sm">
                  <div className="avatar-img rounded-circle bg-primary">
                    <span className="text-white position-absolute top-50 start-50 translate-middle small">1K+</span>
                  </div>
                </li>
              </ul>
            </div>
            {/* Rating */}
            <div className="d-flex align-items-center">
              <h5 className="mb-0 me-2">4.5/5.0</h5>
              <ul className="list-inline mb-1">
                <li className="list-inline-item me-0 mb-0"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 mb-0"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 mb-0"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 mb-0"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 mb-0"><i className="fas fa-star-half-alt text-warning" /></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="col-lg-6 col-xl-7 text-center">
          <img src="assets/images/element/16.svg" alt />
        </div>
      </div>
    </div>
  </section>
  {/* =======================
Main part END */}
  {/* =======================
Client START */}
  <section className="pb-0 pb-xxl-5">
    <div className="container">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="row d-flex justify-content-center">
            {/* Logo item */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2"> 
              <div className="p-3 p-lg-4 grayscale text-center">
                <img src="assets/images/client/microsoft.svg" alt="Client logo" />
              </div>
            </div>
            {/* Logo item */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2"> 
              <div className="p-3 p-lg-4 grayscale text-center">
                <img src="assets/images/client/linkedin.svg" alt="Client logo" />
              </div>
            </div>
            {/* Logo item */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2"> 
              <div className="p-3 p-lg-4 grayscale text-center">
                <img src="assets/images/client/netflix.svg" alt="Client logo" />
              </div>
            </div>
            {/* Logo item */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2"> 
              <div className="p-3 p-lg-4 grayscale text-center">
                <img src="assets/images/client/coca-cola.svg" alt="Client logo" />
              </div>
            </div>
            {/* Logo item */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2"> 
              <div className="p-3 p-lg-4 grayscale text-center">
                <img src="assets/images/client/envato.svg" alt="Client logo" />
              </div>
            </div>
            {/* Logo item */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2"> 
              <div className="p-3 p-lg-4 grayscale text-center">
                <img src="assets/images/client/android.svg" alt="Client logo" />
              </div>
            </div>
            {/* Logo item */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2"> 
              <div className="p-3 p-lg-4 grayscale text-center">
                <img src="assets/images/client/coca-cola.svg" alt="Client logo" />
              </div>
            </div>
            {/* Logo item */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2"> 
              <div className="p-3 p-lg-4 grayscale text-center">
                <img src="assets/images/client/shippable.svg" alt="Client logo" />
              </div>
            </div>
            {/* Logo item */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2"> 
              <div className="p-3 p-lg-4 grayscale text-center">
                <img src="assets/images/client/algolia.svg" alt="Client logo" />
              </div>
            </div>
            {/* Logo item */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2"> 
              <div className="p-3 p-lg-4 grayscale text-center">
                <img src="assets/images/client/importio.svg" alt="Client logo" />
              </div>
            </div>
            {/* Logo item */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2"> 
              <div className="p-3 p-lg-4 grayscale text-center">
                <img src="assets/images/client/yamaha.svg" alt="Client logo" />
              </div>
            </div>
          </div>
        </div>		
      </div>
    </div>
  </section>
  {/* =======================
Client END */}
  {/* =======================
Testimonials START */}
  <section>
    <div className="container">
      {/* Title */}
      <div className="row">
        <div className="col-lg-8 text-center mx-auto">
          <h2>What people say about us</h2>
          <p>Happiness prosperous impression had conviction For every delay in they Extremity now strangers contained breakfast him discourse additions Sincerity collected contented led now perpetual extremely forfeited</p>
        </div>
      </div>
      <div className="row mt-4 mt-lg-5">
        <div className="col-10 mx-auto">
          <div className="row g-4">
            {/* Slider START */}
            <div className="tiny-slider arrow-round arrow-dark arrow-hover">
              <div className="tiny-slider-inner pb-1" data-autoplay="true" data-arrow="true" data-edge={2} data-dots="false" data-items={2} data-items-sm={1}>
                {/* Testimonial item */}
                <div className="col-6">
                  <p className="fs-5">"Make my life easier and organized conviction For every delay in they Extremity now strangers contained breakfast"</p>
                  {/* Avatar */}
                  <div className="d-flex align-items-center">
                    {/* Avatar */}
                    <div className="avatar avatar-md">
                      <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
                    </div>
                    {/* Info */}
                    <div className="ms-2">
                      <h6 className="mb-0">Lori Stevens</h6>
                      <p className="mb-0 small">Backend developer at google</p>
                    </div>
                  </div>
                </div>
                {/* Testimonial item */}
                <div className="col-6">
                  <p className="fs-5">"Creating product become fun conviction For every delay in they Extremity now strangers contained breakfast"</p>
                  {/* Avatar */}
                  <div className="d-flex align-items-center">
                    {/* Avatar */}
                    <div className="avatar avatar-md">
                      <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
                    </div>
                    {/* Info */}
                    <div className="ms-2">
                      <h6 className="mb-0">Dennis Barrett</h6>
                      <p className="mb-0 small">Design lead at the agency</p>
                    </div>
                  </div>
                </div>
                {/* Testimonial item */}
                <div className="col-6">
                  <p className="fs-5">"Conviction For every delay in they Extremity now strangers contained breakfast"</p>
                  {/* Avatar */}
                  <div className="d-flex align-items-center">
                    {/* Avatar */}
                    <div className="avatar avatar-md">
                      <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                    </div>
                    {/* Info */}
                    <div className="ms-2">
                      <h6 className="mb-0">Carolyn Ortiz</h6>
                      <p className="mb-0 small">CEO of online shop</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>		
            {/* Slider END */}
          </div>
        </div>		
      </div>
    </div>
  </section>
  {/* =======================
Testimonials END */}
  {/* =======================
Newsletter START */}
  <section className="py-0 py-lg-5">
    <div className="container">
      <div className="row">
        <div className="col-11 col-md-10 mx-auto">
          <div className="bg-info rounded-3 shadow p-3 p-sm-4 position-relative overflow-hidden">
            {/* SVG decoration */}
            <figure className="position-absolute top-100 start-100 translate-middle mt-n6 ms-n5">
              <svg width="211px" height="211px">
                <path className="fill-white opacity-4" d="M210.030,105.011 C210.030,163.014 163.010,210.029 105.012,210.029 C47.013,210.029 -0.005,163.014 -0.005,105.011 C-0.005,47.015 47.013,-0.004 105.012,-0.004 C163.010,-0.004 210.030,47.015 210.030,105.011 Z" />
              </svg>
            </figure>
            {/* SVG decoration */}
            <figure className="position-absolute top-100 start-0 translate-middle mt-n6 ms-5">
              <svg width="141px" height="141px">
                <path className="fill-white opacity-4" d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z" />
              </svg>
            </figure>
            {/* SVG decoration */}
            <figure className="position-absolute top-0 start-50 mt-4 ms-n9">
              <svg width="41px" height="41px">
                <path className="fill-white opacity-4" d="M40.531,20.265 C40.531,31.458 31.457,40.531 20.265,40.531 C9.072,40.531 -0.001,31.458 -0.001,20.265 C-0.001,9.073 9.072,-0.001 20.265,-0.001 C31.457,-0.001 40.531,9.073 40.531,20.265 Z" />
              </svg>
            </figure>
            <div className="row">
              <div className="col-md-8 mx-auto text-center py-4 position-relative">
                {/* Title */}
                <h2 className="text-white">Need early access?</h2>
                <p className="text-white">How promotion excellent curiosity yet attempted happiness Gay prosperous impression had conviction For every delay death ask to style Me mean able</p>
                {/* Form */}
                <form className="row align-items-center justify-content-center mt-3">
                  <div className="col-lg-8">
                    <div className="bg-body shadow rounded-pill p-2">
                      <div className="input-group">
                        <input className="form-control border-0 me-1" type="email" placeholder="Enter your email" />
                        <button type="button" className="btn btn-blue mb-0 rounded-pill">Request!</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* =======================
Newsletter END */}
</main>

    );
}

export default Request_Access;