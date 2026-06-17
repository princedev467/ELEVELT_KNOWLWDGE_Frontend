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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header(props) {
  const [data, setData] = useState()
  const [checked, setChecked] = React.useState(true);

  const dispatch = useDispatch()



  const themeData = useContext(ThemeContext);
  console.log(themeData);

  let isDark = themeData.theme === 'light'

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

  localStorage.setItem("user", JSON.stringify(auth.auth));

  const alert = useSelector(state => state.alert)
  console.log("alert:", alert);


  const firstcategory = Categorydata.category?.filter((v) => v.parent_category_id === null);
  console.log(firstcategory);

  return (
    <header className={`navbar-sticky header-static headerShadow ${isDark ? 'header-dark-mode' : ''} `}>
      {/* Logo Nav START */}
      <nav className="navbar navbar-expand-xl">
        <div className="container-fluid px-3 px-xl-5">
          {/* Logo START */}
          <NavLink className="navbar-brand" to={'/'}>
            <img className="light-mode-item navbar-brand-item" src={logo} alt="logo" />
            <img className="dark-mode-item navbar-brand-item" src="assets/images/logo-light.svg" alt="logo" />
          </NavLink>
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-animation">
              <span />
              <span />
              <span />
            </span>
          </button>
          <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
            <ul className="navbar-nav navbar-nav-scroll me-auto">
              <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle active flex ${isDark ? 'text-white' : ''}`} href="#" id="categoryMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="bi bi-ui-radios-grid me-2" /><span>Explore</span></a>
                <ul className=" dropdown-menu" aria-labelledby="categoryMenu">
                  {
                    firstcategory?.map((v) => {
                      let secondCat = Categorydata.category.filter((v1) => v1.parent_category_id === v._id)
                      return (
                        <li className={secondCat.length > 0 ? "dropdown-submenu dropend" : ''}>
                          <NavLink className={secondCat.length > 0 ? "dropdown-item dropdown-toggle " : "dropdown-item"} to={secondCat.length > 0 ? `/category/${v._id}` : `/course/${v._id}`}>{v.name}</NavLink>
                          {
                            secondCat && (
                              <ul className="dropdown-menu" data-bs-popper="none">
                                {secondCat.map((v3) => {
                                  let thirdCat = Categorydata.category.filter((v4) => v4.parent_category_id === v3._id)
                                  return (
                                    <li className={thirdCat.length > 0 ? "dropdown-submenu dropend" : ''}>
                                      <NavLink className={thirdCat.length > 0 ? "dropdown-item dropdown-toggle" : "dropdown-item"} to={thirdCat.length > 0 ? `/category/${v3._id}` : `/course/${v3._id}`}>{v3.name}</NavLink>
                                      {
                                        thirdCat && (
                                          <ul className="dropdown-menu" data-bs-popper="none">
                                            {
                                              thirdCat.map((v5) => (
                                                <li>
                                                  <NavLink className="dropdown-item" to={`/course/${v5._id}`}>{v5.name}</NavLink>
                                                </li>
                                              ))
                                            }
                                          </ul>
                                        )}
                                    </li>
                                  )
                                })}
                              </ul>
                            )}
                        </li>
                      )
                    })}

                  <li> <hr className="dropdown-divider" /></li>
                  <li><NavLink className="dropdown-item bg-primary text-primary bg-opacity-10 rounded-2 mb-0" to={'/category'} >View all categories</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-scroll me-auto">
              <li>
                <NavLink className={`nav-link ${isDark ? 'text-white' : ''} `} to={'/about'}>About Us</NavLink>
              </li>

              <li> <NavLink className={`nav-link ${isDark ? 'text-white' : ''} `} to={'/course'}>Course</NavLink></li>

              <li><NavLink className={`nav-link ${isDark ? 'text-white' : ''} `} to={'/Pricing'}>Pricing</NavLink></li>
              <li>  <NavLink className={`nav-link ${isDark ? 'text-white' : ''} `} to={'/Contact_us'}>Contact Us</NavLink></li>
              <li>  <NavLink className={`nav-link ${isDark ? 'text-white' : ''} `} to={'/Blog_Grid'}>Blog</NavLink></li>

            </ul>
          </div>
          {/* {
            <NavLink to={`${auth?.auth?._id ? '/cart' : '/Auth'}`}> <i className="bi bi-cart3 fa-fw me-2" style={{ fontSize: "1.5rem" }}></i></NavLink>
          } */}
          <div className="dropdown ms-1 ms-lg-0">
            <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
              {auth.auth ?
                <img className="avatar-img rounded-circle shadow" src={auth?.auth?.PFP[0]?.url || "../assets/images/avatar/01.jpg"} alt="avatar" /> :
                <AccountCircleIcon style={{ fontSize: '43px' }} />
              }   </a>
            <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
              <li className="px-3">
                <div className="d-flex align-items-center">
                  <div className="avatar me-3">
                    {auth.auth ?
                      <img className="avatar-img rounded-circle shadow" src={auth?.auth?.PFP[0]?.url || "../assets/images/avatar/01.jpg"} alt="avatar" /> :
                      <AccountCircleIcon style={{ fontSize: '50px' }} />
                    }
                  </div>
                  <div>
                    <a className=" h6" href="#">{auth.auth ? auth?.auth?.name : 'user'}</a>
                    <p className="small m-0">{auth.auth ? auth?.auth?.email : 'example@gmail.com'}</p>
                  </div>
                </div>
                <hr />
              </li>
              <li><NavLink className="dropdown-item" to={'/Dashboard'}><i className="bi bi-ui-checks-grid fa-fw me-2" />Dashboard</NavLink></li>

              <li><NavLink className="dropdown-item" to={'/Edit_Profile'}><i className="bi bi-person fa-fw me-2" />Edit Profile</NavLink></li>
              <li><NavLink className="dropdown-item" to={'/Cart'}><i className="bi bi-cart fa-fw me-2" />Cart </NavLink></li>
              {
                auth.auth ? (
                <li><NavLink
                    
                    onClick={() => {
                      dispatch(dispatch(userLogout(auth.auth._id)));
                    }}
                    className="group-item text-danger bg-danger-soft-hover"
                    style={{ padding: '8px 10px', fontSize: '15px' }}
                    to={'/'}
                  >
                    <i className="fas fa-sign-out-alt fa-fw me-2" style={{marginLeft:'10px'}} />Sign Out
                  </NavLink>
                  </li>
                ) : (
                  <>
                    <div className=" align-items-center justify-content-center justify-content-lg-start">
                      <li> <NavLink className={` ${themeData.theme === 'light' ? 'profile' : ''} dropdown-item bg-danger-soft-hover`} style={{ padding: '6px 8px', fontSize: '15px' }} to="/Auth">
                        <i className="bi bi-power fa-fw me-2" />
                        Sign in as User
                      </NavLink>
                      </li>
                      <li>
                        <NavLink className={` ${themeData.theme === 'light' ? 'profile' : ''} dropdown-item bg-danger-soft-hover`} style={{ padding: '6px 8px', fontSize: '15px' }} to="/Auth/Instructor">
                          <i className="bi bi-power fa-fw me-2" />
                          Sign in as Instructor
                        </NavLink>
                      </li>
                    </div>

                  </>
                )
              }
              <li> <hr className="dropdown-divider" /></li>
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
            </ul>
          </div>
        </div>
      </nav>
    </header>

  );
}

export default Header;