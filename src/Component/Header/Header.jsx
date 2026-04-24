import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getCategory } from '../../Redux/slice/CategorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { userCheck, userLogout } from '../../Redux/slice/auth.slice';
import { ThemeContext } from '../../context/theme.context';
import { Switch } from '@mui/material';
import Course from '../../Admin/Container/Course/Course';
import logo from '../../../public/assets/images/logo.svg';
import avatar from '../../../public/assets/images/avatar/01.jpg';


function Header(props) {
  const [data, setData] = useState()
  const [checked, setChecked] = React.useState(true);

  const dispatch = useDispatch()

  const themeData = useContext(ThemeContext);
  console.log(themeData);

     let isDark=themeData.theme==='light'

  const handleChange = (event) => {
    setChecked(event.target.checked);

    themeData.ToggleTheme(themeData.theme)
  };

  console.log(themeData);
  
  const Categorydata = useSelector(state => state.category)
  console.log(Categorydata.category);


  useEffect(() => {
    dispatch(getCategory())
  }, [])



  const auth = useSelector(state => state.auth)
  console.log(auth.auth);

  const alert = useSelector(state => state.alert)
  console.log("alert:", alert);


  const firstcategory = Categorydata.category?.filter((v) => v.parent_category_id === null);
  console.log(firstcategory);

  return (
    <header className=" navbar-sticky header-static">
      {/* Logo Nav START */}
      <nav className="navbar navbar-expand-xl">
        <div className="container-fluid px-3 px-xl-5">
          {/* Logo START */}
          <a className="navbar-brand" href="index.html">
            <img className="light-mode-item navbar-brand-item" src={logo} alt="logo" />
            <img className="dark-mode-item navbar-brand-item" src="assets/images/logo-light.svg" alt="logo" />
          </a>
          {/* Logo END */}
          {/* Responsive navbar toggler */}
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-animation">
              <span />
              <span />
              <span />
            </span>
          </button>
          {/* Main navbar START */}
          <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
            {/* Nav category menu START */}
            <ul className="navbar-nav navbar-nav-scroll me-auto">
              {/* Nav item 1 Demos */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" id="categoryMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="bi bi-ui-radios-grid me-2" /><span>Category</span></a>
                <ul className=" dropdown-menu" aria-labelledby="categoryMenu">
                  {
                    firstcategory?.map((v) => {
                      let secondCat = Categorydata.category.filter((v1) => v1.parent_category_id === v._id)
                      return (
                        <li className={secondCat.length > 0 ? "dropdown-submenu dropend" : ''}>
                          <a className={secondCat.length > 0 ? "dropdown-item dropdown-toggle" : "dropdown-item"} href="#"> <NavLink className="nav-link" to={secondCat.length > 0 ? `/category/${v._id}` : `/course/${v._id}`}>{v.name}</NavLink></a>
                          {/* Sub Category List */}
                          {
                            secondCat && (
                              <ul className="dropdown-menu" data-bs-popper="none">
                                {secondCat.map((v3) => {
                                  let thirdCat = Categorydata.category.filter((v4) => v4.parent_category_id === v3._id)
                                  return (
                                    <li className={thirdCat.length > 0 ? "dropdown-submenu dropend" : ''}>
                                      <a className={thirdCat.length > 0 ? "dropdown-item dropdown-toggle" : "dropdown-item"} ><NavLink className="nav-link" to={thirdCat.length > 0 ? `/category/${v3._id}` : `/course/${v3._id}`}>{v3.name}</NavLink></a>
                                      {
                                        thirdCat && (
                                          <ul className="dropdown-menu" data-bs-popper="none">
                                            {
                                              thirdCat.map((v5) => (
                                                <li>
                                                  <a className="dropdown-item"  ><NavLink className="nav-link" to={ `/course/${v5._id}`}>{v5.name}</NavLink></a>
                                                </li>
                                              )
                                              )
                                            }
                                          </ul>
                                        )
                                      }
                                    </li>
                                  )

                                })}
                              </ul>
                            )
                          }

                        </li>

                      )
                    })
                  }

                  <li> <hr className="dropdown-divider" /></li>
                  <li><NavLink className="dropdown-item bg-primary text-primary bg-opacity-10 rounded-2 mb-0" to={'/category'} >View all categories</NavLink>
                  </li>


                </ul>
              </li>
            </ul>
            {/* Nav category menu END */}
            {/* Nav Main menu START */}
            <ul className="navbar-nav navbar-nav-scroll me-auto">
              <li>
                <NavLink className="nav-link" to={'/about'}>  About</NavLink>
              </li>
              {/* Nav item 1 Demos */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" id="demoMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demos</a>
                <ul className="dropdown-menu" aria-labelledby="demoMenu">
                  <li> <a className="dropdown-item active" href="index.html">Home Default</a></li>
                  <li> <a className="dropdown-item" href="index-2.html">Home Education</a></li>
                  <li> <a className="dropdown-item" href="index-3.html">Home Academy</a></li>
                  <li> <a className="dropdown-item" href="index-4.html">Home Course</a></li>
                  <li> <a className="dropdown-item" href="index-5.html">Home University</a></li>
                  <li> <a className="dropdown-item" href="index-6.html">Home Kindergarten</a></li>
                  <li> <a className="dropdown-item" href="index-7.html">Home Landing</a></li>
                  <li> <a className="dropdown-item" href="index-8.html">Home Tutor</a></li>
                  <li> <hr className="dropdown-divider" /></li>

                  <li>  <NavLink className="dropdown-item" to={'/Request_Demo'}>Request a demo</NavLink></li>


                  <li>  <NavLink className="dropdown-item" to={'/Book_Class'}>Book a Class</NavLink></li>

                  <li>  <NavLink className="dropdown-item" to={'/Request_Access'}>Free Access</NavLink></li>

                  <li>  <NavLink className="dropdown-item" to={'/University_Admission_Form'}>Admission Form</NavLink></li>


                  <li> <hr className="dropdown-divider" /></li>
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">Dropdown levels</a>
                    <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                      {/* dropdown submenu open right */}
                      <li className="dropdown-submenu dropend">
                        <a className="dropdown-item dropdown-toggle" href="#">Dropdown (end)</a>
                        <ul className="dropdown-menu" data-bs-popper="none">
                          <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                          <li>
                            <a className="dropdown-item" href="#">Dropdown item</a> </li>
                        </ul>
                      </li>
                      <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                      {/* dropdown submenu open left */}
                      <li className="dropdown-submenu dropstart">
                        <a className="dropdown-item dropdown-toggle" href="#">Dropdown (start)</a>
                        <ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                          <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                          <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                        </ul>
                      </li>
                      <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* Nav item 2 Pages */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                  {/* Dropdown submenu */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">Course</a>
                      
                    <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                      <li>  <NavLink className="dropdown-item" to={'/course'}>  Course Data</NavLink></li>
                    
                      <li>  <NavLink className="dropdown-item" to={'/Course_Grid_Classic'}>  Course Grid Classic</NavLink></li>
                      <li> <NavLink className="dropdown-item" to={'/Course_Grid_Minimal'}>  Course Grid Minimal</NavLink> </li>
                      <li> <hr className="dropdown-divider" /></li>

                      <li>  <NavLink className="dropdown-item" to={'/Course_List_Classic'}>  Course List Classic</NavLink></li>
                      <li> <NavLink className="dropdown-item" to={'/Course_List_Minimal'}>  Course List Minimal</NavLink> </li>


                      <li> <hr className="dropdown-divider" /></li>
                      Course_Detail
                      <li> <NavLink className="dropdown-item" to={'/Course_Detail'}>  Course Detail</NavLink> </li>
                      <li> <NavLink className="dropdown-item" to={'/Course_Detail_Minimal'}>  Course Detail Minimal</NavLink> </li>

                      <li>  <NavLink className="dropdown-item" to={'/Course_Detail_Advance'}> Course Detail Advance</NavLink></li>
                      <li>  <NavLink className="dropdown-item" to={'/Course_Video_Player'}> Course Full Screen Video</NavLink></li>


                    </ul>
                  </li>
                  {/* Dropdown submenu */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">About</a>
                    <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                      <li> <a className="dropdown-item" href="about.html">About Us</a></li>

                      <li>  <NavLink className="dropdown-item" to={'/Contact_us'}>Contact Us</NavLink></li>
                      <li><NavLink className="dropdown-item" to={'/Blog_Grid'}>Blog Grid</NavLink></li>
                      <li><NavLink className="dropdown-item" to={'/Blog_Masonry'}>Blog Masonry</NavLink></li>
                      <li><NavLink className="dropdown-item" to={'/Blog_Detail'}>Blog Detail</NavLink></li>
                      <li><NavLink className="dropdown-item" to={'/Pricing'}>Pricing</NavLink></li>


                    </ul>
                  </li>

                  <li><NavLink className="dropdown-item" to={'/Instructor_List'}>Instructor List</NavLink></li>
                  <li><NavLink className="dropdown-item" to={'/Instructor_Single'}>Instructor Single</NavLink></li>
                  <li>  <NavLink className="dropdown-item" to={'/Become_Instructor'}>Become an Instructor</NavLink></li>
                  {/* Dropdown submenu */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#">Authentication</a>
                    <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                      Sign_In
                      <li>  <NavLink className="dropdown-item" to={'/Sign_In'}>Sign In </NavLink></li>
                      <li>  <NavLink className="dropdown-item" to={'/Sign_Up'}>Sign Up</NavLink></li>
                      <li>  <NavLink className="dropdown-item" to={'/Register'}>Register</NavLink></li>


                      <li>  <NavLink className="dropdown-item" to={'/Forget_Password'}>Forgot Password </NavLink></li>

                    </ul>
                  </li>

                  <li>  <NavLink className="dropdown-item" to={'/Faq'}>FAQs </NavLink></li>


                  <li>  <NavLink className="dropdown-item" to={'/Error_404'}>Error 404 </NavLink></li>

                  <li>  <NavLink className="dropdown-item" to={'/Coming_Soon'}>Coming Soon</NavLink></li>

                  <li>  <NavLink className="dropdown-item" to={'/Cart'}>Cart</NavLink></li>

                  <li>  <NavLink className="dropdown-item" to={'/Checkout'}>Checkout</NavLink></li>
                  <li>  <NavLink className="dropdown-item" to={'/Empty_Cart'}>Empty Cart</NavLink></li>

                  <li>  <NavLink className="dropdown-item" to={'/Wishitlist'}>Wishlist</NavLink></li>



                </ul>
              </li>
              {/* Nav item 3 Account */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="accounntMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Accounts</a>
                <ul className="dropdown-menu" aria-labelledby="accounntMenu">
                  {/* Dropdown submenu */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#"><i className="fas fa-user-tie fa-fw me-1" />Instructor</a>
                    <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">

                      <li>  <NavLink className="dropdown-item" to={'/Instructor_Dashboard'}>Dashboard</NavLink></li>


                      <li>  <NavLink className="dropdown-item" to={'/Instructor_Create_Course'}>Courses</NavLink></li>


                      <li>  <NavLink className="dropdown-item" to={'/Instructor_Manage_Course'}>Create Courses</NavLink></li>

                      <li>  <NavLink className="dropdown-item" to={'/Course_Added'}>Course Added</NavLink></li>


                      <li>  <NavLink className="dropdown-item" to={'/Instructor_Earning'}>Earnings</NavLink></li>

                      <li>  <NavLink className="dropdown-item" to={'/Instructor_Student_list'}>Students</NavLink></li>


                      <li>  <NavLink className="dropdown-item" to={'/Instructor_Order'}>Orders</NavLink></li>

                      <li>  <NavLink className="dropdown-item" to={'/Instructor_Review'}>Reviews</NavLink></li>

                      <li>  <NavLink className="dropdown-item" to={'/Instructor_Payout'}>Payout</NavLink></li>


                    </ul>
                  </li>
                  {/* Dropdown submenu */}
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-toggle" href="#"><i className="fas fa-user-graduate fa-fw me-1" />Student</a>
                    <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">


                      <li>  <NavLink className="dropdown-item" to={'/Student_Dashboard'}><i className="bi bi-grid-fill fa-fw me-1" />Dashboard</NavLink></li>
                      <li>  <NavLink className="dropdown-item" to={'/Student_Subscription'}><i className="bi bi-card-checklist fa-fw me-1" />My Subscriptions</NavLink></li>
                      <li>  <NavLink className="dropdown-item" to={'/Student_Course_list'}><i className="bi bi-basket-fill fa-fw me-1" />Courses</NavLink></li>
                      <li>  <NavLink className="dropdown-item" to={'/Student_Payment_Info'}><i className="bi bi-credit-card-2-front-fill fa-fw me-1" />Payment Info</NavLink></li>
                      <li>  <NavLink className="dropdown-item" to={'/Instructor_Payout'}><i className="fas bi-cart-check-fill fa-fw me-1" />Wishlist</NavLink></li>

                    </ul>
                  </li>

                  <li> <a className="dropdown-item" href="#"><i className="fas fa-user-cog fa-fw me-1" />Admin (Coming Soon)</a> </li>
                  <li> <hr className="dropdown-divider" /></li>
                  <li> <a className="dropdown-item" href="instructor-edit-profile.html"><i className="fas fa-fw fa-edit me-1" />Edit Profile</a> </li>
                  <li> <a className="dropdown-item" href="instructor-setting.html"><i className="fas fa-fw fa-cog me-1" />Settings</a> </li>
                  <li> <a className="dropdown-item" href="instructor-delete-account.html"><i className="fas fa-fw fa-trash-alt me-1" />Delete Profile</a> </li>
                </ul>
              </li>
              {/* Nav item 4 Megamenu*/}
              <li className="nav-item dropdown dropdown-fullwidth">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Megamenu</a>
                <div className="dropdown-menu dropdown-menu-end pb-0" data-bs-popper="none">
                  <div className="row p-4 g-4">
                    {/* Dropdown column item */}
                    <div className="col-xl-6 col-xxl-3">
                      <h6 className="mb-0">Get started</h6>
                      <hr />
                      <ul className="list-unstyled">
                        <li> <a className="dropdown-item" href="#">Market research</a> </li>
                        <li> <a className="dropdown-item" href="#">Advertising</a> </li>
                        <li> <a className="dropdown-item" href="#">Consumer behavior</a> </li>
                        <li> <a className="dropdown-item" href="#">Digital marketing</a> </li>
                        <li> <a className="dropdown-item" href="#">Marketing ethics</a> </li>
                        <li> <a className="dropdown-item" href="#">Social media marketing</a> </li>
                        <li> <a className="dropdown-item" href="#">Public relations</a> </li>
                        <li> <a className="dropdown-item" href="#">Advertising</a> </li>
                        <li> <a className="dropdown-item" href="#">Decision science</a> </li>
                        <li> <a className="dropdown-item" href="#">SEO</a> </li>
                        <li> <a className="dropdown-item" href="#">Business marketing</a> </li>
                      </ul>
                    </div>
                    {/* Dropdown column item */}
                    <div className="col-xl-6 col-xxl-3">
                      <h6 className="mb-0">Degree</h6>
                      <hr />
                      {/* Dropdown item */}
                      <div className="mb-2 position-relative bg-primary-soft-hover rounded-2 transition-base p-3">
                        <a className="stretched-link h6 mb-0" href="#">Contact management</a>
                        <p className="mb-0 small text-truncate-2">Speedily say has suitable disposal add boy. On forth doubt miles of child.</p>
                      </div>
                      {/* Dropdown item */}
                      <div className="mb-2 position-relative bg-primary-soft-hover rounded-2 transition-base p-3">
                        <a className="stretched-link h6 mb-0" href="#">Sales pipeline</a>
                        <p className="mb-0 small text-truncate-2">Speedily say has suitable disposal add boy. On forth doubt miles of child.</p>
                      </div>
                      {/* Dropdown item */}
                      <div className="mb-2 position-relative bg-primary-soft-hover rounded-2 transition-base p-3">
                        <a className="stretched-link h6 mb-0" href="#">Security &amp; Permission</a>
                        <p className="mb-0 small text-truncate-2">Speedily say has suitable disposal add boy. On forth doubt miles of child.</p>
                      </div>
                    </div>
                    {/* Dropdown column item */}
                    <div className="col-xl-6 col-xxl-3">
                      <h6 className="mb-0">Certificate</h6>
                      <hr />
                      {/* Dropdown item */}
                      <div className="d-flex mb-4 position-relative">
                        <h2 className="mb-0"><i className="fab fa-fw fa-google text-google-icon" /></h2>
                        <div className="ms-2">
                          <a className="stretched-link h6 mb-0" href="#">Google SEO certificate</a>
                          <p className="mb-0 small">No prerequisites</p>
                        </div>
                      </div>
                      {/* Dropdown item */}
                      <div className="d-flex mb-4 position-relative">
                        <h2 className="mb-0"><i className="fab fa-fw fa-linkedin-in text-linkedin" /></h2>
                        <div className="ms-2">
                          <a className="stretched-link h6 mb-0" href="#">Business Development Executive(BDE)</a>
                          <p className="mb-0 small">No prerequisites</p>
                        </div>
                      </div>
                      {/* Dropdown item */}
                      <div className="d-flex mb-4 position-relative">
                        <h2 className="mb-0"><i className="fab fa-fw fa-facebook text-facebook" /></h2>
                        <div className="ms-2">
                          <a className="stretched-link h6 mb-0" href="#">Facebook social media marketing</a>
                          <p className="mb-0 small">Expert advice</p>
                        </div>
                      </div>
                      {/* Dropdown item */}
                      <div className="d-flex mb-4 position-relative">
                        <h2 className="mb-0"><i className="fas fa-fw fa-basketball-ball text-dribbble" /></h2>
                        <div className="ms-2">
                          <a className="stretched-link h6 mb-0" href="#">Creative graphics design</a>
                          <p className="mb-0 small">No prerequisites</p>
                        </div>
                      </div>
                    </div>
                    {/* Dropdown column item */}
                    <div className="col-xl-6 col-xxl-3">
                      <h6 className="mb-0">Download Eduport</h6>
                      <hr />
                      {/* Image */}
                      <img src="assets/images/element/14.svg" alt />
                      {/* Download button */}
                      <div className="row g-2 justify-content-center mt-3">
                        {/* Google play store button */}
                        <div className="col-6 col-sm-4 col-xxl-6">
                          <a href="#"> <img src="assets/images/client/google-play.svg" className="btn-transition" alt="google-store" /> </a>
                        </div>
                        {/* App store button */}
                        <div className="col-6 col-sm-4 col-xxl-6">
                          <a href="#"> <img src="assets/images/client/app-store.svg" className="btn-transition" alt="app-store" /> </a>
                        </div>
                      </div>
                    </div>
                    {/* Action box */}
                    <div className="col-12">
                      <div className="alert alert-success alert-dismissible fade show mt-2 mb-0 rounded-3" role="alert">
                        {/* Avatar */}
                        <div className="avatar avatar-xs me-2">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
                        </div>
                        {/* Info */}
                        The personality development class starts at 2:00 pm, click to <a href="#" className="alert-link">Join Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* Nav item 5 link*/}
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="advanceMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-ellipsis-h" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end min-w-auto" data-bs-popper="none">
                  <li>
                    <a className="dropdown-item" href="https://support.webestica.com/" target="_blank">
                      <i className="text-warning fa-fw bi bi-life-preserver me-2" />Support
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="docs/index.html" target="_blank">
                      <i className="text-danger fa-fw bi bi-card-text me-2" />Documentation
                    </a>
                  </li>
                  <li> <hr className="dropdown-divider" /></li>
                  <li>
                    <a className="dropdown-item" href="https://eduport.webestica.com/rtl/" target="_blank">
                      <i className="text-info fa-fw bi bi-toggle-off me-2" />RTL demo
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://themes.getbootstrap.com/store/webestica/" target="_blank">
                      <i className="text-success fa-fw bi bi-cloud-download-fill me-2" />Buy Eduport!
                    </a>
                  </li>
                  <li> <hr className="dropdown-divider" /></li>
                  <li>
                    <a className="dropdown-item" href="docs/alerts.html" target="_blank">
                      <i className="text-orange fa-fw bi bi-puzzle-fill me-2" />Components
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* Nav Main menu END */}
            {/* Nav Search START */}
            <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
              <div className="nav-item w-100">
                <form className="position-relative">
                  <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit"><i className="fas fa-search fs-6 " /></button>
                </form>
              </div>
            </div>
            {/* Nav Search END */}
          </div>
          {/* Main navbar END */}

          
          {/* Profile START */}
          <div className="dropdown ms-1 ms-lg-0">
            <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
              <img className="avatar-img rounded-circle" src={avatar} alt="avatar" />
            </a>
            <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
              {/* Profile info */}
              <li className="px-3">
                <div className="d-flex align-items-center">
                  {/* Avatar */}
                  <div className="avatar me-3">
                    <img className="avatar-img rounded-circle shadow" src={avatar} alt="avatar" />
                  </div>
                  <div>
                    <a className=" h6" href="#">Lori Ferguson</a>
                    <p className="small m-0">example@gmail.com</p>
                  </div>
                </div>
                <hr />
              </li>
              {/* Links */}
              <li><a className="dropdown-item" href="#"><i className="bi bi-person fa-fw me-2" />Edit Profile</a></li>
              <li><a className="dropdown-item" href="#"><i className="bi bi-gear fa-fw me-2" />Account Settings</a></li>
              <li><a className="dropdown-item" href="#"><i className="bi bi-info-circle fa-fw me-2" />Help</a></li>
              {
                auth.auth ?
                  <li><a href='#' className={`${themeData.theme==='light'?'profile':''} dropdown-item bg-danger-soft-hover`} onClick={() => dispatch(userLogout(auth.auth._id))}><i className="bi bi-box-arrow-right" />    Sign Out</a></li> :
                  <li><NavLink className={` ${themeData.theme==='light'?'profile':''} dropdown-item bg-danger-soft-hover`} to={'/Auth'}><i className="bi bi-power fa-fw me-2" />Sign In</NavLink></li>

              }

              {
                auth.auth ?
                  <li><a href='#' className={`${themeData.theme==='light'?'profile':''} dropdown-item bg-danger-soft-hover`} onClick={() => dispatch(userLogout(auth.auth._id))}><i className="bi bi-box-arrow-right" />  Instructor Sign Out</a></li> :
                  <li><NavLink className={` ${themeData.theme==='light'?'profile':''} dropdown-item bg-danger-soft-hover`} to={'/Auth/Instructor'}><i className="bi bi-power fa-fw me-2" />  Sign As Instructor </NavLink></li>

              }


              <li> <hr className="dropdown-divider" /></li>
              {/* Dark mode switch START */}
              <li>
                <div className="modeswitch-wrap" id="darkModeSwitch">
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    slotProps={{ input: { 'aria-label': 'controlled' } }}
                  />

                  <span>Dark mode</span>
                </div>
              </li>
              {/* Dark mode switch END */}
            </ul>
          </div>
          {/* Profile START */}
        </div>
      </nav>
      {/* Logo Nav END */}
    </header>

  );
}

export default Header;