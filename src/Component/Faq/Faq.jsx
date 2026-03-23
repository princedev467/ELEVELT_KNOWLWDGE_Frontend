import React from 'react';

function Faq(props) {
    return (
     <main>
  {/* =======================
Page Banner START */}
  <section className="bg-light py-5">
    <div className="container">
      <div className="row g-4 g-md-5 position-relative">
        {/* SVG decoration */}
        <figure className="position-absolute top-0 start-0 d-none d-sm-block">	
          <svg width="22px" height="22px" viewBox="0 0 22 22">
            <polygon className="fill-purple" points="22,8.3 13.7,8.3 13.7,0 8.3,0 8.3,8.3 0,8.3 0,13.7 8.3,13.7 8.3,22 13.7,22 13.7,13.7 22,13.7 " />
          </svg>
        </figure>
        {/* Title and Search */}
        <div className="col-lg-10 mx-auto text-center position-relative">
          {/* SVG decoration */}
          <figure className="position-absolute top-50 end-0 translate-middle-y">
            <svg width="27px" height="27px">
              <path className="fill-orange" d="M13.122,5.946 L17.679,-0.001 L17.404,7.528 L24.661,5.946 L19.683,11.533 L26.244,15.056 L18.891,16.089 L21.686,23.068 L15.400,19.062 L13.122,26.232 L10.843,19.062 L4.557,23.068 L7.352,16.089 L-0.000,15.056 L6.561,11.533 L1.582,5.946 L8.839,7.528 L8.565,-0.001 L13.122,5.946 Z" />
            </svg>
          </figure>
          {/* Title */}
          <h1 className="display-6">Hello, how can we help?</h1>
          {/* Search bar */}
          <div className="col-lg-8 mx-auto text-center mt-4">
            <form className="bg-body shadow rounded p-2">
              <div className="input-group">
                <input className="form-control border-0 me-1" type="text" placeholder="Ask a question..." />
                <button type="button" className="btn btn-blue mb-0 rounded">Submit</button>
              </div>
            </form>
          </div>
        </div>
        {/* Category START */}
        <div className="col-12">
          <div className="row g-4 text-center">
            <p className="mb-0">Choose a category to quickly find the help you need</p>
            {/* Category item */}
            <div className="col-sm-6 col-md-3">
              <div className="card card-body card-border-hover p-0">
                <a href="#" className="p-3">
                  <h2><i className="fas fa-street-view transition-base" /></h2>
                  <h6 className="mb-0">User Guide</h6>
                </a>
              </div>
            </div>
            {/* Category item */}
            <div className="col-sm-6 col-md-3">
              <div className="card card-body card-border-hover p-0">
                <a href="#" className="p-3">
                  <h2><i className="fas fa-hands-helping transition-base" /></h2>
                  <h6 className="mb-0">Assistance</h6>
                </a>
              </div>
            </div>
            {/* Category item */}
            <div className="col-sm-6 col-md-3">
              <div className="card card-body card-border-hover p-0">
                <a href="#" className="p-3">
                  <h2><i className="fas fa-exclamation-circle transition-base" /></h2>
                  <h6 className="mb-0">General guide</h6>
                </a>
              </div>
            </div>
            {/* Category item */}
            <div className="col-sm-6 col-md-3">
              <div className="card card-body card-border-hover p-0">
                <a href="#" className="p-3">
                  <h2><i className="fas fa-flag transition-base" /></h2>
                  <h6 className="mb-0">Getting started</h6>
                </a>
              </div>
            </div>
          </div> {/* Row END */}
        </div>
        {/* Category END */}
      </div>
    </div>
  </section>
  {/* =======================
Page Banner END */}
  {/* =======================
Page content START */}
  <section className="pt-5 pb-0 pb-lg-5">
    <div className="container">
      <div className="row g-4 g-md-5">
        {/* Main content START */}
        <div className="col-lg-8">
          {/* Title */}
          <h3 className="mb-4">Frequently Asked Questions</h3>
          {/* FAQ START */}
          <div className="accordion accordion-icon accordion-bg-light" id="accordionExample2">
            {/* Item */}
            <div className="accordion-item mb-3">
              <h6 className="accordion-header font-base" id="heading-1">
                <button className="accordion-button fw-bold rounded d-inline-block collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                  How can we help?
                </button>
              </h6>
              {/* Body */}
              <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#accordionExample2">
                <div className="accordion-body mt-3">
                  Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.
                </div>
              </div>
            </div>
            {/* Item */}
            <div className="accordion-item mb-3">
              <h6 className="accordion-header font-base" id="heading-2">
                <button className="accordion-button fw-bold rounded d-inline-block collapsed d-block pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                  How to edit my Profile?
                </button>
              </h6>
              {/* Body */}
              <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordionExample2">
                <div className="accordion-body mt-3">
                  What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.
                </div>
              </div>
            </div>
            {/* Item */}
            <div className="accordion-item mb-3">
              <h6 className="accordion-header font-base" id="heading-3">
                <button className="accordion-button fw-bold collapsed rounded d-block pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                  How much should I offer the sellers? 
                </button>
              </h6>
              {/* Body */}
              <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#accordionExample2">
                <div className="accordion-body mt-3">
                  Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.
                </div>
              </div>
            </div>
            {/* Item */}
            <div className="accordion-item mb-3">
              <h6 className="accordion-header font-base" id="heading-4">
                <button className="accordion-button fw-bold collapsed rounded d-block pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                  Installation Guide 
                </button>
              </h6>
              {/* Body */}
              <div id="collapse-4" className="accordion-collapse collapse" aria-labelledby="heading-4" data-bs-parent="#accordionExample2">
                <div className="accordion-body mt-3">
                  <p>What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.</p>
                  <p className="mb-0">At the moment, we only accept Credit/Debit cards and Paypal payments. Paypal is the easiest way to make payments online. While checking out your order. Be sure to fill in correct details for fast &amp; hassle-free payment processing.</p>
                </div>
              </div>
            </div>
            {/* Item */}
            <div className="accordion-item mb-3">
              <h6 className="accordion-header font-base" id="heading-5">
                <button className="accordion-button fw-bold collapsed rounded d-block pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
                  Additional Options and Services
                </button>
              </h6>
              {/* Body */}
              <div id="collapse-5" className="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#accordionExample2">
                <div className="accordion-body mt-3">
                  Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.
                </div>
              </div>
            </div>
            {/* Item */}
            <div className="accordion-item">
              <h6 className="accordion-header font-base" id="heading-6">
                <button className="accordion-button fw-bold collapsed rounded d-block pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
                  What's are the difference between a college and a university?
                </button>
              </h6>
              {/* Body */}
              <div id="collapse-6" className="accordion-collapse collapse" aria-labelledby="heading-6" data-bs-parent="#accordionExample2">
                <div className="accordion-body mt-3">
                  Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.
                </div>
              </div>
            </div>
          </div>
          {/* FAQ END */}
        </div>
        {/* Main content END */}
        {/* Right sidebar START */}
        <div className="col-lg-4">
          <div className="row mb-5 mb-lg-0">
            <div className="col-12 col-sm-6 col-lg-12">
              {/* Category START */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center bg-info bg-opacity-10 rounded p-2 position-relative mb-3">
                  <h6 className="m-0 text-info">Last Question</h6>
                  <a href="#" className="badge text-white bg-info stretched-link">2D ago</a>
                </div>
                <div className="d-flex justify-content-between align-items-center bg-danger bg-opacity-10 rounded p-2 position-relative mb-3">
                  <h6 className="m-0 text-danger">Total Question</h6>
                  <a href="#" className="badge text-white bg-danger stretched-link">15,525</a>
                </div>
                <div className="d-flex justify-content-between align-items-center bg-success bg-opacity-10 rounded p-2 position-relative mb-3">
                  <h6 className="m-0 text-success">Answer</h6>
                  <a href="#" className="badge text-white bg-success stretched-link">12536</a>
                </div>
              </div>
              {/* Category END */}
              {/* Related Topic START */}
              <div className="card card-body shadow p-4 mb-4">
                {/* Title */}
                <h4 className="mb-3">Related Topic</h4>
                {/* Item */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <a href="#" className="h6 fw-light"><i className="fas fa-caret-right text-orange me-2" />Business</a>
                  <span className="small">(21)</span>
                </div>
                {/* Item */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <a href="#" className="h6 fw-light"><i className="fas fa-caret-right text-orange me-2" />Development</a>
                  <span className="small">(86)</span>
                </div>
                {/* Item */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <a href="#" className="h6 fw-light"><i className="fas fa-caret-right text-orange me-2" />Design</a>
                  <span className="small">(92)</span>
                </div>
                {/* Item */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <a href="#" className="h6 fw-light"><i className="fas fa-caret-right text-orange me-2" />Marketing</a>
                  <span className="small">(62)</span>
                </div>
                {/* Item */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <a href="#" className="h6 fw-light"><i className="fas fa-caret-right text-orange me-2" />Technology</a>
                  <span className="small">(31)</span>
                </div>
                {/* Item */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <a href="#" className="h6 fw-light"><i className="fas fa-caret-right text-orange me-2" />Course Taking</a>
                  <span className="small">(06)</span>
                </div>
                {/* Item */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <a href="#" className="h6 fw-light"><i className="fas fa-caret-right text-orange me-2" />Getting Started</a>
                  <span className="small">(28)</span>
                </div>
                {/* Item */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <a href="#" className="h6 fw-light"><i className="fas fa-caret-right text-orange me-2" />Mobile</a>
                  <span className="small">(18)</span>
                </div>
                {/* Item */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <a href="#" className="h6 fw-light"><i className="fas fa-caret-right text-orange me-2" />Payment Option</a>
                  <span className="small">(32)</span>
                </div>
                {/* Item */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <a href="#" className="h6 fw-light"><i className="fas fa-caret-right text-orange me-2" />Account &amp; Profile</a>
                  <span className="small">(56)</span>
                </div>
                {/* Item */}
                <div className="d-flex justify-content-between align-items-center">
                  <a href="#" className="h6 fw-light"><i className="fas fa-caret-right text-orange me-2" />Course taking</a>
                  <span className="small">(45)</span>
                </div>
              </div>
              {/* Related Topic END */}
            </div>
            <div className="col-12 col-sm-6 col-lg-12">
              {/* Tags START */}
              <div className="card card-body shadow p-4">
                <h4 className="mb-3">Popular Tags</h4>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item"><a className="btn btn-outline-light btn-sm" href="#">blog</a></li>
                  <li className="list-inline-item"><a className="btn btn-outline-light btn-sm" href="#">business</a></li>
                  <li className="list-inline-item"><a className="btn btn-outline-light btn-sm" href="#">theme</a></li>
                  <li className="list-inline-item"><a className="btn btn-outline-light btn-sm" href="#">bootstrap</a></li>
                  <li className="list-inline-item"><a className="btn btn-outline-light btn-sm" href="#">data science</a></li>
                  <li className="list-inline-item"><a className="btn btn-outline-light btn-sm" href="#">web development</a></li>
                  <li className="list-inline-item"><a className="btn btn-outline-light btn-sm" href="#">tips</a></li>
                  <li className="list-inline-item"><a className="btn btn-outline-light btn-sm" href="#">machine learning</a></li>
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
</main>

    );
}

export default Faq;