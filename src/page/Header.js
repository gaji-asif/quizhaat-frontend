import React from "react";
import { Link } from 'react-router-dom';
import '../style/css/header.css';
const Header = () => {


    const handleLogoutClick = () => {
        localStorage.clear();
        window.location.reload();
    };
    return (
        <>
            {/* <div id="overlayer"></div>
    <span className="loader">
        <span className="loader-inner"></span>
    </span> */}

            <nav className="navbar absolute transparent navbar-expand-lg nav-uppercase">
                <div className="container flex-row justify-content-center">
                    <div className="navbar-brand">
                        <Link to="/" className="nav-link homeIcon"><img src="" srcset="/assets/style/images/main_logo.png 1x, /assets/style/images/main_logo.png 2x" alt="" /></Link>

                    </div>
                    <div className="navbar-other ml-auto order-lg-3">
                        <ul className="navbar-nav flex-row align-items-center" data-sm-skip="true">
                            <li className="nav-item">
                                <div className="navbar-hamburger d-lg-none d-xl-none ml-auto"><button className="hamburger animate plain" data-toggle="offcanvas-nav"><span></span></button></div>
                            </li>
                            {localStorage.getItem('token') ? (
                                <li className="nav-item d-none d-lg-block pl-0">
                                    <font className="user_details">
                                        {/* <img className="img-responsive user_profile_img profile_image" src="/assets/image/noImage.png" /> */}
                                        Hi, <strong> {localStorage.getItem('username')}</strong>
                                    </font>
                                    <a href="#" className="btn btn-danger m-0" onClick={handleLogoutClick}>Logout</a>
                                </li>
                            ) : (
                                <li className="nav-item d-none d-lg-block pl-0">
                                    <Link to="/login" className="btn btn-default m-0">Login</Link>
                                </li>
                            )}

                            <li className="nav-item"><button className="plain" data-toggle="offcanvas-info"><i className="jam jam-info"></i></button></li>
                        </ul>
                        {/* <!-- /.navbar-nav --> */}
                    </div>
                    {/* <!-- /.navbar-other --> */}
                    <div className="navbar-collapse offcanvas-nav">
                        <div className="offcanvas-header d-lg-none d-xl-none">
                            <a href="index.html"><img src="#" srcset="style/images/logo-light.png 1x, style/images/logo-light@2x.png 2x" alt="" /></a>
                            <button className="plain offcanvas-close offcanvas-nav-close"><i className="jam jam-close"></i></button>
                        </div>
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">হোম</Link>
                                {/* <!--/.dropdown-menu --> */}
                            </li>
                            {/* <!--  <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="{{route('about-us')}}">আমাদের সম্পর্কে</a>
    </li> --> */}

                            <li className="nav-item dropdown">
                                {/* <a className="nav-link dropdown-toggle" href="#">আজকের কুইজ</a> */}
                                <Link to="/todays-quiz" className="nav-link dropdown-toggle">আজকের কুইজ</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link to="/leader-board" className="nav-link dropdown-toggle">লিডার বোর্ড</Link>
                            </li>

                            {/* <!--  <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#!">বন্ধুদের সাথে শেয়ার কর</a>
    </li> --> */}

                            {/* <!-- <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#!">Blog</a>
    </li> --> */}

                            <li className="nav-item dropdown">
                                <Link to="/contact-us" className="nav-link dropdown-toggle">যোগাযোগ</Link>
                                {/* <a className="nav-link dropdown-toggle" href="#">যোগাযোগ</a> */}
                                {/* <!-- <ul className="dropdown-menu">
        
        <li><a className="dropdown-item" href="blog2.html">জিজ্ঞাসা কর </a></li>
        <li><a className="dropdown-item" href="blog3.html">সাহায্য</a></li>
        <li><a className="dropdown-item" href="blog4.html">যোগাযোগ</a></li>
       
        
      </ul> --> */}
                            </li>
                            <li className="nav-item dropdown">
                                {/* <a className="nav-link dropdown-toggle" href="#">ব্লগ</a> */}
                                <Link to="/blogs" className="nav-link dropdown-toggle">ব্লগ</Link>
                            </li>
                        </ul>
                        {/* <!-- /.navbar-nav --> */}
                    </div>
                    {/* <!-- /.navbar-collapse --> */}
                </div>
                {/* <!-- /.container --> */}
            </nav>
            <div className="offcanvas-info inverse-text">
                <button className="plain offcanvas-close offcanvas-info-close"><i className="jam jam-close"></i></button>
                <a href="index.html"><img src="#" srcset="/assets/style/images/logo-light.png 1x, /assets/style/images/logo-light@2x.png 2x" alt="" /></a>
                <div className="space30"></div>

                <div className="space20"></div>
                <div className="widget">
                    <h5 className="widget-title">Contact Info</h5>
                    <address> Moonshine St. 14/05 <br /> Light City, London <div className="space20"></div>
                        <a href="mailto:first.last@email.com" className="nocolor">info@quizhaat.com</a><br /> +88017259258958</address>
                </div>
                {/* <!-- /.widget --> */}
                <div className="widget">
                    <h3 className="widget-title">Learn More</h3>
                    <ul className="list-unstyled">
                        <li><a href="#" className="nocolor">Privacy policy</a></li>
                        <li><a href="#" className="nocolor">Disclaimer</a></li>
                        <li><a href="#" className="nocolor">About Us</a></li>
                    </ul>
                </div>
                {/* <!-- /.widget --> */}
                <div className="widget">
                    <h3 className="widget-title">Follow Us</h3>
                    <ul className="social social-mute social-s ml-auto">
                        <li><a href="#"><i className="jam jam-twitter"></i></a></li>
                        <li><a href="#"><i className="jam jam-facebook"></i></a></li>
                        <li><a href="#"><i className="jam jam-instagram"></i></a></li>
                        <li><a href="#"><i className="jam jam-vimeo"></i></a></li>
                        <li><a href="#"><i className="jam jam-youtube"></i></a></li>
                    </ul>
                </div>
                {/* <!-- /.widget --> */}
            </div >
        </>
    );
}

export default Header