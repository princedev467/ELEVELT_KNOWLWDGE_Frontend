import React, { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';

function Footer(props) {
   const themeData = useContext(ThemeContext);
      console.log(themeData);
  
      let isDark=themeData.theme==='light'
    
    return (
<footer className="pt-5">
  <div className="container">
    {/* Row START */}
    <div className="row g-4">
      {/* Widget 1 START */}
      <div className="col-lg-3">
        {/* logo */}
        <a className="me-0" href="index.html">
          <img className="light-mode-item h-40px" src="assets/images/logo.svg" alt="logo" />
          <img className="dark-mode-item h-40px" src="assets/images/logo-light.svg" alt="logo" />
        </a>
        <p className="my-3">Eduport education theme, built specifically for the education centers which is dedicated to teaching and involve learners.</p>
        {/* Social media icon */}
        <ul className="list-inline mb-0 mt-3">
          <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-facebook" href="#"><i className="fab fa-fw fa-facebook-f" /></a> </li>
          <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-instagram" href="#"><i className="fab fa-fw fa-instagram" /></a> </li>
          <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-twitter" href="#"><i className="fab fa-fw fa-twitter" /></a> </li>
          <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-linkedin" href="#"><i className="fab fa-fw fa-linkedin-in" /></a> </li>
        </ul>
      </div>
      {/* Widget 1 END */}
      {/* Widget 2 START */}
      <div className="col-lg-6">
        <div className="row g-4">
          {/* Link block */}
          <div className="col-6 col-md-4">
            <h5 className={`${isDark?'text-white':''} mb-2 mb-md-4`}>Company</h5>
            <ul className="nav flex-column">
              <li className="nav-item"><a className={`${isDark?'text-white':''} nav-link `} href="#">About us</a></li>
              <li className="nav-item"><a className={`${isDark?'text-white':''} nav-link `} href="#">Contact us</a></li>
              <li className="nav-item"><a className={`${isDark?'text-white':''} nav-link `} href="#">News and Blogs</a></li>
              <li className="nav-item"><a className={`${isDark?'text-white':''} nav-link `} href="#">Library</a></li>
              <li className="nav-item"><a className={`${isDark?'text-white':''} nav-link `} href="#">Career</a></li>
            </ul>
          </div>
          {/* Link block */}
          <div className={"col-6 col-md-4"}>
            <h5 className={`${isDark?'text-white':''} mb-2 mb-md-4`}>Community</h5>
            <ul className="nav flex-column">
              <li className="nav-item"><a className={`${isDark?'text-white':''} nav-link`} href="#">Documentation</a></li>
              <li className="nav-item"><a className={`${isDark?'text-white':''} nav-link`} href="#">Faq</a></li>
              <li className="nav-item"><a className={`${isDark?'text-white':''} nav-link`} href="#">Forum</a></li>
              <li className="nav-item"><a className={`${isDark?'text-white':''} nav-link`} href="#">Sitemap</a></li>
            </ul>
          </div>
          {/* Link block */}
          <div className="col-6 col-md-4">
            <h5 className={`${isDark?'text-white':''} mb-2 mb-md-4`}>Teaching</h5>
            <ul className="nav flex-column">
              <li className="nav-item"><a className={`${isDark?'text-white':''} nav-link`} href="#">Become a teacher</a></li>
              <li className="nav-item"><a className={`${isDark?'text-white':''} nav-link`} href="#">How to guide</a></li>
              <li className="nav-item"><a className={`${isDark?'text-white':''} nav-link`} href="#">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Widget 2 END */}
      {/* Widget 3 START */}
      <div className="col-lg-3">
        <h5 className={`${isDark?'text-white':''} mb-2 mb-md-4`}>Contact</h5>
        {/* Time */}
        <p className="mb-2">
          Toll free:<span className={`${isDark?'text-white':''} h6 fw-light ms-2`}>+1234 568 963</span>
          <span className="d-block small">(9:AM to 8:PM IST)</span>
        </p>
        <p className="mb-0">Email:<span className={`${isDark?'text-white':''} h6 fw-light ms-2 `}>example@gmail.com</span></p>
        <div className="row g-2 mt-2">
          {/* Google play store button */}
          <div className="col-6 col-sm-4 col-md-3 col-lg-6">
            <a href="#"> <img src="assets/images/client/google-play.svg" alt /> </a>
          </div>
          {/* App store button */}
          <div className="col-6 col-sm-4 col-md-3 col-lg-6">
            <a href="#"> <img src="assets/images/client/app-store.svg" alt="app-store" /> </a>
          </div>
        </div> {/* Row END */}
      </div> 
      {/* Widget 3 END */}
    </div>{/* Row END */}
    {/* Divider */}
    <hr className={`${isDark?'text-white':''} mt-4 mb-0`} />
    {/* Bottom footer */}
    <div className="py-3">
      <div className="container px-0">
        <div className={`${isDark?'text-white':''} d-md-flex justify-content-between align-items-center py-3 text-center text-md-left`}>
          {/* copyright text */}
          <div className={`${isDark?'text-white':''}   d-md-flex text-primary-hover`}> Copyrights <a href="#" className={`${isDark?'text-white':''} text-body `}>©2021 Eduport</a>. All rights reserved. </div>
          {/* copyright links*/}
          <div className=" mt-3 mt-md-0">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                {/* Language selector */}
                <div className={`${isDark?'text-white':''}  dropup mt-0 text-center text-sm-end `}>
                  <a className={`${isDark?'text-white':''} dropdown-toggle nav-link`} href="#" role="button" id="languageSwitcher" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className={`${isDark?'text-white':''} fas fa-globe me-2` }/>Language
                  </a>
                  <ul className={`${isDark?'profile-card':''} dropdown-menu min-w-auto`} aria-labelledby="languageSwitcher">
                    <li><a className={`${isDark?'text-white':''} dropdown-item me-4`} href="#"><img className="fa-fw me-2" src="assets/images/flags/uk.svg" alt />English</a></li>
                    <li><a className={`${isDark?'text-white':''} dropdown-item me-4`} href="#"><img className="fa-fw me-2" src="assets/images/flags/gr.svg" alt />German </a></li>
                    <li><a className={`${isDark?'text-white':''} dropdown-item me-4`} href="#"><img className="fa-fw me-2" src="assets/images/flags/sp.svg" alt />French</a></li>
                  </ul>
                </div>
              </li>
              <li className="list-inline-item"><a className={`${isDark?'text-white':''} nav-link `} href="#">Terms of use</a></li>
              <li className="list-inline-item"><a className={`${isDark?'text-white':''} nav-link pe-0 ` }href="#">Privacy policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    );
}

export default Footer;