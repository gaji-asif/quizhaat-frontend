import Header from "./Header";
// import FooterTwo from "./FooterTwo";
import Footer from "./Footer";
export default function ContactUs() {
    return (
        <>

            <Header />
            <style type="text/css">
                {`
                 .error {
                    font-weight: bold;
                    color: red;
                    margin-left: 20px;
                    margin-top: -20px;
                }
        
                .inner {
                    padding-top: 4rem;
                    padding-bottom: 4rem;
                }
                `}

            </style>
            <div className="wrapper bg-opacity-default">
                <div className="rev_slider_wrapper fullwidth-container dark-spinner">
                    <div className="container inner text-center">
                        <div className="space40"></div>
                        <h1 className="page-title">Contact Us</h1>
                    </div>
                </div>
                {/* <!-- /.rev_slider_wrapper --> */}
            </div>

            <div className="wrapper light-wrapper register_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>

                        <div className="col-md-6">
                            <form method="POST" action="">
                                {/* @csrf */}
                                <div className="form-group">
                                    <label for="register_name">Your Name</label>
                                    <input type="text" name="name" id="register-name" className="form-control"
                                        placeholder="Enter your Name" />
                                </div>
                                <div className="form-group">
                                    <label for="email">Your Email</label>
                                    <input type="email" name="email" id="email" className="form-control"
                                        placeholder="Enter your email address" />
                                </div>

                                <div className="form-group">
                                    <label for="password">Your Message</label>
                                    <textarea name="meesage" id="" cols="30" rows="10"></textarea>
                                </div>
                                <div className="form-group form-group--submit"> <button
                                    className="btn btn-default btn-lg btn-block">Send Message</button> </div>
                            </form>



                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>


            <Footer />

        </>
    )
}