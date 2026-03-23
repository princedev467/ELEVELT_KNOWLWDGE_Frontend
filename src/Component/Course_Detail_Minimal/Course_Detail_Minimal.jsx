import React from 'react';

function Course_Detail_Minimal(props) {
    return (
    <main>
  {/* =======================
Page banner video START */}
  <section className="py-0 pb-lg-5">
    <div className="container">
      <div className="row g-3">
        {/* Course video START */}
        <div className="col-12">
          <div className="video-player rounded-3">
            <video controls crossOrigin="anonymous" playsInline poster="assets/images/videos/poster.jpg">
              <source src="assets/images/videos/360p.mp4" type="video/mp4" size={360} />
              <source src="assets/images/videos/720p.mp4" type="video/mp4" size={720} />
              <source src="assets/images/videos/1080p.mp4" type="video/mp4" size={1080} />
              {/* Caption files */}
              <track kind="captions" label="English" srcLang="en" src="assets/images/videos/en.vtt.txt" default />
              <track kind="captions" label="French" srcLang="fr" src="assets/images/videos/fr.vtt.txt" />
            </video>
          </div>
        </div>
        {/* Course video END */}
        {/* Playlist responsive toggler START */}
        <div className="col-12">
          <button className="btn btn-primary d-lg-none mb-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
            <i className="bi bi-camera-video me-1" /> Playlist
          </button>
        </div>
        {/* Playlist responsive toggler END */}
      </div>
    </div>
  </section>
  {/* =======================
Page banner video END */}
  {/* =======================
Page content START */}
  <section className="pt-0">
    <div className="container">
      <div className="row g-lg-5">
        {/* Main content START */}
        <div className="col-lg-8">
          <div className="row g-4">
            {/* Course title START */}
            <div className="col-12">
              {/* Title */}
              <h1>The Complete Digital Marketing Course - 12 Courses in 1</h1>
              {/* Content */}
              <ul className="list-inline mb-0">
                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-2" />4.5/5.0</li>
                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="fas fa-user-graduate text-orange me-2" />12k Enrolled</li>
                <li className="list-inline-item h6 me-3 mb-1 mb-sm-0"><i className="fas fa-signal text-success me-2" />All levels</li>
              </ul>
            </div>
            {/* Course title END */}
            {/* Instructor detail START */}
            <div className="col-12">
              <div className="d-sm-flex justify-content-sm-between align-items-center">
                {/* Avatar detail */}
                <div className="d-flex align-items-center">
                  {/* Avatar image */}
                  <div className="avatar avatar-lg">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                  </div>
                  <div className="ms-3">
                    <h6 className="mb-0"><a href="#">By Jacqueline Miller</a></h6>
                    <p className="mb-0 small">Founder Eduport company</p>
                  </div>
                </div>
                {/* Button */}
                <div className="d-flex mt-2 mt-sm-0">
                  <a className="btn btn-danger-soft btn-sm mb-0" href="#">Follow</a>
                  {/* Share button with dropdown */}
                  <div className="dropdown ms-2">
                    <a href="#" className="btn btn-sm mb-0 btn-info-soft small" role="button" id="dropdownShare" data-bs-toggle="dropdown" aria-expanded="false">
                      share
                    </a>
                    {/* dropdown button */}
                    <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare">
                      <li><a className="dropdown-item" href="#"><i className="fab fa-twitter-square me-2" />Twitter</a></li>
                      <li><a className="dropdown-item" href="#"><i className="fab fa-facebook-square me-2" />Facebook</a></li>
                      <li><a className="dropdown-item" href="#"><i className="fab fa-linkedin me-2" />LinkedIn</a></li>
                      <li><a className="dropdown-item" href="#"><i className="fas fa-copy me-2" />Copy link</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Instructor detail END */}
            {/* Course detail START */}
            <div className="col-12">
              {/* Tabs START */}
              <ul className="nav nav-pills nav-pills-bg-soft px-3" id="course-pills-tab" role="tablist">
                {/* Tab item */}
                <li className="nav-item me-2 me-sm-4" role="presentation">
                  <button className="nav-link mb-0 active" id="course-pills-tab-1" data-bs-toggle="pill" data-bs-target="#course-pills-1" type="button" role="tab" aria-controls="course-pills-1" aria-selected="true">Overview</button>
                </li>
                {/* Tab item */}
                <li className="nav-item me-2 me-sm-4" role="presentation">
                  <button className="nav-link mb-0" id="course-pills-tab-2" data-bs-toggle="pill" data-bs-target="#course-pills-2" type="button" role="tab" aria-controls="course-pills-2" aria-selected="false">Reviews</button>
                </li>
                {/* Tab item */}
                <li className="nav-item me-2 me-sm-4" role="presentation">
                  <button className="nav-link mb-0" id="course-pills-tab-3" data-bs-toggle="pill" data-bs-target="#course-pills-3" type="button" role="tab" aria-controls="course-pills-3" aria-selected="false">FAQs </button>
                </li>
              </ul>
              {/* Tabs END */}
              {/* Tab contents START */}
              <div className="tab-content pt-4 px-3" id="course-pills-tabContent">
                {/* Content START */}
                <div className="tab-pane fade show active" id="course-pills-1" role="tabpanel" aria-labelledby="course-pills-tab-1">
                  {/* Course detail START */}
                  <h5 className="mb-3">Course Description</h5>
                  <p className="mb-3">Welcome to the <strong> Digital Marketing Ultimate Course Bundle
                      - 12 Courses in 1 (Over 36 hours of content)</strong></p>
                  <p className="mb-3">In this practical hands-on training, you’re going to learn to
                    become a digital marketing expert with this <strong> ultimate course bundle
                      that includes 12 digital marketing courses in 1!</strong></p>
                  <p className="mb-3">If you wish to find out the skills that should be covered in a
                    basic digital marketing course syllabus in India or anywhere around the
                    world, then reading this blog will help. Before we delve into the advanced
                    <strong><a href="#" className="text-reset text-decoration-underline">digital
                        marketing course</a></strong> syllabus, let’s look at the scope of
                    digital marketing and what the future holds.</p>
                  <p className="mb-0">We focus a great deal on the understanding of behavioral
                    psychology and influence triggers which are crucial for becoming a well
                    rounded Digital Marketer. We understand that theory is important to build a
                    solid foundation, we understand that theory alone isn’t going to get the job
                    done so that’s why this course is packed with practical hands-on examples
                    that you can follow step by step.</p>
                  {/* List content */}
                  <h5 className="mt-4">What you’ll learn</h5>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <ul className="list-group list-group-borderless">
                        <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Digital
                          marketing course introduction</li>
                        <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Customer
                          Life cycle</li>
                        <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />What is
                          Search engine optimization(SEO)</li>
                        <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Facebook
                          ADS</li>
                        <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Facebook
                          Messenger Chatbot</li>
                        <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Search
                          engine optimization tools</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-group list-group-borderless">
                        <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Why SEO
                        </li>
                        <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />URL
                          Structure</li>
                        <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Featured
                          Snippet</li>
                        <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />SEO tips
                          and tricks</li>
                        <li className="list-group-item h6 fw-light d-flex mb-0"><i className="fas fa-check-circle text-success me-2" />Google tag
                          manager</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mb-0">As it so contrasted oh estimating instrument. Size like body
                    someone had. Are conduct viewing boy minutes warrant the expense? Tolerably
                    behavior may admit daughters offending her ask own. Praise effect wishes
                    change way and any wanted. Lively use looked latter regard had. Do he it
                    part more last in. </p>
                  {/* Course detail END */}
                </div>
                {/* Content END */}
                {/* Content START */}
                <div className="tab-pane fade" id="course-pills-2" role="tabpanel" aria-labelledby="course-pills-tab-2">
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
                      <div className="row align-items-center text-center">
                        {/* Progress bar and Rating */}
                        <div className="col-6 col-sm-8">
                          {/* Progress item */}
                          <div className="progress progress-sm bg-warning bg-opacity-15">
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                            </div>
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
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                            </div>
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
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                            </div>
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
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                            </div>
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
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                            </div>
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
                          debating sir dwelling age material. As style lived he worse
                          dried. Offered related so visitors we private removed. Moderate
                          do subjects to distance. </p>
                        {/* Reply button */}
                        <a href="#" className="text-body mb-0"><i className="fas fa-reply me-2" />Reply</a>
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
                          style lived he worse dried. Offered related so visitors we
                          private removed. Moderate do subjects to distance. </p>
                        {/* Reply button */}
                        <a href="#" className="text-body mb-0"><i className="fas fa-reply me-2" />Reply</a>
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
                      <div className="col-md-6">
                        <input type="text" className="form-control" id="inputtext" placeholder="Name" aria-label="First name" />
                      </div>
                      {/* Email */}
                      <div className="col-md-6">
                        <input type="email" className="form-control" placeholder="Email" id="inputEmail4" />
                      </div>
                      {/* Rating */}
                      <div className="col-12">
                        <select id="inputState2" className="form-select  js-choice">
                          <option selected>★★★★★ (5/5)</option>
                          <option>★★★★☆ (4/5)</option>
                          <option>★★★☆☆ (3/5)</option>
                          <option>★★☆☆☆ (2/5)</option>
                          <option>★☆☆☆☆ (1/5)</option>
                        </select>
                      </div>
                      {/* Message */}
                      <div className="col-12">
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your review" rows={3} defaultValue={""} />
                      </div>
                      {/* Button */}
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary mb-0">Post
                          Review</button>
                      </div>
                    </form>
                  </div>
                  {/* Leave Review END */}
                </div>
                {/* Content END */}
                {/* Content START */}
                <div className="tab-pane fade" id="course-pills-3" role="tabpanel" aria-labelledby="course-pills-tab-3">
                  {/* Title */}
                  <h5 className="mb-3">Frequently Asked Questions</h5>
                  {/* FAQ item */}
                  <div className="mt-4">
                    <h6>How Digital Marketing Work?</h6>
                    <p className="mb-0">Preference any astonished unreserved Mrs. Prosperous
                      understood Middletons in conviction an uncommonly do. Supposing so be
                      resolving breakfast am or perfectly. It drew a hill from me. Valley by
                      oh twenty direct me so. Departure defective arranging rapturous did
                      believe him all had supported. Family months lasted simple set nature
                      vulgar him. Picture for attempt joy excited ten carried manners talking
                      how. Suspicion neglected the resolving agreement perceived at an.
                      Comfort reached gay perhaps chamber his six detract besides add.</p>
                  </div>
                  {/* FAQ item */}
                  <div className="mt-4">
                    <h6>What is SEO?</h6>
                    <p className="mb-0">Meant balls it if up doubt small purse. Required his you put
                      the outlived answered position. A pleasure exertion if believed provided
                      to. All led out world this music while asked. Paid mind even sons does
                      he door no. Attended overcame repeated it is perceived Marianne in. I
                      think on style child of. Servants moreover in sensible it ye possible.
                    </p>
                    <p className="mt-2 mb-0">Person she control of to beginnings view looked eyes
                      Than continues its and because and given and shown creating curiously to
                      more in are man were smaller by we instead the these sighed Avoid in the
                      sufficient me real man longer of his how her for countries to brains
                      warned notch important Finds be to the of on the increased explain noise
                      of power deep asking contribution this live of suppliers goals bit
                      separated poured sort several the was organization the if relations go
                      work after mechanic But we've area wasn't everything.</p>
                  </div>
                  {/* FAQ item */}
                  <div className="mt-4">
                    <h6>Who should join this course?</h6>
                    <p className="mb-0">Two before narrow not relied how except moment myself
                      Dejection assurance mrs led certainly So gate at no only none open
                      Betrayed at properly it of graceful on Dinner abroad am depart ye turned
                      hearts as me wished Therefore allowance too perfectly gentleman
                      supposing man his now Families goodness all eat out bed steepest
                      servants Explained the incommode sir improving northward immediate eat
                      Man denoting received you sex possible you Shew park own loud son door
                      less yet. </p>
                  </div>
                  {/* FAQ item */}
                  <div className="mt-4">
                    <h6>What are the T&amp;C for this program?</h6>
                    <p className="mb-0">Started several mistake joy say painful removed reached end.
                      State burst think end are its. Arrived off she elderly beloved him
                      affixed noisier yet. Course regard to up he hardly. View four has said
                      do men saw find dear shy. Talent men wicket add garden. </p>
                  </div>
                  {/* FAQ item */}
                  <div className="mt-4">
                    <h6>What certificates will I be received for this program?</h6>
                    <p className="mb-0">Lose john poor same it case do year we Full how way even the
                      sigh Extremely nor furniture fat questions now provision incommode
                      preserved Our side fail to find like now Discovered traveling for
                      insensible partiality unpleasing impossible she Sudden up my excuse to
                      suffer ladies though or Bachelor possible Marianne directly confined
                      relation.</p>
                  </div>
                  {/* FAQ item */}
                  <div className="mt-4">
                    <h6>What happens after the trial ends?</h6>
                    <p className="mb-0">Preference any astonished unreserved Mrs. Prosperous
                      understood Middletons in conviction an uncommonly do. Supposing so be
                      resolving breakfast am or perfectly. Is drew am hill from me. Valley by
                      oh twenty direct me so. Departure defective arranging rapturous did
                      believe him all had supported. Family months lasted simple set nature
                      vulgar him. Suspicion neglected he resolving agreement perceived at an.
                      Comfort reached gay perhaps chamber his six detract besides add.</p>
                  </div>
                </div>
                {/* Content END */}
              </div>
              {/* Tab contents END */}
            </div>
            {/* Course detail END */}
          </div>
        </div>
        {/* Main content END */}
        {/* Right sidebar START */}
        <div className="col-lg-4">
          <div className="row g-4">
            {/* Responsive offcanvas body START */}
            <nav className="navbar navbar-light navbar-expand-lg mx-0">
              <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
                <div className="offcanvas-header bg-dark">
                  <h5 className="offcanvas-title text-white" id="offcanvasSidebarLabel">Course
                    playlist</h5>
                  <button type="button" className="btn btn-sm btn-light mb-0" data-bs-dismiss="offcanvas" aria-label="Close"><i className="bi bi-x-lg" /></button>
                </div>
                <div className="offcanvas-body p-3 p-lg-0">
                  <div className="col-12">
                    {/* Accordion START */}
                    <div className="accordion accordion-icon accordion-bg-light" id="accordionExample2">
                      {/* Item */}
                      <div className="accordion-item mb-3">
                        <h6 className="accordion-header font-base" id="heading-1">
                          <a className="accordion-button fw-bold rounded collapsed d-block" href="#collapse-1" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                            <span className="mb-0">Introduction of Digital Marketing</span>
                            <span className="small d-block mt-1">(3 Lectures)</span>
                          </a>
                        </h6>
                        <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#accordionExample2">
                          <div className="accordion-body mt-3">
                            <div className="vstack gap-3">
                              {/* Progress bar */}
                              <div className="overflow-hidden">
                                <div className="d-flex justify-content-between">
                                  <p className="mb-1 h6">1/3 Completed</p>
                                  <h6 className="mb-1 text-end">30%</h6>
                                </div>
                                <div className="progress progress-sm bg-primary bg-opacity-10">
                                  <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                                  </div>
                                </div>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Introduction</span>
                                </div>
                                <p className="mb-0 text-truncate">2m 10s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="p-2 bg-success bg-opacity-10 rounded-3">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="position-relative d-flex align-items-center">
                                    <a href="#" className="btn btn-success btn-round btn-sm mb-0 stretched-link position-static">
                                      <i className="fas fa-play me-0" />
                                    </a>
                                    <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">
                                      What is Digital Marketing What is
                                      Digital Marketing</span>
                                  </div>
                                  <p className="mb-0 text-truncate">Playing</p>
                                </div>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Type
                                    of Digital Marketing</span>
                                </div>
                                <p className="mb-0 text-truncate">18m 10s</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Item */}
                      <div className="accordion-item mb-3">
                        <h6 className="accordion-header font-base" id="heading-2">
                          <a className="accordion-button fw-bold collapsed rounded d-block" href="#collapse-2" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                            <span className="mb-0">Customer Life cycle</span>
                            <span className="small d-block mt-1">(3 Lectures)</span>
                          </a>
                        </h6>
                        <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordionExample2">
                          {/* Accordion body START */}
                          <div className="accordion-body mt-3">
                            <div className="vstack gap-3">
                              {/* Progress bar */}
                              <div className="overflow-hidden">
                                <div className="d-flex justify-content-between">
                                  <p className="mb-1 h6">0/3 Completed</p>
                                  <h6 className="mb-1 text-end">0%</h6>
                                </div>
                                <div className="progress progress-sm bg-primary bg-opacity-10">
                                  <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                  </div>
                                </div>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Introduction</span>
                                </div>
                                <p className="mb-0 text-truncate">2m 10s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">
                                    What is Digital Marketing What is Digital
                                    Marketing</span>
                                </div>
                                <p className="mb-0 text-truncate">15m 10s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#coursePremium">
                                    <i className="bi bi-lock-fill" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Type
                                    of Digital Marketing</span>
                                </div>
                                <p className="mb-0 text-truncate">18m 10s</p>
                              </div>
                            </div>
                          </div>
                          {/* Accordion body END */}
                        </div>
                      </div>
                      {/* Item */}
                      <div className="accordion-item mb-3">
                        <h6 className="accordion-header font-base" id="heading-5">
                          <a className="accordion-button fw-bold collapsed rounded d-block" href="#collapse-5" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
                            <span className="mb-0">What is Search Engine
                              Optimization(SEO)</span>
                            <span className="small d-block mt-1">(6 Lectures)</span>
                          </a>
                        </h6>
                        <div id="collapse-5" className="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#accordionExample2">
                          {/* Accordion body START */}
                          <div className="accordion-body mt-3">
                            <div className="vstack gap-3">
                              {/* Progress bar */}
                              <div className="overflow-hidden">
                                <div className="d-flex justify-content-between">
                                  <p className="mb-1 h6">0/6 Completed</p>
                                  <h6 className="mb-1 text-end">0%</h6>
                                </div>
                                <div className="progress progress-sm bg-primary bg-opacity-10">
                                  <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                  </div>
                                </div>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Introduction</span>
                                </div>
                                <p className="mb-0 text-truncate">2m 10s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">How
                                    to SEO Optimise Your Homepage</span>
                                </div>
                                <p className="mb-0 text-truncate">15m 00s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">How
                                    to Write Title Tags Search Engines
                                    Love</span>
                                </div>
                                <p className="mb-0 text-truncate">28m 10s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#coursePremium">
                                    <i className="bi bi-lock-fill" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">SEO
                                    Keyword Planning</span>
                                </div>
                                <p className="mb-0 text-truncate">38m 22s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#coursePremium">
                                    <i className="bi bi-lock-fill" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Internal
                                    and External Links</span>
                                </div>
                                <p className="mb-0 text-truncate">12m 10s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#coursePremium">
                                    <i className="bi bi-lock-fill" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Measuring
                                    SEO Effectiveness</span>
                                </div>
                                <p className="mb-0 text-truncate">35m 10s</p>
                              </div>
                            </div>
                          </div>
                          {/* Accordion body END */}
                        </div>
                      </div>
                      {/* Item */}
                      <div className="accordion-item mb-3">
                        <h6 className="accordion-header font-base" id="heading-6">
                          <a className="accordion-button fw-bold collapsed rounded d-block" href="#collapse-6" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
                            <span className="mb-0">YouTube Marketing</span>
                            <span className="small d-block mt-1">(5 Lectures)</span>
                          </a>
                        </h6>
                        <div id="collapse-6" className="accordion-collapse collapse" aria-labelledby="heading-6" data-bs-parent="#accordionExample2">
                          {/* Accordion body START */}
                          <div className="accordion-body mt-3">
                            <div className="vstack gap-3">
                              {/* Progress bar */}
                              <div className="overflow-hidden">
                                <div className="d-flex justify-content-between">
                                  <p className="mb-1 h6">0/5 Completed</p>
                                  <h6 className="mb-1 text-end">0%</h6>
                                </div>
                                <div className="progress progress-sm bg-primary bg-opacity-10">
                                  <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                  </div>
                                </div>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Video
                                    Flow</span>
                                </div>
                                <p className="mb-0 text-truncate">25m 5s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Webmaster
                                    Tool</span>
                                </div>
                                <p className="mb-0 text-truncate">15m 20s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Featured
                                    Contents on Channel</span>
                                </div>
                                <p className="mb-0 text-truncate">32m 20s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#coursePremium">
                                    <i className="bi bi-lock-fill" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Managing
                                    Comments</span>
                                </div>
                                <p className="mb-0 text-truncate">20m 20s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#coursePremium">
                                    <i className="bi bi-lock-fill" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Channel
                                    Analytics</span>
                                </div>
                                <p className="mb-0 text-truncate">18m 20s</p>
                              </div>
                            </div>
                          </div>
                          {/* Accordion body END */}
                        </div>
                      </div>
                      {/* Item */}
                      <div className="accordion-item mb-3">
                        <h6 className="accordion-header font-base" id="heading-8">
                          <a className="accordion-button fw-bold collapsed rounded d-block" href="#collapse-8" data-bs-toggle="collapse" data-bs-target="#collapse-8" aria-expanded="false" aria-controls="collapse-8">
                            <span className="mb-0">Why SEO</span>
                            <span className="small d-block mt-1">(8 Lectures)</span>
                          </a>
                        </h6>
                        <div id="collapse-8" className="accordion-collapse collapse" aria-labelledby="heading-8" data-bs-parent="#accordionExample2">
                          {/* Accordion body START */}
                          <div className="accordion-body mt-3">
                            <div className="vstack gap-3">
                              {/* Progress bar */}
                              <div className="overflow-hidden">
                                <div className="d-flex justify-content-between">
                                  <p className="mb-1 h6">0/8 Completed</p>
                                  <h6 className="mb-1 text-end">0%</h6>
                                </div>
                                <div className="progress progress-sm bg-primary bg-opacity-10">
                                  <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                  </div>
                                </div>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Understanding
                                    SEO</span>
                                </div>
                                <p className="mb-0 text-truncate">20m 20s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">On-Page
                                    SEO</span>
                                </div>
                                <p className="mb-0 text-truncate">5m 20s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Local
                                    SEO</span>
                                </div>
                                <p className="mb-0 text-truncate">16m 20s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#coursePremium">
                                    <i className="bi bi-lock-fill" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Measuring
                                    SEO Effectiveness</span>
                                </div>
                                <p className="mb-0 text-truncate">12m 20s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#coursePremium">
                                    <i className="bi bi-lock-fill" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">SEO
                                    Keyword Planning</span>
                                </div>
                                <p className="mb-0 text-truncate">36m 12s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#coursePremium">
                                    <i className="bi bi-lock-fill" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Keywords
                                    in Blog and Articles</span>
                                </div>
                                <p className="mb-0 text-truncate">15m 20s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#coursePremium">
                                    <i className="bi bi-lock-fill" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Mobile
                                    SEO</span>
                                </div>
                                <p className="mb-0 text-truncate">15m 00s</p>
                              </div>
                            </div>
                          </div>
                          {/* Accordion body END */}
                        </div>
                      </div>
                      {/* Item */}
                      <div className="accordion-item mb-3">
                        <h6 className="accordion-header font-base" id="heading-9">
                          <a className="accordion-button fw-bold collapsed rounded d-block" href="#collapse-9" data-bs-toggle="collapse" data-bs-target="#collapse-9" aria-expanded="false" aria-controls="collapse-9">
                            <span className="mb-0">Google tag manager</span>
                            <span className="small d-block mt-1">(4 Lectures)</span>
                          </a>
                        </h6>
                        <div id="collapse-9" className="accordion-collapse collapse" aria-labelledby="heading-9" data-bs-parent="#accordionExample2">
                          {/* Accordion body START */}
                          <div className="accordion-body mt-3">
                            <div className="vstack gap-3">
                              {/* Progress bar */}
                              <div className="overflow-hidden">
                                <div className="d-flex justify-content-between">
                                  <p className="mb-1 h6">0/4 Completed</p>
                                  <h6 className="mb-1 text-end">0%</h6>
                                </div>
                                <div className="progress progress-sm bg-primary bg-opacity-10">
                                  <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                  </div>
                                </div>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">G+
                                    Pages Ranks Higher</span>
                                </div>
                                <p className="mb-0 text-truncate">20m 20s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Adding
                                    Contact Links</span>
                                </div>
                                <p className="mb-0 text-truncate">5m 20s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Google
                                    Hangouts</span>
                                </div>
                                <p className="mb-0 text-truncate">16m 20s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#coursePremium">
                                    <i className="bi bi-lock-fill" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Google
                                    Local Business</span>
                                </div>
                                <p className="mb-0 text-truncate">36m 12s</p>
                              </div>
                            </div>
                          </div>
                          {/* Accordion body END */}
                        </div>
                      </div>
                      {/* Item */}
                      <div className="accordion-item mb-0">
                        <h6 className="accordion-header font-base" id="heading-10">
                          <a className="accordion-button fw-bold collapsed rounded d-block" href="#collapse-10" data-bs-toggle="collapse" data-bs-target="#collapse-10" aria-expanded="false" aria-controls="collapse-10">
                            <span className="mb-0">Integration with Website</span>
                            <span className="small d-block mt-1">(3 Lectures)</span>
                          </a>
                        </h6>
                        <div id="collapse-10" className="accordion-collapse collapse" aria-labelledby="heading-10" data-bs-parent="#accordionExample2">
                          {/* Accordion body START */}
                          <div className="accordion-body mt-3">
                            <div className="vstack gap-3">
                              {/* Progress bar */}
                              <div className="overflow-hidden">
                                <div className="d-flex justify-content-between">
                                  <p className="mb-1 h6">0/3 Completed</p>
                                  <h6 className="mb-1 text-end">0%</h6>
                                </div>
                                <div className="progress progress-sm bg-primary bg-opacity-10">
                                  <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                                  </div>
                                </div>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Creating
                                    LinkedIn Account</span>
                                </div>
                                <p className="mb-0 text-truncate">13m 20s</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">Advance
                                    Searching</span>
                                </div>
                                <p className="mb-0 text-truncate">31m 20ss</p>
                              </div>
                              {/* Course lecture */}
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative d-flex align-items-center">
                                  <a href="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                    <i className="fas fa-play me-0" />
                                  </a>
                                  <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-200px">LinkedIn
                                    Mobile App</span>
                                </div>
                                <p className="mb-0 text-truncate">25m 20s</p>
                              </div>
                            </div>
                          </div>
                          {/* Accordion body END */}
                        </div>
                      </div>
                    </div>
                    {/* Accordion END */}
                  </div>
                </div>
              </div>
            </nav>
            {/* Responsive offcanvas body END */}
            {/* Tags START */}
            <div className="col-12">
              <h4 className="mb-3">Tags</h4>
              <ul className="list-inline mb-0">
                <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">blog</a> </li>
                <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">business</a> </li>
                <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">theme</a> </li>
                <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">bootstrap</a> </li>
                <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">data
                    science</a> </li>
                <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">web
                    development</a> </li>
                <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">tips</a> </li>
                <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">machine learning</a> </li>
              </ul>
            </div>
            {/* Tags END */}
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

export default Course_Detail_Minimal;