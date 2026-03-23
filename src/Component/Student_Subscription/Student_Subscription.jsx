import React from 'react';

function Student_Subscription(props) {
    return (
     <main>
  {/* =======================
Page Banner START */}
  <section className="pt-0">
    <div className="container-fluid px-0">
      <div className="card bg-blue h-100px h-md-200px rounded-0" style={{background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover'}}>
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
                    <a className="list-group-item active" href="student-subscription.html"><i className="bi bi-card-checklist fa-fw me-2" />My Subscriptions</a>
                    <a className="list-group-item" href="student-course-list.html"><i className="bi bi-basket fa-fw me-2" />My Courses</a>
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
          <div className="card card-body border rounded-3">
            {/* Update plan START */}
            <div className="row g-4">
              {/* Update plan item */}
              <div className="col-6 col-lg-3">
                <span>Active Plan</span>
                <h4>Basic</h4>
              </div>
              {/* Update plan item */}
              <div className="col-6 col-lg-3">
                <span>Monthly limit</span>
                <h4>Unlimited</h4>
              </div>
              {/* Update plan item */}
              <div className="col-6 col-lg-3">
                <span>Cost</span>
                <h4>$99/Month</h4>
              </div>
              {/* Update plan item */}
              <div className="col-6 col-lg-3">
                <span>Renewal Date</span>
                <h4>Feb 17, 2022</h4>
              </div>
            </div>
            {/* Update plan END */}
            {/* Progress bar */}
            <div className="overflow-hidden my-4">
              <h6 className="mb-0">85%</h6>
              <div className="progress progress-sm bg-primary bg-opacity-10">
                <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                </div>
              </div>
            </div>
            {/* Button */}
            <div className="d-sm-flex justify-content-sm-between align-items-center">
              <div>
                {/* Switch Content */}
                <div className="d-sm-flex">
                  <div className="form-check form-switch form-check-md">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy1" defaultChecked />
                    <label className="form-check-label" htmlFor="checkPrivacy1">Auto Renewal</label>
                  </div>
                </div>
                <p className="mb-0 small">Your plan will automatically renew on: 02/17/2022. Payment Amount: USD250</p>
              </div>	
              {/* Buttons */}
              <div className="mt-2 mt-sm-0">
                <button type="button" className="btn btn-sm btn-danger-soft me-2 mb-0">Cancel plan</button>
                <a href="#" className="btn btn-sm btn-success mb-0">Upgrade plan</a>
              </div>
            </div>
            {/* Divider */}
            <hr />
            {/* Plan Benefits */}
            <div className="row">
              <h6 className="mb-3">The plan includes</h6>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-success me-2" />Up to 05 users monthly</li>
                  <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-success me-2" />Free 5 host &amp; domain</li>
                  <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-success me-2" />Custom infrastructure</li>
                  <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-success me-2" />Access to all our room</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-success me-2" />24/7 dedicated Support</li>
                  <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-success me-2" />Unlimited updates</li>
                  <li className="h6 fw-light"><i className="bi bi-patch-check-fill text-success me-2" />Landing pages &amp; Web widgets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Main content END */}
      </div> {/* Row END */}
    </div>	
  </section>
  {/* =======================
Page content END */}
</main>

    );
}

export default Student_Subscription;