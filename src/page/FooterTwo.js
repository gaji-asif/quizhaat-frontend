export default function FooterTwo() {
    return(
        <>
             <footer className="dark-wrapper inverse-text">
      <div className="container inner">
        <div className="row">
          <div className="col-md-12 col-lg-3 text-center text-lg-left">
            <div className="widget"> <a href="#"><img src="#" srcset="/assets/style/images/main_logo.png 1x, assets/style/images/main_logo.png 2x" alt="" /></a>
              <div className="space20"></div>
              <p></p>
            </div>
            {/* <!-- /.widget --> */}
          </div>
          {/* <!-- /column --> */}
          <div className="space30 d-lg-none d-xl-none"></div>
          <div className="col-6 col-md-3 col-lg-2 offset-lg-1">
            <div className="widget">
              <h5 className="widget-title">Need Help?</h5>
              <ul className="list-unstyled mb-0">
                <li><a href="#">Support</a></li>
                <li><a href="#">Get Started</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            {/* <!-- /.widget --> */}
          </div>
          {/* <!-- /column --> */}
          <div className="col-6 col-md-3 col-lg-2">
            <div className="widget">
              <h5 className="widget-title">Learn More</h5>
              <ul className="list-unstyled mb-0">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Leader board</a></li>
                <li><a href="#">Ajker Quiz</a></li>
               
              </ul>
            </div>
            {/* <!-- /.widget --> */}
          </div>
          {/* <!-- /column --> */}
        
          {/* <!-- /column --> */}
          <div className="col-6 col-md-3 col-lg-3">
            <div className="widget">
              <h5 className="widget-title">Contact</h5>
              
              <a href="mailto:info@quizhaat.com">info@quizhaat.com</a><br /> 
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
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
      <div className="container inner pt-0 pb-40 d-flex align-items-center">
        <p className="mb-0 mr-auto" style={{margin: '0 auto'}}>© 2021 Quizhaat. All rights reserved.</p>
       
      </div>
    </footer>
        </>
    )
}