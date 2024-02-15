import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <footer className="white-wrapper">
                <div className="container">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <div className="widget">
                                    <h3 className="widget-title">
                                        
                                             <Link to="/" >
                                             <img src="#"
                                            srcset="/assets/style/images/main_logo.png 1x, /assets/style/images/main_logo.png 2x"
                                            alt="" />
                                             </Link>
                                    </h3>

                                </div>
                            </div>
                            {/* <!-- /column --> */}
                            <div className="col-md-6 col-lg-3">

                                <div className="widget">
                                    <h3 className="widget-title">Contact</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="nocolor">Email:info@quizhaat.com</a></li>
                                        <li><a href="#" className="nocolor">Phone:88017259258958</a></li>

                                    </ul>
                                </div>

                            </div>
                            {/* <!-- /column --> */}

                            {/* <!-- /column --> */}
                            <div className="col-md-6 col-lg-3">
                                <div className="widget">
                                    <h3 className="widget-title">একনজরে</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="nocolor">Privacy policy</a></li>
                                        <li><a href="#" className="nocolor">Disclaimer</a></li>
                                        <li><a href="#" className="nocolor">About Us</a></li>
                                        {/* {{-- <li><a href="#" className="nocolor">Our Story</a></li>
              <li><a href="#" className="nocolor">Projects</a></li> --}} */}
                                    </ul>
                                </div>
                                {/* <!-- /.widget --> */}

                                {/* <!-- /.widget --> */}
                            </div>

                            <div className="col-md-6 col-lg-3">

                                {/* <!-- /.widget --> */}
                                <div className="widget">
                                    <h3 className="widget-title">Follow</h3>
                                    <ul className="social social-mute social-s ml-auto">
                                        <li><a href="#"><i className="jam jam-twitter"></i></a></li>
                                        <li><a href="#"><i className="jam jam-facebook"></i></a></li>
                                        <li><a href="#"><i className="jam jam-instagram"></i></a></li>
                                        <li><a href="#"><i className="jam jam-vimeo"></i></a></li>
                                        <li><a href="#"><i className="jam jam-youtube"></i></a></li>
                                    </ul>
                                </div>
                                {/* <!-- /.widget --> */}
                            </div>
                            {/* <!-- /column --> */}
                        </div>
                    </div>
                    {/* <!--/.row --> */}
                    <div className="space50"></div>
                    <p className="text-center">© 2021 Quizhaat. All rights reserved.</p>
                </div>
                {/* <!-- /.container --> */}
            </footer>
        </>
    );
}
export default Footer